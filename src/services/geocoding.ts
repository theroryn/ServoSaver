import type { GeocodingResult, LatLng } from '../types';

const NOMINATIM = 'https://nominatim.openstreetmap.org';

export async function searchPlaces(query: string): Promise<GeocodingResult[]> {
  if (!query.trim()) return [];

  const params = new URLSearchParams({
    q: `${query}, NSW, Australia`,
    format: 'json',
    limit: '6',
    countrycodes: 'au',
    addressdetails: '0',
  });

  const res = await fetch(`${NOMINATIM}/search?${params}`, {
    headers: { 'Accept-Language': 'en-AU', 'User-Agent': 'ServoSaver/1.0' },
  });

  if (!res.ok) throw new Error('Geocoding failed');

  const results: Array<{ display_name: string; lat: string; lon: string }> = await res.json();

  return results.map(r => ({
    displayName: r.display_name,
    location: { lat: parseFloat(r.lat), lng: parseFloat(r.lon) },
  }));
}

export async function reverseGeocode(location: LatLng): Promise<string> {
  const params = new URLSearchParams({
    lat: String(location.lat),
    lon: String(location.lng),
    format: 'json',
  });

  const res = await fetch(`${NOMINATIM}/reverse?${params}`, {
    headers: { 'Accept-Language': 'en-AU', 'User-Agent': 'ServoSaver/1.0' },
  });

  if (!res.ok) return `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`;

  const data: { display_name: string } = await res.json();
  return data.display_name;
}
