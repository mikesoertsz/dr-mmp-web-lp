"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export function GallerySection() {
  const [activeStyle, setActiveStyle] = useState(0);

  const designStyles = [
    {
      name: "Modern Contemporary",
      description: "Clean lines, neutral colors, and minimalist aesthetics",
      target: "Urban professionals and young families",
      image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg"
    },
    {
      name: "Luxury Traditional",
      description: "Classic elegance with rich textures and sophisticated colors",
      target: "Luxury buyers and established families",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
    },
    {
      name: "Scandinavian",
      description: "Light, airy spaces with natural materials and cozy functionality",
      target: "Design-conscious millennials",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg"
    },
    {
      name: "Mediterranean",
      description: "Warm, inviting spaces reflecting Portuguese coastal lifestyle",
      target: "International buyers and retirees",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg"
    }
  ];

  const beforeAfterExamples = [
    {
      before: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg",
      after: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
      room: "Living Room",
      improvement: "Increased perceived value by 15%"
    },
    {
      before: "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg",
      after: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      room: "Master Bedroom",
      improvement: "Faster buyer engagement"
    },
    {
      before: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg",
      after: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      room: "Kitchen",
      improvement: "Enhanced lifestyle appeal"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Design Styles & Results Gallery
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Explore our portfolio of virtual staging transformations and see how different design styles appeal to various buyer demographics.
          </p>
        </div>

        {/* Design Styles Showcase */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Popular Design Styles
          </h3>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {designStyles.map((style, index) => (
              <Button
                key={index}
                variant={activeStyle === index ? "default" : "outline"}
                onClick={() => setActiveStyle(index)}
                className={activeStyle === index ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                {style.name}
              </Button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative h-64 md:h-96">
                <Image
                  src={designStyles[activeStyle].image}
                  alt={designStyles[activeStyle].name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {designStyles[activeStyle].name}
                  </h4>
                  <Badge variant="secondary">
                    Popular Choice
                  </Badge>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  {designStyles[activeStyle].description}
                </p>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                  Perfect for: {designStyles[activeStyle].target}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Before/After Transformations */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Before & After Transformations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beforeAfterExamples.map((example, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  {/* Before Image */}
                  <div className="relative h-40">
                    <Image
                      src={example.before}
                      alt={`${example.room} before staging`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge variant="destructive">Before</Badge>
                    </div>
                  </div>
                  
                  {/* After Image */}
                  <div className="relative h-40">
                    <Image
                      src={example.after}
                      alt={`${example.room} after staging`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-green-600">After</Badge>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                    {example.room}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {example.improvement}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}