"use client";
import Heading from "@/components/ui/Heading";
import useSupabaseBrowser from "@/lib/supabase-client";
import { Product } from "@/lib/types";
import { getFeaturedProducts } from "@/services/productServices";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import FeaturedCarousel from "./featured-carousel";

export default function FeaturedProducts() {
  const supabase = useSupabaseBrowser();
  const { data: products } = useQuery(getFeaturedProducts(supabase));
  return (
    <section className="pb-12 px-4 container my-12">
      <div className="mb-3">
        <Heading className="text-xl text-left normal-case block">
          Top Featured
        </Heading>
      </div>

      <FeaturedCarousel products={products as Product[]} />
    </section>
  );
}
