"use client";

import { Eye, TrendingUp, Clock, CheckCircle } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Eye,
      title: "52% More Inquiries",
      description: "Properties with floorplans receive significantly more viewing requests and inquiries.",
      stat: "52%",
      statLabel: "More Inquiries"
    },
    {
      icon: TrendingUp,
      title: "25% Faster Sales",
      description: "Buyers can quickly understand layouts, leading to faster decision-making.",
      stat: "25%",
      statLabel: "Faster Sales"
    },
    {
      icon: Clock,
      title: "Fewer Wasted Viewings",
      description: "Buyers pre-qualify themselves, reducing unsuitable property viewings by 40%.",
      stat: "40%",
      statLabel: "Fewer Wasted Viewings"
    },
    {
      icon: CheckCircle,
      title: "99.5% Accuracy",
      description: "Professional measurements meeting RICS standards for complete accuracy.",
      stat: "99.5%",
      statLabel: "Accuracy Rate"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Floorplans Are Essential for Modern Property Marketing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            In today's digital-first property market, floorplans aren't optional - they're essential for serious property marketing.
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
          <h3 className="text-2xl font-bold mb-4">Professional Standards Guaranteed</h3>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            All our floorplans meet RICS (Royal Institution of Chartered Surveyors) guidelines and are created by qualified professionals.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Order Your Floorplan
          </button>
        </div>
      </div>
    </section>
  );
}