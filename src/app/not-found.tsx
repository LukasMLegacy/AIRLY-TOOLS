import Link from "next/link";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 dark:bg-neutral-800">
        <Search className="h-8 w-8 text-muted-foreground" />
      </span>
      <h1 className="mt-8 text-6xl font-bold tracking-tighter md:text-8xl">
        404
      </h1>
      <p className="mt-4 text-xl font-semibold">
        This page could not be found
      </p>
      <p className="mt-2 max-w-md text-muted-foreground">
        The page you are looking for does not exist or has been moved. Let us
        get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button size="lg" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
