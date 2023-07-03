import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kxkddwiwxgjbluremxli.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4a2Rkd2l3eGdqYmx1cmVteGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1NTc2OTcsImV4cCI6MjAwMjEzMzY5N30.K-weCQCQkUSoisGjgX0V_fnPRqKAlXVGbNrbTBwvIk4"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;