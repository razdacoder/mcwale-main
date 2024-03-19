"use client";

import { Category } from "@/lib/types";
import CategoryAction from "./category-action";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { parseDate } from "@/lib/utils";

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("image") as string;

      return (
        <Image src={imageUrl} alt="Category Image" width={50} height={50} />
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "styles",
    header: "Styles",
    cell: ({ row }) => {
      const { styles } = row.original;
      return (
        <div>
          {styles?.map((style) => (
            <span className="p-2" key={style}>
              {style}
            </span>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: "Created at",
    cell: ({ row }) => {
      const { created_at } = row.original;
      return <span>{parseDate(created_at)}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original;
      return <CategoryAction category={category} />;
    },
  },
];
