"use client";

import { AlertTriangle, Eye, Clock, TrendingDown } from "lucide-react";
import { Wrapper, InnerWrap } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export function PainPointsSection() {
  const painPoints = [
    {
      icon: Eye,
      title: "Can't Visualize Unbuilt Properties",
      description:
        "Buyers struggle to understand architectural plans and can't envision the finished property.",
    },
    {
      icon: TrendingDown,
      title: "Lower Pre-Sale Success",
      description:
        "Properties without 3D visualization have 65% lower pre-construction sales rates.",
    },
    {
      icon: Clock,
      title: "Delayed Sales Decisions",
      description:
        "Buyers take 40% longer to make decisions without realistic property visualization.",
    },
    {
      icon: AlertTriangle,
      title: "Lost Investment Opportunities",
      description:
        "Investors can't assess property potential, leading to missed funding and partnership opportunities.",
    },
  ];

  return (
    <Wrapper className="bg-slate-50 dark:bg-slate-950">
      <InnerWrap>
        <div className="w-full flex items-center justify-center mb-12">
          <TitleBlock
            heading="Why 2D Plans Aren't Enough Anymore"
            body="In today's competitive market, buyers and investors expect to see exactly what they're purchasing. Here's what happens without 3D visualization:"
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
              The Cost of Poor Visualization
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Development projects without 3D renders see{" "}
              <strong>65% lower pre-sales</strong> and take{" "}
              <strong>8 months longer</strong> to reach full occupancy.
            </p>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
