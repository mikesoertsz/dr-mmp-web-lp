"use client";

import { HighlightText } from "@/components/animate-ui/text/highlight";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { InnerWrap, Wrapper } from "../(shared)/atoms";

const newHotness = {
  titleblock: {
    preheading: "",
    heading: "",
    subheading: "",
    body: "",
  },
  features: [
    "Custom avatars that look like your target customer.",
    "Highlight the key features of your property.",
    "Scroll-stopping videos that keep your audience attention.",
    "Show your listing's full potential AFTER renovation.",
    "List your property in a way that is more engaging and authentic.",
    "Update listings to modern interior design trends.",
  ],
  video: {
    src: "/img/casestudy/new/casestudy-one.mp4",
    alt: "AI Avatar Video",
  },
  cta: {
    text: "See Case Study",
    href: "/",
  },
};

export default function AttentionNewHotness() {
  return (
    <Wrapper className="bg-white min-h-[40dvh] py-24 w-full px-4 md:px-0">
      <InnerWrap className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto bg-[#F6F4F1] rounded-2xl overflow-hidden p-3 lg:p-3 md:min-h-[300px] ">
        <div className="flex flex-col items-start justify-between p-8 text-white h-full px-4 md:px-8">
          <div className="flex flex-col items-start justify-start md:items-start md:justify-start">
            <HighlightText text="New" className="text-indigo-500" />
            <h1 className="font-recoleta text-5xl text-stone-800 tracking-tight font-light text-left my-4">
              AI Avatars
            </h1>
            <h2 className="text-stone-800 mb-4 text-3xl font-light tracking-tighter max-w-md">
              A new way to grab attention for your listings.
            </h2>
            <p className="text-stone-800 mb-4 leading-relaxed text-sm md:text-md tracking-tight antialiased max-w-md">
              Show the <span className="font-medium">potential</span> of your
              property <span className="font-medium">AFTER</span> renovation,
              with AI-Generated avatars that match your target customer.
            </p>
            <ul className="text-stone-800 mb-4 leading-relaxed text-sm tracking-tight antialiased max-w-md gap-2 mt-8">
              {newHotness.features.map((feature) => (
                <li
                  key={feature}
                  className="text-stone-800 leading-relaxed text-sm tracking-tight antialiased max-w-md flex items-center justify-start gap-1"
                >
                  <Check size={16} className="text-stone-500" />{" "}
                  <span className="">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/case-study" className="mt-12 hidden">
            <Button className="bg-stone-800 hover:bg-stone-700 cursor-pointer transition duration-300 ease-in-out rounded-xl h-10 md:h-12 px-4 md:px-6">
              {newHotness.cta.text}
            </Button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="relative flex w-full bg-black rounded-2xl overflow-hidden aspect-square">
            <video
              src={newHotness.video.src}
              muted
              loop
              playsInline
              autoPlay
              className=""
            />
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
