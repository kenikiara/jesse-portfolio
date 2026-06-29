import type { Metadata } from "next";
import { Fraunces, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Jesse Karanga Kimani — Registered Architect",
  description:
    "Portfolio of Arch. Jesse Karanga Kimani (M.AAK, A1690) — registered architect based in Nairobi, designing sustainable residential, institutional and civic buildings across Kenya.",
  keywords: [
    "architect",
    "Nairobi",
    "Kenya",
    "Jesse Karanga Kimani",
    "sustainable architecture",
    "AAK",
  ],
  authors: [{ name: "Jesse Karanga Kimani" }],
  openGraph: {
    title: "Jesse Karanga Kimani — Registered Architect",
    description:
      "Sustainable residential, institutional and civic architecture across Kenya.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
