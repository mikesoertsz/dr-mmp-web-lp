"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";
import PromoCodeForm from "./PromoCodeForm";

const BASE_PRICE = 3899;
const MAX_PRICE = 15000;
const TIERS = ["T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10+"];

function calculatePrice(tier: string): number {
  const tierNumber = parseInt(tier.replace("T", ""));
  const price = BASE_PRICE + (tierNumber - 3) * 1000;
  return Math.min(price, MAX_PRICE);
}

export default function PackagePricingForm() {
  const [isPromoValid, setIsPromoValid] = useState(false);
  const [showPromoError, setShowPromoError] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string>("T3");
  const [promoDiscount, setPromoDiscount] = useState<number>(0);

  const currentPrice = promoDiscount
    ? Math.max(
        calculatePrice(selectedTier) -
          Math.round((calculatePrice(selectedTier) * promoDiscount) / 100),
        0
      )
    : calculatePrice(selectedTier);
  const savings = calculatePrice(selectedTier) - currentPrice;

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-3xl font-bold text-slate-900">
          Complete Package Pricing
        </CardTitle>
        <p className="text-slate-600">
          Get all four services at one incredible price
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Select Tier */}
        <div className="text-center mb-4">
          <Select value={selectedTier} onValueChange={setSelectedTier}>
            <SelectTrigger className="w-full max-w-xs mx-auto">
              <SelectValue placeholder="Select Tier" />
            </SelectTrigger>
            <SelectContent>
              {TIERS.map((tier) => (
                <SelectItem key={tier} value={tier}>
                  {tier}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Display */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="text-4xl font-bold text-slate-900">
              €{currentPrice.toLocaleString()}
            </div>
            {!isPromoValid && (
              <div className="text-lg text-slate-500 line-through">
                €{calculatePrice(selectedTier).toLocaleString()}
              </div>
            )}
          </div>
          {isPromoValid && (
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800"
              >
                <Tag className="h-3 w-3 mr-1" />
                Promo Applied: Save €{savings}
              </Badge>
            </div>
          )}
        </div>

        {/* Promo Code Input */}
        <PromoCodeForm
          onValid={(discount: number) => {
            setPromoDiscount(discount);
            setIsPromoValid(true);
            setShowPromoError(false);
          }}
          onInvalid={() => {
            setPromoDiscount(0);
            setIsPromoValid(false);
            setShowPromoError(true);
          }}
          isPromoValid={isPromoValid}
          showPromoError={showPromoError}
        />

        {/* Package Summary */}
        <div className="bg-slate-50 rounded-lg p-4 mt-6">
          <h4 className="font-medium text-slate-900 mb-2">Package Includes:</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• Professional 2D Photography (Interior & Exterior)</li>
            <li>• Photorealistic 3D Renders (Multiple Angles)</li>
            <li>• Interior 3D Staging (Virtual Furniture & Decor)</li>
            <li>• AI-Powered Animations (Social Media Ready)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
