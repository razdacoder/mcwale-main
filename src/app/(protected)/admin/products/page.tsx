import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import ProductBody from "./product-body";
import ProductHeader from "./product-header";
import React from "react";
import { cookies } from "next/headers";
import { getAllProducts } from "@/services/productServices";
import { prefetchQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseServer from "@/lib/supabase-server";

export default async function AdminProductPage() {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);
  await prefetchQuery(queryClient, getAllProducts(supabase));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductHeader />
      <ProductBody />
    </HydrationBoundary>
  );
}
