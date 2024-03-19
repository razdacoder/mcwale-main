import CheckoutForm from "./checkout-form";
import Heading from "@/components/ui/Heading";

export default function CheckoutPage() {
  return (
    <main className="px-4 container py-6 max-w-screen-xl mx-auto">
      <section className="py-3">
        <Heading className="text-left text-xl normal-case">Checkout</Heading>
      </section>
      <section>
        <Heading className="text-left text-base normal-case">
          Billing Details
        </Heading>
        <CheckoutForm />
      </section>
    </main>
  );
}
