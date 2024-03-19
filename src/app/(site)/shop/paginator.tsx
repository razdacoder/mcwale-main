"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Paginator() {
  return (
    <Pagination className="mt-12">
      <PaginationContent>
        <PaginationPrevious href="#" />

        <PaginationLink href="#">1</PaginationLink>

        <PaginationEllipsis />

        <PaginationNext href="#" />
      </PaginationContent>
    </Pagination>
  );
}
