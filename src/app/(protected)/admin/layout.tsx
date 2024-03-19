import type { Metadata } from "next";

import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
  title: "Mcwale Admin",
  description: "This is the mcwale admin panel",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[20rem,1fr] h-screen grid-rows-[auto,1fr]">
      <Header />
      <Sidebar />
      <ScrollArea>
        <main className="container flex flex-col gap-y-4 p-4">{children}</main>
      </ScrollArea>
    </div>
  );
}
