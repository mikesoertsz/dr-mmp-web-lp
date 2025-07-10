"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { InnerWrap, Wrapper } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";
import { Button } from "@/components/ui/button";
// @ts-expect-error: No types for react-rotating-text
import ReactRotatingText from "react-rotating-text";

type HeroSectionContentType = {
  headings: {
    preheading: string;
    heading: string;
    subheading: string;
  };
  badgeText: string;
  title: {
    line1: string;
    line2: string;
  };
  description: string;
  features: string[];
  primaryButtonText: string;
  secondaryButtonText: string;
  serviceslist: {
    preheading: string;
    heading: string;
    description: string;
    image: string;
    type: "image" | "video";
    list: string[];
    colSpan: number;
  }[];
};

const content: HeroSectionContentType = {
  headings: {
    preheading: "Complete Real Estate Marketing",
    heading: "Sell your property 3X faster.",
    subheading: "Real estate marketing that emotionally hooks buyers.",
  },
  badgeText: "Complete Solution",
  title: {
    line1: "Complete Real Estate",
    line2: "Marketing Package",
  },
  description:
    "Professional photography, 3D renders, interior staging, and AI animations - everything you need to showcase your property perfectly in one comprehensive package.",
  features: [
    "2D Photography",
    "3D Renders",
    "Interior Staging",
    "AI Animations",
  ],
  primaryButtonText: "Get Complete Package",
  secondaryButtonText: "See What's Included",
  serviceslist: [
    {
      preheading: "Design",
      heading: "Interior Design",
      description: "Show the true potential of your property.",
      image: "/img/services/interior2.png",
      type: "image",
      list: [
        "Interior Design",
        "Furniture Placement",
        "Color Schemes",
        "Lighting Design",
      ],
      colSpan: 1,
    },
    {
      preheading: "2D",
      heading: "Photography",
      description: "Professional photography capturing the now.",
      image: "/video/photo2.mp4",
      type: "video",
      list: [
        "Photography",
        "Drone Photography",
        "Virtual Tour",
        "Exterior Photography",
      ],
      colSpan: 1,
    },
    {
      preheading: "3D",
      heading: "3D Renders",
      description: "Professional 3D renders of your property.",
      image: "/img/services/3d2.jpg",
      type: "image",
      list: ["3D Renders", "3D Animations", "3D Walkthrough", "3D Floor Plans"],
      colSpan: 1,
    },
    {
      preheading: "4D",
      heading: "Video & AI",
      description: "Real, edited video to showcase your listing.",
      image: "/video/room2.mp4",
      type: "video",
      list: [
        "Video Walkthrough",
        "AI Animations",
        "3D Walkthrough",
        "3D Floor Plans",
      ],
      colSpan: 3,
    },
  ],
};

export default function HeroSection() {
  return (
    <Wrapper
      id="hero"
      className="py-24 bg-[#FDF6EE] w-full min-h-[50dvh] flex items-center justify-center"
    >
      <InnerWrap className="flex flex-col w-full items-center justify-center max-w-7xl">
        <div className="w-full flex flex-col items-center justify-center my-32">
          <TitleBlock
            heading={content.headings.heading}
            theme="light"
            orientation="center"
          />
          <div className="text-2xl subpixel-antialiased font-light font-poppins text-stone-500 mt-2 text-center">
            Real estate marketing that emotionally hooks{" "}
            <span className="inline-block align-baseline font-medium tracking-tight text-indigo-500">
              <ReactRotatingText items={["buyers", "sellers", "tenants"]} />
            </span>
            .
          </div>
          <div className="flex gap-4 mt-8">
            <Button className="bg-stone-800 hover:bg-stone-700 cursor-pointer transition duration-300 ease-in-out rounded-xl h-12 px-6">
              Explore Services
            </Button>
            <Button
              variant="secondary"
              className="bg-[#F0E6DC] hover:bg-[#E8DED3] cursor-pointer  transition duration-300 ease-in-out rounded-xl h-12 px-6"
            >
              Get Started
            </Button>
          </div>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-12">
          {content.serviceslist
            .filter((service) => service.preheading !== "4D")
            .map((service) => (
              <li
                key={service.heading}
                className="relative text-left flex flex-col gap-1 items-start justify-end bg-[#F5ECE4] rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-square flex w-full">
                  {service.type === "image" ? (
                    <Image
                      src={service.image}
                      alt={service.heading}
                      fill
                      className="absolute inset-0 mix-blend-multiply p-12"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <video
                      src={service.image}
                      className="absolute inset-0 mix-blend-multiply p-12"
                      muted
                      loop
                      playsInline
                      autoPlay
                    />
                  )}
                </div>
                <div className="relative z-20 flex flex-col w-full p-8">
                  <span className="text-[11px] text-red-700 uppercase font-medium tracking-widest">
                    {service.preheading}
                  </span>
                  <div className="flex flex-col items-start justify-start gap-1">
                    <h3 className="text-lg font-semibold">{service.heading}</h3>
                    <p className="text-sm text-stone-600">
                      {service.description}
                    </p>
                    <ul className="flex flex-col items-start justify-start gap-0.5 mt-2">
                      {service.list.map((item) => (
                        <li
                          key={item}
                          className="text-xs text-stone-600 flex gap-1"
                        >
                          <Check size={16} className="text-orange-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          <li className="relative text-left grid grid-cols-1 md:grid-cols-2 gap-4 items-start justify-end overflow-hidden col-span-3 rounded-lg bg-[#F5ECE4]">
            <div className="relative aspect-square flex w-full">
              <video
                src={
                  content.serviceslist.find(
                    (service) => service.preheading === "4D"
                  )?.image
                }
                className="absolute inset-0 mix-blend-multiply"
                muted
                loop
                autoPlay
                playsInline
              />
            </div>
            <div className="relative z-20 flex flex-col w-full p-8">
              <span className="text-[11px] text-green-700 uppercase font-medium tracking-widest">
                4D
              </span>
              <div className="flex flex-col items-start justify-start gap-1">
                <h3 className="text-lg font-semibold">Video & AI</h3>
                <p className="text-sm text-stone-600">
                  Real, edited video to showcase your listing.
                </p>
                <ul className="flex flex-col items-start justify-start gap-0.5 mt-2">
                  {content.serviceslist
                    .find((service) => service.preheading === "4D")
                    ?.list.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-stone-600 flex gap-1"
                      >
                        <Check size={16} className="text-green-600" />
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </InnerWrap>
    </Wrapper>
  );
}
