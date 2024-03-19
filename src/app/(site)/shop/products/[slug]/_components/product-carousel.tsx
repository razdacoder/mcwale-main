"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProductCarouselProps {
  images: string[];
}

export default function ProductCarousel({ images }: ProductCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <Carousel setApi={setApi} className="w-full relative">
      <CarouselPrevious className="hidden md:flex absolute top-[50%] left-2 z-10" />

      <CarouselNext className="hidden md:flex absolute top-[50%] right-2 z-10" />

      <div className="absolute bottom-6 z-30 flex justify-center gap-x-2 w-full py-2 text-center text-sm text-muted-foreground">
        {[...Array(count)].map((_, index) => (
          <div
            key={index}
            className=" cursor-pointer w-6 h-6 rounded-full border-2 border-white flex justify-center items-center"
          >
            {current == index + 1 && (
              <div className="w-4 h-4 bg-white rounded-full"></div>
            )}
          </div>
        ))}
      </div>

      <CarouselContent className="xl:h-[90vh] -ml-0 w-full">
        {images?.map((image, index) => (
          <CarouselItem key={index} className="pl-0">
            <div className="relative flex items-center">
              <Image
                src={image}
                width={500}
                height={500}
                className=" w-full h-full hover:zoom-in-50 "
                alt="Product Image"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
