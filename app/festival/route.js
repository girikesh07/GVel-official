import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Fallback Festival Data agar database offline ho
const fallbackFestivals = [
  {
    id: "varanasi",
    name: "Dev Deepawali (84 Ghats)",
    city: "Varanasi, Uttar Pradesh",
    date: "2026-11-24",
    tag: "Festival Special",
    budget: "₹3,500 - ₹6,500",
    desc: "Over one million glowing earthen diyas illuminate all 84 crescent ghats of Kashi."
  },
  {
    id: "pushkar",
    name: "Pushkar Camel Fair",
    city: "Pushkar, Rajasthan",
    date: "2026-11-17",
    tag: "Iconic Desert Fair",
    budget: "₹3,000 - ₹7,000",
    desc: "The world-famous gathering of 50,000+ adorned camels, folk musicians and desert camps."
  }
];

export async function GET() {
  try {
    const { data, error } = await supabase.from('festivals').select('*');
    if (error || !data || data.length === 0) {
      return NextResponse.json({ data: fallbackFestivals, success: true });
    }
    return NextResponse.json({ data, success: true });
  } catch (err) {
    return NextResponse.json({ data: fallbackFestivals, success: true });
  }
}
