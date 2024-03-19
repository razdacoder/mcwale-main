"use client";

import { DataTable } from "@/components/ui/product-data-table";
import { Loader2 } from "lucide-react";
import { Product } from "@/lib/types";
import { columns } from "./product-column";
import { getAllProducts } from "@/services/productServices";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from "@/lib/supabase-client";

export default function ProductBody() {
  const supabase = useSupabaseBrowser();
  const { data, isLoading } = useQuery(getAllProducts(supabase));
  const products = data as Product[];

  if (isLoading) {
    return (
      <div>
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }
  return <DataTable columns={columns} data={products} />;
}
