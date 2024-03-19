import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function ProductSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[300px] w-[150px] md:w-[283px]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[150px] md:w-[250px]" />
        <Skeleton className="h-4 w-[150px] md:w-[200px]" />
      </div>
    </div>
  );
}
