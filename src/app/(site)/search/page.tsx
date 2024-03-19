import useSupabaseServer from "@/lib/supabase-server";
import { searchProducts } from "@/services/productServices";
import { prefetchQuery } from "@supabase-cache-helpers/postgrest-react-query";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import SearchResults from "./search-page";

interface SearchPageProps {
  searchParams: {
    q: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);
  const { q } = searchParams;
  await prefetchQuery(queryClient, searchProducts(supabase, q));
  return (
    <main className="container px-4 my-12">
      <div className=" mb-6">
        Search results for &quot;{searchParams.q}&quot;
      </div>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <SearchResults />
      </HydrationBoundary>
    </main>
  );
}
