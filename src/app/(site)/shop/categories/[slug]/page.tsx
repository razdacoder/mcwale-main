import useSupabaseServer from "@/lib/supabase-server";
import { getCategoryBySlug } from "@/services/categoriesServices";
import { getProductsByCategory } from "@/services/productServices";
import { prefetchQuery } from "@supabase-cache-helpers/postgrest-react-query";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import CategoryProducts from "./_components/products-category";

interface SearchPageProps {
  params: { slug: string };
  searchParams: {
    style: string;
    minPrice: string;
    maxPrice: string;
    currency: string;
    rate: string;
    sortBy: string;
  };
}

export default async function ShopCategoryPage({
  params,
  searchParams,
}: SearchPageProps) {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);

  await prefetchQuery(queryClient, getCategoryBySlug(supabase, params.slug));
  await prefetchQuery(
    queryClient,
    getProductsByCategory(
      supabase,
      params.slug,
      searchParams.style,
      searchParams.minPrice,
      searchParams.maxPrice,
      searchParams.currency,
      searchParams.rate,
      searchParams.sortBy
    )
  );
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CategoryProducts slug={params.slug} />
    </HydrationBoundary>
  );
}
