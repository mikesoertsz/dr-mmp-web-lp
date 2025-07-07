"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, MapPin, TrendingUp } from "lucide-react";
import { Wrapper, InnerWrap } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export function SocialProofSection() {
  const testimonials = [
    {
      name: "Ana Rodrigues",
      role: "Property Developer",
      location: "Lisboa",
      rating: 5,
      text: "The 2D renders helped us pre-sell 80% of our development before construction was complete. Incredible marketing tool.",
      avatar: "AR",
      project: "Residential Complex",
    },
    {
      name: "Miguel Costa",
      role: "Real Estate Agent",
      location: "Porto",
      rating: 5,
      text: "Professional quality renders at competitive prices. My clients are always impressed with the presentation materials.",
      avatar: "MC",
      project: "Luxury Apartments",
    },
    {
      name: "Sofia Martins",
      role: "Architect",
      location: "Coimbra",
      rating: 5,
      text: "Perfect for client presentations. The renders accurately represent our designs and help clients visualize the final result.",
      avatar: "SM",
      project: "Commercial Building",
    },
  ];

  const stats = [
    {
      number: "300+",
      label: "Projects Rendered",
      description: "Successfully completed",
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      description: "Rated excellent",
    },
    {
      number: "48h",
      label: "Average Delivery",
      description: "Fast turnaround",
    },
    {
      number: "€299",
      label: "Starting Price",
      description: "Competitive rates",
    },
  ];

  const caseStudies = [
    {
      title: "Residential Development Success",
      metric: "65% Faster Sales",
      description:
        "2D renders helped presell units 65% faster than similar projects without renders",
      icon: TrendingUp,
    },
    {
      title: "Commercial Project Approval",
      metric: "3x More Interest",
      description:
        "Planning committee approved project after seeing professional 2D renders",
      icon: Star,
    },
    {
      title: "Luxury Property Marketing",
      metric: "40% Higher Price",
      description:
        "Premium renders justified higher asking price for luxury development",
      icon: TrendingUp,
    },
  ];

  return (
    <Wrapper className="bg-slate-50">
      <InnerWrap>
        <div className="w-full flex items-center justify-center mb-16">
          <TitleBlock
            preheading="Proven Results"
            heading="Success Stories & Client Testimonials"
            body="See how our 2D rendering services have helped developers, agents, and architects achieve their marketing goals."
            theme="light"
            orientation="center"
          />
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-slate-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-3 w-3 text-slate-400" />
                      <span className="text-xs text-slate-500">
                        {testimonial.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <Quote className="h-6 w-6 text-blue-200 mb-4" />
                <p className="text-slate-600 leading-relaxed italic mb-4">
                  "{testimonial.text}"
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-500">PROJECT TYPE:</span>
                  <p className="text-sm font-medium text-slate-700">
                    {testimonial.project}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center font-recoleta">
            Impact Case Studies
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-green-100 rounded-full">
                      <study.icon className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {study.metric}
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-4">
                    {study.title}
                  </h4>
                  <p className="text-slate-600 text-sm">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Bottom Trust Indicators */}
        <div className="text-center">
          <Card className="border-0 shadow-xl bg-white max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-recoleta">
                Join Our Satisfied Clients
              </h3>
              <p className="text-slate-600 mb-6">
                Experience the difference professional 2D renders make for your
                property marketing success.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-500">
                <div>
                  <div className="font-semibold text-slate-900">
                    Fast Delivery
                  </div>
                  <div>24-48 hour turnaround</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    Quality Guarantee
                  </div>
                  <div>100% satisfaction or refund</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    Professional Service
                  </div>
                  <div>Certified rendering specialists</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
