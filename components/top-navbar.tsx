"use client";

import { Button } from "@/components/ui/button";
import LanguageDialog from "@/components/ui/language-dialog";
import Link from "next/link";

const menuItems = [
  { href: "#benefits", label: "Benefits" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#packages", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
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
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(item.href.substring(1))
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-1 text-xs text-slate-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* Right Side Controls */}
          <div className="flex items-center gap-1">
            <LanguageDialog />
            <a href="#packages">
              <Button
                className="text-xs px-3 py-1 h-7 min-h-0 cursor-pointer rounded-sm bg-[#F0E6DC] hover:bg-[#E8DED3]"
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
