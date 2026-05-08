import type { StationWithPrice, LatLng } from '../types';
import { formatCents, formatDollars, formatKm } from '../utils/calculations';

interface Props {
  results: StationWithPrice[];
  selectedStation: string | null;
  onSelect: (code: string) => void;
  hasDestination: boolean;
  directKm: number;
  loading: boolean;
  error: string | null;
  origin: LatLng | null;
  destination: LatLng | null;
}

function navigateUrl(station: StationWithPrice, origin: LatLng | null, destination: LatLng | null): string {
  const servo = `${station.location.lat},${station.location.lng}`;
  if (!origin) return `https://www.google.com/maps/search/?api=1&query=${servo}`;
  const o = `${origin.lat},${origin.lng}`;
  if (destination) {
    const d = `${destination.lat},${destination.lng}`;
    return `https://www.google.com/maps/dir/?api=1&origin=${o}&destination=${d}&waypoints=${servo}&travelmode=driving`;
  }
  return `https://www.google.com/maps/dir/?api=1&origin=${o}&destination=${servo}&travelmode=driving`;
}

export default function ResultsList({
  results,
  selectedStation,
  onSelect,
  hasDestination,
  directKm,
  loading,
  error,
  origin,
  destination,
}: Props) {
  if (loading) {
    return (
      <div className="results-empty">
        <div className="spinner" />
        <p>Loading fuel prices…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="results-error">
        <div className="error-icon">⚠</div>
        <p>{error}</p>
      </div>
    );
  }

  if (results.length === 0) return null;

  const top3 = results.slice(0, 3);
  const bestCost = top3[0].tripCost;

  return (
    <div className="results-list">
      <div className="results-header">
        <span className="results-count">{results.length} stations found</span>
        {hasDestination && (
          <span className="results-route">Direct: {formatKm(directKm)}</span>
        )}
      </div>

      {top3.map((station, i) => {
        const isSelected = station.code === selectedStation;
        const isOnRoute = station.detourKm < 0.5;
        const extraCost = i > 0 ? station.tripCost - bestCost : 0;

        return (
          <button
            key={station.code}
            className={[
              'result-card',
              i === 0 ? 'result-card--best' : '',
              isSelected ? 'result-card--selected' : '',
            ].filter(Boolean).join(' ')}
            onClick={() => onSelect(station.code)}
          >
            {/* Rank / badge row */}
            <div className="result-badge-row">
              {i === 0 ? (
                <span className="badge badge-gold">🏆 Recommended</span>
              ) : (
                <span className="badge badge-alt">#{i + 1}</span>
              )}
              {i > 0 && (
                <span className="badge-extra">+{formatDollars(extraCost)} more</span>
              )}
            </div>

            {/* Station identity */}
            <div className="result-name">{station.name}</div>
            <div className="result-brand">{station.brand} · {station.address.split(',')[0]}</div>

            {/* Route tag */}
            <div className="result-tags">
              {hasDestination ? (
                isOnRoute ? (
                  <span className="tag tag-green">✓ On your route</span>
                ) : (
                  <span className="tag tag-amber">↗ +{formatKm(station.detourKm)} detour</span>
                )
              ) : (
                <span className="tag tag-blue">📍 {formatKm(station.distFromOriginKm)} from you</span>
              )}
              {hasDestination && (
                <span className="tag tag-grey">
                  {formatKm(station.totalKm)} via servo
                </span>
              )}
            </div>

            {/* Cost breakdown */}
            <div className="result-breakdown">
              <div className="breakdown-row">
                <span className="breakdown-label">Price</span>
                <span className="breakdown-value breakdown-price">{formatCents(station.price)}</span>
              </div>
              <div className="breakdown-row">
                <span className="breakdown-label">Est. fuel</span>
                <span className="breakdown-value">~{station.litresNeeded.toFixed(1)} L</span>
              </div>
              <div className="breakdown-divider" />
              <div className="breakdown-row">
                <span className="breakdown-label breakdown-total-label">
                  {hasDestination ? 'Trip cost' : 'Drive cost'}
                </span>
                <span className="breakdown-value breakdown-total">{formatDollars(station.tripCost)}</span>
              </div>
            </div>

            {/* Navigate button */}
            <button
              className="navigate-btn"
              onClick={e => {
                e.stopPropagation();
                window.open(navigateUrl(station, origin, destination), '_blank', 'noopener,noreferrer');
              }}
            >
              🧭 Navigate
            </button>
          </button>
        );
      })}
    </div>
  );
}
