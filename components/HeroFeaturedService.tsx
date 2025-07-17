import { Preheading } from "@/app/(shared)/atoms";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

const featuredService = {
  videoSrc: "/video/room2.mp4",
  preheading: "video",
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
    <li className="relative grid grid-cols-1 md:grid-cols-2 items-stretch col-span-3 rounded-lg bg-[#F5ECE4] overflow-hidden">
      <div className="z-30 absolute top-2 left-2 sm:top-4 sm:left-4">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedGradientText className="inline-flex items-center justify-center px-3 py-1 text-xs sm:text-sm md:text-base rounded-2xl">
            <span>{featuredService.preheading}</span>
          </AnimatedGradientText>
        </div>
      </div>

      <div className="relative w-full aspect-[4/3] lg:aspect-square z-10 overflow-hidden">
        <video
          src={featuredService.videoSrc}
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
          muted
          loop
          autoPlay
          playsInline
        />
      </div>

      <div className="z-20 flex flex-col justify-between w-full p-4 sm:p-6 lg:p-10 gap-4">
        <div className="flex flex-col gap-2">
          <Preheading className="text-red-700 uppercase font-mono text-[10px] sm:text-xs tracking-widest font-medium">
            {featuredService.preheading}
          </Preheading>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium font-recoleta">
            {featuredService.heading}
          </h3>
          <p className="text-sm text-stone-600">
            {featuredService.description}
          </p>

          <ul className="flex flex-col gap-2 md:gap-3 pt-4">
            {featuredService.features.map((feature, index) => (
              <li
                key={index}
                className="text-xs sm:text-sm text-stone-700 font-medium flex gap-2 items-center not-last:border-b border-stone-300/30 pb-2"
              >
                <CheckCircle
                  size={16}
                  className="min-w-[16px] text-stone-500/80"
                  strokeWidth={1.5}
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden flex-col items-start justify-start gap-1 bg-[#F0E6DC] rounded-xl p-8 h-full">
          second div
        </div>
      </div>
    </li>
  );
}
