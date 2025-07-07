"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Eye } from "lucide-react";

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Tours" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "luxury", label: "Luxury" },
    { id: "vacation", label: "Vacation Rentals" }
  ];

  const tours = [
    {
      id: 1,
      category: "luxury",
      title: "Luxury Villa - Cascais",
      description: "5-bedroom villa with ocean views",
      thumbnail: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      views: "2.3k"
    },
    {
      id: 2,
      category: "residential",
      title: "Modern Apartment - Lisbon",
      description: "2-bedroom apartment in city center",
      thumbnail: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      views: "1.8k"
    },
    {
      id: 3,
      category: "commercial",
      title: "Office Space - Porto",
      description: "Modern office building",
      thumbnail: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      views: "950"
    },
    {
      id: 4,
      category: "vacation",
      title: "Beach House - Algarve",
      description: "Vacation rental with pool",
      thumbnail: "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      views: "3.1k"
    },
    {
      id: 5,
      category: "residential",
      title: "Family Home - Braga",
      description: "4-bedroom family house",
      thumbnail: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      views: "1.2k"
    },
    {
      id: 6,
      category: "luxury",
      title: "Penthouse - Funchal",
      description: "Luxury penthouse with terrace",
      thumbnail: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      views: "2.7k"
    }
  ];

  const filteredTours = selectedCategory === "all" 
    ? tours 
    : tours.filter(tour => tour.category === selectedCategory);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Virtual Tour Portfolio
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Explore our collection of immersive virtual tours across different property types
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="group relative bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={tour.thumbnail}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">
                    <Play className="mr-2 h-4 w-4" />
                    Take Tour
                  </Button>
                </div>
                <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
                  <Eye className="h-3 w-3" />
                  <span>{tour.views}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{tour.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{tour.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Your Virtual Tour?</h3>
            <p className="text-blue-200 mb-6">
              Give buyers the immersive experience they expect in today's digital property market.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              Start Virtual Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}