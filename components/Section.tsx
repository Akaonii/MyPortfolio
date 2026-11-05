export default function SectionTitle({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="reveal mb-14 flex flex-col gap-4 sm:mb-20 lg:flex-row lg:items-end lg:justify-between">
      <h2 className="font-serif text-[clamp(3rem,7.4vw,6.5rem)] leading-none tracking-[-0.02em]">{title}</h2>
      {intro && <p className="max-w-sm text-soft lg:pb-2 lg:text-right">{intro}</p>}
    </div>
  );
}
