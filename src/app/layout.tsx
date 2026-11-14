import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Providers } from "./Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "PetCare — Happy Pets, Happy You",
  description: "Trusted pet care services — from pet sitting to dog walking, we're here for your furry friends.",
  icons: {
    icon: "/petcare/paw-black.svg",
    shortcut: "/petcare/paw-black.svg",
    apple: "/petcare/paw-black.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-white text-[#111827]`} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
