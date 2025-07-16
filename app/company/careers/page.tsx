import OpenRolesSection from "@/components/careers/open-roles-section";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Euro, MapPin, Palette } from "lucide-react";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Careers - Join Our Creative Team | Market My Properties",
  description:
    "Join our network of talented freelance photographers, interior designers, 3D artists, and videographers. Work on exciting real estate projects with flexible schedules and competitive compensation.",
};

export default function CareersPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col text-center items-start justify-start px-10 mx-auto max-w-6xl pb-24 antialiased">
        <div className="text-center mb-16 mt-8">
          <h1 className="text-4xl font-extrabold text-stone-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Join Our Creative Network
          </h1>
          <p className="mt-6 text-xl text-center mx-auto">
            We&apos;re building a network of talented freelance professionals
            who are passionate about real estate marketing and visual
            storytelling. Work on exciting projects with flexible schedules and
            competitive compensation.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-10 w-10 text-stone-600 mx-auto mb-4" />
                <h3 className="font-semibold text-stone-900 mb-2">
                  Flexible Schedule
                </h3>
                <p className="text-stone-600 text-sm">
                  Work when it suits you with flexible project timelines
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Euro className="h-10 w-10 text-stone-600 mx-auto mb-4" />
                <h3 className="font-semibold text-stone-900 mb-2">
                  Competitive Rates
                </h3>
                <p className="text-stone-600 text-sm">
                  Fair compensation based on project scope and complexity
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-10 w-10 text-stone-600 mx-auto mb-4" />
                <h3 className="font-semibold text-stone-900 mb-2">
                  Remote Work
                </h3>
                <p className="text-stone-600 text-sm">
                  Work from anywhere with our fully remote setup
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Palette className="h-10 w-10 text-stone-600 mx-auto mb-4" />
                <h3 className="font-semibold text-stone-900 mb-2">
                  Creative Freedom
                </h3>
                <p className="text-stone-600 text-sm">
                  Bring your creative vision to exciting real estate projects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <OpenRolesSection />
      </div>
    </Suspense>
  );
}
