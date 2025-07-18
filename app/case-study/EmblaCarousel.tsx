import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Fade from "embla-carousel-fade";

export type EmblaCarouselProps = {
  slides: { src: string; alt: string }[];
  options?: EmblaOptionsType;
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
};

export default function EmblaCarousel({
  slides,
  options,
  autoplay = true,
  autoplayInterval = 3500,
  className = "",
}: EmblaCarouselProps) {
  // Use fade plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { ...options, dragFree: false, loop: true },
    [Fade()]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Update selected index on select
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Autoplay logic
  useEffect(() => {
    if (!emblaApi || !autoplay) return;
    autoplayRef.current && clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (!emblaApi) return;
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, autoplayInterval);
    return () => {
      autoplayRef.current && clearInterval(autoplayRef.current);
    };
  }, [emblaApi, autoplay, autoplayInterval]);

  // Listen for select event
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Navigation handlers
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, idx) => (
            <div
              className="flex-[0_0_100%] relative aspect-square flex items-center justify-center"
              key={slide.src}
              style={{ pointerEvents: "none" }} // Prevent image layer from blocking controls
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.src}
                alt={slide.alt}
                className="object-cover w-full h-full absolute inset-0 rounded-xl transition-opacity duration-700"
                draggable={false}
                style={{ pointerEvents: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-20">
        <button
          type="button"
          onClick={scrollPrev}
          className="bg-white/80 hover:bg-white shadow rounded-full p-2 flex items-center justify-center"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-5 h-5 text-stone-700" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="bg-white/80 hover:bg-white shadow rounded-full p-2 flex items-center justify-center"
          aria-label="Next slide"
        >
          <ArrowRight className="w-5 h-5 text-stone-700" />
        </button>
      </div>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => emblaApi && emblaApi.scrollTo(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              idx === selectedIndex ? "bg-stone-800" : "bg-stone-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
