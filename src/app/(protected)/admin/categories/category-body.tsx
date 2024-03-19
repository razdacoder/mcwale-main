"use client"
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./category-column";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from "@/lib/supabase-client";
import { getAllCategories } from "@/services/categoriesServices";
import { Category } from "@/lib/types";
import { Loader2 } from "lucide-react";

export default function CategoryBody() {
  const supabase = useSupabaseBrowser();
  const { data, isLoading } = useQuery(getAllCategories(supabase));
  const categories = data as Category[];

  if (isLoading) {
    return (
      <div>
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }
  return <DataTable columns={columns} data={categories} />;
}
