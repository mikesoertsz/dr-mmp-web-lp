"use client";

import { InnerWrap, Wrapper } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export function OurMissionSection() {
  return (
    <Wrapper id="about-mission" className="py-12 md:pt-12 md:pb-32">
      <InnerWrap className="flex flex-col gap-8 h-full min-h-[500px]">
        <div className="w-full h-full flex items-start justify-center">
          <TitleBlock
            preheading="Our Mission"
            heading="Our Mission"
            theme="light"
            orientation="center"
          />
        </div>
        <div className="prose prose-slate dark:prose-invert max-w-3xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            We empower real estate professionals with innovative marketing
            solutions.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Our mission is to deliver exceptional value and results for every
            client.
          </p>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
