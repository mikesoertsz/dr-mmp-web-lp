import tw from "tailwind-styled-components";

export const Wrapper = tw.section`mx-auto w-full py-24 snap-always snap-center`;
export const InnerWrap = tw.div`container mx-auto max-w-6xl px-5 xl:px-0`;

export const Icon = tw.div`flex items-start justify-start mb-3`;
export const ImageWrap = tw.div`relative w-10 h-10 py-4`;
export const Preheading = tw.h4`text-xs bg-brand-b2 rounded-full px-4 py-1 text-brand-secondary font-inter`;
export const Heading = tw.h1`text-xl font-light font-inter font-heading md:text-4xl`;
export const SubHeading = tw.h2`text-3xl font-semibold tracking-tight font-body`;
export const Body = tw.p`text-gray-400 max-w-xl text-sm font-body leading-relaxed font-body`;

export const PreTitle = tw.h4`text-xs mb-2 uppercase tracking-widest font-body`;
export const Title = tw.h1`text-2xl font-light font-title sm:text-3xl sm:tracking-tight mb-3`;
export const SubTitle = tw.h2`text-sm tracking-tight font-body w-4/5 opacity-70`;
export const Button = tw.a`flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg mt-8`;
