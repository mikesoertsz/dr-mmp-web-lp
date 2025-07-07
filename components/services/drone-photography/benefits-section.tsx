"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, MapPin, Camera, Zap, Shield, Award } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Eye,
      title: "Unique Perspectives",
      description: "Capture breathtaking aerial views that showcase your property's true beauty and location advantages.",
      badge: "Professional"
    },
    {
      icon: MapPin,
      title: "Location Context",
      description: "Show proximity to beaches, amenities, transportation, and neighborhood character from above.",
      badge: "Comprehensive"
    },
    {
      icon: Camera,
      title: "4K Quality",
      description: "Ultra-high resolution photos and videos that look stunning on all marketing platforms.",
      badge: "Premium"
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Get your aerial content within 24-48 hours with professional editing and color correction.",
      badge: "Efficient"
    },
    {
      icon: Shield,
      title: "Fully Licensed",
      description: "All flights conducted by certified pilots with proper insurance and regulatory compliance.",
      badge: "Safe"
    },
    {
      icon: Award,
      title: "Marketing Impact",
      description: "Properties with aerial photography receive 73% more online views and sell 28% faster.",
      badge: "Proven"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-[1780px]">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-blue-600 border-blue-200 mb-6">
            Professional Benefits
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-recoleta">
            Why Choose Our
            <span className="block text-blue-600">Drone Photography</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional aerial photography that transforms how buyers see and connect with your property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {benefit.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-recoleta">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-slate-500 mb-4">
            <Shield className="h-4 w-4" />
            <span>Licensed • Insured • Professional</span>
          </div>
          <p className="text-lg text-slate-600">
            Join hundreds of property owners who've elevated their listings with professional aerial photography
          </p>
        </div>
      </div>
    </section>
  );
}