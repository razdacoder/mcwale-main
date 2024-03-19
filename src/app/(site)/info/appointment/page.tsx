import Link from "next/link";
import AppointmentForm from "./appointment-form";
import { ChevronRight } from "lucide-react";

export default function AppointmentPage() {
  return (
    <main>
      <section className="px-4 container my-4">
        <div className="lg:mb-6 flex flex-col lg:gap-y-6">
          <span className="inline-flex text-muted-foreground text-sm  gap-x-3">
            <Link href="/">Home</Link>
            <ChevronRight className="w-4 h-4 " />
            <Link href="/info">Info</Link>
            <ChevronRight className="w-4 h-4 " />
            <span className="font-medium text-primary">Appointment</span>
          </span>
        </div>
      </section>

      <section className="container px-4 py-6 flex ">
        <div className="w-full md:w-2/4 flex items-center">
          <AppointmentForm />
        </div>
        <div className="md:block md:w-2/4 relative">
          {/* <div className="w-full h-full bg-[url('/img1-min.jpg')] bg-cover bg-center bg-no-repeat"></div> */}
          <div></div>
          <div className="hidden lg:block absolute top-[50%] right-16 translate-y-[-50%]">
            <h1 className="text-6xl font-black">
              By <br /> Appointment
            </h1>
            <p className="leading-8 w-10/12 font-light mt-3">
              To receive a copy of our latest McWale E-lookbook which are full
              of great ideas and style tips: please submit your details below.
              Feel free to send us any queries, comments or request fabric
              swatches using the comment box.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
