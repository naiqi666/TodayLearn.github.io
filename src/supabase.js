import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eqelsesksdybzcilppao.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxZWxzZXNrc2R5YnpjaWxwcGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyMjIwMjAsImV4cCI6MjAyMTc5ODAyMH0.IAseJRxdFOSY6BQjGxCY1PdHTjh2bxaUmc-FBqcpJiI";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
