import Heading from "@/components/ui/Heading";
import Image from "next/image";
import LoginForm from "./login-form";
import LogoBig from "@/components/ui/LogoBig";

export default function LoginPage() {
  return (
    <main className="w-full h-dvh flex justify-center items-center">
      <div>
        <div className="flex justify-center">
          <LogoBig />
        </div>

        <div className="my-6">
          <Heading className="capitalize mb-2">Login</Heading>
          <p className="text-sm text-gray-400">
            Enter your credentials to access the mcwale dashboard.
          </p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
