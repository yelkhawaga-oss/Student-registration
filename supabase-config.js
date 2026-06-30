import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://gxmadpzxcrfjuciclqhi.supabase.co'
const supabaseAnonKey = 'Sb_publishable_wyVyUG_RVd8nb2xq1Hmlpw_43HsqoPJ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
