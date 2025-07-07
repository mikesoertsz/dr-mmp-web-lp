"use client";

import { Palette, Sun, Camera, Settings, Award, Clock } from "lucide-react";
import { Wrapper, InnerWrap } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export function FeaturesSection() {
  const features = [
    {
      icon: Palette,
      title: "Photorealistic Materials",
      description:
        "Advanced material libraries with realistic textures, reflections, and surface properties.",
    },
    {
      icon: Sun,
      title: "Dynamic Lighting",
      description:
        "Professional lighting setups including natural daylight, golden hour, and twilight scenes.",
    },
    {
      icon: Camera,
      title: "Multiple Angles",
      description:
        "Strategic camera positions showcasing the best features and spatial relationships.",
    },
    {
      icon: Settings,
      title: "Customizable Details",
      description:
        "Adjust furniture, colors, materials, and landscaping to match your vision.",
    },
    {
      icon: Award,
      title: "Industry Standards",
      description:
        "Professional-grade renders suitable for marketing, presentations, and publications.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description:
        "Efficient workflow delivering high-quality renders within 5-7 days.",
    },
  ];

  return (
    <Wrapper>
      <InnerWrap>
        <div className="w-full flex items-center justify-center mb-12">
          <TitleBlock
            heading="Professional 3D Rendering Features"
            body="Our 3D renders combine technical precision with artistic vision to create compelling visual stories."
            theme="light"
            orientation="center"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">4K+</div>
              <div className="text-blue-200">Ultra High Resolution</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-blue-200">3D Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5-7 Days</div>
              <div className="text-blue-200">Average Delivery Time</div>
            </div>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
