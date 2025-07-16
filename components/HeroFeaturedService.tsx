import { Preheading } from "@/app/(shared)/atoms";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

// Self-contained content for the featured service
const featuredService = {
  videoSrc: "/video/room2.mp4",
  preheading: "New & Popular",
  heading: "AI Avatar Videos",
  description: "Real, edited video to showcase your listing.",
  features: [
    "Show your target audience in your listing",
    "Showcase listing selling-points.",
    "Scroll-stopping videos proven to get more views.",
    "Emotionally impact potential customers.",
  ],
};

export default function HeroFeaturedService() {
  return (
    <li className="relative text-left grid grid-cols-1 md:grid-cols-2 items-start justify-end col-span-3 rounded-lg bg-[#F5ECE4]">
      <div className="z-30 flex items-center justify-center absolute top-4 left-4">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedGradientText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300">
            <span>{featuredService.preheading}</span>
          </AnimatedGradientText>
        </div>
      </div>
      <div className="relative aspect-square flex w-full z-10 rounded-tl-2xl rounded-bl-2xl overflow-hidden">
        <video
          src={featuredService.videoSrc}
          className="absolute inset-0 mix-blend-multiply"
          muted
          loop
          autoPlay
          playsInline
        />
      </div>
      <div className="relative z-20 flex flex-col w-full p-4 h-full gap-4">
        <div className="flex flex-col items-start justify-start gap-1 bg-[#F0E6DC] rounded-xl p-8 h-full">
          <Preheading className="text-stone-400/80">
            {featuredService.preheading}
          </Preheading>
          <h3 className="text-lg font-medium font-recoleta subpixel-antialiased">
            {featuredService.heading}
          </h3>
          <p className="text-sm text-stone-600">
            {featuredService.description}
          </p>
          <ul className="flex flex-col w-full gap-2 pt-4">
            {featuredService.features.map((feature, index) => (
              <li
                key={index}
                className="text-sm text-stone-600 flex gap-2 items-center border-b border-stone-300/30 pb-2"
              >
                <CheckCircle
                  size={16}
                  className="text-stone-500/80"
                  strokeWidth={1.5}
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-1 bg-[#F0E6DC] rounded-xl p-8 h-full">
          second div
        </div>
      </div>
    </li>
  );
}
