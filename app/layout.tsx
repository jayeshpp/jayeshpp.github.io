import type { Metadata } from "next";
import { Libre_Caslon_Text } from "next/font/google";
import "./globals.css";
import { Header } from "./Header";

const lct = Libre_Caslon_Text({
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
        <Header />
        {children}
      </body>
    </html>
  );
}
