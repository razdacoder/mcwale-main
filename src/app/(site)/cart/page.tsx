"use client";

import { Button } from "@/components/ui/button";
import {
  calTotal,
  calculateTotalSavings,
  formatPriceToDollar,
  getRatePrice,
} from "@/lib/utils";
import { CartItem, useCartStore } from "@/store/useCart";
import { useCurrencyStore } from "@/store/useCurrency";
import { useRateStore } from "@/store/useRates";
import { Lock } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartItemUI from "./cart-item";

export default function CartPage() {
  const { cart } = useCartStore();
  const { currency } = useCurrencyStore();
  const { rate } = useRateStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="px-4 container my-6 lg:my-24">
      <h2 className="scroll-m-20 text-lg uppercase font-medium tracking-wide first:mt-0">
        shopping cart
      </h2>
      {cart.length == 0 ? (
        <div className="py-12 text-center">No item in cart</div>
      ) : (
        <section className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-12 my-6">
          <div className="w-full lg:w-8/12 flex flex-col gap-y-6">
            {isClient
              ? cart.map((item: CartItem, index) => (
                  <CartItemUI item={item} key={index} />
                ))
              : null}
          </div>

          <div className="w-full lg:w-4/12 flex flex-col gap-y-3 mt-6 lg:mt-0">
            <div className="uppercase font-medium flex justify-between">
              <span>Subtotal</span>
              <span>
                {isClient
                  ? getRatePrice(
                      currency,
                      calTotal(cart),
                      currency === "USD" ? null : rate[currency]
                    )
                  : formatPriceToDollar(0)}
              </span>
            </div>
            <div className="uppercase text-sm font-medium flex justify-between text-red-500">
              <span>Total savings</span>
              <span>
                {isClient
                  ? getRatePrice(
                      currency,
                      calculateTotalSavings(cart),
                      currency === "USD" ? null : rate[currency]
                    )
                  : formatPriceToDollar(0)}
              </span>
            </div>
            <Button className="w-full" asChild>
              <Link
                href="/checkout"
                className=" flex items-center gap-x-6 uppercase"
              >
                <Lock className="w-4 h-4 text-white" />
                <span>Checkout</span>
              </Link>
            </Button>
            <Link
              href="/shop"
              className="text-center uppercase text-sm font-medium tracking-wide"
            >
              Continue shopping
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
