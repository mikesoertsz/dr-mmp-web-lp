"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { InnerWrap, Wrapper } from "@/app/(shared)/atoms";

type ServiceType = {
  preheading: string;
  heading: string;
  description: string;
  image: string;
  type: "image" | "video";
  list: string[];
  colSpan: number;
};

const serviceslist: ServiceType[] = [
  {
    preheading: "Design",
    heading: "Interior Design",
    description: "Show the true potential of your property.",
    image: "/img/services/interior2.png",
    type: "image",
    list: [
      "Interior Design",
      "Furniture Placement",
      "Color Schemes",
      "Lighting Design",
    ],
    colSpan: 1,
  },
  {
    preheading: "2D",
    heading: "Photography",
    description: "Professional photography capturing the now.",
    image: "/video/photo2.mp4",
    type: "video",
    list: [
      "Photography",
      "Drone Photography",
      "Virtual Tour",
      "Exterior Photography",
    ],
    colSpan: 1,
  },
  {
    preheading: "3D",
    heading: "3D Renders",
    description: "Professional 3D renders of your property.",
    image: "/img/services/3d2.jpg",
    type: "image",
    list: ["3D Renders", "3D Animations", "3D Walkthrough", "3D Floor Plans"],
    colSpan: 1,
  },
  {
    preheading: "4D",
    heading: "Video & AI",
    description: "Real, edited video to showcase your listing.",
    image: "/video/room2.mp4",
    type: "video",
    list: [
      "Video Walkthrough",
      "AI Animations",
      "3D Walkthrough",
      "3D Floor Plans",
    ],
    colSpan: 3,
  },
];

export default function AttentionServices() {
  return (
    <Wrapper>
      <InnerWrap>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full mt-12">
          <div className="w-full col-span-3 relative">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                el: ".custom-pagination",
                clickable: true,
                dynamicBullets: true,
                bulletClass:
                  "swiper-pagination-bullet w-5 h-2 mx-1 inline-block rounded-full !bg-stone-300 transition-all duration-300 cursor-pointer",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 8,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 8,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
              style={{ overflow: "visible" }}
              wrapperClass="p-0 items-unset mb-10"
            >
              {serviceslist
                .filter((service) => service.preheading !== "4D")
                .map((service) => (
                  <SwiperSlide key={service.heading}>
                    <div className="relative text-left flex flex-col gap-1 items-center justify-end bg-[#F5ECE4] rounded-2xl overflow-hidden h-full min-h-[400px]">
                      <div className="relative aspect-square flex w-full">
                        {service.type === "image" ? (
                          <Image
                            src={service.image}
                            alt={service.heading}
                            fill
                            className="absolute inset-0 mix-blend-multiply p-12"
                            style={{
                              objectFit: "contain",
                            }}
                          />
                        ) : (
                          <video
                            src={service.image}
                            className="absolute inset-0 mix-blend-multiply p-12"
                            muted
                            loop
                            playsInline
                            autoPlay
                          />
                        )}
                      </div>
                      <div className="relative z-20 flex flex-col w-full p-8">
                        <span className="text-[11px] text-red-700 uppercase font-medium tracking-widest">
                          {service.preheading}
                        </span>
                        <div className="flex flex-col items-start justify-start gap-1">
                          <h3 className="text-lg font-semibold">
                            {service.heading}
                          </h3>
                          <p className="text-sm text-stone-600 min-h-8">
                            {service.description}
                          </p>
                          <ul className="flex flex-col items-start justify-start gap-0.5 mt-2">
                            {service.list.map((item) => (
                              <li
                                key={item}
                                className="text-xs text-stone-600 flex gap-1"
                              >
                                <Check size={16} className="text-orange-600" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-pagination absolute bottom-0 left-0 right-0 flex justify-center mt-2" />
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
