import {
  Building2,
  ChartNetwork,
  SquareUserRound,
  Warehouse,
} from "lucide-react";
import { InnerWrap, Preheading, SubHeading, Wrapper } from "../(shared)/atoms";

const whoFor = {
  titleblock: {
    preheading: "Who is this for?",
    subheading:
      "A service for anyone looking to sell their property faster, and for a higher value.",
  },
  items: [
    {
      title: "Agencies",
      icon: <Building2 size={20} strokeWidth={1.5} />,
      description:
        "Agencies that are looking for a competitive edge in a market with a lot of competition. MMP could be your perfect partner.",
    },
    {
      title: "Agents",
      icon: <SquareUserRound size={20} strokeWidth={1.5} />,
      description:
        "Property agents that want to increase the value of their listings with a compelling advertising hook.",
    },
    {
      title: "Owners",
      icon: <Warehouse size={20} strokeWidth={1.5} />,
      description:
        "Owners that want to sell their property independently, without the need for an agent. MMP gives you the media you need to sell.",
    },
    {
      title: "Investors",
      icon: <ChartNetwork size={20} strokeWidth={1.5} />,
      description:
        "Investors that want to hook potential buyers or tenants with a scroll-stopping property listing.",
    },
  ],
};

export default function DesireWhoFor() {
  return (
    <Wrapper>
      <InnerWrap className="">
        <div className="mb-12">
          <Preheading className="text-center text-stone-800 mb-2">
            {whoFor.titleblock.preheading}
          </Preheading>
          <SubHeading className="max-w-lg mx-auto text-center">
            {whoFor.titleblock.subheading}
          </SubHeading>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#F7F0E8] rounded-2xl overflow-hidden min-h-[30dvh] w-full p-12">
          {whoFor.items.map((item, index) => (
            <li
              key={index}
              className="flex gap-3 items-center justify-start h-full"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-yellow-200 aspect-square rounded-full mb-2">
                <span className="text-lg font-medium font-mono">
                  {item.icon}
                </span>
              </div>
              <div className="flex flex-col items-start justify-start gap-0.5 px-4">
                <p className="text-xs font-mono text-stone-500">0{index + 1}</p>
                <h3 className="text-md font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed font-medium text-stone-500">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </InnerWrap>
    </Wrapper>
  );
}
