"use client";

import { AlertTriangle, Eye, Clock, TrendingDown } from "lucide-react";

export function PainPointsSection() {
  const painPoints = [
    {
      icon: Eye,
      title: "Buyers Can't Visualize Layout",
      description: "Without floorplans, 73% of buyers struggle to understand property flow and room relationships."
    },
    {
      icon: TrendingDown,
      title: "Reduced Online Engagement",
      description: "Listings without floorplans receive 52% fewer inquiries and viewing requests."
    },
    {
      icon: Clock,
      title: "Wasted Viewing Time",
      description: "Properties without floorplans have 40% more unqualified viewings from unsuitable buyers."
    },
    {
      icon: AlertTriangle,
      title: "Lost Competitive Edge",
      description: "Modern buyers expect floorplans - properties without them appear outdated and unprofessional."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Floorplans Are Essential in 2024
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Today's buyers research extensively online before viewing. Without floorplans, you're missing critical opportunities:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                <point.icon className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">
              The Hidden Cost of Missing Floorplans
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Properties without floorplans take <strong>23% longer to sell</strong> and receive <strong>30% fewer qualified inquiries</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}