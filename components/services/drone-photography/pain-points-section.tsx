"use client";

import { Card, CardContent } from "@/components/ui/card";
import { X, AlertTriangle, Clock, DollarSign } from "lucide-react";

export function PainPointsSection() {
  const painPoints = [
    {
      icon: X,
      title: "Limited Perspective",
      description: "Ground-level photos can't capture the full scope of your property's location, surroundings, and unique features."
    },
    {
      icon: AlertTriangle,
      title: "Missing Context",
      description: "Buyers can't understand proximity to amenities, transportation, or the neighborhood without aerial views."
    },
    {
      icon: Clock,
      title: "Expensive Alternatives",
      description: "Helicopter photography is costly and complex, making aerial shots inaccessible for most property listings."
    },
    {
      icon: DollarSign,
      title: "Competitive Disadvantage",
      description: "Properties without aerial photography appear less professional and comprehensive compared to competitors."
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-[1780px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-recoleta">
            Why Ground-Level Photos
            <span className="block text-red-600">Aren't Enough</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Traditional photography misses the bigger picture. Here's what you're losing without aerial perspectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-red-100 rounded-full">
                    <point.icon className="h-8 w-8 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-recoleta">
                  {point.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-red-600">73%</div>
            <div className="text-sm text-slate-600">of buyers want aerial views</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-red-600">45%</div>
            <div className="text-sm text-slate-600">more online engagement</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-red-600">28%</div>
            <div className="text-sm text-slate-600">faster property sales</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-red-600">€50k+</div>
            <div className="text-sm text-slate-600">helicopter photography cost</div>
          </div>
        </div>
      </div>
    </section>
  );
}