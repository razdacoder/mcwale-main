"use client";
import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{
        padding: "12px 6px",
        borderRadius: "0px",
      }}
      toastOptions={{
        // Define default options
        className: "",
        duration: 5000,
        style: {
          background: "#fff",
          color: "#333333",
        },

        // Default options for specific types
        success: {
          duration: 3000,
        },
      }}
    />
  );
}
