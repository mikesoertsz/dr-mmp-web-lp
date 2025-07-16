"use client";

import { CheckCircle, Calendar, Truck } from "lucide-react";
import { InnerWrap, Wrapper } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export default function InterestHowItWorks() {
  const steps = [
    {
      icon: CheckCircle,
      title: "Buy Package",
      description:
        "Complete your payment securely below through Stripe. Credit Card required.",
    },
    {
      icon: Calendar,
      title: "Schedule",
      description:
        "Schedule initial consultation to book property visit at a time that suits you.",
    },
    {
      icon: Truck,
      title: "Delivery",
      description:
        "All files delivered in formats perfect for immediate upload to RE platforms.",
    },
  ];

  return (
    <Wrapper id="how-it-works" className="py-32 min-h-[50dvh]">
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
                <p className="text-xs text-stone-500/60 uppercase font-semibold tracking-wider font-mono">
                  0{index + 1}
                </p>
                <h3 className="font-medium text-2xl text-stone-900 font-recoleta subpixel-antialiased">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 mt-16">
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
