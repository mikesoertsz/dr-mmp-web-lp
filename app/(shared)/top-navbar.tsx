"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const menuItems = [
  { href: "#benefits", label: "Benefits", type: "scroll" },
  { href: "#how-it-works", label: "How it works", type: "scroll" },
  { href: "#included", label: "Included", type: "scroll" },
  { href: "/case-study", label: "Case Study", type: "redirect" },
  { href: "#pricing", label: "Pricing", type: "scroll" },
  { href: "#faq", label: "FAQ", type: "scroll" },
];

export default function TopNavbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F7F0E8] pl-4 pr-2">
      <div className="">
        <div className="flex h-12 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs font-semibold"
          >
            <span>marketmy.properties</span>
          </Link>
          {/* Center Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) =>
              item.type === "redirect" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-1 text-xs font-inter text-stone-700 hover:text-stone-900 transition duration-200 ease-in-out cursor-pointer"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(item.href.substring(1))
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-1 text-xs font-inter text-stone-700 hover:text-stone-900 transition duration-200 ease-in-out cursor-pointer"
                >
                  {item.label}
                </a>
              )
            )}
          </div>
          {/* Right Side Controls */}
          <div className="flex items-center gap-1">
            <a
              href="#packages"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Button
                className="text-xs px-3 py-1 h-7 min-h-0 cursor-pointer rounded-sm bg-[#F0E6DC] hover:bg-[#E8DED3] transition duration-300 ease-in-out"
                variant="secondary"
              >
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
