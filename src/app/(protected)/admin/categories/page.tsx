import CategoryHeader from "./category-header";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import useSupabaseServer from "@/lib/supabase-server";
import { prefetchQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getAllCategories } from "@/services/categoriesServices";
import CategoryBody from "./category-body";

export default async function AdminCategoryPage() {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);
  await prefetchQuery(queryClient, getAllCategories(supabase));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CategoryHeader />
      <CategoryBody />
    </HydrationBoundary>
  );
}
