import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://prvrhnpcpaqmvflpnxre.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_J5qRNImPpI8oEBuH7fKz5Q_vmGkeJBq';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
