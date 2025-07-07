"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Camera, Edit, Package, CheckCircle } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Calendar,
      title: "Schedule Your Flight",
      description: "Book online and choose your preferred time slot. We coordinate with weather conditions for optimal results.",
      duration: "5 minutes",
      details: [
        "Online booking system",
        "Weather monitoring",
        "Flight planning",
        "Permit coordination"
      ]
    },
    {
      number: "02",
      icon: MapPin,
      title: "Site Preparation",
      description: "Our team arrives on-site to assess conditions, plan flight paths, and ensure safety protocols.",
      duration: "15 minutes",
      details: [
        "Safety assessment",
        "Flight path planning",
        "Equipment setup",
        "Final weather check"
      ]
    },
    {
      number: "03",
      icon: Camera,
      title: "Professional Capture",
      description: "Certified pilots capture stunning aerial photos and videos using professional-grade equipment.",
      duration: "30-45 minutes",
      details: [
        "Multiple flight patterns",
        "Various altitudes and angles",
        "4K photo and video capture",
        "Real-time quality review"
      ]
    },
    {
      number: "04",
      icon: Edit,
      title: "Expert Post-Production",
      description: "Professional editing, color correction, and enhancement to create marketing-ready content.",
      duration: "24 hours",
      details: [
        "Professional photo editing",
        "Video stabilization",
        "Color grading",
        "Format optimization"
      ]
    },
    {
      number: "05",
      icon: Package,
      title: "Final Delivery",
      description: "Receive your complete package via secure online gallery with high-resolution downloads.",
      duration: "Instant access",
      details: [
        "Secure online gallery",
        "Multiple format options",
        "High-resolution downloads",
        "Usage guidelines included"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-[1780px]">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-blue-600 border-blue-200 mb-6">
            Simple Process
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-recoleta">
            How Our Drone Photography
            <span className="block text-blue-600">Process Works</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From booking to delivery, we've streamlined every step to ensure professional results with minimal effort on your part.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 hidden lg:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content Card */}
                <div className="flex-1">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-100 rounded-full">
                          <step.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-blue-600 mb-1">Step {step.number}</div>
                          <h3 className="text-xl font-bold text-slate-900 font-recoleta">
                            {step.title}
                          </h3>
                        </div>
                        <Badge variant="outline" className="ml-auto text-xs">
                          {step.duration}
                        </Badge>
                      </div>
                      
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-slate-600">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden lg:block w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                
                {/* Spacer */}
                <div className="flex-1 lg:block hidden"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">24hrs</div>
            <div className="text-sm text-slate-600">Average delivery time</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">100%</div>
            <div className="text-sm text-slate-600">Safety record</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-slate-600">Properties captured</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">98%</div>
            <div className="text-sm text-slate-600">Client satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}