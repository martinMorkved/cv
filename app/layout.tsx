import type { Metadata } from "next";
import { Sora, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/TopNav";

const bodySans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingSans = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martin Gynther Mørkved",
  description: "Showcases Martin Gynther Mørkved's CV",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodySans.variable} ${headingSans.variable} antialiased`}
      >
        <TopNav />
        {children}
      </body>
    </html>
  );
}
