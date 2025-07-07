"use client";

import { Camera, Lightbulb, Palette, Clock, Shield, Award } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Camera,
      title: "Professional Equipment",
      description: "Full-frame cameras, professional lenses, and advanced lighting equipment for stunning results."
    },
    {
      icon: Lightbulb,
      title: "Expert Lighting",
      description: "Perfect lighting techniques that showcase your property's best features and create warmth."
    },
    {
      icon: Palette,
      title: "Advanced Editing",
      description: "Professional post-processing including HDR, color correction, and perspective adjustments."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Receive your professionally edited photos within 48 hours of the shoot."
    },
    {
      icon: Shield,
      title: "Satisfaction Guarantee",
      description: "Not happy with the results? We'll reshoot at no additional cost."
    },
    {
      icon: Award,
      title: "Award-Winning Team",
      description: "Our photographers have won multiple real estate photography awards."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Makes Our Photography Different
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We don't just take photos - we create visual stories that sell properties faster and for more money.
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
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Properties Photographed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">48hrs</div>
              <div className="text-blue-200">Average Delivery Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}