"use client";

import { Button } from "@/components/ui/button";
import { Layout, CheckCircle } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative pt-16 md:min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Professional floorplan design"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/70" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 mb-6">
            <Layout className="h-8 w-8 text-blue-400" />
            <span className="text-blue-400 font-semibold">Floorplan Designs</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Crystal Clear Floorplans That <span className="text-blue-400">Convert</span>
          </h1>
          
          <p className="text-xl text-slate-200 mb-8 max-w-2xl">
            Professional floorplan designs that help buyers instantly understand your property layout and visualize their future home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-blue-400 shrink-0" />
              <span className="text-slate-200">Precise measurements & scaling</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-blue-400 shrink-0" />
              <span className="text-slate-200">Furnished & unfurnished options</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-blue-400 shrink-0" />
              <span className="text-slate-200">Multiple format delivery</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-blue-400 shrink-0" />
              <span className="text-slate-200">72-hour turnaround</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View Packages & Pricing
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              See Sample Floorplans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}