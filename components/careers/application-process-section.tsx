"use client";

import React, { ReactNode } from "react";
import careersContent from "./careers-content.json";

export default function ApplicationProcessSection() {
  interface CardProps {
    children: ReactNode;
    className: string;
  }

  const Card = ({ children, className }: CardProps) => (
    <div
      className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );

  const CardContent = ({ children, className }: CardProps) => (
    <div className={`p-6 text-center ${className}`}>{children}</div>
  );

  interface CheckCircleProps {
    className: string;
  }

  const CheckCircle = ({ className }: CheckCircleProps) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5 4a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Application Process
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Our streamlined application process is designed to be fair,
            transparent, and efficient for all candidates.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {careersContent.applicationProcess.steps.map(
              (
                step: { step: string; title: string; description: string },
                index: number
              ) => (
                <Card key={index} className="">
                  <CardContent className="">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
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
              )
            )}
          </div>

          {/* Application Requirements */}
          <div className="bg-white dark:bg-slate-950 rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Application Requirements
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                To ensure a smooth application process, please prepare the
                following materials:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  All Positions
                </h4>
                <ul className="space-y-3">
                  {careersContent.applicationProcess.requirements.map(
                    (req: string, index: number) => (
                      <li
                        key={index}
                        className="text-slate-600 dark:text-slate-400 flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 shrink-0"></span>
                        {req}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Additional Tips
                </h4>
                <ul className="space-y-3">
                  <li className="text-slate-600 dark:text-slate-400 flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-3 shrink-0"></span>
                    Include 5-10 best work samples in your portfolio
                  </li>
                  <li className="text-slate-600 dark:text-slate-400 flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-3 shrink-0"></span>
                    Highlight any real estate or luxury brand experience
                  </li>
                  <li className="text-slate-600 dark:text-slate-400 flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-3 shrink-0"></span>
                    Show before/after examples when applicable
                  </li>
                  <li className="text-slate-600 dark:text-slate-400 flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-3 shrink-0"></span>
                    Mention your availability and preferred project types
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Typical Timeline
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  1-2 Days
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Application Review
                </div>
              </div>
              <div className="hidden md:block text-slate-400">→</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  3-5 Days
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Skills Assessment
                </div>
              </div>
              <div className="hidden md:block text-slate-400">→</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  1 Week
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Interview & Trial
                </div>
              </div>
              <div className="hidden md:block text-slate-400">→</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  Onboarding
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Welcome to the team!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
