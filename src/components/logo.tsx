import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  textClassName,
}: {
  className?: string;
  textClassName?: string;
}) {
  return (
    <span className={cn("flex items-center gap-2 font-semibold", className)}>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
        <Sparkles className="h-4 w-4" />
      </span>
      <span
        className={cn(
          "text-base tracking-tight sm:text-lg",
          textClassName
        )}
      >
        AIRLY TOOLS
      </span>
    </span>
  );
}
