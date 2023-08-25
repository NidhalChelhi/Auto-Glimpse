import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Glimpse",
  description: "Discover the best cars in the world.",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />

      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
