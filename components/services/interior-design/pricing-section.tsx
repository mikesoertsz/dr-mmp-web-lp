"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { AddToCartButton } from "@/components/ui/add-to-cart-button";
import { useTranslation } from "@/lib/translations";
import interiorDesignContent from "@/data/content/interior-design.json";

export function PricingSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Interior Design & Virtual Staging Packages
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Professional design services tailored to your property's needs and target market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {interiorDesignContent.packages.map((pkg) => (
            <Card key={pkg.id} className={`relative ${pkg.popular ? 'border-purple-500 shadow-purple-200 dark:shadow-purple-900/50' : 'border-slate-200 dark:border-slate-700'} shadow-lg hover:shadow-xl transition-all duration-300`}>
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                  {t("serviceContent.packages.mostPopular")}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                  {pkg.name}
                </CardTitle>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  €{pkg.price.toLocaleString()}
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {pkg.description}
                </p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.slice(0, 6).map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <AddToCartButton
                  serviceType="interior-design"
                  packageName={`Interior Design - ${pkg.name}`}
                  price={pkg.price}
                  description={pkg.description}
                  className={`w-full ${pkg.popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-slate-600 hover:bg-slate-700'}`}
                >
                  {t("serviceContent.packages.selectPackage")}
                </AddToCartButton>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Need something custom? All packages can be tailored to your specific requirements.
          </p>
          <Button variant="outline" size="lg">
            {t("serviceContent.hero.getQuote")}
          </Button>
        </div>
      </div>
    </section>
  );
}