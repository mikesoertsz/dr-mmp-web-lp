"use client";

import { Ruler, Palette, Download, Clock, Shield, Award } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Ruler,
      title: "Precise Measurements",
      description: "Accurate scaling and measurements using professional surveying tools and techniques."
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Clean, modern floorplan designs that are both informative and visually appealing."
    },
    {
      icon: Download,
      title: "Multiple Formats",
      description: "Receive your floorplans in PDF, PNG, and vector formats for all marketing needs."
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Professional floorplans delivered within 72 hours of site measurement."
    },
    {
      icon: Shield,
      title: "Accuracy Guarantee",
      description: "We guarantee measurement accuracy within industry-standard tolerances."
    },
    {
      icon: Award,
      title: "Professional Standards",
      description: "All floorplans meet RICS (Royal Institution of Chartered Surveyors) guidelines."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional Floorplan Features
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Our floorplans combine technical accuracy with beautiful design to help your property stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mb-4 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Floorplans Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.5%</div>
              <div className="text-blue-200">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">72hrs</div>
              <div className="text-blue-200">Average Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}