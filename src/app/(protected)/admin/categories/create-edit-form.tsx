"use client";

import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { ReactNode, useState } from "react";
import { createCategory, updateCategory } from "@/services/categoriesServices";

import { Button } from "@/components/ui/button";
import { Category } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { categorySchema } from "@/schemas/formSchemas";
import { slugify } from "@/lib/utils";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import useSupabaseBrowser from "@/lib/supabase-client";
import { zodResolver } from "@hookform/resolvers/zod";

interface CategoryFormProps {
  category?: Category;
  setOpen: (value: boolean) => void;
}

export default function CategoryForm({ category, setOpen }: CategoryFormProps) {
  const supabase = useSupabaseBrowser();
  const isEditMode = Boolean(category);
  const router = useRouter();
  const [image, setImage] = useState<File | null>(null);

  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: isEditMode
      ? {
          title: category?.title,
          styles: category?.styles.join(","),
        }
      : { title: "", styles: "" },
  });

  const { isSubmitting, isValid } = form.formState;

  async function onSubmit(values: z.infer<typeof categorySchema>) {
    if (!isEditMode) {
      try {
        const data = {
          ...values,
          slug: slugify(values.title),
          styles: values.styles.split(",").map((style) => style.trim()),
          image: image as File,
        };
        await createCategory(supabase, data);
        toast.success("Category Created Successfully");
        setOpen(false);
        router.refresh();
      } catch (error: any) {
        toast.error(error.message);
      }
    } else {
      try {
        const data = {
          ...values,
          slug: slugify(values.title),
          styles: values.styles.split(",").map((style) => style.trim()),
          image: image,
          id: category?.id as string,
        };
        await updateCategory(supabase, data);
        toast.success("Category Updated");
        setOpen(false);
        router.refresh();
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Unique name for the category</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="styles"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Styles</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Note: Seperate the styles by comma.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormItem>
          <FormLabel>Image</FormLabel>
          <FormControl>
            <Input
              onChange={(e) => setImage(e.target.files![0])}
              type="file"
              accept="image/*"
            />
          </FormControl>
          <FormDescription>Upload JPEG Images 16 x 9</FormDescription>
          <FormMessage />
        </FormItem>

        <Button
          disabled={!isValid || isSubmitting || (!isEditMode && image === null)}
          type="submit"
          className="w-full flex items-center gap-x-3"
        >
          {isEditMode ? "Edit Category" : "Create Category"}{" "}
          {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
        </Button>
      </form>
    </Form>
  );
}
