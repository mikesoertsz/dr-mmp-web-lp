"use client";

import { Calendar, Ruler, Edit, Download } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Calendar,
      title: "Schedule Measurement",
      description: "Book a convenient time for our surveyor to visit and measure your property accurately.",
      timeline: "Day 1"
    },
    {
      icon: Ruler,
      title: "Professional Survey",
      description: "Our qualified surveyor measures every room using professional laser equipment.",
      timeline: "Day 2"
    },
    {
      icon: Edit,
      title: "Design & Creation",
      description: "Our designers create beautiful, accurate floorplans with proper scaling and labeling.",
      timeline: "Day 3-4"
    },
    {
      icon: Download,
      title: "Digital Delivery",
      description: "Receive your floorplans in multiple formats via secure online delivery.",
      timeline: "Day 5"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Professional Floorplan Process
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            From initial measurement to final delivery, we ensure accuracy and quality at every step.
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
              <div className="text-2xl font-bold text-blue-600 mb-2">±2cm</div>
              <div className="text-slate-600 dark:text-slate-400">Measurement Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">72 Hours</div>
              <div className="text-slate-600 dark:text-slate-400">Delivery Guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">RICS</div>
              <div className="text-slate-600 dark:text-slate-400">Professional Standards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}