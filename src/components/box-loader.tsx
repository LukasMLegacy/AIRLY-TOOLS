import type React from "react";

import { cn } from "@/lib/utils";

import "./box-loader.css";

type LoaderProps = {
  variant?: "default" | "light" | "green";
};

const Loader: React.FC<LoaderProps> = ({ variant = "default" }) => {
  return (
    <div className="box-loader-stage relative">
      <div
        className={cn(
          "boxes",
          variant === "light" && "boxes-light",
          variant === "green" && "boxes-green"
        )}
      >
        <div className="box box-1">
          <div className="face face-front" />
          <div className="face face-right" />
          <div className="face face-top" />
          <div className="face face-back" />
        </div>
        <div className="box box-2">
          <div className="face face-front" />
          <div className="face face-right" />
          <div className="face face-top" />
          <div className="face face-back" />
        </div>
        <div className="box box-3">
          <div className="face face-front" />
          <div className="face face-right" />
          <div className="face face-top" />
          <div className="face face-back" />
        </div>
        <div className="box box-4">
          <div className="face face-front" />
          <div className="face face-right" />
          <div className="face face-top" />
          <div className="face face-back" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
