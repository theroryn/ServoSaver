import type { FuelStation, LatLng, StationWithPrice } from '../types';
import type { FuelData } from '../services/fuelcheck';

const EARTH_RADIUS_KM = 6371;
const ROAD_FACTOR = 1.25; // straight-line to road distance multiplier

export function haversineKm(a: LatLng, b: LatLng): number {
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const sinDLat = Math.sin(dLat / 2);
  const sinDLng = Math.sin(dLng / 2);
  const h = sinDLat * sinDLat + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * sinDLng * sinDLng;
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(h));
}

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

export function midpoint(a: LatLng, b: LatLng): LatLng {
  return { lat: (a.lat + b.lat) / 2, lng: (a.lng + b.lng) / 2 };
}

export function rankStations(
  fuelData: FuelData,
  fuelType: string,
  origin: LatLng,
  destination: LatLng | null,
  consumptionL100: number,
  searchRadiusKm: number
): StationWithPrice[] {
  const directKm = destination ? haversineKm(origin, destination) * ROAD_FACTOR : 0;
  const centre = destination ? midpoint(origin, destination) : origin;
  // Use half the route distance + buffer as the search radius from midpoint
  const routeRadius = destination ? haversineKm(origin, destination) / 2 + 15 : searchRadiusKm;

  const results: StationWithPrice[] = [];

  for (const [code, station] of fuelData.stations) {
    const price = fuelData.prices.get(`${code}|${fuelType}`);
    if (price === undefined) continue;

    const distFromCentre = haversineKm(centre, station.location);
    if (distFromCentre > routeRadius) continue;

    const distFromOriginKm = haversineKm(origin, station.location) * ROAD_FACTOR;
    let tripCost: number;
    let detourKm: number;
    let litresNeeded: number;
    let totalKm: number;

    if (!destination || directKm === 0) {
      detourKm = distFromOriginKm;
      totalKm = distFromOriginKm;
      litresNeeded = totalKm * (consumptionL100 / 100);
      tripCost = litresNeeded * (price / 100);
    } else {
      const viaKm =
        (haversineKm(origin, station.location) + haversineKm(station.location, destination)) *
        ROAD_FACTOR;
      detourKm = Math.max(0, viaKm - directKm);
      totalKm = viaKm;
      litresNeeded = totalKm * (consumptionL100 / 100);
      tripCost = litresNeeded * (price / 100);
    }

    results.push({ ...station, price, fueltype: fuelType, tripCost, detourKm, litresNeeded, totalKm, distFromOriginKm });
  }

  results.sort((a, b) => (destination ? a.tripCost - b.tripCost : a.price - b.price));
  return results;
}

export function formatCents(cents: number): string {
  return `${cents.toFixed(1)}¢/L`;
}

export function formatDollars(dollars: number): string {
  return `$${dollars.toFixed(2)}`;
}

export function formatKm(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)}m`;
  return `${km.toFixed(1)}km`;
}
