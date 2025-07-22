import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string =  'https://xeyceubfzmgseeyhgied.supabase.co'
const supabaseKey: string  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhleWNldWJmem1nc2VleWhnaWVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4NDg3MzYsImV4cCI6MjA2ODQyNDczNn0.8qyvAmUAh0HcEfLYbONqOFOnPoPcWqwGHpwV4Fem1vg'


const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;