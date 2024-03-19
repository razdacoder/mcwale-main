import useSupabaseBrowser from "@/lib/supabase-client";
import { getSession } from "@/services/authServices";
import { useQuery } from "@tanstack/react-query";

export default function useAuth() {
  const supabase = useSupabaseBrowser();
  const { data } = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const { data, error } = await getSession(supabase);
      if (error) throw new Error(error.message);
      return data.session;
    },
  });
  return { user: data?.user, isAuthenticated: !!data };
}
