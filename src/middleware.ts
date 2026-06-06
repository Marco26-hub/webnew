import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["it", "en"] as const;
const DEFAULT_LOCALE = "it";

function detectLocale(req: NextRequest): string {
  const cookie = req.cookies.get("lang")?.value;
  if (cookie && (LOCALES as readonly string[]).includes(cookie)) return cookie;
  const accept = req.headers.get("accept-language")?.toLowerCase() ?? "";
  if (accept.startsWith("en") || /\ben\b/.test(accept)) return "en";
  return DEFAULT_LOCALE;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // The admin area lives outside [lang] and must never be locale-redirected.
  // Auth is enforced in the protected route group, not here.
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return NextResponse.next();
  }

  const hasLocale = (LOCALES as readonly string[]).some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );

  if (!hasLocale) {
    const locale = detectLocale(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url, 307);
  }

  // Expose the active locale to the root layout (which owns <html lang>).
  const locale = pathname.split("/")[1];
  const headers = new Headers(req.headers);
  headers.set("x-locale", locale);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|sitemap.xml|robots.txt|llms.txt|opengraph-image|twitter-image|.*\\..*).*)",
  ],
};
