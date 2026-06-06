import type { Metadata, Viewport } from "next";
import { cookies, headers } from "next/headers";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { site } from "@/lib/content";
import { dictionaries, isLang, isTheme, type Lang, type Theme } from "@/lib/i18n";
import { AppProviders } from "@/components/providers/AppProviders";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationLd, websiteLd } from "@/lib/structuredData";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

// Italian is the primary/canonical language for indexing (Phase A).
const brand = dictionaries.it.brand;

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} — ${brand.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: brand.description,
  keywords: [
    "automazioni AI",
    "AI automation agency",
    "agenzia siti web",
    "e-commerce AI",
    "sistemi multi-agente",
    "SEO GEO",
    "lead generation",
    "automazione social",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    title: `${site.name} — ${brand.tagline}`,
    description: brand.description,
    siteName: site.name,
    url: `https://${site.domain}`,
    locale: "it_IT",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${brand.tagline}`,
    description: brand.description,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#04060c" },
    { media: "(prefers-color-scheme: light)", color: "#f5f7fc" },
  ],
};

/** Italian is the default (primary) language; English browsers still auto-switch. */
async function resolvePrefs(): Promise<{ lang: Lang; theme: Theme }> {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("lang")?.value;
  const cookieTheme = cookieStore.get("theme")?.value;

  let lang: Lang = "it";
  if (isLang(cookieLang)) {
    lang = cookieLang;
  } else {
    const accept = (await headers()).get("accept-language")?.toLowerCase() ?? "";
    if (accept.startsWith("en") || /\ben\b/.test(accept)) lang = "en";
  }

  const theme: Theme = isTheme(cookieTheme) ? cookieTheme : "dark";
  return { lang, theme };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { lang, theme } = await resolvePrefs();

  return (
    <html
      lang={lang}
      className={`${GeistSans.variable} ${GeistMono.variable} ${
        instrumentSerif.variable
      }${theme === "light" ? " light" : ""}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <AppProviders initialLang={lang} initialTheme={theme}>
          <SmoothScroll>
            <ScrollProgress />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
          <CustomCursor />
        </AppProviders>
        <Analytics />
        <SpeedInsights />
        <JsonLd data={organizationLd("it")} />
        <JsonLd data={websiteLd("it")} />
      </body>
    </html>
  );
}
