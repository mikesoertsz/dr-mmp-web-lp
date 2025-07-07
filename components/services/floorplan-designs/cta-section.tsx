"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Professional Floorplans That Convert
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Help buyers understand your property layout instantly with accurate, beautiful floorplans that meet professional standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Measurement
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Phone className="mr-2 h-5 w-5" />
              Call +351 123 456 789
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">72 Hours</div>
              <div className="text-blue-200">Delivery Guarantee</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Floorplans Created</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">99.5%</div>
              <div className="text-blue-200">Accuracy Rate</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-blue-200 text-sm">
              Questions? Email us at <a href="mailto:info@marketmy.properties" className="text-white underline">info@marketmy.properties</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}