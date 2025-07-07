"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Video, Smartphone, Download, Palette, Zap } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Cpu,
      title: "AI-Powered Animation",
      description: "Advanced AI technology creates smooth, realistic animations with intelligent lighting and material rendering."
    },
    {
      icon: Video,
      title: "4K Ultra HD Quality",
      description: "Crystal-clear 4K resolution ensures every detail is captured with professional cinema-quality output."
    },
    {
      icon: Smartphone,
      title: "VR & Mobile Ready",
      description: "Optimized for virtual reality headsets and mobile devices for maximum accessibility and engagement."
    },
    {
      icon: Download,
      title: "Multiple Export Formats",
      description: "Receive animations in various formats including MP4, WebM, and VR-compatible files for all platforms."
    },
    {
      icon: Palette,
      title: "Custom Styling Options",
      description: "Choose from photorealistic, architectural, or artistic styles to match your brand and target audience."
    },
    {
      icon: Zap,
      title: "Rapid Production",
      description: "Advanced rendering pipelines deliver professional animations in 5-7 business days."
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-[1780px]">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-purple-600 border-purple-200 mb-6">
            Advanced Technology
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-recoleta">
            Cutting-Edge 3D Animation
            <span className="block text-purple-600">Features</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Powered by the latest animation technology and AI-driven rendering for unparalleled quality and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-purple-100 rounded-full">
                    <feature.icon className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center font-recoleta">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}