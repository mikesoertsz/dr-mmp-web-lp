"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Camera, Video, Zap, Crown } from "lucide-react";
import { AddToCartButton } from "@/components/ui/add-to-cart-button";

export function PricingSection() {

  const packages = [
    {
      id: "essential",
      name: "Essential",
      price: 299,
      originalPrice: null,
      description: "Perfect for basic property marketing needs",
      icon: Camera,
      popular: false,
      features: [
        "15-20 high-resolution aerial photos",
        "Multiple angles and perspectives",
        "Basic editing and color correction",
        "Web and print-ready formats",
        "48-hour delivery",
        "1 revision round included",
        "Online gallery access"
      ],
      ideal: "Small residential properties, apartments"
    },
    {
      id: "professional",
      name: "Professional",
      price: 499,
      originalPrice: 599,
      description: "Most popular choice for premium listings",
      icon: Video,
      popular: true,
      features: [
        "25-30 high-resolution aerial photos",
        "2-3 minute cinematic video",
        "Advanced editing and enhancement",
        "Multiple flight altitudes",
        "Property highlight techniques",
        "24-hour delivery",
        "2 revision rounds included",
        "Raw files included",
        "Social media formats"
      ],
      ideal: "Houses, villas, premium properties"
    },
    {
      id: "premium",
      name: "Premium",
      price: 799,
      originalPrice: null,
      description: "Complete aerial marketing package",
      icon: Crown,
      popular: false,
      features: [
        "40+ high-resolution aerial photos",
        "5-minute cinematic video",
        "360° panoramic shots",
        "Twilight photography (if scheduled)",
        "Advanced post-production",
        "Same-day delivery available",
        "Unlimited revisions",
        "Full raw file package",
        "Custom video editing",
        "Marketing consultation included"
      ],
      ideal: "Luxury properties, estates, commercial"
    }
  ];

  const addOns = [
    { name: "Rush Delivery (12 hours)", price: 149 },
    { name: "Twilight Photography", price: 199 },
    { name: "Interior Aerial Shots", price: 99 },
    { name: "Additional Video Minutes", price: 75 },
    { name: "360° Virtual Tour Integration", price: 299 },
    { name: "Social Media Content Package", price: 129 }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-[1780px]">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-blue-600 border-blue-200 mb-6">
            Transparent Pricing
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-recoleta">
            Professional Drone Photography
            <span className="block text-blue-600">Packages</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the perfect package for your property marketing needs. All packages include professional editing and fast delivery.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id} 
              className={`border-0 shadow-lg hover:shadow-xl transition-shadow relative ${
                pkg.popular ? 'ring-2 ring-blue-600 scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full ${pkg.popular ? 'bg-blue-100' : 'bg-slate-100'}`}>
                    <pkg.icon className={`h-8 w-8 ${pkg.popular ? 'text-blue-600' : 'text-slate-600'}`} />
                  </div>
                </div>
                <CardTitle className="text-2xl font-recoleta">{pkg.name}</CardTitle>
                <p className="text-slate-600 text-sm">{pkg.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Pricing */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-slate-900">€{pkg.price}</span>
                    {pkg.originalPrice && (
                      <span className="text-xl text-slate-400 line-through">€{pkg.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500">Per property session</p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Ideal for */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-500 mb-2">IDEAL FOR:</p>
                  <p className="text-sm font-medium text-slate-700">{pkg.ideal}</p>
                </div>

                {/* CTA Button */}
                <AddToCartButton
                  serviceType="drone-photography"
                  packageName={`Drone Photography - ${pkg.name}`}
                  price={pkg.price}
                  description={pkg.description}
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-slate-900 hover:bg-slate-800'
                  }`}
                  size="lg"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center font-recoleta">
            Optional Add-ons
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {addOns.map((addon, index) => (
              <Card key={index} className="border border-slate-200">
                <CardContent className="p-4 flex items-center justify-between">
                  <span className="text-slate-700">{addon.name}</span>
                  <span className="font-semibold text-slate-900">+€{addon.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom guarantees */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="p-3 bg-green-100 rounded-full w-fit mx-auto">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-slate-900">100% Satisfaction</h4>
            <p className="text-sm text-slate-600">We guarantee you'll love the results or we'll make it right</p>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-slate-900">Fast Delivery</h4>
            <p className="text-sm text-slate-600">Professional results delivered within 24-48 hours</p>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-purple-100 rounded-full w-fit mx-auto">
              <Crown className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-slate-900">Professional Quality</h4>
            <p className="text-sm text-slate-600">Licensed pilots, insured flights, premium equipment</p>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            All prices exclude 23% VAT. Travel fees may apply for locations outside our standard service areas.
          </p>
        </div>
      </div>
    </section>
  );
}