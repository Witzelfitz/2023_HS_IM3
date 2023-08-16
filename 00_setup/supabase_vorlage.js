console.log("Initialisierung Supabase");

// Supabase Initialisierung
const supabaseUrl = ''
const supabaseKey = ''
const supa = supabase.createClient(supabaseUrl, supabaseKey)

export { supa }

