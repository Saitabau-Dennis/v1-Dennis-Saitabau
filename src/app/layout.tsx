import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/header";
import { LoadingScreen } from "@/components/loading-screen";
import "./globals.css";

const cabinetGrotesk = localFont({
  src: "../../public/fonts/CabinetGrotesk-Variable.woff2",
  variable: "--font-cabinet",
  display: "swap",
  weight: "100 900",
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
        className={`${cabinetGrotesk.variable} antialiased font-sans`}
      >
        <LoadingScreen />
        <Header />
        {children}
      </body>
    </html>
  );
}

