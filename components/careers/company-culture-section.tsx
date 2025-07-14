"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Target } from "lucide-react";
import careersContent from "./careers-content.json";

export function CompanyCultureSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Company Culture
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Our values guide everything we do and create the foundation for our
            collaborative, high-performance culture.
          </p>
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {careersContent.companyCulture.values.map(
            (value: { name: string; description: string }, index: number) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Star className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {value.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            )
          )}
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-blue-200 dark:border-blue-800 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <CardContent className="p-8 text-center">
              <Badge className="mb-4 bg-blue-600 text-white">Our Mission</Badge>
              <Target className="h-12 w-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <blockquote className="text-xl md:text-2xl font-medium text-slate-900 dark:text-white mb-6 italic">
                &quot;{careersContent.companyCulture.mission}&quot;
              </blockquote>
              <p className="text-slate-600 dark:text-slate-400">
                This mission drives our daily work and shapes our long-term
                vision for transforming real estate marketing across Portugal
                and Spain.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Culture Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Remote-First, Relationship-Focused
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We believe great work happens when people have the flexibility
                to do their best work, wherever that may be.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2 shrink-0"></span>
                  Monthly virtual team meetings
                </li>
                <li className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2 shrink-0"></span>
                  Annual Portugal retreat
                </li>
                <li className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2 shrink-0"></span>
                  Open communication channels
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Innovation & Learning
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We&apos;re at the forefront of real estate marketing technology
                and encourage continuous learning and experimentation.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-2 shrink-0"></span>
                  AI and emerging tech adoption
                </li>
                <li className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-2 shrink-0"></span>
                  Skill development programs
                </li>
                <li className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-2 shrink-0"></span>
                  Creative freedom encouraged
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Quality & Recognition
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We celebrate excellence and recognize outstanding contributions
                to our collective success.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mt-2 mr-2 shrink-0"></span>
                  Monthly excellence awards
                </li>
                <li className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mt-2 mr-2 shrink-0"></span>
                  Performance-based bonuses
                </li>
                <li className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mt-2 mr-2 shrink-0"></span>
                  Public testimonials & case studies
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
