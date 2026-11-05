import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { content, isLang, langs, siteUrl } from "@/content/site";
import "../globals.css";

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-instrument",
});
const sans = Geist({ subsets: ["latin", "latin-ext"], variable: "--font-geist" });
const mono = Geist_Mono({ subsets: ["latin", "latin-ext"], variable: "--font-geist-mono" });

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const { title, description, locale } = content[lang].meta;
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: `/${lang}`,
      languages: { fr: "/fr", en: "/en", "x-default": "/fr" },
    },
    openGraph: {
      type: "profile",
      url: `/${lang}`,
      siteName: "Maxime Brucale",
      title,
      description,
      locale,
      images: [{ url: `/og-${lang}.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`/og-${lang}.png`] },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang} className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="grain bg-bg font-sans text-ink antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
