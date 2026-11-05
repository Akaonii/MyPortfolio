import type { Content, Lang } from "@/content/site";
import Nav from "./Nav";
import Footer from "./Footer";

type Props = {
  lang: Lang;
  t: Content;
  path?: string;
  children: React.ReactNode;
};

export default function PageShell({ lang, t, path, children }: Props) {
  return (
    <div>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-signal focus:px-4 focus:py-2 focus:text-bg"
      >
        {t.nav.skip}
      </a>
      <Nav lang={lang} t={t} path={path} />
      <main id="main">{children}</main>
      <Footer t={t} />
    </div>
  );
}
