"use client";

import { Eye, TrendingUp, Heart, Zap } from "lucide-react";
import { Wrapper, InnerWrap } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Eye,
      title: "60% More Views",
      description:
        "Staged properties receive significantly more online views and engagement.",
      stat: "60%",
      statLabel: "More Views",
    },
    {
      icon: TrendingUp,
      title: "15% Higher Prices",
      description:
        "Virtual staging helps buyers see value, leading to higher offers.",
      stat: "15%",
      statLabel: "Higher Prices",
    },
    {
      icon: Heart,
      title: "Emotional Connection",
      description:
        "Buyers can envision themselves living in the space, creating emotional attachment.",
      stat: "85%",
      statLabel: "Buyer Engagement",
    },
    {
      icon: Zap,
      title: "5-Day Delivery",
      description:
        "Fast turnaround gets your property to market quickly with stunning visuals.",
      stat: "5 Days",
      statLabel: "Delivery Time",
    },
  ];

  return (
    <Wrapper className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-950">
      <InnerWrap>
        <div className="w-full flex items-center justify-center mb-12">
          <TitleBlock
            heading="Transform Empty Spaces Into Dream Homes"
            body="Virtual staging helps buyers visualize the full potential of your property, creating emotional connections that lead to faster sales and higher offers."
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
            Cost-Effective Alternative to Physical Staging
          </h3>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Virtual staging costs 95% less than traditional staging while
            delivering similar results. No furniture rental, no setup time, no
            ongoing costs.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Start Virtual Staging
          </button>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
