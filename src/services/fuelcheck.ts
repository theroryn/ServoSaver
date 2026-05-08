import type { FuelCheckResponse, FuelStation } from '../types';

const PROXY_BASE = '/api/fuelcheck';

export interface FuelData {
  stations: Map<string, FuelStation>;
  prices: Map<string, number>; // key: `${stationcode}|${fueltype}` → price in cents
  lastUpdated: Date;
}

let cache: FuelData | null = null;
let cacheTime = 0;
const CACHE_TTL_MS = 5 * 60 * 1000;

export async function fetchFuelPrices(): Promise<FuelData> {
  const now = Date.now();
  if (cache && now - cacheTime < CACHE_TTL_MS) return cache;

  const res = await fetch(`${PROXY_BASE}/prices`);

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`FuelCheck API error ${res.status}: ${text}`);
  }

  const json: FuelCheckResponse = await res.json();

  const stations = new Map<string, FuelStation>();
  for (const s of json.stations) {
    stations.set(s.code, {
      code: s.code,
      name: s.name,
      brand: s.brand,
      address: s.address,
      location: { lat: s.location.latitude, lng: s.location.longitude },
    });
  }

  const prices = new Map<string, number>();
  for (const p of json.prices) {
    prices.set(`${p.stationcode}|${p.fueltype}`, p.price);
  }

  cache = { stations, prices, lastUpdated: new Date() };
  cacheTime = now;
  return cache;
}

export function invalidateCache() {
  cache = null;
  cacheTime = 0;
}
