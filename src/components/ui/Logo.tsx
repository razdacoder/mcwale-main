import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoProps = {
  className?: string;
};
export default function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/mcwale logo.svg"
      alt="Logo"
      width={60}
      height={20}
      
      className={cn(className)}
    />
  );
}
