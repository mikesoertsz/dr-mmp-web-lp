import React from "react";
import { InnerWrap, Wrapper } from "../(shared)/atoms";
import { Users, Briefcase, DollarSign, TrendingUp } from "lucide-react";

const whoFor = {
  titleblock: {
    preheading: "Who is this for?",
    heading:
      "It's aimed at people who want to use Framer in some professional capacity.",
  },
  items: [
    {
      title: "Agencies",
      icon: <Briefcase size={32} strokeWidth={1} />,
      description:
        "Agencies looking to streamline their design process and deliver high-quality projects efficiently.",
    },
    {
      title: "Agents",
      icon: <Users size={32} strokeWidth={1} />,
      description:
        "Freelancers who want to enhance their design capabilities and offer more to their clients.",
    },
    {
      title: "Sellers",
      icon: <DollarSign size={32} strokeWidth={1} />,
      description:
        "Entrepreneurs aiming to create compelling prototypes to attract investors and stakeholders.",
    },
    {
      title: "Investors",
      icon: <TrendingUp size={32} strokeWidth={1} />,
      description:
        "Startups that need to quickly iterate and validate their product ideas with interactive designs.",
    },
  ],
};

export default function DesireWhoFor() {
  return (
    <Wrapper>
      <InnerWrap>
        <h2 className="text-center text-xl font-bold mb-2">
          {whoFor.titleblock.preheading}
        </h2>
        <p className="text-center text-sm mb-8">{whoFor.titleblock.heading}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whoFor.items.map((item, index) => (
            <li key={index} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-200 rounded-full mb-2">
                <span className="text-lg font-bold">{index + 1}</span>
              </div>
              {item.icon}
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-sm text-center mt-1">{item.description}</p>
            </li>
          ))}
        </ul>
      </InnerWrap>
    </Wrapper>
  );
}
