import { Product, TypedSupabaseClient } from "@/lib/types";

import { generateUniqueFilename } from "@/lib/utils";

export const getProductsByCategory = (
  client: TypedSupabaseClient,
  slug: string,
  style: string | null,
  minPrice: string | null,
  maxPrice: string | null,
  currency: string | null,
  rate: string | null,
  sortBy: string | null
) => {
  let query = client
    .from("products")
    .select("*, category!inner(*)")
    .eq("category.slug", slug);

  if (!sortBy || sortBy === "newest") {
    query.order("created_at", { ascending: false });
  } else if (sortBy === "price-l-h") {
    query.order("price", { ascending: true });
  } else {
    query.order("price", { ascending: false });
  }

  if (style) {
    query.eq("style", style);
  }

  if (minPrice) {
    if (currency === "USD") {
      query.gte("price", parseFloat(minPrice));
    } else {
      query.gte("price", parseFloat(minPrice) / parseFloat(rate!));
    }
  }

  if (maxPrice) {
    if (currency === "USD") {
      query.lte("price", parseFloat(maxPrice));
    } else {
      query.lte("price", parseFloat(maxPrice) / parseFloat(rate!));
    }
  }
  return query.throwOnError();
};

export const getProductBySlug = (client: TypedSupabaseClient, slug: string) => {
  return client
    .from("products")
    .select("*, category!inner(*)")
    .eq("slug", slug)
    .throwOnError()
    .single();
};

export const getNewArrivals = (client: TypedSupabaseClient) => {
  return client
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(4);
};

export const getFeaturedProducts = (client: TypedSupabaseClient) => {
  return client.from("products").select("*").eq("is_featured", true).limit(12);
};

export const searchProducts = (client: TypedSupabaseClient, q: string) => {
  return client.rpc("search_products", { keyword: q });
};

// Your Orders ->

export const getRelatedProducts = (
  client: TypedSupabaseClient,
  product: Product
) => {
  return client
    .from("products")
    .select("*, category!inner(*)")
    .eq("category.slug", product?.category.slug)
    .neq("id", product?.id)
    .limit(6)
    .throwOnError();
};

export const getAllProducts = (client: TypedSupabaseClient) => {
  return client.from("products").select("*, category!inner(*)").throwOnError();
};

export const createProduct = async (
  client: TypedSupabaseClient,
  values: {
    name: string;
    slug: string;
    price: number;
    discount_percentage: number;
    is_featured: boolean;
    description: string;
    style: string;
    category_id: string;
    images: FileList;
  }
) => {
  const imagesUrls: string[] = [];
  // Upload Images to Supabase
  for (let i = 0; i < values.images.length; i++) {
    const filename = generateUniqueFilename(values.images[i].name);
    const { data: uploadImage, error: uploadError } = await client.storage
      .from("images")
      .upload(`${filename}`, values.images[i], {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      throw new Error("Could not upload image");
    }

    const { data: imageUrl } = client.storage
      .from("images")
      .getPublicUrl(uploadImage.path);

    imagesUrls.push(imageUrl.publicUrl);
  }

  const { data, error } = await client
    .from("products")
    .insert({
      name: values.name,
      category: values.category_id,
      slug: values.slug,
      style: values.style,
      is_featured: values.is_featured,
      price: values.price,
      discount_percentage: values.discount_percentage,
      description: values.description,
      images: imagesUrls,
    })
    .select();

  if (error) {
    throw new Error("Could not add product");
  }

  return data as unknown as Product;
};

export const updateProduct = async (
  client: TypedSupabaseClient,
  values: {
    id: string;
    name: string;
    slug: string;
    price: number;
    discount_percentage: number;
    is_featured: boolean;
    description: string;
    style: string;
    category_id: string;
    images: FileList | null;
  }
) => {
  if (values.images) {
    const imagesUrls: string[] = [];
    // Upload Images to Supabase
    for (let i = 0; i < values.images.length; i++) {
      const filename = generateUniqueFilename(values.images[i].name);
      const { data: uploadImage, error: uploadError } = await client.storage
        .from("images")
        .upload(`${filename}`, values.images[i], {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        throw new Error("Could not upload image");
      }

      const { data: imageUrl } = client.storage
        .from("images")
        .getPublicUrl(uploadImage.path);

      imagesUrls.push(imageUrl.publicUrl);
    }

    const { data, error } = await client
      .from("products")
      .update({
        name: values.name,
        category: values.category_id,
        slug: values.slug,
        style: values.style,
        is_featured: values.is_featured,
        price: values.price,
        discount_percentage: values.discount_percentage,
        description: values.description,
        images: imagesUrls,
      })
      .eq("id", values.id);

    if (error) {
      throw new Error("Could not update category");
    }
    return data;
  } else {
    const { data, error } = await client
      .from("products")
      .update({
        name: values.name,
        category: values.category_id,
        slug: values.slug,
        style: values.style,
        is_featured: values.is_featured,
        price: values.price,
        discount_percentage: values.discount_percentage,
        description: values.description,
      })
      .eq("id", values.id);

    if (error) {
      throw new Error("Could not update category");
    }
    return data;
  }
};

export const deleteProduct = async (
  client: TypedSupabaseClient,
  id: string
) => {
  const { error } = await client.from("products").delete().eq("id", id);

  if (error) {
    throw new Error("Could not delete product");
  }

  return {};
};
