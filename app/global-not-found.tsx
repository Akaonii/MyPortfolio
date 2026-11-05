import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-instrument",
});

const sans = Geist({ subsets: ["latin", "latin-ext"], variable: "--font-geist" });
const mono = Geist_Mono({ subsets: ["latin", "latin-ext"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "404 · Maxime Brucale",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="fr" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="flex min-h-svh flex-col justify-center font-sans gap-6 bg-bg px-6 text-ink antialiased sm:px-12">
        <p className="font-mono text-sm text-alert">HTTP 404</p>
        <h1 className="font-serif text-6xl leading-none sm:text-8xl">Rien à détecter ici.</h1>
        <p lang="en" className="text-soft">
          Nothing to detect here.
        </p>
        <div className="flex gap-6 font-mono text-sm">
          <Link href="/fr" className="link-line">
            Retour au site
          </Link>
          <Link href="/en" lang="en" className="link-line">
            Back to the site
          </Link>
        </div>
      </body>
    </html>
  );
}
