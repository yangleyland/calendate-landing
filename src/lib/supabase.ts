import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface WaitlistEntry {
  id?: number;
  full_name: string;
  location: string;
  phone_number: string;
  created_at?: string;
}

export async function addToWaitlist(
  data: Omit<WaitlistEntry, "id" | "created_at">
) {
  const { data: result, error } = await supabase
    .from("waitlist")
    .insert([data])
    .select();

  if (error) {
    console.error("Error adding to waitlist:", error);
    throw error;
  }

  return result;
}
