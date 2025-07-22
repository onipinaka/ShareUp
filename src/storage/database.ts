import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string =  process.env.SUPABASE_URL || 'google.com'
const supabaseKey: string  = process.env.SUPABASE_KEY || '12345'


const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;