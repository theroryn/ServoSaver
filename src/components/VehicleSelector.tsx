import { useState, useEffect } from 'react';
import type { Vehicle } from '../types';
import { supabase } from '../lib/supabase';
import { lookupPlate } from '../services/platecheck';

interface Props {
  vehicle: Vehicle | null;
  customConsumption: number | null;
  onVehicleChange: (v: Vehicle | null) => void;
  onCustomConsumption: (l100: number | null) => void;
}

type VehicleRow = {
  make: string;
  model: string;
  year_range: string;
  fuel_type: string;
  consumption: number;
};

let _cache: VehicleRow[] | null = null;
let _pending: Promise<VehicleRow[]> | null = null;

async function loadVehicles(): Promise<VehicleRow[]> {
  if (_cache) return _cache;
  if (_pending) return _pending;
  _pending = supabase
    .from('vehicles')
    .select('make, model, year_range, fuel_type, consumption')
    .order('make')
    .order('model')
    .then(({ data, error }) => {
      if (error) throw new Error(error.message);
      _cache = data ?? [];
      _pending = null;
      return _cache;
    });
  return _pending;
}

function rowToVehicle(r: VehicleRow): Vehicle {
  return {
    make: r.make,
    model: r.model,
    yearRange: r.year_range,
    fuelType: r.fuel_type as Vehicle['fuelType'],
    consumption: r.consumption,
  };
}

function norm(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
}

function yearInRange(range: string, year: number): boolean {
  if (!year) return false;
  const m = range.match(/(\d{4})[–\-](\d{4})/);
  return m ? year >= parseInt(m[1]) && year <= parseInt(m[2]) : false;
}

function findBestMatch(vehicles: VehicleRow[], make: string, model: string, year: number): VehicleRow | null {
  const nMake = norm(make);
  const nModel = norm(model);
  // Keep only substantive words (skip chassis codes like 'zze', 'mk3')
  const modelWords = nModel.split(' ').filter(w => w.length >= 3 && !/^\d/.test(w));

  const scored = vehicles.flatMap(v => {
    const vMake = norm(v.make);
    if (!vMake.includes(nMake) && !nMake.includes(vMake)) return [];

    const vModel = norm(v.model);
    let score = 4; // make matched
    for (const word of modelWords) {
      if (vModel.includes(word)) score += 4;
    }
    if (yearInRange(v.year_range, year)) score += 6;
    return [{ v, score }];
  });

  if (!scored.length) return null;
  scored.sort((a, b) => b.score - a.score);
  return scored[0].score >= 4 ? scored[0].v : null;
}

export default function VehicleSelector({ vehicle, customConsumption, onVehicleChange, onCustomConsumption }: Props) {
  const [allVehicles, setAllVehicles] = useState<VehicleRow[]>(_cache ?? []);
  const [loadingDb, setLoadingDb] = useState(!_cache);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [make, setMake] = useState(vehicle?.make ?? '');
  const [showCustom, setShowCustom] = useState(false);

  // Plate lookup state
  const [showPlate, setShowPlate] = useState(false);
  const [plate, setPlate] = useState('');
  const [plateLoading, setPlateLoading] = useState(false);
  const [plateResult, setPlateResult] = useState<{ text: string; ok: boolean } | null>(null);

  useEffect(() => {
    if (_cache) return;
    loadVehicles()
      .then(rows => { setAllVehicles(rows); setLoadingDb(false); })
      .catch(e => { setFetchError(e.message); setLoadingDb(false); });
  }, []);

  const makes = [...new Set(allVehicles.map(v => v.make))].sort();
  const models = allVehicles.filter(v => v.make === make);

  const handleMake = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMake(e.target.value);
    onVehicleChange(null);
    setPlateResult(null);
  };

  const handleModel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const row = models.find(m => m.model === e.target.value);
    if (!row) return;
    if (row.model === 'Enter manually') {
      setShowCustom(true);
      onVehicleChange(null);
    } else {
      setShowCustom(false);
      onCustomConsumption(null);
      onVehicleChange(rowToVehicle(row));
    }
    setPlateResult(null);
  };

  const handlePlateLookup = async () => {
    if (!plate.trim()) return;
    setPlateLoading(true);
    setPlateResult(null);
    try {
      const details = await lookupPlate(plate);
      const match = findBestMatch(allVehicles, details.make, details.model, details.year);

      if (match) {
        setMake(match.make);
        setShowCustom(false);
        onCustomConsumption(null);
        onVehicleChange(rowToVehicle(match));
        setPlateResult({
          ok: true,
          text: `Found: ${details.make} ${details.model}${details.year ? ` (${details.year})` : ''}${details.colour ? ` · ${details.colour}` : ''}`,
        });
      } else {
        setPlateResult({
          ok: false,
          text: `Found ${details.make} ${details.model}${details.year ? ` (${details.year})` : ''} but it's not in our database — please select manually.`,
        });
      }
    } catch (e) {
      setPlateResult({ ok: false, text: e instanceof Error ? e.message : 'Lookup failed' });
    } finally {
      setPlateLoading(false);
    }
  };

  const fuelTypeLabel = (v: Vehicle) => {
    if (v.fuelType === 'hybrid') return '⚡ Hybrid';
    if (v.fuelType === 'diesel') return '🛢 Diesel';
    if (v.fuelType === 'electric') return '⚡ Electric';
    return '⛽ Petrol';
  };

  return (
    <div className="section">
      <div className="vehicle-label-row">
        <label className="input-label">Vehicle</label>
        <button
          className={`link-btn plate-toggle${showPlate ? ' plate-toggle--active' : ''}`}
          onClick={() => { setShowPlate(p => !p); setPlateResult(null); }}
        >
          {showPlate ? '✕ Cancel' : '🔍 Enter NSW plate'}
        </button>
      </div>

      {/* Plate lookup */}
      {showPlate && (
        <div className="plate-lookup">
          <div className="plate-input-row">
            <input
              className="text-input plate-input"
              type="text"
              placeholder="e.g. ABC123"
              maxLength={7}
              value={plate}
              onChange={e => { setPlate(e.target.value.toUpperCase()); setPlateResult(null); }}
              onKeyDown={e => e.key === 'Enter' && handlePlateLookup()}
            />
            <button
              className="plate-lookup-btn"
              onClick={handlePlateLookup}
              disabled={plateLoading || !plate.trim()}
            >
              {plateLoading ? <span className="btn-spinner" /> : 'Look up'}
            </button>
          </div>
          {plateResult && (
            <p className={`plate-result ${plateResult.ok ? 'plate-result--ok' : 'plate-result--err'}`}>
              {plateResult.ok ? '✓ ' : '⚠ '}{plateResult.text}
            </p>
          )}
        </div>
      )}

      {fetchError && (
        <p style={{ fontSize: '12px', color: 'var(--error, #dc2626)', margin: '4px 0' }}>
          Could not load vehicles: {fetchError}
        </p>
      )}

      {/* Manual selectors — always visible */}
      <div className="select-row">
        <select className="select-input" value={make} onChange={handleMake} disabled={loadingDb}>
          <option value="">{loadingDb ? 'Loading…' : 'Select make…'}</option>
          {makes.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <select
          className="select-input"
          value={vehicle?.model ?? ''}
          onChange={handleModel}
          disabled={!make || loadingDb}
        >
          <option value="">Select model…</option>
          {models.map(m => (
            <option key={m.model} value={m.model}>
              {m.model} ({m.year_range})
            </option>
          ))}
        </select>
      </div>

      {vehicle && vehicle.consumption > 0 && (
        <div className="vehicle-stat">
          <span>{fuelTypeLabel(vehicle)}</span>
          <span className="stat-badge">{vehicle.consumption} L/100km</span>
        </div>
      )}

      {(showCustom || customConsumption !== null) && (
        <div className="custom-consumption">
          <label className="input-label">Fuel consumption (L/100km)</label>
          <input
            type="number"
            className="text-input"
            step="0.1"
            min="1"
            max="30"
            value={customConsumption ?? ''}
            onChange={e => onCustomConsumption(e.target.value ? parseFloat(e.target.value) : null)}
            placeholder="e.g. 8.5"
          />
        </div>
      )}

      {!vehicle && !showCustom && (
        <button className="link-btn" onClick={() => setShowCustom(true)}>
          Enter L/100km manually
        </button>
      )}
    </div>
  );
}
