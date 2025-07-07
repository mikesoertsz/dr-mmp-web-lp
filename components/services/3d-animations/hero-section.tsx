"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Zap, Camera, Video } from "lucide-react";

export function HeroSection() {
  const features = [
    "AI-Powered Animation Technology",
    "Cinematic 3D Walkthroughs", 
    "Virtual Reality Compatible",
    "Professional Video Production"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto max-w-[1780px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <Badge variant="outline" className="text-purple-600 border-purple-200 mb-6">
              <Zap className="h-4 w-4 mr-2" />
              AI-Powered Animations
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-recoleta">
              3D Animations &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Virtual Tours
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Bring your properties to life with cinematic 3D animations and immersive virtual walkthroughs. 
              Showcase lifestyle possibilities and create emotional connections with potential buyers.
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo Reel
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 hover:border-purple-600">
                Get Quote
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-slate-200">
              <div>
                <div className="text-2xl font-bold text-slate-900">200+</div>
                <div className="text-sm text-slate-600">Animations Created</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">4K</div>
                <div className="text-sm text-slate-600">Ultra HD Quality</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">VR</div>
                <div className="text-sm text-slate-600">Ready Output</div>
              </div>
            </div>
          </div>

          {/* Right Content - Video Preview */}
          <div className="relative">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 relative">
                {/* Placeholder for video/animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="h-10 w-10 text-white ml-1" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">3D Animation Preview</h3>
                    <p className="text-slate-600">Click to watch sample walkthrough</p>
                  </div>
                </div>
                
                {/* Overlay badges */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-600 text-white">
                    <Video className="h-3 w-3 mr-1" />
                    4K Quality
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-slate-900">
                    <Camera className="h-3 w-3 mr-1" />
                    VR Compatible
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Floating cards */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">85%</div>
                  <div className="text-xs text-slate-600">More Engagement</div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute -top-6 -right-6 bg-white shadow-xl">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">3D</div>
                  <div className="text-xs text-slate-600">Walkthrough</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
}