"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  const pathname = usePathname();
  return (
    <footer className="pt-12 pb-6 bg-slate-100">
      <div className="px-4 md:container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 my-6 uppercase font-medium text-xs">
          <div>
            <h4 className="mb-3">Customer services</h4>
            <div className="flex flex-col gap-y-2">
              <Link href="/info/about" className="flex gap-x-3 items-center">
                <span className="text-xs text-muted-foreground">About us</span>
              </Link>

              <Link
                href="/info/appointment"
                className="flex gap-x-3 items-center"
              >
                <span className="text-xs text-muted-foreground">
                  Appointment
                </span>
              </Link>
              <Link href="#" className="flex gap-x-3 items-center">
                <span className="text-sm text-muted-foreground">Magazine</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3">HELP Center</h4>
            <div className="flex flex-col gap-y-2">
              <Link href="/info/faq" className="flex gap-x-3 items-center">
                <span className="text-xs text-muted-foreground">FAQ</span>
              </Link>

              <Link
                href="/info/size-guides"
                className="flex gap-x-3 items-center"
              >
                <span className="text-xs text-muted-foreground">
                  Size Guides
                </span>
              </Link>
              <Link href="/info/terms" className="flex gap-x-3 items-center">
                <span className="text-xs text-muted-foreground">
                  Terms and Conditions
                </span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3">CONTACT US</h4>
            <div className="flex flex-col gap-y-2">
              <span className="text-xs text-muted-foreground normal-case">
                16 Odumbo Street, Solomade St, Ikorodu, Lagos 100001
              </span>
              <div className="flex gap-x-3 items-center">
                <span className="text-xs ">+2348024283327 </span>
                <span className="text-xs normal-case text-muted-foreground">
                  (call or WhatsApp){" "}
                </span>
              </div>
              <Link href="/appointment" className="flex gap-x-3 items-center">
                <span className="text-xs  lowercase text-muted-foreground">
                  mcwale@gmail.com
                </span>
              </Link>
              <Link href="/info/contact" className="flex gap-x-3 items-center">
                <span className="text-xs text-muted-foreground">Contact</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col gap-y-6 mt-12">
          <h3 className="scroll-m-20 text-xl font-medium tracking-wider capitalize">
            Be the first to know!
          </h3>
          <p>Get timely updates from your favourite products</p>
          <form
            className="w-full flex flex-col  md:flex-row md:w-1/2 md:gap-x-3 items-center gap-y-3"
            action=""
          >
            <Input className="py-3" placeholder="Enter your email address" />
            <Button className="uppercase" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
        <div className="flex flex-col justify-center md:flex-row gap-y-3 items-center mt-6 md:justify-between md:items-center">
          <div className="uppercase text-muted-foreground font-medium tracking-wide text-sm flex items-center gap-y-3 gap-x-6">
            <Link href="#" className="flex gap-x-3 items-center">
              <Facebook className="w-4 h-4" />
              {/* <span className="text-sm text-muted-foreground">Facebook</span> */}
            </Link>
            <Link href="#" className="flex gap-x-3 items-center">
              <Instagram className="w-4 h-4" />
              {/* <span className="text-sm text-muted-foreground">Instagram</span> */}
            </Link>
            <Link href="#" className="flex gap-x-3 items-center">
              <Twitter className="w-4 h-4" />
              {/* <span className="text-sm text-muted-foreground">Twitter</span> */}
            </Link>
            <Link href="#" className="flex gap-x-3 items-center">
              <AiOutlineWhatsApp className="w-4 h-4" />
              {/* <span className="text-sm text-muted-foreground">WhatsApp</span> */}
            </Link>
          </div>
          <p className="mt-4 text-sm font-normal uppercase text-muted-foreground">
            &copy; {new Date().getFullYear()} Mcwale All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
