"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCart";
import { ShoppingCart } from "lucide-react";

interface AddToCartProps {
  addToCart: () => void;
  size: string | undefined;
  color: string | undefined;
  productId: string;
}

export default function AddToCart({
  size,
  color,
  addToCart,
  productId,
}: AddToCartProps) {
  const { isInCart } = useCartStore();
  return (
    <Button
      onClick={addToCart}
      disabled={!size || !color || isInCart(productId)}
      size="lg"
      className="flex items-center gap-x-3 py-5 capatalize"
    >
      <ShoppingCart className="w-4 h-4 text-white" />
      {isInCart(productId) ? "Already in cart" : "Add to cart"}
    </Button>
  );
}
