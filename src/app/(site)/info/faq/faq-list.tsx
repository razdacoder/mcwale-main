"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <Accordion type="single" collapsible className="my-6">
      {[...Array(6)].map((_, index) => (
        <AccordionItem
          key={index}
          value={`item${index}`}
          className="border-b px-3"
        >
          <AccordionTrigger className="hover:no-underline">
            Question?
          </AccordionTrigger>
          <AccordionContent>
            <p className="leading-6 md:leading-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              pariatur harum quas dignissimos debitis ea molestiae dolor sint
              cum, dolore expedita. Eum maxime recusandae adipisci?
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
