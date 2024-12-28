import Navigation from "@/components/navigation";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Public_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const publicSans = Public_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easybank",
  description: "Easybank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.className} ${geistSans.variable} ${geistMono.variable} antialiased min-h-svh text-lg bg-slate-500 flex flex-col overflow-hidden`}
      >
        <Navigation />
        <main className="flex flex-col flex-grow overflow-y-auto h-0 min-h-0">
          {children}
        </main>
      </body>
    </html>
  );
}
