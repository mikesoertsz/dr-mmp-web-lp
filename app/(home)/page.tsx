import PricingSingle from "../(shared)/action-pricing-single";
import DesireFAQ from "../(shared)/desire-faq";
import HeroSection from "./attention-hero";
import AttentionHook from "./attention-hook";
import DesireSocialProofSingle from "./desire-socialproofsingle";
import InterestHowItWorks from "./interest-howitworks";
import InterestPartners from "./interest-partners";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AttentionHook />
      <InterestPartners />
      <InterestHowItWorks />
      <DesireSocialProofSingle />
      <DesireFAQ />
      <PricingSingle />
    </main>
  );
}
