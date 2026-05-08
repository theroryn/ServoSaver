export interface PlateDetails {
  make: string;
  model: string;
  year: number;
  colour?: string;
}

// Uses carregistrationapi.com.au
// Sign up at carregistrationapi.com.au for 10 free test lookups, then add:
//   VITE_REGOCHECK_API_KEY=your_key
// to .env.local — the Vite proxy at /api/carrego injects the key automatically.
export async function lookupPlate(plate: string): Promise<PlateDetails> {
  const clean = plate.toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (!clean) throw new Error('Enter a valid NSW plate number.');

  if (!import.meta.env.VITE_REGOCHECK_API_KEY) {
    throw new Error(
      'Plate lookup not configured. Sign up at carregistrationapi.com.au for a free key, then add VITE_REGOCHECK_API_KEY to .env.local.'
    );
  }

  const res = await fetch(
    `/api/carrego/json/?RegistrationNumber=${clean}&RegistrationState=NSW`
  );

  if (!res.ok) {
    if (res.status === 404) throw new Error('Plate not found — check the number and try again.');
    if (res.status === 401 || res.status === 403) {
      throw new Error('API key rejected. Check VITE_REGOCHECK_API_KEY in .env.local.');
    }
    const body = await res.text().catch(() => '');
    throw new Error(`Rego check failed (${res.status})${body ? ': ' + body.slice(0, 200) : ''}`);
  }

  const json = await res.json();

  // carregistrationapi.com.au returns CarMake/CarModel as objects { CurrentTextValue: "..." }
  const make: string =
    json?.CarMake?.CurrentTextValue ??
    (typeof json?.CarMake === 'string' ? json.CarMake : null) ??
    json?.Make ??
    json?.Description?.split(' ')?.[0] ?? '';

  const model: string =
    json?.CarModel?.CurrentTextValue ??
    (typeof json?.CarModel === 'string' ? json.CarModel : null) ??
    json?.Model ??
    (json?.Description ? json.Description.split(' ').slice(1).join(' ') : '') ?? '';

  const rawYear =
    json?.RegistrationYear ??
    json?.Year ??
    json?.ManufactureYear ?? 0;

  const colour: string | undefined =
    json?.Colour ??
    json?.Color ??
    json?.BodyColour;

  if (!make || !model) {
    console.warn('carregistrationapi — unexpected response shape:', JSON.stringify(json).slice(0, 500));
    throw new Error(
      'Vehicle details not found in API response (see browser console for raw response).'
    );
  }

  return {
    make: String(make).trim(),
    model: String(model).trim(),
    year: parseInt(String(rawYear)) || 0,
    colour: colour ? String(colour).trim() : undefined,
  };
}
