import { Wrapper, InnerWrap } from "../(shared)/atoms";
import { TitleBlock } from "../(shared)/titleblock";

export default function CaseStudyHook() {
  return (
    <Wrapper className="bg-white py-12 w-full flex items-center justify-center">
      <InnerWrap className="flex flex-col w-full items-center justify-center max-w-3xl">
        <TitleBlock
          preheading="Why this case study?"
          heading="Most listings are boring."
          subheading={
            "We highlight how most real estate listings fail to show the full potential of a property. This case study demonstrates how modern media can emotionally hook buyers and tenants."
          }
          theme="light"
          orientation="center"
        />
      </InnerWrap>
    </Wrapper>
  );
}
