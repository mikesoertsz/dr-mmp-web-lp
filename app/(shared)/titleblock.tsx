"use client";

import { clsx } from "clsx";
import { Body, Heading, Preheading, SubHeading } from "./atoms";

interface TitleBlockProps {
  icon?: React.ReactNode;
  image?: string;
  preheading?: string;
  heading?: string;
  subheading?: string;
  body?: string | React.ReactNode;
  theme: "light" | "dark";
  orientation: "center" | "left";
  terminalTextClassName?: string;
}

export function TitleBlock({
  icon,
  image,
  preheading,
  heading,
  subheading,
  body,
  theme = "light",
  orientation = "center",
  terminalTextClassName,
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
        <Heading className="font-heading font-light tracking-tight text-3xl md:text-4xl subpixel-antialiased">
          {heading}
        </Heading>
      )}
      {subheading && <SubHeading>{subheading}</SubHeading>}
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
