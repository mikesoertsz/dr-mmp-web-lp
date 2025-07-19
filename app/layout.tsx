import type { Metadata } from "next";
import { recoleta, inter, poppins } from "@/lib/fonts";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import TopNavbar from "./(shared)/top-navbar";
import FooterGutter from "./(shared)/footer-gutter";

export const metadata: Metadata = {
  title: "Market My Properties | Best-in-class Real Estate Marketing",
  description:
    "Market My Properties is a best-in-class real estate marketing platform that helps you sell your property faster and for more money.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${recoleta.variable} ${inter.variable} ${poppins.variable} scroll-smooth antialiased font-poppins bg-[#FDF6EE]`}
      >
        <div className="min-h-screen bg-brand-primary flex flex-col">
          <TopNavbar />
          <main className="w-full flex-1">{children}</main>
          <FooterGutter />
        </div>
      </body>
    </html>
  );
}
