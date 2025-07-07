"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Camera,
  Layout,
  Image,
  Cuboid,
  Footprints,
  Film,
  Bone as Drone,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "@/lib/translations";
import { pricing } from "@/lib/pricing";
import Link from "next/link";
import { InnerWrap, Wrapper } from "../(shared)/atoms";
import { TitleBlock } from "../(shared)/titleblock";

type OtherServicesContentType = {
  title: string;
  description: string;
};

const content: OtherServicesContentType = {
  title: "Complete Property Marketing Solutions",
  description:
    "Beyond AI animations, we offer a full suite of professional services to showcase your property perfectly.",
};

const icons = {
  camera: Camera,
  layout: Layout,
  image: Image,
  cuboid: Cuboid,
  footprints: Footprints,
  film: Film,
  drone: Drone,
};

const iconSize = 16;

export default function OtherServicesSection() {
  const { t } = useTranslation();

  return (
    <Wrapper className="py-12 md:pt-12 md:pb-32 bg-brand-b2">
      <InnerWrap className="flex flex-col gap-8 h-full min-h-[500px]">
        <div className="w-full h-full flex items-start justify-start">
          <TitleBlock
            preheading={t("otherServices.title")}
            heading={t("otherServices.title")}
            theme="light"
            orientation="left"
          />
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {Object.entries(pricing.services)
            .filter(([serviceId]) => serviceId !== "3d-animations")
            .map(([serviceId, service], index) => {
              const IconComponent = icons[service.icon as keyof typeof icons];
              const popularPackage =
                service.packages.find((pkg) => pkg.popular) ||
                service.packages[0];

              return (
                <li key={index}>
                  <Card className="group bg-brand-b2 rounded-2xl overflow-hidden flex flex-col">
                    <CardHeader className="text-left pb-4">
                      <div className="mb-3 flex items-center justify-start">
                        {IconComponent && (
                          <IconComponent
                            size={iconSize}
                            className="text-brand-secondary"
                          />
                        )}
                      </div>
                      <CardTitle className="text-xl subpixel-antialiased font-thin text-brand-primary font-recoleta">
                        {t(`services.${serviceId.replace("-", "")}.name`)}
                      </CardTitle>
                      <p className="text-sm text-brand-secondary leading-relaxed">
                        {t(
                          `services.${serviceId.replace("-", "")}.description`
                        )}
                      </p>
                    </CardHeader>

                    <CardContent className="flex-grow">
                      <div className="text-left mb-4">
                        <div className="text-2xl font-bold text-blue-600">
                          From €{popularPackage.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-slate-500">
                          {popularPackage.name}
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {popularPackage.features
                          .slice(0, 3)
                          .map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <CheckCircle
                                size={iconSize}
                                className="text-brand-secondary shrink-0 mt-1"
                              />
                              <span className="text-xs text-slate-600 dark:text-slate-400">
                                {feature}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </CardContent>

                    <CardFooter className="pt-0">
                      <Link href={`/services/${serviceId}`} className="w-full">
                        <button className="w-full text-brand-secondary hover:text-brand-primary transition-colors flex items-center justify-start">
                          Learn More
                          <ArrowRight
                            size={iconSize}
                            className="ml-2 transform transition-transform group-hover:translate-x-1 text-brand-secondary"
                          />
                        </button>
                      </Link>
                    </CardFooter>
                  </Card>
                </li>
              );
            })}
        </ul>
      </InnerWrap>
    </Wrapper>
  );
}
