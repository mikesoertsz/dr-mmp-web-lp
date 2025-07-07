"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Mail, Calendar, Phone } from "lucide-react";
import { useTranslation } from "@/lib/translations";
import careersContent from "@/data/content/careers.json";

export function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-600 text-white">
            Join Our Team
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Transform Real Estate Marketing?
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            {careersContent.footer.tagline}
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Email Application</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Send your portfolio and application directly to our team
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  {careersContent.contact.email}
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{t("careers.scheduleCall")}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {careersContent.contact.callScheduling}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Call
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Call Direct</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Speak with our team directly about opportunities
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  {careersContent.contact.phone}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Application Checklist */}
          <Card className="mb-8 border-blue-200 dark:border-blue-800 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to Apply? Here's Your Checklist:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Updated CV/resume ready</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Portfolio of your best work</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Cover letter explaining your interest</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Professional references available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Availability and rate expectations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Passion for real estate marketing</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Primary CTA */}
          <div className="space-y-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
              {t("careers.applyNow")}
            </Button>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                View All Positions
              </Button>
              <Button variant="outline" size="lg">
                Download Application Guide
              </Button>
            </div>
          </div>

          {/* Equal Opportunity Statement */}
          <div className="mt-12 bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {careersContent.footer.equalOpportunity}
            </p>
          </div>

          <div className="mt-8 text-sm text-slate-500 dark:text-slate-400">
            Applications reviewed within 48 hours • Fair and transparent process • Remote work opportunities
          </div>
        </div>
      </div>
    </section>
  );
}