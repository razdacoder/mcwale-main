import Heading from "@/components/ui/Heading";
import Link from "next/link";
import Faq from "./faq-list";
import { ChevronRight } from "lucide-react";

export default function FAQPage() {
  return (
    <div className="px-4 container">
      <div className="py-12 flex flex-col lg:gap-y-6">
        <span className="inline-flex text-muted-foreground text-sm  gap-x-3">
          <Link href="/">Home</Link>
          <ChevronRight className="w-4 h-4 " />
          <Link href="/info">Info</Link>
          <ChevronRight className="w-4 h-4 " />
          <span className="font-medium text-primary">Help & FAQs</span>
        </span>
      </div>
      <section className="">
        <Heading className="text-left text-xl normal-case">Help & FAQs</Heading>

        <Faq />
      </section>
    </div>
  );
}
