import type { LatLng } from '../types';

export interface RouteResult {
  coordinates: [number, number][]; // [lat, lng] pairs
  distanceKm: number;
  durationMin: number;
}

// Uses the OSRM demo server — free, CORS-enabled, no API key needed.
// For production consider self-hosting: https://project-osrm.org
const OSRM_BASE = 'https://router.project-osrm.org/route/v1/driving';

export async function getOsrmRoute(
  waypoints: LatLng[],
  signal?: AbortSignal
): Promise<RouteResult> {
  if (waypoints.length < 2) throw new Error('Need at least 2 waypoints');

  const coords = waypoints.map(w => `${w.lng},${w.lat}`).join(';');
  const url = `${OSRM_BASE}/${coords}?overview=full&geometries=geojson`;

  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`OSRM error ${res.status}`);

  const json = await res.json();
  if (json.code !== 'Ok' || !json.routes?.length) {
    throw new Error('No route found between these points');
  }

  const route = json.routes[0];
  const coordinates: [number, number][] = route.geometry.coordinates.map(
    ([lng, lat]: [number, number]) => [lat, lng]
  );

  return {
    coordinates,
    distanceKm: route.distance / 1000,
    durationMin: route.duration / 60,
  };
}
