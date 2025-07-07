"use client";

import { Camera, Zap, TrendingUp, Users, Award, Clock } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Sell 40% Faster",
      description: "Properties with professional photos sell significantly faster than those with amateur photography.",
      stat: "40%",
      statLabel: "Faster Sales"
    },
    {
      icon: Users,
      title: "3x More Views",
      description: "Professional photography generates 3 times more online views and inquiries.",
      stat: "3x",
      statLabel: "More Views"
    },
    {
      icon: Award,
      title: "Higher Sale Prices",
      description: "Well-photographed properties command 12% higher sale prices on average.",
      stat: "12%",
      statLabel: "Higher Prices"
    },
    {
      icon: Clock,
      title: "48-Hour Delivery",
      description: "Fast turnaround ensures your property gets to market quickly.",
      stat: "48hrs",
      statLabel: "Delivery Time"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Power of Professional Photography
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Professional photography isn't just about pretty pictures - it's about results that directly impact your bottom line.
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
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Listings?</h3>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Join thousands of property professionals who trust us to showcase their properties in the best possible light.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Book Your Photo Shoot
          </button>
        </div>
      </div>
    </section>
  );
}