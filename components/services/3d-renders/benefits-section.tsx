"use client";

import { Eye, TrendingUp, Clock, Award } from "lucide-react";
import { Wrapper, InnerWrap } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Eye,
      title: "80% More Engagement",
      description:
        "3D renders generate significantly more interest and engagement from potential buyers.",
      stat: "80%",
      statLabel: "More Engagement",
    },
    {
      icon: TrendingUp,
      title: "65% Higher Pre-Sales",
      description:
        "Properties with 3D visualization achieve much higher pre-construction sales rates.",
      stat: "65%",
      statLabel: "Higher Pre-Sales",
    },
    {
      icon: Clock,
      title: "Faster Decisions",
      description:
        "Buyers make purchasing decisions 40% faster when they can visualize the final result.",
      stat: "40%",
      statLabel: "Faster Decisions",
    },
    {
      icon: Award,
      title: "Premium Pricing",
      description:
        "Well-visualized properties command 20% higher prices due to perceived value.",
      stat: "20%",
      statLabel: "Premium Pricing",
    },
  ];

  return (
    <Wrapper className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-950">
      <InnerWrap>
        <div className="w-full flex items-center justify-center mb-12">
          <TitleBlock
            heading="The Power of Photorealistic 3D Visualization"
            body="3D renders don't just show your property - they sell the dream and lifestyle that comes with it."
            theme="light"
            orientation="center"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <benefit.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {benefit.stat}
              </div>
              <div className="text-sm text-slate-500 mb-4">
                {benefit.statLabel}
              </div>
              <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Perfect for Pre-Construction Marketing
          </h3>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Start selling before you start building. 3D renders allow you to
            market properties months or years before completion.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Start Your 3D Project
          </button>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
