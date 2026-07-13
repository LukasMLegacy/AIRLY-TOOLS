import { GooeyMarquee } from "@/components/gooey-marquee";

const MARQUEE_TEXT = "search compounds growth.";

export function HomeGooeyMarquee() {
  return (
    <section className="container mx-auto px-4 py-16 md:px-6 md:py-20">
      <GooeyMarquee text={MARQUEE_TEXT} speed={16} />
    </section>
  );
}
