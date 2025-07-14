"use client";

import Link from "next/link";
import { Building, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { useTranslation } from "@/lib/translations";
import { InnerWrap } from "@/app/(shared)/atoms";

export function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  // Removed services and company navigation arrays for simplified footer

  return (
    <footer className="bg-slate-900 text-white">
      <InnerWrap className="py-12">
        <div className="text-center">
          {/* Company Info - Simplified */}
          <div className="mb-6">
            <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
              <Building className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold">MarketMy.Properties</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Premium real estate marketing services in Portugal. Professional
              photography, 3D renders, interior staging, and AI-powered animations - all in one comprehensive package.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a
                  href="mailto:hello@marketmy.properties"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  hello@marketmy.properties
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a
                  href="tel:+351XXXXXXXXX"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  +351 XXX XXX XXX
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-slate-400">Lisbon, Porto, Algarve</span>
              </div>
            </div>
          </div>
        </div>
      </InnerWrap>
    </footer>
  );
}
