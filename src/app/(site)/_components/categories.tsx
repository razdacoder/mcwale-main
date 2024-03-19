"use client";
import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import useSupabaseBrowser from "@/lib/supabase-client";
import { Category } from "@/lib/types";
import { getAllCategories } from "@/services/categoriesServices";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import Image from "next/image";
import Link from "next/link";

export default function Category() {
  const supabase = useSupabaseBrowser();
  const { data: categories } = useQuery(getAllCategories(supabase));
  return (
    <section className="py-12 px-4 container">
      <Heading className="text-xl normal-case text-left block">
        Shop by Category
      </Heading>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories?.map((category: Category, index) => (
          <div
            key={category.id}
            className="h-[450px] relative flex justify-center items-end pr-8"
          >
            <Image
              src={category.image}
              alt={category.title}
              fill
              className=" z-10"
            />
            <div className="flex justify-center flex-col absolute z-30 bottom-8">
              <Button asChild>
                <Link
                  href={`/shop/categories/${category.slug}`}
                  className="capitalize"
                >
                  Shop {category.title}
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
