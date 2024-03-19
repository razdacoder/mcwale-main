import useSupabaseBrowser from "@/lib/supabase-client";
import { logout } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useLogout() {
  const supabase = useSupabaseBrowser();

  const { mutate: logoutFn } = useMutation({
    mutationFn: async () => {
      const { error } = await logout(supabase);
      if (error) throw new Error(error.message);
      return {};
    },
    onSuccess: () => {
      location.reload();
      toast.success("Logout Successfull");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { logoutFn };
}
