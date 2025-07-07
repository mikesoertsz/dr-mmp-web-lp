"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/translations";
import { Camera, Plane, Mountain, Video } from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 to-sky-100 overflow-hidden">
      <div className="container mx-auto max-w-[1780px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge variant="outline" className="text-blue-600 border-blue-200">
              {t("services.dronephotography.name")}
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight font-recoleta">
                Stunning Aerial
                <span className="block text-blue-600">Photography</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                {t("services.dronephotography.description")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                {t("common.getStarted")}
              </Button>
              <Button variant="outline" size="lg">
                {t("common.viewDetails")}
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Camera className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-slate-700">4K Video</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Plane className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-slate-700">Professional Pilots</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Mountain className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-slate-700">Aerial Perspectives</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Video className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-slate-700">Same Day Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-sky-600 rounded-xl flex items-center justify-center">
                <Plane className="h-16 w-16 text-white" />
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">Package Starting At</span>
                  <span className="text-2xl font-bold text-blue-600">€299</span>
                </div>
                <div className="text-sm text-slate-500">
                  • Professional aerial photography
                  • High-resolution images
                  • Multiple angles and perspectives
                  • Quick turnaround time
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-sky-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}