import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Wrapper, InnerWrap } from "@/app/(shared)/atoms";

const roles = [
  "Backend Product Engineer",
  "Design Engineer",
  "AI Engineer",
  "Customer Success Engineer",
  "Full Stack Engineer",
  "Infrastructure Engineer",
  "Security Engineer",
];

export default function OpenRolesSection() {
  return (
    <Wrapper className="py-24">
      <InnerWrap className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-serif font-bold text-center mb-8">
          Open roles
        </h1>
        <div className="text-center mb-10">
          <p className="font-medium mb-2">Tired of reading job descriptions?</p>
          <p>
            Learn more about a position by calling the CEO’s digital mind{" "}
            <a href="#" className="text-blue-600 hover:underline">
              here
            </a>
            !
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-stone-400 font-medium text-base mb-2">
            Engineering
          </h2>
          <div className="border-t border-stone-200 mb-2" />
          <ul className="divide-y divide-stone-100">
            {roles.map((role) => (
              <li
                key={role}
                className="flex items-center justify-between py-4 group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-stone-900 text-base">{role}</span>
                  <span className="text-stone-400 text-base ml-2">
                    Engineering
                  </span>
                </div>
                <a
                  href="#"
                  className="flex items-center gap-1 text-stone-900 font-medium group-hover:underline"
                >
                  Apply <ArrowUpRight className="ml-1 w-4 h-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
