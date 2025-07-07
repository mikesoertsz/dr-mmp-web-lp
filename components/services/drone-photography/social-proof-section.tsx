"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, User, MapPin } from "lucide-react";

export function SocialProofSection() {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Property Owner",
      location: "Porto",
      rating: 5,
      text: "The aerial photography completely transformed how buyers viewed our property. We received 40% more inquiries and sold within 3 weeks of listing.",
      avatar: "MS"
    },
    {
      name: "João Pereira",
      role: "Real Estate Agent",
      location: "Lisbon",
      rating: 5,
      text: "Professional service from start to finish. The drone footage showcased the property's location advantages beautifully. Highly recommend for premium listings.",
      avatar: "JP"
    },
    {
      name: "Sarah Johnson",
      role: "International Buyer",
      location: "Algarve",
      rating: 5,
      text: "As an international buyer, the aerial photography helped us understand the property's surroundings and made us confident in our purchase decision.",
      avatar: "SJ"
    },
    {
      name: "Carlos Silva",
      role: "Developer",
      location: "Cascais",
      rating: 5,
      text: "Outstanding quality and professionalism. The aerial content has become essential for our property marketing. Fast delivery and excellent results.",
      avatar: "CS"
    }
  ];

  const stats = [
    { number: "500+", label: "Properties Captured" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "73%", label: "More Online Views" },
    { number: "28%", label: "Faster Sales" }
  ];

  const clients = [
    "Century 21",
    "RE/MAX",
    "Realty One Group",
    "Coldwell Banker",
    "Keller Williams",
    "ERA Portugal"
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-[1780px]">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-blue-600 border-blue-200 mb-6">
            Client Success
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-recoleta">
            What Our Clients
            <span className="block text-blue-600">Are Saying</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real results from property owners, agents, and buyers who've experienced the impact of professional aerial photography.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-3 w-3 text-slate-400" />
                      <span className="text-xs text-slate-500">{testimonial.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <Quote className="h-6 w-6 text-blue-200 mb-4" />
                <p className="text-slate-600 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trusted by Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-8">
            Trusted by Leading Real Estate Agencies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clients.map((client, index) => (
              <div key={index} className="text-slate-600 font-medium">
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-xl bg-slate-50 max-w-3xl mx-auto">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-recoleta">
                Join Our Satisfied Clients
              </h3>
              <p className="text-slate-600 mb-8">
                Experience the difference professional aerial photography makes for your property marketing.
              </p>
              <div className="text-sm text-slate-500">
                Average rating: 4.9/5 based on 200+ reviews
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}