import { NextResponse } from 'next/server';
import { supabase } from '../../lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('travel_gear')
      .select('*')
      .order('id', { ascending: true });

    if (error || !data || data.length === 0) {
      return NextResponse.json({ data: [], success: true });
    }

    return NextResponse.json({ data, success: true });
  } catch (err) {
    return NextResponse.json({ data: [], success: true });
  }
}
