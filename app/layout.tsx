import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vidip Ghosh - Backend & Full-Stack Engineer",
  description:
    "Software Engineer specializing in API-driven systems, Generative AI, RAG applications, and scalable web architecture. Seeking SDE-1 / Backend / Full-Stack roles.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Vidip Ghosh - Backend & Full-Stack Engineer",
    description:
      "Software Engineer specializing in API-driven systems, Generative AI, RAG applications, and scalable web architecture. Seeking SDE-1 / Backend / Full-Stack roles.",
    images: [
      {
        url: "/Vidip.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vidip Ghosh - Backend & Full-Stack Engineer",
    description:
      "Software Engineer specializing in API-driven systems, Generative AI, RAG applications, and scalable web architecture. Seeking SDE-1 / Backend / Full-Stack roles.",
    images: ["/Vidip.jpg"], // simpler format works
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
