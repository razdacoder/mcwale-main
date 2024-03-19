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
import CategoryForm from "./create-edit-form";
import Heading from "@/components/ui/Heading";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function CategoryHeader() {
  const [open, setOpen] = useState(false);
  return (
    <section className="flex justify-between">
      <Heading className="normal-case">Category</Heading>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            onClick={() => setOpen(true)}
            className="flex gap-x-3 items-center"
          >
            <Plus className="w-4 h-4" />
            Add Category
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Category</DialogTitle>
            <DialogDescription>
              Create new category for mcwale shop.
            </DialogDescription>
          </DialogHeader>
          <CategoryForm setOpen={(value: boolean) => setOpen(value)} />
        </DialogContent>
      </Dialog>
    </section>
  );
}
