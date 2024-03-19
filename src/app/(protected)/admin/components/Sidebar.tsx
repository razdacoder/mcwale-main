import Logo from "@/components/ui/Logo";
import MainNav from "./Mainnav";
import LogoBig from "@/components/ui/LogoBig";

export default function Sidebar() {
  return (
    <aside className="py-4 px-3 border-r flex flex-col gap-y-6 row-[1/-1]">
      <div className="flex gap-x-3 items-center justify-center h-24">
        <LogoBig />
      </div>
      <MainNav />
    </aside>
  );
}
