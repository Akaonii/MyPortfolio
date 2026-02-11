import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maxime Brucale | Portfolio",
  description: "Cybersecurity Student at ECE Paris",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0b1120] text-white antialiased`}>
        <Navbar /> 
        {children}
        <Analytics />
      </body>
    </html>
  );
}