import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen justify-center items-center flex-col gap-y-3">
      <h1 className="text-7xl font-black tracking-wide">Oops</h1>
      <p className="leading-8 font-medium text-center">
        The page you requested for may not exist or may be temporary
        unavailable.
      </p>
      <Link
        className="bg-black text-white px-6 py-3 uppercase font-medium"
        href="/"
      >
        Go to homepage
      </Link>
    </main>
  );
}
