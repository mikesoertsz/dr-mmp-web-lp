"use client";

import { Button } from "@/components/ui/button";
import { Check, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface AddToCartButtonProps {
  serviceType: string;
  packageName: string;
  price: number;
  description: string;
  propertyId?: string;
  addOns?: Array<{
    id: string;
    name: string;
    price: number;
  }>;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
}

export function AddToCartButton({
  serviceType,
  packageName,
  price,
  description,
  propertyId,
  addOns,
  className,
  variant = "default",
  size = "default",
  children,
}: AddToCartButtonProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    // Simple mock functionality - in a real app this would add to cart
    console.log("Adding to cart:", { packageName, price, description, serviceType });
    
    setIsAdded(true);

    // Reset the "added" state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      onClick={handleAddToCart}
      disabled={isAdded}
    >
      {isAdded ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingCart className="mr-2 h-4 w-4" />
          {children || "Add to Cart"}
        </>
      )}
    </Button>
  );
}