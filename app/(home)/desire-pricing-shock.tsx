"use client";
import { Button } from "@/components/ui/button";
import { Box, Camera, Cpu, Drone, Home, Rotate3d, Video } from "lucide-react";
import { InnerWrap, Wrapper } from "../(shared)/atoms";
import { TitleBlock } from "../(shared)/titleblock";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const pricingData = {
  titleblock: {
    preheading: "SAVINGS",
    heading: "See the Real Value",
    subheading:
      "Our all-in-one package includes premium services that would cost thousands more if purchased separately.",
  },
  packagePrice: 3288,
  services: [
    {
      title: "Professional Photography",
      icon: <Camera size={20} className="text-stone-600" strokeWidth={1.5} />,
      marketPrice: 325,
      averageTime: 2,
    },
    {
      title: "Professional Videography",
      icon: <Video size={20} className="text-stone-600" strokeWidth={1.5} />,
      marketPrice: 425,
      averageTime: 3,
    },
    {
      title: "Drone Photography & Video",
      icon: <Drone size={20} className="text-stone-600" strokeWidth={1.5} />,
      marketPrice: 275,
      averageTime: 2,
    },
    {
      title: "Virtual Tours",
      icon: <Rotate3d size={20} className="text-stone-600" strokeWidth={1.5} />,
      marketPrice: 550,
      averageTime: 4,
    },
    {
      title: "3D Renders",
      icon: <Box size={20} className="text-stone-600" strokeWidth={1.5} />,
      marketPrice: 500,
      averageTime: 5,
    },
    {
      title: "Interior Design & Virtual Staging",
      icon: <Home size={20} className="text-stone-600" strokeWidth={1.5} />,
      marketPrice: 1250,
      averageTime: 7,
    },
    {
      title: "AI Avatar Animations",
      icon: <Cpu size={20} className="text-stone-600" strokeWidth={1.5} />,
      marketPrice: 500,
      averageTime: 3,
    },
    {
      title: "Project Coordination",
      icon: <Rotate3d size={20} className="text-stone-600" strokeWidth={1.5} />,
      marketPrice: 500,
      averageTime: 4,
    },
  ],
  marketRate: 4575,
  savings: 1287,
  additionalBenefits: [
    "Single point of contact",
    "Coordinated delivery timeline",
    "Consistent brand styling",
    "Priority support included",
  ],
  cta: {
    text: "Ready to transform your property marketing?",
    buttonText: "Get Started Today",
    buttonLink: "#pricing",
  },
};

export default function DesirePricingShock() {
  // Calculate totals
  const totalMarketPrice = pricingData.services.reduce(
    (total, service) => total + service.marketPrice,
    0
  );
  const totalAverageTime = pricingData.services.reduce(
    (total, service) => total + service.averageTime,
    0
  );

  return (
    <Wrapper className="bg-white min-h-screen py-24 w-full px-4 md:px-0">
      <InnerWrap className="lg:px-0 px-0 mx-auto w-full">
        <TitleBlock
          {...pricingData.titleblock}
          theme="light"
          orientation="center"
        />

        {/* Combined Service Breakdown */}
        <div className="bg-[#F6F4F1]/40 rounded-2xl overflow-hidden flex flex-col items-center justify-between w-full mt-16 max-w-7xl mx-auto p-6">
          <div className="text-center mb-6">
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-3 font-poppins">
              Best Value
            </div>
            <h4 className="text-2xl font-bold text-stone-800 mb-2 font-poppins">
              Complete Marketing Package
            </h4>
            <p className="text-stone-600 mb-4 text-sm font-poppins">
              Everything you need to market your property professionally
            </p>
          </div>

          <div className="w-full px-6 mb-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Average Price</TableHead>
                  <TableHead>Average Time (days)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingData.services.map((service, index) => (
                  <TableRow key={index}>
                    <TableCell className="flex items-center gap-2">
                      {service.icon} {service.title}
                    </TableCell>
                    <TableCell>
                      €{service.marketPrice.toLocaleString()}
                    </TableCell>
                    <TableCell>{service.averageTime} days</TableCell>
                  </TableRow>
                ))}
                {/* Totals Row */}
                <TableRow>
                  <TableCell className="font-bold">Total</TableCell>
                  <TableCell className="font-bold">
                    €{totalMarketPrice.toLocaleString()}
                  </TableCell>
                  <TableCell className="font-bold">
                    {totalAverageTime} days
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="w-full p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-medium text-stone-800 font-poppins">
                Full Market Rate
              </span>
              <span className="text-3xl font-light text-stone-900 font-poppins">
                €{pricingData.marketRate.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-medium text-stone-800 font-poppins">
                Our Rate
              </span>
              <span className="text-3xl font-light text-stone-900 font-poppins">
                €{pricingData.packagePrice.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-green-600 font-poppins">
                You Save
              </span>
              <span className="text-xl font-light text-green-600 font-poppins">
                €{pricingData.savings.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-stone-800 font-poppins">
                Our Time
              </span>
              <span className="text-xl font-light text-stone-900 font-poppins">
                4 Business Days
              </span>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="bg-[#F6F4F1]/40 rounded-2xl overflow-hidden w-full p-2 mb-6 mt-2">
          <div className="p-4">
            <h5 className="text-stone-800 mb-3 font-poppins tracking-tight text-md font-medium">
              Additional Benefits
            </h5>
            <ul className="space-y-2 text-sm text-stone-600 font-poppins">
              {pricingData.additionalBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center text-center mt-24 gap-3">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight font-poppins text-center">
            {pricingData.cta.text}
          </h2>
          <p className="text-sm text-stone-500 font-poppins">
            One package. One simple price.
          </p>
          <Button
            variant="secondary"
            className="bg-[#F0E6DC] hover:bg-[#E8DED3] cursor-pointer  transition duration-300 ease-in-out rounded-xl h-10 md:h-12 px-4 md:px-6 mt-4"
            onClick={() => {
              document
                .getElementById("pricing")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {pricingData.cta.buttonText}
          </Button>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
