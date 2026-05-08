import { useState, useRef, useEffect, useCallback } from 'react';
import type { GeocodingResult, LatLng } from '../types';
import { searchPlaces, reverseGeocode } from '../services/geocoding';

interface Props {
  label: string;
  value: string;
  location: LatLng | null;
  onSelect: (result: GeocodingResult) => void;
  onClear: () => void;
  onClickMode: () => void;
  clickModeActive: boolean;
  showGeolocate?: boolean;
  onGeolocate?: () => void;
  geolocating?: boolean;
  placeholder?: string;
}

export default function LocationInput({
  label,
  value,
  location,
  onSelect,
  onClear,
  onClickMode,
  clickModeActive,
  showGeolocate,
  onGeolocate,
  geolocating,
  placeholder = 'Search suburb or address…',
}: Props) {
  const [query, setQuery] = useState(value);
  const [results, setResults] = useState<GeocodingResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setQuery(value); }, [value]);

  const search = useCallback((q: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!q.trim()) { setResults([]); setOpen(false); return; }
    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const r = await searchPlaces(q);
        setResults(r);
        setOpen(r.length > 0);
      } finally {
        setLoading(false);
      }
    }, 400);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);
    if (!q) { onClear(); setResults([]); setOpen(false); return; }
    search(q);
  };

  const handleSelect = (r: GeocodingResult) => {
    setQuery(shortenDisplayName(r.displayName));
    setOpen(false);
    onSelect(r);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { setOpen(false); inputRef.current?.blur(); }
  };

  // Update label when location is set from map click
  useEffect(() => {
    if (location && !value) {
      reverseGeocode(location).then(name => {
        setQuery(shortenDisplayName(name));
      });
    }
  }, [location, value]);

  return (
    <div className="location-input-wrapper">
      <label className="input-label">{label}</label>
      <div className="input-row">
        <div className="input-field-wrap">
          <input
            ref={inputRef}
            type="text"
            className={`text-input${clickModeActive ? ' input-active' : ''}`}
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() => results.length > 0 && setOpen(true)}
            placeholder={clickModeActive ? 'Click on the map to set location…' : placeholder}
            autoComplete="off"
          />
          {loading && <span className="input-spinner" />}
          {query && !loading && (
            <button className="input-clear" onClick={() => { setQuery(''); onClear(); setResults([]); setOpen(false); }} aria-label="Clear">×</button>
          )}
          {open && results.length > 0 && (
            <ul className="autocomplete-list">
              {results.map((r, i) => (
                <li key={i} onMouseDown={() => handleSelect(r)}>
                  <span className="autocomplete-icon">📍</span>
                  <span>{shortenDisplayName(r.displayName)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          className={`icon-btn${clickModeActive ? ' icon-btn-active' : ''}`}
          onClick={onClickMode}
          title="Click on map to set location"
        >
          🗺
        </button>
        {showGeolocate && onGeolocate && (
          <button
            className={`icon-btn${geolocating ? ' icon-btn-spinning' : ''}`}
            onClick={onGeolocate}
            title="Use my location"
            disabled={geolocating}
          >
            📡
          </button>
        )}
      </div>
    </div>
  );
}

function shortenDisplayName(name: string): string {
  const parts = name.split(',');
  return parts.slice(0, 3).join(',').trim();
}
