"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Plane, Video, Box, Edit, Target, Palette } from "lucide-react";
import { useTranslation } from "@/lib/translations";
import careersContent from "@/data/content/careers.json";

const iconMap = {
  Camera,
  Plane,
  Video,
  Box,
  Edit,
  Target,
  Palette
};

export function OpenPositionsSection() {
  const { t } = useTranslation();
  const [expandedPosition, setExpandedPosition] = useState<string | null>(null);

  const togglePosition = (positionId: string) => {
    setExpandedPosition(expandedPosition === positionId ? null : positionId);
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t("careers.openings")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            We're looking for talented freelance professionals to join our growing network. All positions are remote with flexible scheduling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {careersContent.openings.map((position) => {
            const IconComponent = iconMap[position.icon as keyof typeof iconMap];
            const isExpanded = expandedPosition === position.id;
            
            return (
              <Card key={position.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                          {position.title}
                        </CardTitle>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          {position.compensation.range}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary">
                      Remote
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {position.responsibilities.slice(0, 2).map((resp, index) => (
                        <li key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2 shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                      {!isExpanded && position.responsibilities.length > 2 && (
                        <li className="text-sm text-blue-600 dark:text-blue-400">
                          +{position.responsibilities.length - 2} more responsibilities...
                        </li>
                      )}
                    </ul>
                  </div>

                  {isExpanded && (
                    <div className="space-y-4">
                      {position.responsibilities.length > 2 && (
                        <div>
                          <ul className="space-y-1">
                            {position.responsibilities.slice(2).map((resp, index) => (
                              <li key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                                <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2 shrink-0"></span>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {position.requirements.map((req, index) => (
                            <li key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                              <span className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mt-2 mr-2 shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Compensation & Benefits:</h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                          <strong>{position.compensation.range}</strong>
                        </div>
                        <ul className="space-y-1">
                          {position.compensation.extras.map((extra, index) => (
                            <li key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                              <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-2 shrink-0"></span>
                              {extra}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {(position.portfolio || position.certifications || position.software || position.skills || position.languages) && (
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                            {position.portfolio ? "Portfolio Requirements:" : 
                             position.certifications ? "Required Certifications:" :
                             position.software ? "Software Proficiency:" :
                             position.skills ? "Technical Skills:" :
                             "Language Requirements:"}
                          </h4>
                          <ul className="space-y-1">
                            {(position.portfolio || position.certifications || position.software || position.skills || position.languages || []).map((item, index) => (
                              <li key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                                <span className="w-1.5 h-1.5 bg-orange-600 dark:bg-orange-400 rounded-full mt-2 mr-2 shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Button 
                      variant="outline" 
                      onClick={() => togglePosition(position.id)}
                      className="flex-1"
                    >
                      {isExpanded ? "Show Less" : "View Details"}
                    </Button>
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Don't see the perfect role? We're always looking for exceptional talent.
          </p>
          <Button variant="outline" size="lg">
            Submit General Application
          </Button>
        </div>
      </div>
    </section>
  );
}