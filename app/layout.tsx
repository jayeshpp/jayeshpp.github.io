import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./Header";

const lct = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PJ Studio",
  description: "Jayesh - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lct.className}>
        {/* <Header /> */}
        {children}
        {/* <GoogleAnalytics gaId="G-3YXZDY1RFH" /> */}
      </body>
    </html>
  );
}
