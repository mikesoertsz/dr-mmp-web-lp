"use client";

import { Button } from "@/components/ui/button";
import { Footprints, CheckCircle } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative pt-16 md:min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Virtual tour and interactive walkthrough"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/70" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 mb-6">
            <Footprints className="h-8 w-8 text-blue-400" />
            <span className="text-blue-400 font-semibold">Virtual Tours</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let Buyers Walk Through Your Property <span className="text-blue-400">Virtually</span>
          </h1>
          
          <p className="text-xl text-slate-200 mb-8 max-w-2xl">
            Immersive 360° virtual tours that allow potential buyers to explore every corner of your property from anywhere in the world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-blue-400 shrink-0" />
              <span className="text-slate-200">360° panoramic views</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-blue-400 shrink-0" />
              <span className="text-slate-200">Interactive hotspots</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-blue-400 shrink-0" />
              <span className="text-slate-200">Mobile & VR compatible</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-blue-400 shrink-0" />
              <span className="text-slate-200">Analytics dashboard</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View Packages & Pricing
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Try Demo Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}