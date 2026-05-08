export interface LatLng {
  lat: number;
  lng: number;
}

export interface FuelStation {
  code: string;
  name: string;
  brand: string;
  address: string;
  location: LatLng;
}

export interface FuelPrice {
  stationcode: string;
  fueltype: string;
  price: number; // cents per litre
  lastupdated: string;
}

export interface StationWithPrice extends FuelStation {
  price: number;        // cents per litre
  fueltype: string;
  tripCost: number;     // dollars — total estimated fuel spend for the trip via this station
  detourKm: number;     // extra km vs direct route (0 if on-route)
  litresNeeded: number; // litres consumed for the trip via this station
  totalKm: number;      // total km of the trip via this station
  distFromOriginKm: number; // straight-line km from origin to this station
}

export interface Vehicle {
  make: string;
  model: string;
  yearRange: string;
  fuelType: 'petrol' | 'diesel' | 'hybrid';
  consumption: number; // L/100km combined
}

export type FuelType = 'U91' | 'U95' | 'U98' | 'E10' | 'DL' | 'LPG';

export interface FuelTypeOption {
  code: FuelType;
  label: string;
  vehicleFuelTypes: ('petrol' | 'diesel' | 'hybrid')[];
}

export interface GeocodingResult {
  displayName: string;
  location: LatLng;
}

export interface FuelCheckResponse {
  stations: Array<{
    code: string;
    name: string;
    brand: string;
    address: string;
    location: { latitude: number; longitude: number };
  }>;
  prices: FuelPrice[];
}
