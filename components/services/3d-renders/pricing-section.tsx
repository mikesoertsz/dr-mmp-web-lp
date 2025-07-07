"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";
import { getServicePackages } from "@/lib/pricing";
import { AddToCartButton } from "@/components/ui/add-to-cart-button";

export function PricingSection() {
  const packages = getServicePackages("3d-renders");

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            3D Rendering Packages
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Professional 3D visualization for every project size and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.popular ? 'border-blue-500 shadow-lg scale-105' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                <div className="text-3xl font-bold text-blue-600">
                  €{pkg.price}
                </div>
                <p className="text-slate-600 dark:text-slate-400">{pkg.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <AddToCartButton
                  serviceType="3d-renders"
                  packageName={`3D Renders - ${pkg.name}`}
                  price={pkg.price}
                  description={pkg.description}
                  className={`w-full ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-600 hover:bg-slate-700'}`}
                />
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-md max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Need Custom 3D Solutions?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Large developments, complex projects, or unique requirements? We offer custom 3D rendering solutions.
            </p>
            <Button variant="outline">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}