"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "interior", label: "Interior" },
    { id: "exterior", label: "Exterior" },
    { id: "kitchen", label: "Kitchen" },
    { id: "bedroom", label: "Bedroom" }
  ];

  const galleryImages = [
    {
      id: 1,
      category: "exterior",
      src: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      alt: "Modern villa exterior"
    },
    {
      id: 2,
      category: "interior",
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      alt: "Bright living room"
    },
    {
      id: 3,
      category: "kitchen",
      src: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      alt: "Modern kitchen"
    },
    {
      id: 4,
      category: "bedroom",
      src: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      alt: "Master bedroom"
    },
    {
      id: 5,
      category: "interior",
      src: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      alt: "Dining area"
    },
    {
      id: 6,
      category: "exterior",
      src: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      alt: "Property exterior view"
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Photography Portfolio
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            See the quality and style that sets our photography apart
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
          {filteredImages.map((image) => (
            <div key={image.id} className="group relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Showcase Your Property?</h3>
            <p className="text-blue-200 mb-6">
              Get professional photography that makes your property stand out and sell faster.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              Book Your Photo Shoot
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}