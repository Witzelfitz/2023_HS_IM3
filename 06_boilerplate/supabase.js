console.log("Initialisierung Supabase");

// Supabase Initialisierung
const supabaseUrl = 'https://rplshgrxtqicbsmpcwhq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwbHNoZ3J4dHFpY2JzbXBjd2hxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwODk1NzQsImV4cCI6MjAwNzY2NTU3NH0.Ybipo3b_Wmdq7wMMxIgm2Ekj47o1sYajtRx98y0DIg4'
const supa = supabase.createClient(supabaseUrl, supabaseKey, {
    auth: {
        redirectTo: window.location.origin,  // This will redirect back to the page where the request originated from
    },
});

export { supa }