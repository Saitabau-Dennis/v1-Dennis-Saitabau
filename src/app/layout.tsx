import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/header";
import { LoadingScreen } from "@/components/loading-screen";
import "./globals.css";

const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-cabinet",
  display: "swap",
  weight: "300 900",
});

export const metadata: Metadata = {
  title: "Dennis Saitabau | Portfolio",
  description: "Software Developer, tech enthusiast, and creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} antialiased font-sans`}
      >
        <LoadingScreen />
        <Header />
        {children}
      </body>
    </html>
  );
}

