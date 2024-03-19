import { Category, TypedSupabaseClient } from "@/lib/types";

import { generateUniqueFilename } from "@/lib/utils";

export const getAllCategories = (client: TypedSupabaseClient) => {
  return client
    .from("categories")
    .select("*")
    .order("created_at", { ascending: true });
};

export const getCategoryBySlug = (
  client: TypedSupabaseClient,
  slug: string
) => {
  return client
    .from("categories")
    .select("*")
    .eq("slug", slug)
    .throwOnError()
    .single();
};

export const deleteCategory = async (
  client: TypedSupabaseClient,
  id: string
) => {
  const { error } = await client.from("categories").delete().eq("id", id);

  if (error) {
    throw new Error("Could not delete category");
  }

  return {};
};

export const createCategory = async (
  client: TypedSupabaseClient,
  values: { title: string; slug: string; styles: string[]; image: File }
) => {
  const filename = generateUniqueFilename(values.image.name);
  const { data: uploadImage, error: uploadError } = await client.storage
    .from("images")
    .upload(`${filename}`, values.image, {
      cacheControl: "3600",
      upsert: false,
    });

  if (uploadError) {
    throw new Error("Could not upload image");
  }

  const { data: imageUrl } = client.storage
    .from("images")
    .getPublicUrl(uploadImage.path);
  const { data, error } = await client
    .from("categories")
    .insert([
      {
        title: values.title,
        slug: values.slug,
        styles: values.styles,
        image: imageUrl.publicUrl,
      },
    ])
    .select();

  if (error) {
    throw new Error("Could not create category");
  }

  return data as unknown as Category;
};

export const updateCategory = async (
  client: TypedSupabaseClient,
  values: {
    id: string;
    title: string;
    slug: string;
    styles: string[];
    image: File | null;
  }
) => {
  if (values.image) {
    const filename = generateUniqueFilename(values.image.name);
    const { data: uploadImage, error: uploadError } = await client.storage
      .from("images")
      .upload(`${filename}`, values.image, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      throw new Error("Could not upload image");
    }

    const { data: imageUrl } = client.storage
      .from("images")
      .getPublicUrl(uploadImage.path);

    const { data, error } = await client
      .from("categories")
      .update({
        title: values.title,
        slug: values.slug,
        styles: values.styles,
        image: imageUrl.publicUrl,
      })
      .eq("id", values.id)
      .select();

    if (error) {
      throw new Error("Could not update category");
    }
    return data;
  } else {
    const { data, error } = await client
      .from("categories")
      .update({ title: values.title, slug: values.slug, styles: values.styles })
      .eq("id", values.id)
      .select();

    if (error) {
      throw new Error("Could not update category");
    }
    return data;
  }
};
