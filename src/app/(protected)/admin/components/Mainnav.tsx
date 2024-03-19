"use client";

import {
  BedSingleIcon,
  CalendarDaysIcon,
  HomeIcon,
  Indent,
  SettingsIcon,
  Shirt,
  UsersRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col gap-y-3">
        <li>
          <Button
            size="lg"
            variant="ghost"
            className={cn(
              "w-full flex justify-start pl-3 hover:text-white hover:bg-primary",
              pathname === "/admin" && "text-white bg-primary"
            )}
            asChild
          >
            <Link className="flex items-center gap-[1.2rem] " href="/admin">
              <HomeIcon className="w-6 h-6" />
              <span className="text-base font-medium">Dashboard</span>
            </Link>
          </Button>
        </li>
        <li>
          <Button
            variant="ghost"
            size="lg"
            className={cn(
              "w-full flex justify-start pl-3 hover:text-white hover:bg-primary",
              pathname === "/admin/categories" && "text-white bg-primary"
            )}
            asChild
          >
            <Link
              className="flex items-center gap-[1.2rem]"
              href="/admin/categories"
            >
              <Indent className="w-6 h-6" />
              <span className="text-base font-medium">Categories</span>
            </Link>
          </Button>
        </li>
        <li>
          <Button
            variant="ghost"
            size="lg"
            className={cn(
              "w-full flex justify-start pl-3 hover:text-white hover:bg-primary",
              pathname === "/admin/products" && "text-white bg-primary"
            )}
            asChild
          >
            <Link
              className="flex items-center gap-[1.2rem]"
              href="/admin/products"
            >
              <Shirt className="w-6 h-6" />
              <span className="text-base font-medium">Products</span>
            </Link>
          </Button>
        </li>
        <li>
          <Button
            variant="ghost"
            size="lg"
            className={cn(
              "w-full flex justify-start pl-3 hover:text-white hover:bg-primary",
              pathname === "/admin/orders" && "text-white bg-primary"
            )}
            asChild
          >
            <Link
              className="flex items-center gap-[1.2rem]"
              href="/admin/orders"
            >
              <UsersRound className="w-6 h-6" />
              <span className="text-base font-medium">Orders</span>
            </Link>
          </Button>
        </li>
        <li>
          <Button
            variant="ghost"
            size="lg"
            className={cn(
              "w-full flex justify-start pl-3 hover:text-white hover:bg-primary",
              pathname === "/settings" && "text-white bg-primary"
            )}
            asChild
          >
            <Link className="flex items-center gap-[1.2rem]" href="/settings">
              <SettingsIcon className="w-6 h-6" />
              <span className="text-base font-medium">Settings</span>
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
