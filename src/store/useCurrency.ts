"use client";

import { create } from "zustand";

interface CurrencyState {
  currency: "NGN" | "USD" | "GBP";
  setCurrency: (value: "NGN" | "USD" | "GBP") => void;
}

const getInitailData = () => {
  const currency =
    typeof window !== "undefined"
      ? localStorage.getItem("currency") || "USD"
      : false;
  return currency;
};

export const useCurrencyStore = create<CurrencyState>()((set) => ({
  currency: getInitailData() as "NGN" | "USD" | "GBP",
  setCurrency: (value: "NGN" | "USD" | "GBP") => {
    set((state) => {
      localStorage.setItem("currency", value);
      return { currency: value };
    });
  },
}));
