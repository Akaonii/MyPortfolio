import { ArrowUpRight } from "lucide-react";
import { links, type Content } from "@/content/site";

const fieldClass =
  "mt-2 w-full border-b border-line bg-transparent py-2.5 text-ink outline-none transition-colors placeholder:text-muted focus:border-signal";

export default function Contact({ t }: { t: Content }) {
  const { contact } = t;
  const socials = [
    { label: "LinkedIn", href: links.linkedin },
    { label: "GitHub", href: links.github },
  ];
  return (
    <section id="contact" className="mx-auto max-w-[1320px] px-5 pb-20 pt-24 sm:px-8 sm:pt-36">
      <h2 className="reveal font-serif text-[clamp(4.5rem,15vw,14rem)] leading-[0.92] tracking-[-0.025em]">
        {contact.title}
      </h2>

      <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <p className="max-w-lg text-lg leading-relaxed text-soft">{contact.intro}</p>
          <p className="mt-8 font-mono text-xs text-muted">{contact.emailLabel}</p>
          <a
            href={`mailto:${links.email}`}
            className="link-line mt-1 inline-block font-serif text-[clamp(1.5rem,3vw,2.5rem)] transition-colors hover:text-signal"
          >
            {links.email}
          </a>
          <div className="mt-8 flex gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 transition-colors hover:text-signal"
              >
                {social.label}
                <ArrowUpRight size={15} aria-hidden className="text-muted group-hover:text-signal" />
              </a>
            ))}
          </div>
        </div>

        <form action={links.formspree} method="POST" className="space-y-6 lg:col-span-5 lg:col-start-8">
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
          <label className="block font-mono text-xs text-muted">
            {contact.form.name}
            <input
              name="name"
              required
              autoComplete="name"
              placeholder={contact.form.namePlaceholder}
              className={`${fieldClass} font-sans text-base`}
            />
          </label>
          <label className="block font-mono text-xs text-muted">
            {contact.form.email}
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={contact.form.emailPlaceholder}
              className={`${fieldClass} font-sans text-base`}
            />
          </label>
          <label className="block font-mono text-xs text-muted">
            {contact.form.message}
            <textarea
              name="message"
              required
              rows={4}
              placeholder={contact.form.messagePlaceholder}
              className={`${fieldClass} resize-y font-sans text-base`}
            />
          </label>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <button
              type="submit"
              className="rounded-full bg-ink px-7 py-3 text-sm font-medium text-bg transition-colors hover:bg-signal"
            >
              {contact.form.send}
            </button>
            <p className="max-w-xs text-xs leading-relaxed text-muted">{contact.form.note}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
