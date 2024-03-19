import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  privateRoutes,
} from "../routes";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
  const { nextUrl } = request;

  // Create a Supabase client configured to use cookies
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    }
  );

  // Refresh session if expired - required for Server Components
  let { data, error } = await supabase.auth.getSession();
  const isLoggedIn = !!data.session;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPrivateRoute = nextUrl.pathname.startsWith(privateRoutes);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute && isLoggedIn) {
    return Response.redirect(new URL("/admin", nextUrl));
  }

  if (isPrivateRoute) {
    if (!isLoggedIn) {
      return Response.redirect(new URL("/", nextUrl));
    }
    return null;
  }

  // Handle other cases where no redirect is needed
  return null;

  // if (isPrivateRoute) {
  //   if (!isLoggedIn) {
  //     return Response.redirect(new URL("/auth/login", nextUrl));
  //   }

  //   return null;
  // }

  // if (isAuthRoute) {
  //   if (isLoggedIn) {
  //     return Response.redirect(new URL("/admin", nextUrl));
  //   }
  //   return Response.redirect(new URL("/auth/login", nextUrl));
  // }

  // if (!isLoggedIn && !isPublicRoute) {
  //   return Response.redirect(new URL("/account/login", nextUrl));
  // }
  // return null;
}

// Ensure the middleware is only called for relevant paths.
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
