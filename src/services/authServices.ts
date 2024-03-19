import * as z from "zod";

import { loginSchema, registerSchema } from "@/schemas/formSchemas";

import { TypedSupabaseClient } from "@/lib/types";

export const signUp = (
  client: TypedSupabaseClient,
  values: z.infer<typeof registerSchema>
) => {
  return client.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      data: {
        first_name: values.first_name,
        last_name: values.last_name,
      },
      emailRedirectTo: `${location.origin}/auth/callback`,
    },
  });
};

export const login = async (
  client: TypedSupabaseClient,
  values: z.infer<typeof loginSchema>
) => {
  if (values.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL!) {
    throw new Error("You are not authorized");
  }
  const { data, error } = await client.auth.signInWithPassword(values);
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const logout = (client: TypedSupabaseClient) => {
  return client.auth.signOut();
};

export const getSession = (client: TypedSupabaseClient) => {
  return client.auth.getSession();
};

export const getProfile = (client: TypedSupabaseClient, id: string) => {
  return client.from("profiles").select("*").eq("id", id).single();
};

export const updateProfile = async (
  client: TypedSupabaseClient,
  profile: any
) => {
  return client.from("profiles").update(profile).eq("id", profile.id).select();
};
