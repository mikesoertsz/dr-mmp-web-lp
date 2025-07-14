"use client";

import { CheckCircle, Calendar, Truck } from "lucide-react";
import { InnerWrap, Wrapper } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: CheckCircle,
      title: "Pay & Book",
      description: "Complete your payment securely through our platform.",
    },
    {
      icon: Calendar,
      title: "Submit Files",
      description: "Schedule your service at a time that suits you.",
    },
    {
      icon: Truck,
      title: "Receive",
      description: "Enjoy the service delivered to your doorstep.",
    },
  ];

  return (
    <Wrapper id="how-it-works" className="py-12 min-h-[30dvh]">
      <InnerWrap className="flex flex-col gap-8 h-full">
        <div className="w-full h-full flex items-start justify-center">
          <TitleBlock
            preheading="Our Process"
            heading="How It Works"
            theme="light"
            orientation="center"
          />
        </div>
        <div className="space-y-8">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {steps.map((step, index) => (
              <li
                key={index}
                className="text-left flex flex-col items-start justify-start bg-[#F7F0E8] p-8 rounded-lg gap-2"
              >
                <p>{index + 1}</p>
                <h3 className="font-medium text-2xl text-stone-900 dark:text-slate-100">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  {step.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
