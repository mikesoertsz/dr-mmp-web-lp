"use client";

import { Upload, Palette, Cuboid, Download } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Upload,
      title: "Share Your Plans",
      description: "Send us architectural drawings, sketches, or reference materials for your project.",
      timeline: "Day 1"
    },
    {
      icon: Palette,
      title: "Design Consultation",
      description: "Our team reviews your requirements and creates a detailed rendering plan.",
      timeline: "Day 2"
    },
    {
      icon: Cuboid,
      title: "3D Creation",
      description: "Professional 3D artists create photorealistic renders with attention to every detail.",
      timeline: "Day 3-6"
    },
    {
      icon: Download,
      title: "Review & Delivery",
      description: "Receive your high-resolution 3D renders with revision options if needed.",
      timeline: "Day 7"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our 3D Rendering Process
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            From concept to completion, we guide you through every step of creating stunning 3D visualizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
              
              <div className="text-sm font-medium text-blue-600 mb-2">{step.timeline}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-50 dark:bg-slate-900 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">Unlimited Revisions</div>
              <div className="text-slate-600 dark:text-slate-400">Premium Package</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">Multiple Formats</div>
              <div className="text-slate-600 dark:text-slate-400">JPEG, PNG, TIFF</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">Commercial Rights</div>
              <div className="text-slate-600 dark:text-slate-400">Full Usage License</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}