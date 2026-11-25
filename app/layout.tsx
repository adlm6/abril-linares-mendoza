import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { hero, site } from "@/data/content";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "opsz"],
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: "variable",
});

const description = `${hero.line} ${hero.eyebrow}.`;
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.name,
    description,
    url: "/",
    type: "website",
    images: [
      {
        url: "/photos/red-lanterns.jpg",
        width: 2000,
        height: 1333,
        alt: "Rows of red and yellow lanterns framing stone steps and a temple roof.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: hero.line,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f1ec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
