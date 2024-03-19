import { Skeleton } from "@/components/ui/skeleton";

export default function PageSkeleton() {
  return (
    <div className="container px-4 flex flex-col lg:flex-row gap-y-6 gap-x-3 xl:gap-x-12 my-12 h-[60vh]">
      <Skeleton className="w-full lg:w-5/12" />
      <div className="w-full lg:w-6/12 py-3 flex flex-col space-y-4">
        <Skeleton className="h-12 w-full" />
        <div>
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>

        <Skeleton className="h-12 w-[250px]" />
      </div>
    </div>
  );
}
