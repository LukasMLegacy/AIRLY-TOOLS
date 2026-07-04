import { PageHeader } from "@/components/page-header";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} description={`Last updated: ${updated}`} />
      <section className="container mx-auto px-4 py-20 md:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {intro}
          </p>
          <div className="mt-12 space-y-10">
            {sections.map((section, i) => (
              <div key={section.heading}>
                <h2 className="text-xl font-bold tracking-tight">
                  {i + 1}. {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mt-4 leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
