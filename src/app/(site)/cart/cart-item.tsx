import { Button } from "@/components/ui/button";
import { formatPriceToDollar, getPrice, getRatePrice } from "@/lib/utils";
import { CartItem, useCartStore } from "@/store/useCart";
import { useCurrencyStore } from "@/store/useCurrency";
import { useRateStore } from "@/store/useRates";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CartItemProps {
  item: CartItem;
}

export default function CartItemUI({ item }: CartItemProps) {
  const [isClient, setIsClient] = useState(false);
  const { currency } = useCurrencyStore();
  const { rate } = useRateStore();
  const { updateQuantity, removeItem } = useCartStore();
  useEffect(() => {
    setIsClient(true);
  }, []);

  const minusQuantity = () => {
    if (item.quantity <= 1) return;
    item.quantity -= 1;
    updateQuantity(item.product.id, item.quantity);
  };

  const plusQuantity = () => {
    if (item.quantity == 10) return;
    item.quantity += 1;
    updateQuantity(item.product.id, item.quantity);
  };
  return (
    <div className=" flex border p-4 h-[200px] md:h-[250px] lg:h-[300px] ">
      <div className="flex flex-1 gap-x-6">
        <div className="w-1/2 md:w-4/12 relative">
          <Image
            src={item.product.images[0]}
            fill
            alt={item.product.name}
            className="absolute"
          />
        </div>
        <div className="w-6/12 md:w-8/12 flex flex-col justify-center">
          <h3 className="capitalize truncate tracking-wider text-xs lg:text-lg font-medium">
            {item.product.name}
          </h3>
          <div className="hidden mt-1 lg:mt-2 md:flex md:flex-col gap-2 text-xs lg:text-sm">
            <span>Color: {item.color}</span>
            <span>Size: {item.size}</span>
            <span>
              Price:{" "}
              {isClient
                ? getRatePrice(
                    currency,
                    getPrice(item.product),
                    currency === "USD" ? null : rate[currency]
                  )
                : formatPriceToDollar(getPrice(item.product))}
            </span>
          </div>

          <div className="mt-2 lg:mt-2">
            <h4 className="text-xs lg:text-sm tracking-wider ">Quantity</h4>
            <div className="inline-flex items-center border mt-1 h-6 md:h-8">
              <Button
                onClick={minusQuantity}
                variant="ghost"
                size="icon"
                className="py-0 hover:bg-transparent"
              >
                <Minus className="w-4 h-4 text-gray-600" />
              </Button>
              <span className="w-4 text-xs lg:textsm text-center ">
                {isClient ? item.quantity : 0}
              </span>
              <Button
                onClick={plusQuantity}
                variant="ghost"
                size="icon"
                className="py-0 hover:bg-transparent"
              >
                <Plus className="w-4 h-4 text-gray-600" />
              </Button>
            </div>
          </div>
          <div className="text-sm mt-2 flex items-center gap-x-3">
            <span className="text-sm font-medium tracking-wider">TOTAL:</span>

            <span className="  tracking-wider text-primary/90">
              {isClient
                ? getRatePrice(
                    currency,
                    getPrice(item.product) * item.quantity,
                    currency === "USD" ? null : rate[currency]
                  )
                : formatPriceToDollar(getPrice(item.product) * item.quantity)}
            </span>
          </div>
        </div>
      </div>

      <div className=" flex justify-end">
        <Button
          onClick={() => removeItem(item)}
          variant="ghost"
          className=" flex items-center gap-x-3"
        >
          <X className="w-4 h-4" />
          <span className="hidden md:inline">Remove</span>
        </Button>
      </div>
    </div>
  );
}
