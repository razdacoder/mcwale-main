"use client";

import { Check, Minus, X } from "lucide-react";
import { formatPriceToDollar, parseDate } from "@/lib/utils";

import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Product } from "@/lib/types";
import ProductAction from "./product-action";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const { images } = row.original;

      return (
        <Image src={images[0]} alt="Category Image" width={50} height={50} />
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    id: "category",
    accessorKey: "category.title",
    header: "Category",
  },
  {
    accessorKey: "style",
    header: "Style",
  },
  {
    accessorKey: "price",
    header: "price",
    cell: ({ row }) => {
      const { price } = row.original;
      return (
        <span className="text-green-500">{formatPriceToDollar(price)}</span>
      );
    },
  },
  {
    accessorKey: "discount_percentage",
    header: "Discount",
    cell: ({ row }) => {
      const { discount_percentage } = row.original;
      return (
        <span className="lowercase text-red-500">
          {discount_percentage === 0 ? (
            <Minus className="w-4 h-4 text-primary" />
          ) : (
            `${discount_percentage}% off`
          )}
        </span>
      );
    },
  },

  {
    accessorKey: "is_featured",
    header: "Featured",
    cell: ({ row }) => {
      const { is_featured } = row.original;
      return (
        <span>
          {is_featured ? (
            <Check className="w-4 h-4" />
          ) : (
            <X className="w-4 h-4" />
          )}
        </span>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="flex items-center gap-x-3 px-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <ArrowUpDown className="h-3 w-3" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const { created_at } = row.original;
      return <span>{parseDate(created_at)}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;

      return <ProductAction product={product} />;
    },
  },
];
