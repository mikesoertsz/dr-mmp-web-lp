"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Video, Eye, Download } from "lucide-react";

export function GallerySection() {
  const portfolioItems = [
    {
      type: "photo",
      title: "Coastal Villa - Algarve",
      description: "Stunning oceanfront property showcasing beach access and surrounding landscape",
      category: "Residential"
    },
    {
      type: "video",
      title: "Historic Porto Townhouse",
      description: "Cinematic aerial tour revealing the property's connection to the historic city center",
      category: "Heritage"
    },
    {
      type: "photo",
      title: "Modern Apartment Complex - Lisbon",
      description: "Contemporary development highlighting amenities and urban connectivity",
      category: "Commercial"
    },
    {
      type: "video",
      title: "Mountain Retreat - Central Portugal",
      description: "Dramatic aerial footage showcasing natural surroundings and privacy",
      category: "Rural"
    },
    {
      type: "photo",
      title: "Luxury Estate - Cascais",
      description: "Comprehensive aerial photography revealing extensive grounds and facilities",
      category: "Luxury"
    },
    {
      type: "video",
      title: "Vineyard Property - Douro Valley",
      description: "Sweeping aerial views of terraced vineyards and river valley location",
      category: "Agricultural"
    }
  ];

  const categories = ["All", "Residential", "Commercial", "Luxury", "Heritage"];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-[1780px]">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-blue-600 border-blue-200 mb-6">
            Our Portfolio
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-recoleta">
            Stunning Aerial Photography
            <span className="block text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our collection of professional aerial photography and videography showcasing properties across Portugal.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button 
              key={index} 
              variant={index === 0 ? "default" : "outline"} 
              size="sm"
              className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group overflow-hidden">
              <div className="relative">
                {/* Placeholder for image/video */}
                <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  {item.type === "photo" ? (
                    <Camera className="h-12 w-12 text-slate-500" />
                  ) : (
                    <Video className="h-12 w-12 text-slate-500" />
                  )}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant={item.type === "photo" ? "default" : "secondary"} className="text-xs">
                    {item.type === "photo" ? "Photo" : "Video"}
                  </Badge>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90 text-xs">
                    {item.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-recoleta">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-sky-700 text-white max-w-2xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold mb-4 font-recoleta">
                Ready to Showcase Your Property?
              </h3>
              <p className="text-blue-100 mb-8">
                Join hundreds of property owners who've elevated their marketing with professional aerial photography.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                  View Full Portfolio
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                  Get Your Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}