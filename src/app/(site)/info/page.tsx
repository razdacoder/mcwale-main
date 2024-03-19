import Heading from "@/components/ui/Heading";
import { Calendar, ChevronRight, Info, NotebookPen, Ruler } from "lucide-react";
import Link from "next/link";

export default function InfoPage() {
  return (
    <main className="px-4 container py-12">
      <div className="lg:mb-6 flex flex-col lg:gap-y-6">
        <span className="inline-flex text-muted-foreground text-sm  gap-x-3">
          <Link href="/">Home</Link><ChevronRight className="w-4 h-4 "/>
          <span className="font-medium text-primary">Info</span>
        </span>
      </div>
      <section className="py-3">
        <Heading className="text-left text-lg normal-case">
          Customer Services
        </Heading>
      </section>

      <section className="py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <Link href="/info/faq" className="flex h-32 border">
          <div className="w-2/12 bg-gray-200/60 flex items-center justify-center">
            <Info strokeWidth={1.5} className="w-4 h-4" />
          </div>
          <div className="w-11/12 px-6 flex flex-col justify-center text-sm">
            <h5>Help and FAQs</h5>
            <p className="font-light mt-1 mb-3">
              If you&apos;ve thought it, someone else probably has too.
            </p>
            <span className="font-light"> (Up to 48 hour reply time)</span>
          </div>
        </Link>
        <Link href="/info/size-guides" className="flex h-32 border">
          <div className="w-2/12 bg-gray-200/60 flex items-center justify-center">
            <Ruler strokeWidth={1.5} className="w-4 h-4" />
          </div>
          <div className="w-11/12 px-6 flex flex-col justify-center text-sm">
            <h5>Size Guides</h5>
            <p className="font-light mt-1 mb-3">
              Get a better understanding of McWale sizing
            </p>
          </div>
        </Link>
        <Link href="/info/contact" className="flex h-32 border">
          <div className="w-2/12 bg-gray-200/60 flex items-center justify-center">
            <NotebookPen strokeWidth={1.5} className="w-4 h-4" />
          </div>
          <div className="w-11/12 px-6 flex flex-col justify-center text-sm">
            <h5>Contact us</h5>
            <p className="font-light mt-1 mb-3">
              Get in touch with McWale Customer services.
            </p>
          </div>
        </Link>
        <Link href="/info/appointment" className="flex h-32 border">
          <div className="w-2/12 bg-gray-200/60 flex items-center justify-center">
            <Calendar strokeWidth={1.5} className="w-4 h-4" />
          </div>
          <div className="w-11/12 px-6 flex flex-col justify-center text-sm">
            <h5>Appointment</h5>
            <p className="font-light mt-1 mb-3">Have you been to see us yet.</p>
          </div>
        </Link>
      </section>
    </main>
  );
}
