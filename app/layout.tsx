import { Inter } from "next/font/google"; 
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maxime Brucale | Portfolio",
  description: "Cybersecurity Student",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <Analytics /> 
      </body>
    </html>
  );
}