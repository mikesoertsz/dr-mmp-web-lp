"use client";

import { Button } from "@/components/ui/button";
import { Image as ImageIcon, CheckCircle } from "lucide-react";
import Image from "next/image";
import { Wrapper, InnerWrap } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export function HeroSection() {
  return (
    <Wrapper className="bg-black/80 relative overflow-hidden">
      <InnerWrap className="grid grid-cols-1 md:grid-cols-2 w-full gap-12 max-w-6xl mx-auto">
        <div className="flex items-start justify-start p-12 text-stone-200 relative z-10">
          <TitleBlock
            preheading="2D Renders & Virtual Staging"
            heading="Transform Empty Spaces Into Dream Homes"
            body="Professional 2D renders and virtual staging that help buyers visualize the full potential of your property."
            theme="dark"
            orientation="left"
          />
          <div className="grid grid-cols-1 gap-2 mt-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-blue-400 shrink-0" />
              <span className="text-slate-200">
                Photorealistic furniture & decor
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-blue-400 shrink-0" />
              <span className="text-slate-200">
                Multiple design styles available
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-blue-400 shrink-0" />
              <span className="text-slate-200">Before & after comparisons</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-blue-400 shrink-0" />
              <span className="text-slate-200">5-day delivery guarantee</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View Packages & Pricing
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              See Before & After Gallery
            </Button>
          </div>
        </div>
        <div className="relative flex p-12 z-0">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="2D render and virtual staging"
              fill
              className="object-cover rounded-xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/70 rounded-xl" />
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
