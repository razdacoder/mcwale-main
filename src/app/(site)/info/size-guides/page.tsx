import Heading from "@/components/ui/Heading";
import Link from "next/link";
import Sizes from "./sizes";
import { ChevronRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="px-4 container py-12">
      <div className="lg:mb-6 flex flex-col lg:gap-y-6">
        <span className="inline-flex text-muted-foreground text-sm  gap-x-3">
          <Link href="/">Home</Link>|<Link href="/info">Info</Link><ChevronRight className="w-4 h-4 "/>
          <span className="font-medium text-primary">Size Guides</span>
        </span>
      </div>
      <section className="py-6">
        <Heading className="text-left text-xl normal-case">Size Guides</Heading>

        <Sizes />
      </section>
    </div>
  );
}
