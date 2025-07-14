"use client";

import { InnerWrap, Wrapper } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/lib/store";
import { Camera, CheckCircle, Cuboid, Film, Palette } from "lucide-react";
import { useState } from "react";
import PackagePricingForm from "./forms/PackagePricingForm";

export default function PackageSection() {
  const [isPromoValid, setIsPromoValid] = useState(false);
  const [showPromoError, setShowPromoError] = useState(false);
  const [selectedTier, setSelectedTier] = useState("T3");
  const { addItem } = useCartStore();

  const BASE_PRICE = 3899;
  const MAX_PRICE = 15000;
  const VALID_PROMO_CODE = "CENTURY2125";

  const calculatePrice = (tier: string) => {
    const tierNumber = parseInt(tier.replace("T", ""));
    const price = BASE_PRICE + (tierNumber - 3) * 1000;
    return Math.min(price, MAX_PRICE);
  };

  const currentPrice = isPromoValid
    ? calculatePrice(selectedTier) - 1000
    : calculatePrice(selectedTier);
  const savings = calculatePrice(selectedTier) - currentPrice;

  const packageServices = [
    {
      id: "2d-photography",
      name: "2D Photography",
      description: "Professional interior and exterior photography",
      icon: Camera,
      features: [
        "Professional DSLR photography",
        "Interior and exterior shots",
        "HDR processing",
        "High-resolution images",
        "Multiple angles and perspectives",
      ],
    },
    {
      id: "3d-renders",
      name: "3D Renders",
      description: "Photorealistic 3D visualizations",
      icon: Cuboid,
      features: [
        "Photorealistic 3D models",
        "Multiple viewing angles",
        "Lighting optimization",
        "Texture and material accuracy",
        "High-quality renderings",
      ],
    },
    {
      id: "interior-staging",
      name: "Interior 3D Staging",
      description: "Virtual furniture and decor placement",
      icon: Palette,
      features: [
        "Virtual furniture placement",
        "Modern decor styling",
        "Multiple room configurations",
        "Lifestyle-focused staging",
        "Realistic material textures",
      ],
    },
    {
      id: "ai-animations",
      name: "AI Animations",
      description: "Dynamic AI-powered property animations",
      icon: Film,
      features: [
        "AI-generated people",
        "Lifestyle scenarios",
        "Cinematic quality",
        "Social media ready",
        "Multiple animation styles",
      ],
    },
  ];

  const handleAddToCart = () => {
    addItem({
      name: "Complete Real Estate Marketing Package",
      price: currentPrice,
      description:
        "2D Photography + 3D Renders + Interior 3D Staging + AI Animations",
      serviceType: "complete-package",
      quantity: 1,
    });
  };

  return (
    <Wrapper
      id="packages"
      className="py-16 from-[#F7F0E8] to-[#FDF6EE] bg-gradient-to-b"
    >
      <InnerWrap className="">
        <div className="flex w-full items-center justify-center mb-12">
          <TitleBlock
            preheading="Complete Solution"
            heading="All-in-One Real Estate Marketing Package"
            body="Everything you need to showcase your property perfectly. Professional photography, 3D renders, interior staging, and AI animations - all in one comprehensive package."
            theme="light"
            orientation="center"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {packageServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="text-center">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {service.name}
                  </CardTitle>
                  <p className="text-sm text-slate-600">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Pricing Section */}
        <PackagePricingForm />
      </InnerWrap>
    </Wrapper>
  );
}
