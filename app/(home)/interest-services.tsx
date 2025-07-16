import React from "react";
import { InnerWrap, Wrapper } from "../(shared)/atoms";
import { TitleBlock } from "../(shared)/titleblock";

const services = {
  titleblock: {
    preheading: "Our Services",
    heading: "What We Do",
    subheading:
      "We offer a range of services to help you buy, sell, or rent your property.",
    body: "We offer a range of services to help you buy, sell, or rent your property.",
  },
  services: [
    {
      link: "",
      title: "Buy",
      description:
        "We offer a range of services to help you buy, sell, or rent your property.",
      list: ["one", "two", "three"],

      button: {
        text: "Learn More",
        link: "",
      },
    },
  ],
};

export default function InterestServices() {
  return (
    <Wrapper>
      <InnerWrap>
        <TitleBlock
          preheading="Our Services"
          heading="What We Do"
          subheading="We offer a range of services to help you buy, sell, or rent your property."
          body="We offer a range of services to help you buy, sell, or rent your property."
          theme="light"
          orientation="center"
          terminalTextClassName="text-orange-500"
        />
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.services.map((service) => (
            <li key={service.title}>
              <h3>{service.title}</h3>
            </li>
          ))}
        </ul>
      </InnerWrap>
    </Wrapper>
  );
}
