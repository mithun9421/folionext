import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeroHighlight } from "./components/commons/hero-highlight";


const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased`}
      >
        <HeroHighlight>
        {children}
        </HeroHighlight>
      </body>
    </html>
  );
}
