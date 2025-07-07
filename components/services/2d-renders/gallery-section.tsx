"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Download, Maximize2 } from "lucide-react";
import Image from "next/image";
import { Wrapper, InnerWrap } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "luxury", name: "Luxury" },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Modern Villa Exterior",
      category: "residential",
      type: "Exterior Render",
      image: "/placeholder-render-1.jpg",
      description: "Contemporary villa with clean lines and glass facades",
    },
    {
      id: 2,
      title: "Luxury Apartment Living Room",
      category: "luxury",
      type: "Interior Render",
      image: "/placeholder-render-2.jpg",
      description: "High-end apartment interior with modern furnishings",
    },
    {
      id: 3,
      title: "Office Complex",
      category: "commercial",
      type: "Exterior Render",
      image: "/placeholder-render-3.jpg",
      description: "Professional office building with landscaping",
    },
    {
      id: 4,
      title: "Townhouse Development",
      category: "residential",
      type: "Exterior Render",
      image: "/placeholder-render-4.jpg",
      description: "Row of modern townhouses with varied facades",
    },
    {
      id: 5,
      title: "Penthouse Terrace",
      category: "luxury",
      type: "Exterior Render",
      image: "/placeholder-render-5.jpg",
      description: "Rooftop terrace with city views and premium finishes",
    },
    {
      id: 6,
      title: "Shopping Center",
      category: "commercial",
      type: "Exterior Render",
      image: "/placeholder-render-6.jpg",
      description: "Modern retail complex with outdoor spaces",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <Wrapper className="bg-white">
      <InnerWrap>
        <div className="w-full flex items-center justify-center mb-16">
          <TitleBlock
            preheading="Portfolio Gallery"
            heading="2D Rendering Showcase"
            body="Explore our portfolio of stunning 2D renders that have helped properties sell faster and generate more interest."
            theme="light"
            orientation="center"
          />
        </div>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`${
                selectedCategory === category.id
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "border-slate-300 hover:border-blue-600"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>
        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] bg-slate-200 relative">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      <Eye className="h-12 w-12 text-blue-400 mx-auto mb-2" />
                      <p className="text-blue-600 font-medium">
                        2D Render Sample
                      </p>
                    </div>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                    <Button
                      size="sm"
                      className="bg-white text-slate-900 hover:bg-slate-100"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-slate-900"
                    >
                      <Maximize2 className="h-4 w-4 mr-2" />
                      Expand
                    </Button>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">{item.type}</Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2 font-recoleta">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                    {categories.find((cat) => cat.id === item.category)?.name}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-xl bg-slate-50 max-w-2xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-recoleta">
                Ready to Visualize Your Project?
              </h3>
              <p className="text-slate-600 mb-8">
                Let us create stunning 2D renders that will help your property
                stand out in the market.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
