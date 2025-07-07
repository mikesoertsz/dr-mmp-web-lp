"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, TrendingUp, Users, Clock, Heart, Globe } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Property Value Perception",
      description: "3D animations showcase premium features and lifestyle potential, justifying higher asking prices and faster sales.",
      metric: "23% higher sale prices"
    },
    {
      icon: Users,
      title: "Attract More Qualified Buyers",
      description: "Immersive content attracts serious buyers who can visualize themselves in the space, reducing time-wasters.",
      metric: "3x more qualified leads"
    },
    {
      icon: Clock,
      title: "Reduce Sales Cycle Time",
      description: "Buyers make faster decisions when they can experience the property virtually, reducing lengthy negotiation periods.",
      metric: "40% faster sales"
    },
    {
      icon: Heart,
      title: "Create Emotional Connections",
      description: "Dynamic animations help buyers envision their lifestyle in the space, creating emotional purchase decisions.",
      metric: "85% higher engagement"
    },
    {
      icon: Globe,
      title: "Reach International Markets",
      description: "Virtual tours eliminate geographic barriers, allowing international buyers to experience properties remotely.",
      metric: "60% more global reach"
    },
    {
      icon: Check,
      title: "Stand Out from Competition",
      description: "Professional 3D content differentiates your listings in crowded markets and builds premium brand perception.",
      metric: "90% more memorable"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto max-w-[1780px]">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-green-600 border-green-200 mb-6">
            <Check className="h-4 w-4 mr-2" />
            Proven Benefits
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-recoleta">
            Transform Your Property Marketing
            <span className="block text-green-600">With 3D Animations</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience the measurable impact of immersive 3D animations on your property sales performance and buyer engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-green-100 rounded-full">
                    <benefit.icon className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center font-recoleta">
                  {benefit.title}
                </h3>
                
                <p className="text-slate-600 text-center leading-relaxed mb-6">
                  {benefit.description}
                </p>
                
                {/* Benefit metric */}
                <div className="text-center pt-4 border-t border-slate-100">
                  <div className="text-sm text-slate-500 mb-1">AVERAGE IMPROVEMENT</div>
                  <div className="text-lg font-bold text-green-600">{benefit.metric}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Story Highlight */}
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <div className="text-center mb-8">
            <Badge className="bg-green-600 text-white mb-4">
              Success Story
            </Badge>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-recoleta">
              Real Results from 3D Animation Marketing
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-xl font-semibold text-slate-900 mb-4">
                Luxury Development in Cascais
              </h4>
              <p className="text-slate-600 mb-6">
                A premium residential development used our 3D animations for pre-sales marketing, 
                resulting in 85% of units sold before construction completion.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">Pre-sold 85% of units</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">30% premium pricing achieved</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">International buyer interest increased 200%</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-sm text-slate-600">Units Pre-Sold</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
                <div className="text-sm text-slate-600">Price Premium</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">200%</div>
                <div className="text-sm text-slate-600">More International Interest</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">6mo</div>
                <div className="text-sm text-slate-600">Ahead of Schedule</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}