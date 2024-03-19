"use client";
import { Product } from "@/lib/types";
import {
  calculateDiscountPrice,
  cn,
  formatPriceToDollar,
  getRatePrice,
} from "@/lib/utils";
import { useCurrencyStore } from "@/store/useCurrency";
import { useRateStore } from "@/store/useRates";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

type ProductCardProps = {
  height?: string;
  product: Product;
};

export default function ProductCard({ product, height }: ProductCardProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const { currency } = useCurrencyStore();
  const { rate } = useRateStore();

  return (
    <Link href={`/shop/products/${product.slug}`}>
      <div className="w-full ">
        <div className={cn("w-full", height)}>
          <Carousel className="w-full h-[450px]">
            <CarouselContent className={cn(" w-full h-[450px] -ml-0", height)}>
              {product.images.map((image, index) => (
                <CarouselItem key={index} className="pl-0">
                  <div className="h-full relative">
                    <Image
                      src={image}
                      // fill
                      fill
                      alt={product.name}
                      className="absolute"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="w-full flex flex-col gap-y-2 mt-4">
          <span className="text-sm truncate lg:text-base font-light w-full capitalize tracking-wider">
            {product.name}
          </span>
          {isClient ? (
            <div className="flex gap-x-3">
              {product.discount_percentage > 0 && (
                <span className="font-medium text-sm mb-3 tracking-wide">
                  {getRatePrice(
                    currency,
                    calculateDiscountPrice(
                      product.price,
                      product.discount_percentage
                    ),
                    currency === "USD" ? null : rate[currency]
                  )}
                </span>
              )}
              <span
                className={cn(
                  "font-medium text-sm mb-3 tracking-wide",
                  product.discount_percentage > 0 && "line-through text-red-500"
                )}
              >
                {getRatePrice(
                  currency,
                  product.price,
                  currency === "USD" ? null : rate[currency]
                )}
              </span>
            </div>
          ) : (
            <div className="flex gap-x-3">
              {product.discount_percentage > 0 && (
                <span className="font-medium text-sm mb-3 tracking-wide">
                  {formatPriceToDollar(
                    calculateDiscountPrice(
                      product.price,
                      product.discount_percentage
                    )
                  )}
                </span>
              )}
              <span
                className={cn(
                  "font-medium text-sm mb-3 tracking-wide",
                  product.discount_percentage > 0 && "line-through text-red-500"
                )}
              >
                <span className="font-medium text-sm mb-3 tracking-wide">
                  {formatPriceToDollar(product.price)}
                </span>
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
