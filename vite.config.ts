import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  function nswProxyHeaders(proxyReq: import('http').ClientRequest, apiKey: string) {
    const ts = new Date().toLocaleString('en-AU', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hour12: false,
    }).replace(',', '')
    proxyReq.setHeader('requesttimestamp', ts)
    if (apiKey) proxyReq.setHeader('apikey', apiKey)
  }

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/fuelcheck': {
          target: 'https://api.onegov.nsw.gov.au',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/fuelcheck/, '/FuelCheckApp/v1/fuel'),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq: import('http').ClientRequest) =>
              nswProxyHeaders(proxyReq, env.VITE_FUELCHECK_API_KEY)
            )
          },
        },
        // carregistrationapi.com.au — sign up at carregistrationapi.com.au for 10 free test lookups
        // Add VITE_REGOCHECK_API_KEY=your_key to .env.local
        '/api/carrego': {
          target: 'https://au.carregistrationapi.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/carrego/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq: import('http').ClientRequest) => {
              if (env.VITE_REGOCHECK_API_KEY) {
                const sep = proxyReq.path.includes('?') ? '&' : '?'
                proxyReq.path += `${sep}APIKey=${env.VITE_REGOCHECK_API_KEY}`
              }
            })
          },
        },
      },
    },
  }
})
