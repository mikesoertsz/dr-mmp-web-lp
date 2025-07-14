"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Camera, Layout, Image, Cuboid, Footprints, Film, Bone as Drone } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { pricing } from "@/lib/pricing";
import { useTranslation } from "@/lib/translations";

const icons = {
  "camera": Camera,
  "layout": Layout,
  "image": Image,
  "cuboid": Cuboid,
  "footprints": Footprints,
  "film": Film,
  "drone": Drone
};

export function PackageGrid() {
  const { addItem } = useCartStore();
  const { t } = useTranslation();

  const handleAddToCart = (pkg: any, serviceId: string) => {
    addItem({
      name: pkg.name,
      price: pkg.price,
      description: pkg.description,
      serviceType: serviceId
    });
  };

  return (
    <div className="space-y-12">
      {Object.entries(pricing.services).map(([serviceId, service]) => (
        <div key={serviceId} className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h2 className="text-lg font-medium text-slate-900 dark:text-slate-100">
              {t(`services.${serviceId.replace('-', '')}.name`)}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm">
              {t(`services.${serviceId.replace('-', '')}.description`)}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.packages.map((pkg) => {
              const IconComponent = icons[service.icon as keyof typeof icons];
              
              return (
                <Card key={pkg.id} className={`relative ${pkg.popular ? 'border-blue-500 shadow-lg' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white text-xs">Most Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-base font-medium">{pkg.name}</CardTitle>
                    <div className="text-2xl font-medium text-blue-600">
                      €{pkg.price.toLocaleString()}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{pkg.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      className={`w-full text-sm ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-600 hover:bg-slate-700'}`}
                      onClick={() => handleAddToCart(pkg, serviceId)}
                    >
                      {t('common.addToCart')}
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}