"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";

interface FeaturedCarouselProps {
  products: Product[];
}

export default function FeaturedCarousel({ products }: FeaturedCarouselProps) {
  return (
    <Carousel className="w-full relative">
      <CarouselContent className="-ml-6 ">
        {products?.map((product, index) => (
          <CarouselItem
            key={product.id}
            className="pl-6 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <Link
              href={`/shop/products/${product.slug}`}
              className="w-full h-[450px]"
            >
              <div className=" relative h-[450px] w-full">
                <Image src={product.images[0]} fill alt={product.name} />
              </div>
              <span className="block font-medium capitalize mt-3 text-primary text-sm">
                {product.name}
              </span>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute -bottom-6 left-[50%] ">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
