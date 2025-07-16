import {
  Box,
  Camera,
  Cpu,
  Film,
  Globe,
  Home,
  Layout,
  Video,
} from "lucide-react";
import Image from "next/image";
import { InnerWrap, Preheading, Wrapper } from "../(shared)/atoms";

const included = {
  titleblock: {
    preheading: "Included",
    heading: "What's Included",
    subheading: "What's Included",
    body: "What's Included",
  },
  items: [
    {
      title: "2D Photography",
      description:
        "Capture stunning 2D images to showcase your property effectively.",
      icon: <Camera size={20} />,
    },
    {
      title: "Videos",
      description:
        "Create engaging video content to highlight property features.",
      icon: <Video size={20} />,
    },
    {
      title: "Virtual Tour",
      description:
        "Offer immersive virtual tours for a comprehensive property view.",
      icon: <Globe size={20} />,
    },
    {
      title: "Interior Design",
      description: "Enhance spaces with professional interior design services.",
      icon: <Home size={20} />,
    },
    {
      title: "3D Renders",
      description: "Visualize properties with high-quality 3D renderings.",
      icon: <Box size={20} />,
    },
    {
      title: "AI Renders",
      description: "Utilize AI technology for advanced property renderings.",
      icon: <Cpu size={20} />,
    },
    {
      title: "Floorplan Designs",
      description: "Detailed floorplan designs to illustrate property layout.",
      icon: <Layout size={20} />,
    },
    {
      title: "Explainer Video",
      description:
        "Informative explainer videos to communicate property details.",
      icon: <Film size={20} />,
    },
  ],
};

export default function DesireIncluded() {
  return (
    <Wrapper>
      <InnerWrap>
        <div>
          <Preheading className="text-center mb-12 text-stone-800">
            What&apos;s in the Package?
          </Preheading>
          <ul className="grid grid-cols-2 gap-3 w-full bg-[#F7F0E8] rounded-2xl overflow-hidden p-12">
            {included.items.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 p-4 hover:bg-white duration-200 ease-in-out transition cursor-pointer border border-stone-300/10 hover:border-stone-300/40 rounded-sm"
              >
                <div className="flex items-center justify-center p-4 aspect-video relative">
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <Image
                      src="ico/paper1.svg"
                      alt={item.title}
                      width={100}
                      height={100}
                      className=""
                    />
                  </div>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium tracking-tight text-sm mb-1 font-title subpixel-antialiased">
                    {item.title}
                  </h3>
                  <p className=" text-xs text-stone-500 font-medium">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
