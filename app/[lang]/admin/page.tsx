import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { content, isLang } from "@/content/site";
import DecoyPage from "@/components/DecoyPage";

export const metadata: Metadata = {
  title: "Administration",
  robots: { index: false, follow: false },
};

export default async function Admin({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <DecoyPage lang={lang} t={content[lang].decoy} />;
}
