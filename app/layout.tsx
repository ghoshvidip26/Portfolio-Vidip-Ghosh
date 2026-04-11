import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL
      ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
      : "http://localhost:3000",
  ),
  title: "Vidip Ghosh | Full-Stack Engineer | Software Developer",
  description:
    "Software Engineer specializing in API-driven systems, Generative AI, RAG, and scalable web architecture. Seeking SDE-1, Backend, and Full-Stack roles.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Vidip Ghosh | Full-Stack Engineer | Software Developer",
    description:
      "Software Engineer specializing in API-driven systems, Generative AI, RAG, and scalable web architecture. Seeking SDE-1, Backend, and Full-Stack roles.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vidip Ghosh | Full-Stack Engineer | Software Developer",
    description:
      "Software Engineer specializing in API-driven systems, Generative AI, RAG, and scalable web architecture. Seeking SDE-1, Backend, and Full-Stack roles.",
    images: ["/og.png"], // simpler format works
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
