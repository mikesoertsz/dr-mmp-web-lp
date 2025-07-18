import { Wrapper, InnerWrap } from "../(shared)/atoms";
import { TitleBlock } from "../(shared)/titleblock";

export default function CaseStudyHero() {
  return (
    <Wrapper className="bg-[#FDF6EE] py-24 w-full min-h-[40dvh] flex items-center justify-center">
      <InnerWrap className="flex flex-col w-full items-center justify-center max-w-5xl">
        <TitleBlock
          preheading="Case Study"
          heading="How an Agent Sold Faster with MMP"
          subheading="A real-world example of transforming a property listing with modern media."
          theme="light"
          orientation="center"
        />
      </InnerWrap>
    </Wrapper>
  );
}
