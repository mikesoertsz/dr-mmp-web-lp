"use client";

import { AlertTriangle, TrendingDown, Clock, Eye } from "lucide-react";

export function PainPointsSection() {
  const painPoints = [
    {
      icon: Eye,
      title: "Poor Photos = Fewer Views",
      description: "Properties with low-quality photos receive 89% fewer online views and inquiries."
    },
    {
      icon: TrendingDown,
      title: "Lower Sale Prices",
      description: "Poorly photographed properties sell for an average of 15% less than professionally shot ones."
    },
    {
      icon: Clock,
      title: "Longer Time on Market",
      description: "Properties with amateur photos stay on the market 3x longer than professionally photographed ones."
    },
    {
      icon: AlertTriangle,
      title: "Lost Opportunities",
      description: "Buyers scroll past listings with poor photos in under 3 seconds - you never get a second chance."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Let Poor Photography Cost You Money
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            In today's digital marketplace, your photos are your first impression. Here's what happens when you cut corners:
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
              The Cost of Poor Photography
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              On a €500,000 property, poor photography could cost you <strong>€75,000</strong> in lost value and months of carrying costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}