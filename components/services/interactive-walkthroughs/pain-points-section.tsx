"use client";

import { AlertTriangle, MapPin, Clock, Users } from "lucide-react";

export function PainPointsSection() {
  const painPoints = [
    {
      icon: MapPin,
      title: "Limited by Location",
      description: "International buyers and remote investors can't physically visit properties, missing out on opportunities."
    },
    {
      icon: Clock,
      title: "Scheduling Conflicts",
      description: "Coordinating viewings with multiple buyers wastes time and creates scheduling nightmares."
    },
    {
      icon: Users,
      title: "Unqualified Viewings",
      description: "70% of physical viewings are from unqualified buyers who waste your time and resources."
    },
    {
      icon: AlertTriangle,
      title: "COVID-19 Concerns",
      description: "Health concerns and travel restrictions limit the number of people willing to visit properties in person."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Physical Viewings Aren't Enough
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            In today's global market, relying solely on physical viewings limits your reach and wastes valuable time:
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
              The Cost of Limited Viewings
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Properties without virtual tours receive <strong>40% fewer inquiries</strong> and take <strong>30% longer to sell</strong> in today's digital-first market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}