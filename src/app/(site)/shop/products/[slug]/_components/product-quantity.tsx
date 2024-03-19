"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface ProductQuantityProps {
  quantity: number;
  setQuantity: (value: number) => void;
}

export default function ProductQuantity({
  quantity,
  setQuantity,
}: ProductQuantityProps) {
  const minusQuantity = (q: number) => {
    if (q <= 1) return;
    q -= 1;
    setQuantity(q);
  };
  return (
    <div className="inline-flex items-center border mt-3">
      <Button
        onClick={() => minusQuantity(quantity)}
        variant="ghost"
        size="icon"
      >
        <Minus className="w-6 h-6 text-gray-600" />
      </Button>
      <span className="w-12 text-center font-light">{quantity}</span>
      <Button
        onClick={() => setQuantity(quantity + 1)}
        variant="ghost"
        size="icon"
      >
        <Plus className="w-6 h-6 text-gray-600" />
      </Button>
    </div>
  );
}
