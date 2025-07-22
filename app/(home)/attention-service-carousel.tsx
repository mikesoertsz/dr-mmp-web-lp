"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Wrapper } from "@/app/(shared)/atoms";

type ServiceType = {
  preheading: string;
  heading: string;
  description: string;
  image: string;
  type: "image" | "video";
  list: string[];
};

const serviceslist: ServiceType[] = [
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
  },
  {
    preheading: "3D",
    heading: "3D Renders",
    description: "Professional 3D renders of your property.",
    image: "/img/services/3d2.jpg",
    type: "image",
    list: ["3D Renders", "3D Animations", "3D Walkthrough", "3D Floor Plans"],
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
  },
];

export default function AttentionServiceCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    dragFree: false,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    inViewThreshold: 0.7,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const autoplay = useCallback(() => {
    if (!emblaApi) return;

    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplayInterval);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const cleanup = autoplay();
    return () => cleanup?.();
  }, [emblaApi, autoplay]);

  return (
    <Wrapper>
      <div className="mt-12 flex justify-center">
        <div className="embla overflow-hidden max-w-full" ref={emblaRef}>
          <div className="embla__container flex">
            {serviceslist.map((service, index) => (
              <div
                key={service.heading}
                className={`embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_35rem] md:mr-8 transition-opacity duration-300 ${
                  index === selectedIndex ? "opacity-100" : "opacity-30"
                }`}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  {service.type === "image" ? (
                    <Image
                      src={service.image}
                      alt={service.heading}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <video
                      src={service.image}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      autoPlay
                    />
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/50">
                    <span className="text-xs text-orange-300 uppercase font-medium">
                      {service.preheading}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-1">
                      {service.heading}
                    </h3>
                    <p className="text-sm text-white/90 mt-1">
                      {service.description}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {service.list.map((item) => (
                        <li
                          key={item}
                          className="text-xs text-white/80 flex items-center gap-2"
                        >
                          <Check size={12} className="text-orange-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
