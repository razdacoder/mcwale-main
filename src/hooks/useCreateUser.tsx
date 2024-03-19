"use client";
import useSupabaseBrowser from "@/lib/supabase-client";
import { registerSchema } from "@/schemas/formSchemas";
import { signUp } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import * as z from "zod";

export default function useCreateUser() {
  const supabase = useSupabaseBrowser();
  const { mutate: createUser, status: creating } = useMutation({
    mutationFn: async (data: z.infer<typeof registerSchema>) => {
      const { data: user, error } = await signUp(supabase, data);
      if (error) throw new Error(error.message);
      return user;
    },
    onSuccess: () => {
      toast.success("Account created successfully");
      location.reload();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { createUser, creating };
}
