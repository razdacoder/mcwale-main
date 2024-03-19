"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit3, Loader2, MoreVertical, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import ProductCreateEditForm from "./create-edit-form";
import { deleteProduct } from "@/services/productServices";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useSupabaseBrowser from "@/lib/supabase-client";

interface ProductActionProp {
  product: Product;
}

export default function ProductAction({ product }: ProductActionProp) {
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const supabase = useSupabaseBrowser();
  const router = useRouter();

  async function deleteAction() {
    try {
      setDeleting(true);
      await deleteProduct(supabase, product.id);
      toast.success("Product Deleted");
      router.refresh();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setDeleting(false);
      setAlertOpen(false);
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DialogTrigger asChild>
              <DropdownMenuItem
                className="flex gap-x-3 items-center cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <Edit3 className="w-4 h-4" />
                Edit
              </DropdownMenuItem>
            </DialogTrigger>

            <DropdownMenuSeparator />
            <AlertDialogTrigger asChild>
              <DropdownMenuItem
                className="flex gap-x-3 items-center cursor-pointer"
                onClick={() => setAlertOpen(true)}
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Deleting this product will remove the product and associated
              dependencies from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="flex items-center gap-x-3"
              onClick={deleteAction}
            >
              Continue{" "}
              {deleting && <Loader2 className="w-4 h-4 animate-spin" />}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogDescription>
            Edit this category infor for mcwale shop.
          </DialogDescription>
        </DialogHeader>
        <ProductCreateEditForm
          product={product}
          setOpen={(value: boolean) => setOpen(value)}
        />
      </DialogContent>
    </Dialog>
  );
}
