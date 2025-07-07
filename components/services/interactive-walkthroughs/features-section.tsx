"use client";

import { Camera, Smartphone, Eye, BarChart, Share, Settings } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Camera,
      title: "360° Photography",
      description: "Professional 360-degree cameras capture every angle with stunning clarity and detail."
    },
    {
      icon: Eye,
      title: "Interactive Hotspots",
      description: "Add clickable information points highlighting key features, amenities, and details."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Perfect viewing experience on smartphones, tablets, and desktop computers."
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Track visitor engagement, time spent, and popular areas within your property."
    },
    {
      icon: Share,
      title: "Easy Sharing",
      description: "Share via link, embed on websites, or integrate with listing platforms seamlessly."
    },
    {
      icon: Settings,
      title: "Custom Branding",
      description: "Add your logo, contact information, and custom branding to the tour interface."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Advanced Virtual Tour Features
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Our virtual tours combine cutting-edge technology with user-friendly design for maximum impact.
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
              <div className="text-3xl font-bold mb-2">4K</div>
              <div className="text-blue-200">Ultra High Resolution</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">VR Ready</div>
              <div className="text-blue-200">Virtual Reality Compatible</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1 Year</div>
              <div className="text-blue-200">Free Hosting Included</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}