import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

// Load fonts via next/font (automatic optimization)
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Imperium AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${inter.variable} antialiased font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
