"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, DollarSign, Clock, Users } from "lucide-react";

export function PainPointsSection() {
  const painPoints = [
    {
      icon: AlertTriangle,
      problem: "Empty Properties Don't Sell",
      description: "Vacant properties sit on the market 73% longer and sell for 6-10% less than staged properties."
    },
    {
      icon: DollarSign,
      problem: "Traditional Staging Costs Too Much",
      description: "Physical staging costs €2,000-€5,000+ per property with ongoing monthly fees and logistics hassles."
    },
    {
      icon: Clock,
      problem: "Time-Consuming Setup",
      description: "Traditional staging takes weeks to coordinate, schedule, and implement - time you don't have."
    },
    {
      icon: Users,
      problem: "One-Size-Fits-All Approach",
      description: "Physical staging can't easily adapt to different buyer demographics or show multiple style options."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-red-50 dark:bg-red-950/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            The Problem with Vacant Properties
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Empty spaces don't inspire buyers. They see problems, not possibilities. Here's what you're facing without proper staging:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            
            return (
              <Card key={index} className="border-red-200 dark:border-red-800 bg-white dark:bg-slate-900 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                      <IconComponent className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {point.problem}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-slate-900 rounded-lg p-6 max-w-2xl mx-auto shadow-lg border border-red-200 dark:border-red-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              The Solution: Professional Virtual Staging
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Transform empty spaces into furnished, lifestyle-focused environments that help buyers envision their future home - all at 90% less cost than traditional staging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}