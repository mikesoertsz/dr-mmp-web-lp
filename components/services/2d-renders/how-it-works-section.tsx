"use client";

import { Upload, Palette, Edit, Download } from "lucide-react";
import { Wrapper, InnerWrap } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Photos",
      description:
        "Send us your empty room photos and let us know your style preferences.",
      timeline: "Day 1",
    },
    {
      icon: Palette,
      title: "Design Selection",
      description:
        "Our designers select furniture and decor that matches your target market.",
      timeline: "Day 2-3",
    },
    {
      icon: Edit,
      title: "Virtual Staging",
      description:
        "Professional artists create photorealistic staged versions of your rooms.",
      timeline: "Day 4",
    },
    {
      icon: Download,
      title: "Delivery & Revisions",
      description:
        "Receive your staged photos with before/after comparisons and revision options.",
      timeline: "Day 5",
    },
  ];

  return (
    <Wrapper>
      <InnerWrap>
        <div className="w-full flex items-center justify-center mb-12">
          <TitleBlock
            heading="How Virtual Staging Works"
            body="Our streamlined process transforms empty rooms into beautifully furnished spaces in just 5 days."
            theme="light"
            orientation="center"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
              <div className="text-sm font-medium text-blue-600 mb-2">
                {step.timeline}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-slate-50 dark:bg-slate-900 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">
                Multiple Styles
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                Modern, Traditional, Luxury
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">
                Before & After
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                Comparison Images
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">
                Unlimited Revisions
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                Premium Package
              </div>
            </div>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
