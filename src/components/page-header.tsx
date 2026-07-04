import { Reveal } from "@/components/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-black/5 bg-neutral-50 pb-16 pt-36 dark:border-white/10 dark:bg-neutral-900/40">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg text-muted-foreground">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
