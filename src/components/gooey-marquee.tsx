"use client";

interface GooeyMarqueeProps {
  text: string;
  className?: string;
  speed?: number;
}

const gradientMask = `
  linear-gradient(to right, black, 1rem, transparent 50%),
  linear-gradient(to left, black, 1rem, transparent 50%)
`;

export function GooeyMarquee({
  text,
  className = "",
  speed = 16,
}: GooeyMarqueeProps) {
  const animation = `marquee ${speed}s infinite linear`;

  return (
    <div
      className={`mx-auto w-full max-w-3xl overflow-hidden rounded-2xl bg-white ${className}`}
    >
      <div className="relative flex h-28 items-center justify-center overflow-hidden text-5xl font-medium lowercase md:h-32 md:text-8xl">
        {/* Blur layer with gooey effect */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundColor: "white",
            backgroundImage: gradientMask,
            filter: "contrast(15)",
          }}
        >
          <p
            className="absolute min-w-full whitespace-nowrap text-black"
            style={{
              filter: "blur(0.07em)",
              animation,
            }}
          >
            {text}
          </p>
        </div>

        {/* Clear text layer on top */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            className="absolute min-w-full whitespace-nowrap text-black"
            style={{ animation }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
