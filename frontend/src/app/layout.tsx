import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "JuntOS",
    template: "%s | JuntOS",
  },
  description:
    "Coordina la disponibilidad de tus grupos y descubre cuándo coincides con tu gente.",
  applicationName: "JuntOS",
  keywords: [
    "disponibilidad",
    "grupos",
    "coincidencias",
    "coordinación",
    "horarios",
  ],
  authors: [
    {
      name: "JuntOS",
    },
  ],
  creator: "JuntOS",
  publisher: "JuntOS",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  ),
  openGraph: {
    title: "JuntOS",
    description: "Descubre cuándo coincides con tu gente.",
    type: "website",
    locale: "es_AR",
    siteName: "JuntOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "JuntOS",
    description: "Descubre cuándo coincides con tu gente.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b9563",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
