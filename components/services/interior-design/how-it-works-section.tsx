"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/lib/translations";
import interiorDesignContent from "@/data/content/interior-design.json";

export function HowItWorksSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t("serviceContent.process.title")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Our streamlined process delivers professional virtual staging results in just 48-72 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interiorDesignContent.process.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Timeline Visualization */}
          <div className="mt-12 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-purple-200 dark:bg-purple-800"></div>
            
            <div className="space-y-8">
              {[
                { time: "Day 1", title: "Project Briefing", description: "Send us your property photos and staging requirements" },
                { time: "Day 2", title: "Design & Staging", description: "Our team creates virtual staging concepts tailored to your target buyers" },
                { time: "Day 3", title: "Review & Refine", description: "Review staging options and request any adjustments" },
                { time: "Day 4", title: "Final Delivery", description: "Receive high-resolution staged images ready for marketing" }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg max-w-sm ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">
                      {item.time}
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}