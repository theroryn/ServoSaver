import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { LatLng, StationWithPrice } from '../types';
import { formatCents } from '../utils/calculations';
import { getOsrmRoute } from '../services/routing';

// Fix Leaflet default icon paths broken by bundlers
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface Props {
  origin: LatLng | null;
  destination: LatLng | null;
  stations: StationWithPrice[];
  onMapClick: (latlng: LatLng, isDestination: boolean) => void;
  clickMode: 'origin' | 'destination' | null;
  selectedStation: string | null;
  onStationSelect: (code: string) => void;
}

function priceColor(station: StationWithPrice, all: StationWithPrice[]): string {
  if (all.length === 0) return '#6b7280';
  const prices = all.map(s => s.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const range = max - min || 1;
  const ratio = (station.price - min) / range;
  if (ratio < 0.33) return '#16a34a';
  if (ratio < 0.66) return '#d97706';
  return '#dc2626';
}

function makeStationIcon(station: StationWithPrice, all: StationWithPrice[], selected: boolean): L.DivIcon {
  const color = priceColor(station, all);
  const label = `${station.price.toFixed(0)}`;
  const size = selected ? 48 : 36;
  return L.divIcon({
    html: `<div style="
      background:${color};
      color:#fff;
      border-radius:50% 50% 50% 0;
      transform:rotate(-45deg);
      width:${size}px;height:${size}px;
      display:flex;align-items:center;justify-content:center;
      border:2px solid #fff;
      box-shadow:0 2px 6px rgba(0,0,0,0.4);
      font-weight:700;font-size:${selected ? 11 : 9}px;font-family:system-ui;
    ">
      <span style="transform:rotate(45deg)">${label}</span>
    </div>`,
    className: '',
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
}

const originIcon = L.divIcon({
  html: `<div style="
    width:20px;height:20px;border-radius:50%;
    background:#6366f1;border:3px solid #fff;
    box-shadow:0 0 0 3px #6366f1,0 2px 8px rgba(0,0,0,0.4);
  "></div>`,
  className: '',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const destinationIcon = L.divIcon({
  html: `<div style="
    width:20px;height:20px;border-radius:50%;
    background:#ef4444;border:3px solid #fff;
    box-shadow:0 0 0 3px #ef4444,0 2px 8px rgba(0,0,0,0.4);
  "></div>`,
  className: '',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

export default function MapView({
  origin,
  destination,
  stations,
  onMapClick,
  clickMode,
  selectedStation,
  onStationSelect,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const originMarkerRef = useRef<L.Marker | null>(null);
  const destMarkerRef = useRef<L.Marker | null>(null);
  const stationLayerRef = useRef<L.LayerGroup | null>(null);
  const routeLineRef = useRef<L.Polyline | null>(null);

  // Initialise map once
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [-33.87, 151.21],
      zoom: 11,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    stationLayerRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update click mode cursor
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const handler = (e: L.LeafletMouseEvent) => {
      if (clickMode) onMapClick({ lat: e.latlng.lat, lng: e.latlng.lng }, clickMode === 'destination');
    };

    map.on('click', handler);
    map.getContainer().style.cursor = clickMode ? 'crosshair' : '';
    return () => { map.off('click', handler); };
  }, [clickMode, onMapClick]);

  // Update origin marker
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    originMarkerRef.current?.remove();
    if (origin) {
      originMarkerRef.current = L.marker([origin.lat, origin.lng], { icon: originIcon })
        .bindPopup('<b>Your Location</b>')
        .addTo(map);
    }
  }, [origin]);

  // Update destination marker
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    destMarkerRef.current?.remove();
    if (destination) {
      destMarkerRef.current = L.marker([destination.lat, destination.lng], { icon: destinationIcon })
        .bindPopup('<b>Destination</b>')
        .addTo(map);
    }
  }, [destination]);

  // Draw route line with real road geometry (OSRM), straight-line placeholder while loading
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    routeLineRef.current?.remove();
    routeLineRef.current = null;

    if (!origin || !destination) return;

    const sel = selectedStation ? stations.find(s => s.code === selectedStation) : null;
    const color = sel ? '#16a34a' : '#6366f1';
    const waypoints: LatLng[] = sel
      ? [origin, sel.location, destination]
      : [origin, destination];

    // Show straight placeholder immediately
    const placeholder = L.polyline(
      waypoints.map(w => [w.lat, w.lng] as [number, number]),
      { color, weight: 3, dashArray: '8 6', opacity: 0.55 }
    ).addTo(map);
    routeLineRef.current = placeholder;

    const controller = new AbortController();

    getOsrmRoute(waypoints, controller.signal)
      .then(route => {
        if (routeLineRef.current !== placeholder) return; // superseded by newer effect
        placeholder.remove();
        routeLineRef.current = L.polyline(route.coordinates, {
          color,
          weight: 4,
          opacity: 0.85,
        }).addTo(map);
      })
      .catch(() => { /* keep straight placeholder on error or abort */ });

    return () => { controller.abort(); };
  }, [origin, destination, selectedStation, stations]);

  // Update station markers
  useEffect(() => {
    const layer = stationLayerRef.current;
    if (!layer) return;
    layer.clearLayers();

    for (const station of stations) {
      const isSelected = station.code === selectedStation;
      const marker = L.marker([station.location.lat, station.location.lng], {
        icon: makeStationIcon(station, stations, isSelected),
        zIndexOffset: isSelected ? 1000 : 0,
      });

      marker.bindPopup(`
        <div style="min-width:180px;font-family:system-ui">
          <div style="font-weight:700;font-size:14px;margin-bottom:4px">${station.name}</div>
          <div style="color:#6b7280;font-size:12px;margin-bottom:8px">${station.address}</div>
          <div style="font-size:18px;font-weight:800;color:#16a34a">${formatCents(station.price)}</div>
          ${station.detourKm > 0.1 ? `<div style="font-size:11px;color:#d97706;margin-top:4px">+${station.detourKm.toFixed(1)}km off route</div>` : '<div style="font-size:11px;color:#16a34a;margin-top:4px">On your route</div>'}
        </div>
      `);
      marker.on('click', () => onStationSelect(station.code));

      layer.addLayer(marker);
    }
  }, [stations, selectedStation, onStationSelect]);

  // Fit map to show origin + destination
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (origin && destination) {
      map.fitBounds(
        L.latLngBounds([origin.lat, origin.lng], [destination.lat, destination.lng]).pad(0.3)
      );
    } else if (origin) {
      map.setView([origin.lat, origin.lng], 13);
    }
  }, [origin, destination]);

  return (
    <div
      ref={containerRef}
      className={`map-container${clickMode ? ' map-crosshair' : ''}`}
    />
  );
}
