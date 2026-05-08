import { useState, useCallback, useEffect, useMemo } from 'react';
import type { LatLng, StationWithPrice, GeocodingResult, FuelType } from './types';
import { fetchFuelPrices } from './services/fuelcheck';
import { rankStations, haversineKm } from './utils/calculations';
import MapView from './components/MapView';
import LocationInput from './components/LocationInput';
import VehicleSelector from './components/VehicleSelector';
import ResultsList from './components/ResultsList';
import type { Vehicle } from './types';
import './App.css';

const FUEL_TYPES: { code: FuelType; label: string }[] = [
  { code: 'U91', label: 'Unleaded 91' },
  { code: 'E10', label: 'E10' },
  { code: 'U95', label: 'Premium 95' },
  { code: 'U98', label: 'Premium 98' },
  { code: 'DL', label: 'Diesel' },
  { code: 'LPG', label: 'LPG' },
];

const DEFAULT_RADIUS_KM = 10;
const API_KEY = import.meta.env.VITE_FUELCHECK_API_KEY ?? '';
const HAS_API_KEY = !!API_KEY;

export default function App() {
  const [origin, setOrigin] = useState<LatLng | null>(null);
  const [originLabel, setOriginLabel] = useState('');
  const [destination, setDestination] = useState<LatLng | null>(null);
  const [destLabel, setDestLabel] = useState('');
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [customConsumption, setCustomConsumption] = useState<number | null>(null);
  const [fuelType, setFuelType] = useState<FuelType>('U91');
  const [clickMode, setClickMode] = useState<'origin' | 'destination' | null>(null);
  const [selectedStation, setSelectedStation] = useState<string | null>(null);
  const [geolocating, setGeolocating] = useState(false);
  const [stations, setStations] = useState<StationWithPrice[]>([]);
  const [loadingPrices, setLoadingPrices] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);

  const consumption = customConsumption ?? vehicle?.consumption ?? null;

  const handleMapClick = useCallback(
    (latlng: LatLng, isDestination: boolean) => {
      if (isDestination) {
        setDestination(latlng);
        setDestLabel('');
      } else {
        setOrigin(latlng);
        setOriginLabel('');
      }
      setClickMode(null);
    },
    []
  );

  const handleGeolocate = useCallback(() => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setGeolocating(true);
    navigator.geolocation.getCurrentPosition(
      pos => {
        setOrigin({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setOriginLabel('');
        setGeolocating(false);
      },
      () => {
        alert('Could not get your location. Please allow location access or search manually.');
        setGeolocating(false);
      },
      { timeout: 10000 }
    );
  }, []);

  const handleSearch = useCallback(async () => {
    if (!origin) { alert('Please set your location first.'); return; }
    if (!consumption) { alert('Please select a vehicle or enter fuel consumption.'); return; }

    setLoadingPrices(true);
    setError(null);
    setSearched(true);

    try {
      const data = await fetchFuelPrices();
      const ranked = rankStations(data, fuelType, origin, destination, consumption, DEFAULT_RADIUS_KM);
      setStations(ranked);
      if (ranked.length === 0) {
        setError('No stations found for that fuel type in this area.');
      } else {
        setSelectedStation(ranked[0].code);
      }
    } catch (e) {
      setError(
        e instanceof Error
          ? `Failed to load fuel prices: ${e.message}`
          : 'Failed to load fuel prices. Check your API key and network connection.'
      );
      setStations([]);
    } finally {
      setLoadingPrices(false);
    }
  }, [origin, destination, consumption, fuelType]);

  // Auto-search when fuel type / location changes after first search
  useEffect(() => {
    if (searched && origin && consumption) {
      handleSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fuelType, origin, destination]);

  const directKm = useMemo(
    () => (origin && destination ? haversineKm(origin, destination) * 1.25 : 0),
    [origin, destination]
  );


  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">⛽</span>
            <span className="logo-text">ServoSaver</span>
          </div>
          <p className="tagline">Find the cheapest fuel for your trip</p>
        </div>

        {!HAS_API_KEY && (
          <div className="setup-notice">
            <strong>Setup required</strong>
            <p>Add your NSW FuelCheck API key to <code>.env.local</code>:</p>
            <code className="code-block">VITE_FUELCHECK_API_KEY=your_key_here</code>
            <a href="https://api.nsw.gov.au/Product/Index/22" target="_blank" rel="noopener noreferrer" className="setup-link">
              Get a free key →
            </a>
          </div>
        )}

        <div className="sidebar-body">
          <LocationInput
            label="Your location"
            value={originLabel}
            location={origin}
            onSelect={(r: GeocodingResult) => { setOrigin(r.location); setOriginLabel(r.displayName); }}
            onClear={() => { setOrigin(null); setOriginLabel(''); }}
            onClickMode={() => setClickMode(prev => prev === 'origin' ? null : 'origin')}
            clickModeActive={clickMode === 'origin'}
            showGeolocate
            onGeolocate={handleGeolocate}
            geolocating={geolocating}
            placeholder="Search suburb or address…"
          />

          <LocationInput
            label="Destination (optional)"
            value={destLabel}
            location={destination}
            onSelect={(r: GeocodingResult) => { setDestination(r.location); setDestLabel(r.displayName); }}
            onClear={() => { setDestination(null); setDestLabel(''); }}
            onClickMode={() => setClickMode(prev => prev === 'destination' ? null : 'destination')}
            clickModeActive={clickMode === 'destination'}
            placeholder="Where are you headed?"
          />

          {destination && (
            <div className="route-info">
              <span>📍 {directKm.toFixed(1)} km route</span>
            </div>
          )}

          <VehicleSelector
            vehicle={vehicle}
            customConsumption={customConsumption}
            onVehicleChange={setVehicle}
            onCustomConsumption={setCustomConsumption}
          />

          <div className="section">
            <label className="input-label">Fuel type</label>
            <div className="fuel-type-grid">
              {FUEL_TYPES.map(ft => (
                <button
                  key={ft.code}
                  className={`fuel-btn${fuelType === ft.code ? ' fuel-btn--active' : ''}`}
                  onClick={() => setFuelType(ft.code)}
                >
                  {ft.label}
                </button>
              ))}
            </div>
          </div>

          <button
            className="search-btn"
            onClick={handleSearch}
            disabled={loadingPrices || !origin || !consumption}
          >
            {loadingPrices ? (
              <>
                <span className="btn-spinner" /> Loading prices…
              </>
            ) : (
              '🔍 Find cheapest servo'
            )}
          </button>
        </div>

        {(searched || error) && (
          <div className="sidebar-results">
            <ResultsList
              results={stations}
              selectedStation={selectedStation}
              onSelect={code => setSelectedStation(code)}
              hasDestination={!!destination}
              directKm={directKm}
              loading={loadingPrices}
              error={error}
              origin={origin}
              destination={destination}
            />
          </div>
        )}
      </aside>

      <main className="map-wrapper">
        <MapView
          origin={origin}
          destination={destination}
          stations={stations}
          onMapClick={handleMapClick}
          clickMode={clickMode}
          selectedStation={selectedStation}
          onStationSelect={code => setSelectedStation(code)}
        />

        {clickMode && (
          <div className="click-hint">
            {clickMode === 'origin' ? 'Click to set your location' : 'Click to set destination'}
            <button onClick={() => setClickMode(null)}>Cancel</button>
          </div>
        )}

        <div className="map-legend">
          <div className="legend-item"><span className="legend-dot" style={{ background: '#16a34a' }} /> Cheapest</div>
          <div className="legend-item"><span className="legend-dot" style={{ background: '#d97706' }} /> Mid</div>
          <div className="legend-item"><span className="legend-dot" style={{ background: '#dc2626' }} /> Expensive</div>
          <div className="legend-item"><span className="legend-dot legend-origin" /> You</div>
          <div className="legend-item"><span className="legend-dot legend-dest" /> Destination</div>
        </div>
      </main>
    </div>
  );
}
