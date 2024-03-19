"use client";
import { Label } from "@/components/ui/label";

interface ProductSizeProps {
  setSize: (value: string) => void;
}

export default function ProductSize({ setSize }: ProductSizeProps) {
  return (
    <div className="mt-3 flex items-center flex-wrap  gap-3">
      <div>
        <input
          className="peer hidden"
          type="radio"
          name="size"
          id="xs"
          value="XS"
          onChange={(e) => setSize(e.target.value)}
        />
        <Label
          className="uppercase cursor-pointer w-12 h-12 flex justify-center items-center font-light border  peer-checked:border-black"
          htmlFor="xs"
        >
          xs
        </Label>
      </div>
      <div>
        <input
          className="peer hidden"
          type="radio"
          name="size"
          id="s"
          value="S"
          onChange={(e) => setSize(e.target.value)}
        />
        <Label
          className="uppercase cursor-pointer w-12 h-12 flex justify-center items-center font-light border  peer-checked:border-black"
          htmlFor="s"
        >
          s
        </Label>
      </div>
      <div>
        <input
          className="peer hidden"
          type="radio"
          name="size"
          id="m"
          value="M"
          onChange={(e) => setSize(e.target.value)}
        />
        <Label
          className="uppercase cursor-pointer w-12 h-12 flex justify-center items-center font-light border  peer-checked:border-black"
          htmlFor="m"
        >
          m
        </Label>
      </div>
      <div>
        <input
          className="peer hidden"
          type="radio"
          name="size"
          id="l"
          value="L"
          onChange={(e) => setSize(e.target.value)}
        />
        <Label
          className="uppercase cursor-pointer w-12 h-12 flex justify-center items-center font-light border  peer-checked:border-black"
          htmlFor="l"
        >
          l
        </Label>
      </div>
      <div>
        <input
          className="peer hidden"
          type="radio"
          name="size"
          id="xl"
          value="XL"
          onChange={(e) => setSize(e.target.value)}
        />
        <Label
          className="uppercase cursor-pointer w-12 h-12 flex justify-center items-center font-light border  peer-checked:border-black"
          htmlFor="xl"
        >
          xl
        </Label>
      </div>
      <div>
        <input
          className="peer hidden"
          type="radio"
          name="size"
          id="xxl"
          value="XXL"
          onChange={(e) => setSize(e.target.value)}
        />
        <Label
          className="uppercase cursor-pointer w-12 h-12 flex justify-center items-center font-light border  peer-checked:border-black"
          htmlFor="xxl"
        >
          xxl
        </Label>
      </div>
      <div>
        <input
          className="peer hidden"
          type="radio"
          name="size"
          id="xxxl"
          value="XXXL"
          onChange={(e) => setSize(e.target.value)}
        />
        <Label
          className="uppercase cursor-pointer w-12 h-12 flex justify-center items-center font-light border  peer-checked:border-black"
          htmlFor="xxxl"
        >
          xxxl
        </Label>
      </div>
    </div>
  );
}
