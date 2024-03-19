import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import {
  getFeaturedProducts,
  getNewArrivals,
} from "@/services/productServices";

import CarouselBanner from "./_components/carousel-banner";
import Category from "./_components/categories";
import FeaturedProducts from "./_components/featured";
import NewArrivals from "./_components/new-arrivals";
import { cookies } from "next/headers";
import { getAllCategories } from "@/services/categoriesServices";
import { prefetchQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseServer from "@/lib/supabase-server";

export default async function Home() {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);
  await prefetchQuery(queryClient, getNewArrivals(supabase));
  await prefetchQuery(queryClient, getFeaturedProducts(supabase));
  await prefetchQuery(queryClient, getAllCategories(supabase));

  return (
    <>
      <CarouselBanner />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Category />
        <FeaturedProducts />
        <NewArrivals />
      </HydrationBoundary>
    </>
  );
}
