import { CartItem } from "@/store/useCart";
import { TypedSupabaseClient } from "@/lib/types";
import { billingSchema } from "@/schemas/formSchemas";
import { z } from "zod";

const createOrderItem = async (client: TypedSupabaseClient, cart: CartItem) => {
  const { data, error } = await client
    .from("order_item")
    .insert([
      {
        product: cart.product.id,
        size: cart.size,
        color: cart.color,
        quantity: cart.quantity,
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data.id;
};

export const createOrder = async (
  client: TypedSupabaseClient,
  values: z.infer<typeof billingSchema>,
  cart: CartItem[],
  price: number
) => {
  const itemsIds: string[] = [];
  for (let i = 0; i < cart.length; i++) {
    const data = await createOrderItem(client, cart[i]);
    itemsIds.push(data);
  }
  const { data, error } = await client
    .from("orders")
    .insert([
      {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        phone_number: values.phoneNumber,
        address1: values.address1,
        address2: values.address2,
        town: values.town,
        state: values.state,
        country: values.country,
        postal_code: values.postal_code,
        order_note: values.order_note,
        items: itemsIds,
        price: price,
      },
    ])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
