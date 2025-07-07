"use client";

import { Button } from "@/components/ui/button";
import { Palette, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/lib/translations";
import interiorDesignContent from "@/data/content/interior-design.json";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-16 md:min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={interiorDesignContent.hero.backgroundImage}
          alt="Interior design and virtual staging"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/70" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 mb-6">
            <Palette className="h-8 w-8 text-purple-400" />
            <span className="text-purple-400 font-semibold">{t("services.interiordesign.name")}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {interiorDesignContent.hero.title} <span className="text-purple-400">That Sell Dreams</span>
          </h1>
          
          <p className="text-xl text-slate-200 mb-8 max-w-2xl">
            {interiorDesignContent.hero.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-purple-400 shrink-0" />
              <span className="text-slate-200">Virtual staging in 48-72 hours</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-purple-400 shrink-0" />
              <span className="text-slate-200">Multiple design style options</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-purple-400 shrink-0" />
              <span className="text-slate-200">90% less cost than physical staging</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-purple-400 shrink-0" />
              <span className="text-slate-200">Target buyer psychology optimization</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              {t("serviceContent.hero.bookNow")}
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              {t("serviceContent.hero.viewGallery")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}