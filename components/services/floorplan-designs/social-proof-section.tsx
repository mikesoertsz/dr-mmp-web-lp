"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";

export function SocialProofSection() {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Real Estate Agent",
      location: "Lisbon",
      content: "The floorplans are incredibly detailed and professional. My clients love being able to understand the layout before viewing. Sales have increased significantly.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      name: "Ana Silva",
      role: "Property Developer",
      location: "Porto",
      content: "We use Portugal Properties for all our developments. Their floorplans are accurate, beautiful, and help buyers visualize the space perfectly.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      name: "Miguel Santos",
      role: "Property Owner",
      location: "Algarve",
      content: "The floorplan made such a difference in marketing my villa. Buyers could see the flow and layout immediately. Sold within 3 weeks!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Property Professionals
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            See how our floorplans help sell properties faster
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
            <h3 className="text-2xl font-bold mb-4">Join 300+ Satisfied Clients</h3>
            <p className="text-blue-200 mb-6">
              Properties with our floorplans receive 52% more inquiries and sell 25% faster.
            </p>
            <div className="flex justify-center space-x-8">
              <div>
                <div className="text-2xl font-bold">52%</div>
                <div className="text-blue-200 text-sm">More Inquiries</div>
              </div>
              <div>
                <div className="text-2xl font-bold">25%</div>
                <div className="text-blue-200 text-sm">Faster Sales</div>
              </div>
              <div>
                <div className="text-2xl font-bold">99.5%</div>
                <div className="text-blue-200 text-sm">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}