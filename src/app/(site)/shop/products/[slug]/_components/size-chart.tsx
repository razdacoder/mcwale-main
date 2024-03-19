import { Button } from "@/components/ui/button";
import { Ruler } from "lucide-react";

export default function SizeChart() {
  return (
    <div className="mt-6">
      <Button
        variant="link"
        className="uppercase font-light flex gap-x-3 items-center"
      >
        <Ruler strokeWidth={1.5} className="w-4 h-4 " />
        Size Guide
      </Button>
    </div>
  );
}
