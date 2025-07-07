"use client";

import { Globe, TrendingUp, Clock, Users } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Attract international buyers and investors who can tour your property from anywhere.",
      stat: "300%",
      statLabel: "More International Interest"
    },
    {
      icon: TrendingUp,
      title: "Higher Engagement",
      description: "Virtual tours keep visitors engaged 5x longer than traditional photo galleries.",
      stat: "5x",
      statLabel: "Longer Engagement"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Your property is always open for viewing, regardless of time zones or schedules.",
      stat: "24/7",
      statLabel: "Always Available"
    },
    {
      icon: Users,
      title: "Pre-Qualified Buyers",
      description: "Buyers who request physical viewings after virtual tours are 80% more likely to purchase.",
      stat: "80%",
      statLabel: "Higher Conversion"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Power of Virtual Property Tours
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Virtual tours don't just show your property - they create an immersive experience that drives serious buyer interest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <benefit.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              
              <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.stat}</div>
              <div className="text-sm text-slate-500 mb-4">{benefit.statLabel}</div>
              
              <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Perfect for International Markets</h3>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Portugal's growing international property market demands virtual solutions. Reach buyers from the UK, France, Germany, and beyond.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Create Virtual Tour
          </button>
        </div>
      </div>
    </section>
  );
}