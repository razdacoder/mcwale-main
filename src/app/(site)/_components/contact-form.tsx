"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <form className="space-y-8">
      <div>
        <Label className="font-light" htmlFor="name">
          Name
        </Label>
        <Input
          className="border-[3px] border-primary"
          id="name"
          placeholder="Your name"
        />
      </div>
      <div>
        <Label className="font-light" htmlFor="email">
          Email
        </Label>
        <Input
          type="email"
          className="border-[3px] border-primary"
          id="email"
          placeholder="Your email address"
        />
      </div>
      <div>
        <Label className="font-light" htmlFor="message">
          Message
        </Label>
        <Textarea
          className="border-[3px] border-primary resize-none"
          rows={4}
          id="message"
        ></Textarea>
      </div>
      <div className="flex justify-end">
        <Button size="lg">Submit</Button>
      </div>
    </form>
  );
}
