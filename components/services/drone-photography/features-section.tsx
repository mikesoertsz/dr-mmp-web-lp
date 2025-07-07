"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Camera, Video, Edit, Download, Clock, Award } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Camera,
      title: "High-Resolution Photography",
      items: [
        "4K ultra-high resolution images",
        "RAW file format for maximum quality",
        "Multiple angles and perspectives",
        "HDR processing for perfect exposure",
        "Professional color correction"
      ]
    },
    {
      icon: Video,
      title: "Cinematic Video Content",
      items: [
        "4K video recording capability",
        "Smooth gimbal stabilization",
        "Dynamic flight movements",
        "Aerial reveal sequences",
        "Professional editing included"
      ]
    },
    {
      icon: Edit,
      title: "Professional Post-Production",
      items: [
        "Expert photo editing and enhancement",
        "Sky replacement when needed",
        "Property highlighting techniques",
        "Multiple format delivery",
        "Quick turnaround time"
      ]
    }
  ];

  const specifications = [
    { label: "Camera Resolution", value: "48MP Sensor" },
    { label: "Video Quality", value: "4K@60fps" },
    { label: "Flight Time", value: "45 minutes" },
    { label: "Weather Resistance", value: "Wind up to 35km/h" },
    { label: "Range", value: "15km radius" },
    { label: "Delivery Time", value: "24-48 hours" }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-[1780px]">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-blue-600 border-blue-200 mb-6">
            Technical Excellence
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-recoleta">
            Professional Equipment &
            <span className="block text-blue-600">Expert Techniques</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            State-of-the-art drones and professional techniques deliver exceptional results for your property marketing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-recoleta">
                    {feature.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-recoleta">
              Technical Specifications
            </h3>
            <div className="space-y-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">{spec.label}</span>
                  <span className="font-semibold text-slate-900">{spec.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Technical Details
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-sky-700 text-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6" />
                  <span className="font-semibold">Professional Guarantee</span>
                </div>
                <p className="text-blue-100 mb-6">
                  All flights conducted by certified pilots with full insurance coverage and regulatory compliance.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-blue-200">Properties Captured</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-blue-200">Safety Record</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span className="font-semibold text-slate-900">Fast Delivery</span>
                </div>
                <p className="text-slate-600 mb-4">
                  Get your professional aerial content within 24-48 hours with full editing and enhancement.
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Check className="h-4 w-4" />
                  <span>Rush delivery available</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}