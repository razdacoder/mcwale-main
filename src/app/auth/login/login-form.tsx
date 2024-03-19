"use client";

import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { login } from "@/services/authServices";
import { loginSchema } from "@/schemas/formSchemas";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import useSupabaseBrowser from "@/lib/supabase-client";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  const supabase = useSupabaseBrowser();
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });
  const { isValid, isSubmitting } = form.formState;
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    try {
      if (!isValid) return;
      await login(supabase, values);
      toast.success("Login Successfull");
      router.refresh();
    } catch (error: any) {
      toast.error(error.message);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          disabled={!isValid || isSubmitting}
          type="submit"
          className="w-full flex items-center gap-x-3"
        >
          Login {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
        </Button>
      </form>
    </Form>
  );
}
