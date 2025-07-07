"use client";

import { useRef, useState } from "react";
import { InnerWrap, Wrapper } from "../(shared)/atoms";
import { TitleBlock } from "../(shared)/titleblock";
import { Check, Play } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import PlayButton from "@/components/ui/play-button";

type HeroSectionContentType = {
  headings: {
    preheading: string;
    heading: string;
    body: string;
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

type CartItem = {
  id: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
};

const content: HeroSectionContentType = {
  headings: {
    preheading: "Complete Solution",
    heading: "All-in-One Real Estate Marketing",
    body: "Professional photography, 3D renders, interior staging, and AI animations - everything you need to showcase your property perfectly in one comprehensive package.",
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
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsHovered(false);
  };

  return (
    <Wrapper
      id="hero"
      className="py-12 bg-[#FDF6EE] w-full min-h-[40dvh] flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <InnerWrap className="flex flex-col w-full items-center justify-center max-w-7xl">
        <TitleBlock
          preheading={content.headings.preheading}
          heading={content.headings.heading}
          body={content.headings.body}
          theme="light"
          orientation="center"
        />
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
