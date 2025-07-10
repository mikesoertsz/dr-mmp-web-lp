import {
  Heading,
  InnerWrap,
  Preheading,
  SubHeading,
  Wrapper,
} from "../(shared)/atoms";

const marketingContent = {
  intro:
    "Transform empty spaces into dream homes with realistic AI characters and cinematic 3D animations.",
  benefits:
    "Properties with our marketing sell 67% faster and for 15% higher prices.",
};

export default function AttentionHook() {
  return (
    <Wrapper className="py-12">
      <InnerWrap>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
          <div className="flex flex-col items-start justify-start">
            <Preheading>Attention Hook</Preheading>
            <Heading>Attention Hook</Heading>
          </div>
          <div className="flex flex-col items-start justify-start">
            <SubHeading>
              {marketingContent.intro}
              <br />
              {marketingContent.benefits}
            </SubHeading>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
