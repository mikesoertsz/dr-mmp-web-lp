"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";

export function SocialProofSection() {
  const testimonials = [
    {
      name: "Ricardo Silva",
      role: "Property Developer",
      location: "Lisbon",
      content: "The 3D renders were absolutely stunning and helped us sell 80% of our development before construction was complete. Incredible quality and attention to detail.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      name: "Marina Costa",
      role: "Architect",
      location: "Porto",
      content: "Working with Portugal Properties has transformed how we present our designs to clients. The photorealistic quality is unmatched in the Portuguese market.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      name: "Paulo Mendes",
      role: "Real Estate Investor",
      location: "Algarve",
      content: "These 3D renders helped secure funding for our luxury resort project. Investors could finally see our vision, and we closed the deal within weeks.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Leading Developers
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            See how our 3D renders help developers, architects, and investors bring their visions to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-700 dark:text-slate-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-600 text-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join 100+ Successful Projects</h3>
            <p className="text-blue-200 mb-6">
              Properties with our 3D renders achieve 65% higher pre-sales and 20% premium pricing.
            </p>
            <div className="flex justify-center space-x-8">
              <div>
                <div className="text-2xl font-bold">65%</div>
                <div className="text-blue-200 text-sm">Higher Pre-Sales</div>
              </div>
              <div>
                <div className="text-2xl font-bold">20%</div>
                <div className="text-blue-200 text-sm">Premium Pricing</div>
              </div>
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-blue-200 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}