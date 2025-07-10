"use client";

import DesireSocialProofSingle from "@/app/(home)/desire-socialproofsingle";
import InterestBenefits from "@/app/(home)/interest-benefits";
import InterestHowItWorks from "@/app/(home)/interest-howitworks";
import InterestPartners from "@/app/(home)/interest-partners";
import PricingSingle from "../(shared)/action-pricing-single";
import DesireWhyAI from "./desire-whyai";
import HeroSection from "./attention-hero";
import DesireFAQ from "../(shared)/desire-faq";
import AttentionHook from "./attention-hook";

export default function Home() {
  return (
    <div className="bg-[#FDF6EE]">
      <HeroSection />
      <InterestPartners />
      <AttentionHook />
      <InterestBenefits />
      <InterestHowItWorks />
      <DesireWhyAI />
      <DesireSocialProofSingle />
      <DesireFAQ />
      <PricingSingle />
    </div>
  );
}
