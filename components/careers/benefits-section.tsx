"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Users, Award } from "lucide-react";
import { useTranslation } from "@/lib/translations";
import careersContent from "@/data/content/careers.json";

const iconMap = {
  Briefcase,
  GraduationCap,
  Users,
  Award
};

export function BenefitsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t("careers.benefits")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            We believe in investing in our freelance partners' success. Here's what you get when you join our network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careersContent.benefits.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2 shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Working With Us Section */}
        <div className="mt-16 bg-slate-50 dark:bg-slate-900 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              How We Work Together
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Our streamlined processes make collaboration efficient and profitable for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Project Flow</h4>
              <ol className="space-y-2">
                {careersContent.workingWithUs.projectFlow.map((step, index) => (
                  <li key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 font-medium mr-2 mt-0.5">{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Payment Terms</h4>
              <ul className="space-y-2">
                {careersContent.workingWithUs.paymentTerms.map((term, index) => (
                  <li key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mt-2 mr-2 shrink-0"></span>
                    {term}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Communication</h4>
              <ul className="space-y-2">
                {careersContent.workingWithUs.communication.map((method, index) => (
                  <li key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-2 shrink-0"></span>
                    {method}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}