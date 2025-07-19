"use client";

import { clsx } from "clsx";
import { Body, Heading, Preheading, SubHeading } from "./atoms";

interface TitleBlockProps {
  icon?: React.ReactNode;
  image?: string;
  preheading?: string;
  heading?: string;
  subheading?: string | React.ReactNode;
  body?: string | React.ReactNode;
  theme: "light" | "dark";
  orientation: "center" | "left";
  terminalTextClassName?: string;
}

export function TitleBlock({
  preheading,
  heading,
  subheading,
  body,
  theme = "light",
  orientation = "center",
}: TitleBlockProps) {
  return (
    <div
      className={clsx(
        "flex w-full max-w-3xl gap-5",
        orientation === "center" &&
          "flex-col items-center justify-center text-center gap-2",
        orientation === "left" &&
          "flex-col items-start justify-start text-left gap-2",
        theme === "dark" ? "text-white" : "text-brand-secondary"
      )}
    >
      {preheading && (
        <Preheading
          className={clsx(
            theme === "dark" && "text-brand-secondary",
            orientation === "left" && "px-0 border-0"
          )}
        >
          {preheading}
        </Preheading>
      )}
      {heading && (
        <Heading className="font-recoleta font-light tracking-tight subpixel-antialiased">
          {heading}
        </Heading>
      )}
      {subheading && (
        <SubHeading className="subpixel-antialiased font-light font-poppins text-stone-500 max-w-lg">
          {subheading}
        </SubHeading>
      )}
      {body && (
        <Body
          className={clsx(
            theme === "dark" ? "text-brand-secondary" : "text-brand-secondary"
          )}
        >
          {body}
        </Body>
      )}
    </div>
  );
}
