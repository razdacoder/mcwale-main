import Heading from "@/components/ui/Heading";
import Link from "next/link";
import {
  AiOutlineEdit,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import ContactForm from "./contact-form";
import { ChevronRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="px-4 container py-12">
      <div className="lg:mb-6 flex flex-col lg:gap-y-6">
        <span className="inline-flex text-muted-foreground text-sm  gap-x-3">
          <Link href="/">Home</Link><ChevronRight className="w-4 h-4 "/><Link href="/info">Info</Link><ChevronRight className="w-4 h-4 "/>
          <span className="font-medium text-primary">Contact Us</span>
        </span>
      </div>
      <section className="py-6">
        <Heading className="text-left text-xl normal-case">Contact Us</Heading>

        <div className="text-xs lg:text-sm tracking-wide leading-8 text-slate-900">
          <p className="mb-6">
            McWale&apos;s Customer Service Team are on hand to help Monday to
            Sunday (including Bank Holidays).
          </p>
          <p className="mb-4">
            If you require online order information, style advice, or product
            information please see below for all the ways you can get in touch:
          </p>
        </div>
      </section>

      <section className="py-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex h-32 border">
          <div className="w-2/12 lg:w-1/12 bg-gray-200/60 flex items-center justify-center">
            <AiOutlineEdit />
          </div>
          <div className="w-11/12 px-3 flex flex-col justify-center text-xs lg:text-sm">
            <h5>Contact Form</h5>
            <p className="font-light mt-1 mb-1">
              Click <ContactForm /> to submit a specific comment or query.
            </p>
            <span className="font-light"> (Up to 48 hour reply time)</span>
          </div>
        </div>
        <div className="flex h-32 border">
          <div className="w-2/12 lg:w-1/12 bg-gray-200/60 flex items-center justify-center">
            <AiOutlinePhone />
          </div>
          <div className="w-11/12 px-3 flex flex-col justify-center text-xs lg:text-sm">
            <h5>Telephone</h5>
            <p className="font-light mt-1 mb-1">
              Give us a ring on{" "}
              <span className="underline">+23490836876872</span>
            </p>
            <span className="font-light">
              The customer service team are available Monday - Friday from 9:00
              - 19:00 GMT.
            </span>
          </div>
        </div>
        <div className="flex h-32 border">
          <div className="w-2/12 lg:w-1/12 bg-gray-200/60 flex items-center justify-center">
            <AiOutlineMail />
          </div>
          <div className="w-11/12 px-3 flex flex-col justify-center text-xs lg:text-sm">
            <h5>Email</h5>
            <p className="font-light mt-1 mb-1">
              Reach McWale&apos;s inbox at{" "}
              <Link href="ask@mcwale.com" className="underline">
                ask@mcwale.com
              </Link>
            </p>
            <span className="font-light"> (Up to 48 hour reply time)</span>
          </div>
        </div>
        <div className="flex h-32 border">
          <div className="w-2/12 lg:w-1/12 bg-gray-200/60 flex items-center justify-center">
            <AiOutlineWhatsApp />
          </div>
          <div className="w-11/12 px-3 flex flex-col justify-center text-xs lg:text-sm">
            <h5>WhatsApp</h5>
            <p className="font-light mt-1 mb-1">
              Chat with us{" "}
              <Link href="" className="underline">
                here
              </Link>
            </p>
            <span className="font-light">Instant Reply</span>
          </div>
        </div>
      </section>
    </div>
  );
}
