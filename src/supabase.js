import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xhlfqheambbipejkftzr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhobGZxaGVhbWJiaXBlamtmdHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM0NDA1MDgsImV4cCI6MTk4OTAxNjUwOH0.N655R_46jJnJVMmx3_JYX-6uweN1yknD8eOa-eOOxSk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
