/**
 * Seeds the Supabase `vehicles` table from supabase/seed.sql.
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=<key> npx tsx scripts/seed-vehicles.ts
 *
 * The SUPABASE_SERVICE_ROLE_KEY is found in your Supabase project:
 *   Settings → API → service_role (secret)
 *
 * VITE_SUPABASE_URL is read from .env.local automatically.
 */

import { readFileSync } from 'fs';
import { createClient } from '@supabase/supabase-js';

// Parse .env.local without dotenv dependency
function loadEnv(path: string): Record<string, string> {
  try {
    const env: Record<string, string> = {};
    for (const line of readFileSync(path, 'utf-8').split('\n')) {
      const m = line.match(/^([^#\s][^=]*)=(.*)$/);
      if (m) env[m[1].trim()] = m[2].trim();
    }
    return env;
  } catch {
    return {};
  }
}

const env = { ...loadEnv('.env.local'), ...process.env };

const supabaseUrl = env.VITE_SUPABASE_URL;
const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error('Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  console.error('  Set SUPABASE_SERVICE_ROLE_KEY=<key> (from Supabase → Settings → API)');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});

type VehicleInsert = {
  make: string;
  model: string;
  year_range: string;
  fuel_type: string;
  consumption: number;
};

// Parse INSERT VALUES from the seed SQL file
function parseSeedSql(sql: string): VehicleInsert[] {
  const vehicles: VehicleInsert[] = [];
  // Match each ('...','...','...','...',N.N) tuple
  const tupleRe = /\('([^']+)',\s*'([^']+)',\s*'([^']+)',\s*'([^']+)',\s*([\d.]+)\)/g;
  let m;
  while ((m = tupleRe.exec(sql)) !== null) {
    vehicles.push({
      make: m[1],
      model: m[2],
      year_range: m[3],
      fuel_type: m[4],
      consumption: parseFloat(m[5]),
    });
  }
  return vehicles;
}

async function main() {
  console.log('Reading seed SQL…');
  const sql = readFileSync('supabase/seed.sql', 'utf-8');
  const vehicles = parseSeedSql(sql);
  console.log(`Parsed ${vehicles.length} vehicles`);

  console.log('Truncating vehicles table…');
  const { error: truncateError } = await supabase.rpc('truncate_vehicles');
  if (truncateError) {
    // Fallback: delete all rows
    const { error: deleteError } = await supabase.from('vehicles').delete().neq('id', 0);
    if (deleteError) console.warn('Could not truncate:', deleteError.message);
  }

  // Insert in batches of 200
  const BATCH = 200;
  for (let i = 0; i < vehicles.length; i += BATCH) {
    const batch = vehicles.slice(i, i + BATCH);
    const { error } = await supabase.from('vehicles').insert(batch);
    if (error) {
      console.error(`Batch ${i / BATCH + 1} failed:`, error.message);
      process.exit(1);
    }
    console.log(`Inserted ${Math.min(i + BATCH, vehicles.length)} / ${vehicles.length}`);
  }

  console.log('Done!');
}

main().catch(e => { console.error(e); process.exit(1); });
