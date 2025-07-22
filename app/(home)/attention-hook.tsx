import { InnerWrap, Wrapper } from "@/app/(shared)/atoms";

export default function AttentionHook() {
  return (
    <Wrapper className="py-16 text-center bg-[#FDF6EE]">
      <InnerWrap>
        <h2 className="text-3xl font-medium antialiased trakcing-tight font-recoleta text-stone-800">
          Your Complete Digital Marketing Solution
        </h2>
        <p className="mt-4 text-lg text-stone-700 max-w-2xl mx-auto font-light font-poppins">
          MMP is the only service real estate agents and property sellers need.
          From professional photography and interior design to high-quality 3D
          renders, we provide everything to showcase your properties at their
          best.
        </p>
      </InnerWrap>
    </Wrapper>
  );
}
