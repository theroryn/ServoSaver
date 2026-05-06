

import { useEffect } from 'react'
import { supabase } from './lib/supabase'

export default function App() {
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      console.log('Session at mount:', data.session)
    })
  }, [])

  return <h1>ServoSaver — environment check</h1>
}
