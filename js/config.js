// Konfigurasi Supabase

const SUPABASE_URL = "https://yizoloveqztkgrlxdnvq.supabase.co";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpem9sb3ZlcXp0a2dybHhkbnZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2MjA1MzIsImV4cCI6MjA5OTE5NjUzMn0.3nMMr8x0IS1U-KJvB6Z0QPcsr598k7jBjQYzMmBbXMA";
/* SUPABASE */

const supabase = window.supabase.createClient(

    SUPABASE_URL,

    SUPABASE_KEY

);
