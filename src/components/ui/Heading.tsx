import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Heading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "inline-block mb-2 scroll-m-20 uppercase text-center tracking-wider relative text-2xl font-medium",
        className
      )}
    >
      {children}
    </h2>
  );
}
