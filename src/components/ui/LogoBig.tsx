import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoProps = {
  className?: string;
};
export default function LogoBig({ className }: LogoProps) {
  return (
    <Image
      src="/mcwale logo.svg"
      alt="Logo"
      width={100}
      height={50}
      
      className={cn(className)}
    />
  );
}
