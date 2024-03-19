import useSupabaseServer from "@/lib/supabase-server";
import { getProductBySlug } from "@/services/productServices";
import { prefetchQuery } from "@supabase-cache-helpers/postgrest-react-query";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import ProductPage from "./_components/product-page";

export default async function ProductPageView({
  params,
}: {
  params: { slug: string };
}) {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);
  await prefetchQuery(queryClient, getProductBySlug(supabase, params.slug));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductPage slug={params.slug} />
    </HydrationBoundary>
  );
}
