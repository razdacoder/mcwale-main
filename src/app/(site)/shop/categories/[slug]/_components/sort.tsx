"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDownNarrowWide } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { ChangeEvent } from "react";

export default function SortBy() {
  const searchParams = useSearchParams();
  const sort = searchParams.get("sortBy") || "newest";
  const pathname = usePathname();
  const router = useRouter();

  const onSelect = (value: string) => {
    // now you got a read/write object
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    if (!value) {
      current.delete("sortBy");
    } else {
      current.set("sortBy", value);
    }

    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  return (
    <Select value={sort} onValueChange={(value: string) => onSelect(value)}>
      <SelectTrigger className="py-6 border-primary flex w-[150px] md:w-[200px] focus:ring-0 focus:ring-offset-0 px-3">
        <ArrowDownNarrowWide className="w-4 h-4" />
        <SelectValue defaultValue={sort} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="newest">Newest Arrivals</SelectItem>
          <SelectItem value="price-l-h">Price: Low to High</SelectItem>
          <SelectItem value="price-h-l">Price: High to Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
