import type { Metadata } from "next";
import Link from "next/link"; 
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
  title: "AquaLuxeHotel",
  description: "AquaLuxeHotel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 left-0 w-full bg-[#F2B28C] shadow-lg rounded-bl-2xl rounded-br-2xl z-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-white">
              AquaLuxeHotel
            </Link>
            <nav className="space-x-4">
              <Link href="/home" className="text-white ">
                Home
              </Link>
              <Link href="/important" className="text-white ">
                Contact
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
