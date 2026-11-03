import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Align365 | Personal Trainer & Online Coach",
  description: "Transform your training and elevate your performance with Goosain Matthews at Planet Fitness Durbanville or 100% online.",
  keywords: ["Personal Trainer", "Online Coach", "Durbanville", "Fitness", "Align365"],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Align365 | Personal Trainer & Online Coach",
    description: "Transform your training and elevate your performance with Goosain Matthews.",
    url: "https://www.align365.co.za",
    siteName: "Align365",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
