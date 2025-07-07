"use client";

import { AlertTriangle, Eye, Clock, TrendingDown } from "lucide-react";
import { Wrapper, InnerWrap } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export function PainPointsSection() {
  const painPoints = [
    {
      icon: Eye,
      title: "Empty Rooms Look Uninviting",
      description:
        "Vacant properties receive 40% fewer inquiries because buyers can't visualize the space's potential.",
    },
    {
      icon: TrendingDown,
      title: "Lower Perceived Value",
      description:
        "Empty properties are perceived as worth 10-15% less than furnished ones, even when they're identical.",
    },
    {
      icon: Clock,
      title: "Longer Time on Market",
      description:
        "Unstaged properties take 73% longer to sell compared to virtually staged properties.",
    },
    {
      icon: AlertTriangle,
      title: "Lost Emotional Connection",
      description:
        "Buyers can't envision themselves living in empty spaces, reducing emotional attachment and offers.",
    },
  ];

  return (
    <Wrapper className="bg-slate-50 dark:bg-slate-950">
      <InnerWrap>
        <div className="w-full flex items-center justify-center mb-12">
          <TitleBlock
            heading="Why Empty Properties Struggle to Sell"
            body="Empty spaces leave too much to the imagination. Here's what happens when buyers can't visualize the potential:"
            theme="light"
            orientation="center"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                <point.icon className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {point.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">
              The Cost of Empty Spaces
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              On a €400,000 property, poor presentation could cost you{" "}
              <strong>€40,000-60,000</strong> in lost value and extended
              carrying costs.
            </p>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
