"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar } from "lucide-react";
import { Wrapper, InnerWrap } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export function CTASection() {
  return (
    <Wrapper className="bg-gradient-to-r from-blue-600 to-blue-700">
      <InnerWrap>
        <div className="w-full flex items-center justify-center mb-8">
          <TitleBlock
            heading="Transform Empty Spaces Into Dream Homes"
            body="Help buyers fall in love with your property through professional virtual staging that showcases its full potential."
            theme="dark"
            orientation="center"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Calendar className="mr-2 h-5 w-5" />
            Start Virtual Staging
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call +351 123 456 789
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-2xl font-bold mb-2">5 Days</div>
            <div className="text-blue-200">Delivery Guarantee</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-2xl font-bold mb-2">95%</div>
            <div className="text-blue-200">Cost Savings vs Physical</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-2xl font-bold mb-2">60%</div>
            <div className="text-blue-200">More Online Views</div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-blue-200 text-sm">
            Questions? Email us at{" "}
            <a
              href="mailto:info@marketmy.properties"
              className="text-white underline"
            >
              info@marketmy.properties
            </a>
          </p>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
