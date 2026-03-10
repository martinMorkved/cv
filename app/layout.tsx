import type { Metadata } from "next";
import { Sora, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const bodySans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingSans = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next Martin Gynther Mørkved",
  description: "Showcases Martin Gynther Mørkved's CV",
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
        {children}
      </body>
    </html>
  );
}
