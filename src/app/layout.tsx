import type { Metadata } from "next";
import { Providers } from "./Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "GreenLane Pet — AI-Powered Pet Healthcare | Healthier Pets. Happier Lives.",
  description: "GreenLane Pet is the AI platform that connects pet owners, veterinarians and care teams — making pet healthcare smarter, simpler and more proactive.",
  icons: {
    icon: "/brand-logo.png",
    shortcut: "/brand-logo.png",
    apple: "/brand-logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-[#0F172A] overflow-x-hidden" suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
