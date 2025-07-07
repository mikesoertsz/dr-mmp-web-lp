"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Mail, Phone } from "lucide-react";
import { useTranslation } from "@/lib/translations";

export function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-purple-600 text-white">
            Limited Time Offer
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Transform Your Property Marketing?
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have increased their sale prices and reduced time on market with our professional virtual staging services.
          </p>

          {/* Special Offer Card */}
          <Card className="mb-8 border-purple-200 dark:border-purple-800 shadow-lg">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    First-Time Client Special
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Book your first virtual staging project this month and save 25% on all additional rooms.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">Free consultation included</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">Rush delivery available</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">100% satisfaction guarantee</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    Save 25%
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    On additional rooms
                  </div>
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 w-full md:w-auto">
                    Claim Offer Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Book Online</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Schedule your virtual staging consultation online
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Schedule Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Email Quote</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Send us your project details for a custom quote
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Call Direct</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Speak with our staging experts immediately
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Guarantee */}
          <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Our Guarantee
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              If you're not completely satisfied with your virtual staging, we'll revise it until you love it or provide a full refund. 
              Your success is our success.
            </p>
          </div>

          <div className="mt-8 text-sm text-slate-500 dark:text-slate-400">
            Ready in 48-72 hours • All major file formats included • Professional support throughout
          </div>
        </div>
      </div>
    </section>
  );
}