"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Zap, Palette, Target, Clock, Shield } from "lucide-react";
import { Wrapper, InnerWrap } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export function FeaturesSection() {
  const features = [
    {
      icon: Layers,
      title: "Professional Quality",
      description:
        "High-resolution 2D renders that showcase your property's best features with photorealistic detail and precision.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Receive your completed 2D renders within 24-48 hours, perfect for tight marketing deadlines.",
    },
    {
      icon: Palette,
      title: "Customizable Styles",
      description:
        "Choose from various artistic styles and color schemes to match your brand and target audience.",
    },
    {
      icon: Target,
      title: "Perfect Accuracy",
      description:
        "Every detail is carefully crafted to match architectural plans and specifications exactly.",
    },
    {
      icon: Clock,
      title: "Unlimited Revisions",
      description:
        "We work with you until you're completely satisfied with the final render output.",
    },
    {
      icon: Shield,
      title: "File Security",
      description:
        "Your architectural plans and designs are handled with complete confidentiality and security.",
    },
  ];

  return (
    <Wrapper className="bg-slate-50">
      <InnerWrap>
        <div className="w-full flex items-center justify-center mb-16">
          <TitleBlock
            preheading="Advanced Features"
            heading={"Why Choose Our 2D Rendering Service"}
            body={
              "Professional 2D renders that bring your architectural plans to life with stunning detail and marketing appeal."
            }
            theme="light"
            orientation="center"
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-100 rounded-full">
                    <feature.icon className="h-8 w-8 text-blue-600" />
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
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-xl bg-blue-50 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-recoleta">
                Professional 2D Rendering Process
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    1
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Plan Review
                  </h4>
                  <p className="text-sm text-slate-600">
                    We analyze your architectural plans and requirements
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    2
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    3D Modeling
                  </h4>
                  <p className="text-sm text-slate-600">
                    Create accurate 3D models from your plans
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    3
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    2D Rendering
                  </h4>
                  <p className="text-sm text-slate-600">
                    Generate high-quality 2D renders with lighting and materials
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    4
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Final Delivery
                  </h4>
                  <p className="text-sm text-slate-600">
                    Receive polished renders ready for marketing
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
