import { Inter, Poppins } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import localFont from "next/font/local";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const recoleta = localFont({
  src: "../public/fonts/recoleta.woff2",
  variable: "--font-recoleta",
  display: "swap",
});

export const geistSans = GeistSans;
export const geistMono = GeistMono;
