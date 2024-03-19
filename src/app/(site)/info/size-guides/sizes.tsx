"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Sizes() {
  return (
    <Accordion type="single" collapsible className="">
      <AccordionItem value="item-1" className="px-3 border-none">
        <AccordionTrigger className="hover:no-underline">
          Agbada
        </AccordionTrigger>
        <AccordionContent className="">
          <table className="table-auto  w-full bg-white">
            <thead className="text-left border-b">
              <tr className="border-b">
                <th className="py-3">Size</th>
                <th>Chest</th>
                <th>Collar</th>
                <th>Waist</th>
                <th>Shoulder</th>
                <th>Arm Length</th>
                <th>Leg Short</th>
                <th>Log Long</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">XS</td>
                <td>34</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">SM</td>
                <td>34</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">M</td>
                <td>34</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">L</td>
                <td>34</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">XL</td>
                <td>34</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">XXL</td>
                <td>34</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
              </tr>
            </tbody>
          </table>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="px-3 border-none">
        <AccordionTrigger className="hover:no-underline">
          Kaftan
        </AccordionTrigger>
        <AccordionContent className="">
          <table className="table-auto  w-full bg-white">
            <thead className="text-left border-b">
              <tr className="border-b">
                <th className="py-3">Size</th>
                <th>Chest</th>
                <th>Collar</th>
                <th>Waist</th>
                <th>Shoulder</th>
                <th>Arm Length</th>
                <th>Leg Short</th>
                <th>Log Long</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">XS</td>
                <td>34</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">SM</td>
                <td>34</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">M</td>
                <td>34</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">L</td>
                <td>34</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">XL</td>
                <td>34</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">XXL</td>
                <td>34</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
              </tr>
            </tbody>
          </table>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
