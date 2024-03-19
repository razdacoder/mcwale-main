"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import { Plus } from "lucide-react";
import ProductCreateEditForm from "./create-edit-form";
import { useState } from "react";

// import CategoryForm from "./create-edit-form";

export default function ProductHeader() {
  const [open, setOpen] = useState(false);
  return (
    <section className="flex justify-between">
      <Heading className="normal-case">Products</Heading>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            onClick={() => setOpen(true)}
            className="flex gap-x-3 items-center"
          >
            <Plus className="w-4 h-4" />
            Add Product
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Product</DialogTitle>
            <DialogDescription>
              Create new product for mcwale shop.
            </DialogDescription>
          </DialogHeader>
          <ProductCreateEditForm setOpen={(value: boolean) => setOpen(value)} />
        </DialogContent>
      </Dialog>
    </section>
  );
}
