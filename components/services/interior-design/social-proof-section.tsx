"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function SocialProofSection() {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Real Estate Agent, Lisbon",
      avatar: "/img/testimonials/maria.jpg",
      rating: 5,
      quote: "Virtual staging helped us sell a vacant apartment 40% faster than similar unstaged properties. The buyers could actually see themselves living there.",
      result: "Sold 40% faster"
    },
    {
      name: "João Costa",
      role: "Property Developer, Porto",
      avatar: "/img/testimonials/joao.jpg",
      rating: 5,
      quote: "We use virtual staging for all our new developments. It's cost-effective and allows us to show different design options to appeal to various buyer preferences.",
      result: "15% higher sale prices"
    },
    {
      name: "Ana Silva",
      role: "Luxury Property Specialist, Cascais",
      avatar: "/img/testimonials/ana.jpg",
      rating: 5,
      quote: "The quality is incredible. International buyers love seeing the lifestyle potential. Virtual staging has become essential for luxury property marketing.",
      result: "More international interest"
    }
  ];

  const stats = [
    { number: "500+", label: "Properties Staged", sublabel: "Virtual staging projects completed" },
    { number: "73%", label: "Faster Sales", sublabel: "Average reduction in time on market" },
    { number: "€15K", label: "Average Savings", sublabel: "Compared to traditional staging" },
    { number: "98%", label: "Client Satisfaction", sublabel: "Would recommend our services" }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Proven Results & Client Success Stories
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have transformed their property marketing with our virtual staging services.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  {stat.sublabel}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-purple-400 mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-slate-600 dark:text-slate-400 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-8">
            Trusted by Leading Real Estate Professionals
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Add client logos here when available */}
            <div className="text-sm text-slate-500 dark:text-slate-400">
              ERA • RE/MAX • Century 21 • Realty One • Sotheby's International
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}