import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ngasdvqwznbwwyvbsmuo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nYXNkdnF3em5id3d5dmJzbXVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwNjIyNTcsImV4cCI6MjAwNDYzODI1N30.-elXki2o7nePNejNrSiHxnKDMGG7hzBt7Kr-tsDd-sM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
