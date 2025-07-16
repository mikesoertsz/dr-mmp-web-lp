"use client";

import { useState } from "react";
import { ShoppingCart, X, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Simple cart item interface
interface CartItem {
  id: string;
  name: string;
  price: number;
  description: string;
}

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  
  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  const clearCart = () => {
    setItems([]);
    setQuantities({});
  };

  const updateQuantity = (itemId: string, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max(1, (prev[itemId] || 1) + change),
    }));
  };

  const getQuantity = (itemId: string) => quantities[itemId] || 1;

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      return total + item.price * getQuantity(item.id);
    }, 0);
  };

  const currentCurrency = { symbol: '$' };

  return (
    <>
      {/* Cart */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-slate-900 dark:text-slate-100 text-sm">
            Cart
          </h3>
          <div className="flex items-center space-x-2">
            <ShoppingCart className="h-4 w-4 text-slate-600" />
            <Badge variant="secondary" className="text-xs">
              {items.length}
            </Badge>
          </div>
        </div>

        {items.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Your cart is empty
          </p>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <Card key={item.id} className="p-3">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                    className="h-6 w-6 p-0 text-slate-400 hover:text-red-600"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, -1)}
                      className="h-6 w-6 p-0"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm font-medium w-8 text-center">
                      {getQuantity(item.id)}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, 1)}
                      className="h-6 w-6 p-0"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <span className="font-medium text-sm">
                    {currentCurrency?.symbol}
                    {(item.price * getQuantity(item.id)).toLocaleString()}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Cart Footer */}
      {items.length > 0 && (
        <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium text-sm">Total:</span>
            <span className="font-medium text-lg text-blue-600">
              {currentCurrency?.symbol}
              {calculateTotal().toLocaleString()}
            </span>
          </div>
          <div className="space-y-2">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm">
              Checkout
            </Button>
            <Button
              variant="outline"
              className="w-full text-sm"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
