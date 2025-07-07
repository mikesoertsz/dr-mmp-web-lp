import { ArrowUpRight } from "lucide-react";
import React from "react";
import { InnerWrap, Wrapper } from "../(shared)/atoms";
import { TitleBlock } from "../(shared)/titleblock";

type Position = {
  title: string;
  location: string;
  type: string;
};

type OpenPositionsContent = {
  heading: {
    preheading: string;
    heading: string;
    body: string;
  };
  positions: Position[];
  applyText: string;
  email: string;
};

const content: OpenPositionsContent = {
  heading: {
    preheading: "Open roles",
    heading: "Hiring now.",
    body: "We're always looking for talented people to join our team. If you're interested in working with us, please send us an email.",
  },
  positions: [
    { title: "3D Designer", location: "Digital Services", type: "Full-time" },
    { title: "Photographer", location: "Digital Services", type: "Full-time" },
    { title: "Videographer", location: "Digital Services", type: "Full-time" },
    {
      title: "GenAI Specialist",
      location: "Digital Services",
      type: "Full-time",
    },
    {
      title: "Interior Designer",
      location: "Digital Services",
      type: "Full-time",
    },
  ],
  applyText: "To apply, send your CV and cover letter to:",
  email: "careers@marketmy.properties",
};

export default function OpenPositionsSection() {
  return (
    <Wrapper className="py-12 md:pt-12 md:pb-32">
      <InnerWrap className="flex flex-col gap-8 h-full min-h-[500px]">
        <div className="w-full h-full flex items-start justify-center">
          <TitleBlock {...content.heading} theme="light" orientation="center" />
        </div>
        <div className="space-y-6 text-sm w-full max-w-3xl mx-auto">
          <div className="">
            <h3 className="text-sm font-medium text-stone-800 tracking-tight subpixel-antialiased">
              Engineering
            </h3>
            <ul className="mt-2">
              {content.positions.map((pos, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center p-2 hover:bg-gray-900/5 rounded-lg transition-all duration-200 ease-in-out cursor-pointer text-sm pl-4"
                >
                  <ul className="grid grid-cols-4 gap-1 w-full text-brand-secondary text-sm items-center justify-start">
                    <li className="text-brand-primary font-medium">
                      {pos.title}
                    </li>
                    <li className="text-xs">{pos.location}</li>
                    <li className="text-xs">{pos.type}</li>
                  </ul>

                  <a
                    href={`mailto:${content.email}`}
                    className="text-stone-900 hover:underline flex items-center ml-auto"
                  >
                    Apply{" "}
                    <span className="ml-1">
                      <ArrowUpRight className="text-stone-900" size={16} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="text-sm font-medium text-stone-800 tracking-tight subpixel-antialiased">
              Other
            </h3>
            <ul className="mt-2">
              <li className="flex justify-between items-center p-2 hover:bg-gray-900/5 rounded-lg transition-all duration-200 ease-in-out cursor-pointer text-sm pl-4">
                <span className="text-stone-600">Pitch Us A Role</span>
                <a
                  href={`mailto:${content.email}`}
                  className="text-stone-900 hover:underline flex items-center ml-auto"
                >
                  Apply{" "}
                  <span className="ml-1">
                    <ArrowUpRight className="text-stone-900" size={16} />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
