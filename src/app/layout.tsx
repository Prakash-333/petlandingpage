import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Providers } from "./Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "GreenLane Pet — AI-Powered Pet Healthcare | Healthier Pets. Happier Lives.",
  description: "GreenLane Pet is the AI platform that connects pet owners, veterinarians and care teams — making pet healthcare smarter, simpler and more proactive.",
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
