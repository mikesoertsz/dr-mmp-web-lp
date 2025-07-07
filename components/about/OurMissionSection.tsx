"use client";

import { InnerWrap, Wrapper } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";
import { useTranslation } from "@/lib/translations";

export function OurMissionSection() {
  const { t } = useTranslation();

  return (
    <Wrapper id="about-mission" className="py-12 md:pt-12 md:pb-32">
      <InnerWrap className="flex flex-col gap-8 h-full min-h-[500px]">
        <div className="w-full h-full flex items-start justify-center">
          <TitleBlock
            preheading={t("about.ourMission")}
            heading={t("about.ourMission")}
            theme="light"
            orientation="center"
          />
        </div>
        <div className="prose prose-slate dark:prose-invert max-w-3xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            {t("about.ourMissionDescription1")}
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {t("about.ourMissionDescription2")}
          </p>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
