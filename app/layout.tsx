import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TermlyCMP from "./components/TermlyCMP";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Champion Cash Title Loans",
  description: "Apply for a title loan online",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <GoogleTagManager gtmId="GTM-KHBM2GZ4" />
      
      <body suppressHydrationWarning>
        <TermlyCMP 
          websiteUUID="11c18093-6df0-48c0-b10c-5e43c9134c49" 
          autoBlock={false}
          masterConsentsOrigin="" 
        />

        {children}
      </body>
    </html>
  );
}