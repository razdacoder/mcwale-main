import { TypedSupabaseClient } from "@/lib/types";

export const getSetting = async (client: TypedSupabaseClient) => {
  const { data, error } = await client.from("settings").select("*").single();
  if (error) {
    throw new Error("Something went wrong");
  }

  return data;
};
