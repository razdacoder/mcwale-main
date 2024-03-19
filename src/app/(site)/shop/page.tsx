import Link from "next/link";
import ShopFilters from "./filters";
import Paginator from "./paginator";

export default function ShopPage() {
  return (
    <main>
      <section className="px-4 container py-3 ">
        <div className="lg:mb-3 flex flex-col gap-y-6">
          <span className="inline-flex text-muted-foreground text-sm  gap-x-3">
            <Link href="/">Home</Link>|
            <span className="font-meidum text-primary">Shop</span>
          </span>
          <h2 className="block gap-x-3 scroll-m-20 font-medium tracking-wider text-lg ">
            All Products
          </h2>
        </div>

        <ShopFilters />
      </section>
      <section className="px-4 container py-3">
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
          {[...Array(20)].map((_, index) => (
            <span key={index}>Coming Soon</span>
          ))}
        </div>

        <Paginator />
      </section>
    </main>
  );
}
