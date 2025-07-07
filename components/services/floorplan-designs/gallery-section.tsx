"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Floorplans" },
    { id: "apartment", label: "Apartments" },
    { id: "house", label: "Houses" },
    { id: "villa", label: "Villas" },
    { id: "commercial", label: "Commercial" }
  ];

  const galleryImages = [
    {
      id: 1,
      category: "apartment",
      src: "https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      alt: "Modern apartment floorplan"
    },
    {
      id: 2,
      category: "house",
      src: "https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      alt: "Two-story house floorplan"
    },
    {
      id: 3,
      category: "villa",
      src: "https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      alt: "Luxury villa floorplan"
    },
    {
      id: 4,
      category: "apartment",
      src: "https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      alt: "Studio apartment floorplan"
    },
    {
      id: 5,
      category: "commercial",
      src: "https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      alt: "Office space floorplan"
    },
    {
      id: 6,
      category: "house",
      src: "https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      alt: "Family home floorplan"
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
            Our Floorplan Portfolio
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Professional floorplans that help buyers understand property layouts instantly
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
            <div key={image.id} className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-white p-4 shadow-md">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Professional Floorplans?</h3>
            <p className="text-blue-200 mb-6">
              Get accurate, beautiful floorplans that help buyers visualize your property layout.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              Order Your Floorplan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}