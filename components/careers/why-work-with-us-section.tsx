"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, DollarSign, Home, TrendingUp } from "lucide-react";
import careersContent from "./careers-content.json";

const iconMap = {
  Rocket,
  DollarSign,
  Home,
  TrendingUp,
};

export function WhyWorkWithUsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Work With Us
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Join Portugal&apos;s fastest-growing property marketing company and
            be part of the digital transformation of real estate marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careersContent.whyWorkWithUs.map(
            (
              section: { icon: string; title: string; benefits: string[] },
              index: number
            ) => {
              const IconComponent =
                iconMap[section.icon as keyof typeof iconMap];

              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.benefits.map(
                        (benefit: string, benefitIndex: number) => (
                          <li
                            key={benefitIndex}
                            className="text-sm text-slate-600 dark:text-slate-400 flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2 shrink-0"></span>
                            {benefit}
                          </li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>
              );
            }
          )}
        </div>

        {/* Company Stats */}
        <div className="mt-16 bg-white dark:bg-slate-950 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Our Growth Story
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Join a company that&apos;s making a real impact in the Portuguese
              real estate market
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                500+
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                Properties Marketed
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                Luxury properties showcase
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                98%
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                Client Satisfaction
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                Would recommend us
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                50+
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                Freelance Partners
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                Creative professionals
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                2025
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                Spain Expansion
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                New market opportunity
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
