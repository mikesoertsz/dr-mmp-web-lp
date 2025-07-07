"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Clock, Eye, Heart } from "lucide-react";

export function PainPointsSection() {
  const painPoints = [
    {
      icon: Eye,
      title: "Static Images Don't Tell the Story",
      description: "Traditional photos fail to showcase the flow, scale, and lifestyle potential of properties, leaving buyers struggling to visualize living spaces.",
      impact: "67% fewer inquiries"
    },
    {
      icon: Clock,
      title: "Time-Consuming Property Visits",
      description: "Multiple property viewings waste time for both agents and buyers, especially for out-of-town or international clients.",
      impact: "Average 8 visits needed"
    },
    {
      icon: Heart,
      title: "Lack of Emotional Connection",
      description: "Buyers can't envision themselves in the space, making it harder to justify premium prices or make quick decisions.",
      impact: "40% longer sales cycles"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-[1780px]">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-red-600 border-red-200 mb-6">
            <X className="h-4 w-4 mr-2" />
            Common Challenges
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-recoleta">
            Why Static Property Marketing
            <span className="block text-red-600">Isn't Enough</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Traditional property marketing methods leave money on the table. Here's what happens when properties lack dynamic visual storytelling.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow relative">
              {/* Problem indicator */}
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="h-4 w-4 text-red-600" />
                </div>
              </div>
              
              <CardContent className="p-8 pt-12">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-red-50 rounded-full">
                    <point.icon className="h-8 w-8 text-red-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center font-recoleta">
                  {point.title}
                </h3>
                
                <p className="text-slate-600 text-center leading-relaxed mb-6">
                  {point.description}
                </p>
                
                {/* Impact metric */}
                <div className="text-center pt-4 border-t border-slate-100">
                  <div className="text-sm text-slate-500 mb-1">TYPICAL IMPACT</div>
                  <div className="text-lg font-bold text-red-600">{point.impact}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom statistics */}
        <div className="bg-slate-50 rounded-2xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-recoleta">
              The Cost of Traditional Marketing
            </h3>
            <p className="text-slate-600">
              Properties without immersive visual content face significant disadvantages
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">60%</div>
              <div className="text-sm text-slate-600">Less online engagement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">45%</div>
              <div className="text-sm text-slate-600">Longer time on market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">30%</div>
              <div className="text-sm text-slate-600">Lower final sale price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">8x</div>
              <div className="text-sm text-slate-600">More property visits needed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}