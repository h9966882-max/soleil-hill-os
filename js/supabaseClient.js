import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "SupabaseのURL";
const SUPABASE_PUBLISHABLE_KEY = "Publishable key";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);