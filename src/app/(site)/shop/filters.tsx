"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ShopFilters() {
  return (
    <div className="flex justify-end">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="embri">Embryode</SelectItem>
            <SelectItem value="plane">Plane</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
