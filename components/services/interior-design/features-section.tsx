"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Layout, Target, Zap } from "lucide-react";
import { useTranslation } from "@/lib/translations";
import interiorDesignContent from "@/data/content/interior-design.json";

const iconMap = {
  Palette,
  Layout,
  Target,
  Zap
};

export function FeaturesSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {interiorDesignContent.included.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Professional interior design consultation and virtual staging that transforms empty spaces into buyer magnets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interiorDesignContent.included.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}