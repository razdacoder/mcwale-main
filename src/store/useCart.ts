import { Product } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addItem: (value: CartItem) => void;
  removeItem: (value: CartItem) => void;
  clearItems: () => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  isInCart: (productIdToCheck: string) => boolean;
}

function isItemInCart(cart: CartItem[], productIdToCheck: string): boolean {
  return cart.some((item) => item.product.id === productIdToCheck);
}

function updateCartItemQuantity(
  cart: CartItem[],
  productId: string,
  newQuantity: number
): CartItem[] {
  // Find the index of the item with the given productId in the cart
  const itemIndex = cart.findIndex((item) => item.product.id === productId);

  // If the product is found, update its quantity
  if (itemIndex !== -1) {
    const updatedCart = [...cart];
    updatedCart[itemIndex] = {
      ...updatedCart[itemIndex],
      quantity: newQuantity,
    };
    return updatedCart;
  }

  // If the product is not found, return the original cart
  return cart;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addItem: (value: CartItem) =>
        set((state) => ({ cart: [...state.cart, value] })),
      removeItem: (value: CartItem) =>
        set((state) => ({
          cart: state.cart.filter(
            (cartItem) => cartItem.product.id !== value.product.id
          ),
        })),
      clearItems: () => set({ cart: [] }),
      updateQuantity: (productId: string, newQuantity: number) =>
        set((state) => ({
          cart: updateCartItemQuantity(state.cart, productId, newQuantity),
        })),
      isInCart: (productIdToCheck: string) =>
        isItemInCart(get().cart, productIdToCheck),
    }),
    {
      name: "cart-store",
    }
  )
);
