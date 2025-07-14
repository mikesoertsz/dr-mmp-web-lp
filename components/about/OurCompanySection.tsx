"use client";

import { Building, Users, Award, Globe } from "lucide-react";
import { InnerWrap, Wrapper } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export function OurCompanySection() {
  const companyStats = [
    {
      icon: <Building className="h-8 w-8 text-blue-600 mx-auto mb-3" />,
      value: "1000+",
      label: "Properties Marketed",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />,
      value: "500+",
      label: "Happy Clients",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />,
      value: "98%",
      label: "Satisfaction Rate",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600 mx-auto mb-3" />,
      value: "15+",
      label: "Cities Served",
    },
  ];

  return (
    <Wrapper className="py-12 md:pt-12 md:pb-32">
      <InnerWrap className="flex flex-col gap-8 h-full min-h-[500px]">
        <div className="w-full h-full flex items-start justify-center">
          <TitleBlock
            preheading="Our Company"
            heading="Our Company"
            body="We are a leading property marketing company serving clients across Portugal and Spain."
            theme="light"
            orientation="center"
          />
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyStats.map((stat, index) => (
            <li
              key={index}
              className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm"
            >
              {stat.icon}
              <div className="text-2xl font-medium text-slate-900 dark:text-slate-100">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </li>
          ))}
        </ul>
      </InnerWrap>
    </Wrapper>
  );
}
