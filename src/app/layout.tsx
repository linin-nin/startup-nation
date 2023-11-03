import "./globals.css";
import type { Metadata } from "next";
import { Teko } from "next/font/google";
import Footer from "@/components/footer/footer";
// import Header from '@/components/header/Header'

const teko = Teko({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Startup Nation",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${teko.className}`}>{children}</body>
    </html>
  );
}
