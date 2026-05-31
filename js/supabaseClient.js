import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://sclsozlhfaksfcgdggrg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "WORLD側で成功した publishable key をそのまま入れる";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);