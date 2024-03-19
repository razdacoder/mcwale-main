"use client";

import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  calTotal,
  formatPriceToDollar,
  getPrice,
  getRatePrice,
} from "@/lib/utils";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { billingSchema } from "@/schemas/formSchemas";
import { createOrder } from "@/services/paymentServices";
import toast from "react-hot-toast";
import { useCartStore } from "@/store/useCart";
import { useCurrencyStore } from "@/store/useCurrency";
import { useForm } from "react-hook-form";
import { useRateStore } from "@/store/useRates";
import useSupabaseBrowser from "@/lib/supabase-client";
import { v4 as uuidv4 } from "uuid";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CheckoutForm() {
  const { currency } = useCurrencyStore();
  const { cart, clearItems } = useCartStore();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const { rate } = useRateStore();
  const supabase = useSupabaseBrowser();
  useEffect(() => {
    setIsClient(true);
  }, []);
  const form = useForm<z.infer<typeof billingSchema>>({
    resolver: zodResolver(billingSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phoneNumber: "",
      address1: "",
      address2: "",
      town: "",
      state: "",
      country: "",
      postal_code: "",
      order_note: "",
    },
  });

  // Payment Response Body
  //   {
  //     "status": "successful",
  //     "customer": {
  //         "name": "Rasheed Ramon",
  //         "email": "ramonrash2@gmail.com",
  //         "phone_number": "08024283327"
  //     },
  //     "transaction_id": 4926855,
  //     "tx_ref": "26caa421-aeb9-40fc-b06b-3317e63bb67c",
  //     "flw_ref": "FLW-MOCK-a24dee80e1c6129fcabbc5c87da630b2",
  //     "currency": "NGN",
  //     "amount": 3000,
  //     "charged_amount": 3000,
  //     "charge_response_code": "00",
  //     "charge_response_message": "Please enter the OTP sent to your mobile number 080****** and email te**@rave**.com",
  //     "created_at": "2024-02-22T14:56:15.000Z"
  // }

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY!,
    tx_ref: "",
    amount: 3000, //(calTotal(cart) + 2) * (currency === "USD" ? 1 : rate[currency]),
    currency: currency,
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "",
      phone_number: "",
      name: "",
    },
    customizations: {
      title: "McWale Checkout",
      description: "Payment for items in cart",
      logo: "https://bucafededczesdbjtygt.supabase.co/storage/v1/object/public/images/mcwale%20logo.svg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof billingSchema>) {
    config.tx_ref = uuidv4();
    config.customer.email = values.email;
    config.customer.name = `${values.first_name} ${values.last_name}`;
    config.customer.phone_number = values.phoneNumber;
    handleFlutterPayment({
      callback: async (response) => {
        if (response.status === "successful") {
          try {
            await createOrder(supabase, values, cart, calTotal(cart));
            toast.success("Order Created Successfully");
            clearItems();
            router.replace("/");
          } catch (error: any) {
            toast.error(error.message);
          }
        } else {
          console.log("Payment Failed");
        }
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row gap-12"
      >
        <div className="space-y-4 lg:w-3/6">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adreess Line 1</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adreess Line 2</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <FormField
              control={form.control}
              name="town"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Town</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postal_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal Code</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="order_note"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Order Note</FormLabel>
                <FormControl>
                  <Textarea
                    rows={2}
                    className="resize-none"
                    {...field}
                  ></Textarea>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="lg:w-3/6">
          {isClient ? (
            <>
              <Heading className="text-left text-lg normal-case">
                Your Order{" "}
                <span className="text-sm">
                  ({isClient ? cart.length : 0} item)
                </span>
              </Heading>
              <div className="grid grid-cols-5 text-sm uppercase font-medium py-3 gap-x-3">
                <span>Product</span>
                <span>Size</span>
                <span>Color</span>
                <span>Quantity</span>
                <span className="text-right">Total</span>
              </div>
              {cart.map((item, index) => (
                <div
                  key={item.product.id}
                  className="grid grid-cols-5 text-sm py-3 gap-x-3"
                >
                  <span className="truncate">{item.product.name}</span>
                  <span>{item.size}</span>
                  <span>{item.color}</span>
                  <span>x {item.quantity}</span>
                  <span className="text-right">
                    {isClient
                      ? getRatePrice(
                          currency,
                          getPrice(item.product) * item.quantity,
                          currency === "USD" ? null : rate[currency]
                        )
                      : formatPriceToDollar(
                          getPrice(item.product) * item.quantity
                        )}
                  </span>
                </div>
              ))}
              <div className="grid grid-cols-5 text-sm uppercase font-medium border-t py-3">
                <span>Subtotal</span>
                <span></span>
                <span></span>
                <span></span>
                <span className="text-right">
                  {isClient
                    ? getRatePrice(
                        currency,
                        calTotal(cart),
                        currency === "USD" ? null : rate[currency]
                      )
                    : formatPriceToDollar(0)}
                </span>
              </div>
              <div className="grid grid-cols-5 text-sm uppercase font-medium border-t py-3">
                <span>Shipping</span>
                <span></span>
                <span></span>
                <span></span>
                <span className="text-right">
                  {getRatePrice(
                    currency,
                    2,
                    currency === "USD" ? null : rate[currency]
                  )}
                </span>
              </div>
              <div className="grid grid-cols-5 text-sm uppercase font-medium border-t py-3">
                <span>Total</span>
                <span></span>
                <span></span>
                <span></span>
                <span className="text-right">
                  {isClient
                    ? getRatePrice(
                        currency,
                        calTotal(cart) + 2,
                        currency === "USD" ? null : rate[currency]
                      )
                    : formatPriceToDollar(0)}
                </span>
              </div>
            </>
          ) : null}

          <div className="mt-4 w-full">
            <Button size="lg" className="w-full flex gap-x-3 items-center">
              Pay {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
