"use client";

import { Suspense, lazy } from "react";

import Loader from "@/components/box-loader";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <Loader />
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
