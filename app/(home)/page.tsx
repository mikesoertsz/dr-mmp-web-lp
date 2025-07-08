"use client";

import DesireSocialProofSingle from "@/app/(home)/desire-socialproofsingle";
import InterestBenefits from "@/app/(home)/interest-benefits";
import InterestHowItWorks from "@/app/(home)/interest-howitworks";
import InterestPartners from "@/app/(home)/interest-partners";
import PricingSingle from "../(shared)/action-pricing-single";
import DesireWhyAI from "./desire-whyai";
import HeroSection from "./home-hero";
import DesireFAQ from "../(shared)/desire-faq";

export default function Home() {
  return (
    <div className="bg-[#FDF6EE]">
      <HeroSection />
      <InterestPartners />
      <InterestBenefits />
      <InterestHowItWorks />
      <DesireWhyAI />
      <DesireSocialProofSingle />
      <DesireFAQ />
      <PricingSingle />
    </div>
  );
}
