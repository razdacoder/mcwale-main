import Heading from "@/components/ui/Heading";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="px-4 container py-12">
      <div className="lg:mb-6 flex flex-col lg:gap-y-6">
        <span className="inline-flex text-muted-foreground text-sm  gap-x-3">
          <Link href="/">Home</Link><ChevronRight className="w-4 h-4 "/><Link href="/info">Info</Link><ChevronRight className="w-4 h-4 "/>
          <span className="font-medium text-primary">About McWale</span>
        </span>
      </div>
      <section className="py-6">
        <Heading className="text-left text-xl normal-case">
          The Design Story
        </Heading>

        <div className="text-xs lg:text-sm tracking-wide leading-8 text-slate-900">
          <p className="mb-6">
            Having launched as a shirt specialist of some repute in Glasgow Ted
            Baker quickly became the place to buy some of the very best
            contemporary men&apos;s shirting around.
          </p>
          <p className="mb-4">
            From the beginning Ted has had a very clear, unswerving, focus on
            quality, attention to detail and a quirky sense of humour, so much
            so in fact that the first stores used to provide a laundry service
            for every shirt purchased - something that gained the quickly
            growing brand the title of &apos;No Ordinary Designer Label&aspos;.
            Everything produced under the Ted Baker name has his personality
            woven into its very heart.
          </p>
          <ul className="list-disc list-inside ps-4 lg:ps-10">
            <li>
              Ted Baker is one of the fastest-growing leading lifestyle brands
              in the UK.
            </li>
            <li>
              The collections have expanded rapidly since its beginnings as a
              menswear brand in Glasgow in 1987.
            </li>
            <li>
              Today Ted Baker offers a wide range of collections including:
              Menswear, Womenswear, Global, Endurance, Pashion, Langley,
              Accessories, Fragrance, Skinwear, Footwear, Eyewear and Watches.
            </li>
            <li>
              Ted Baker has a portfolio of stores in the UK and USA and is also
              present in leading department stores.
            </li>
            <li>
              After signing three new territorial license agreements in 2006 and
              initially opening stores in Hong Kong, Singapore and Dubai
              we&apos;ve continued our expansion in 2007 with the opening of a
              further store in Hong Kong, Singapore, Bangkok, three in Kuala
              Lumpur and two each in Dubai and Jakarta. We also have locations
              in Taiwan and Bangkok.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
