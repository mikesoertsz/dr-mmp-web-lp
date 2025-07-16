import Breadcrumbs from "@/app/(shared)/Breadcrumbs";
import { Suspense } from "react";
import tw from "tailwind-styled-components";

type refundPolicy = {
  title?: string;
  content?: string;
}[];

const Wrapper = tw.div`flex flex-col text-center items-start justify-start px-10 mx-auto text-left max-w-3xl pb-24 antialiased`;
const Preheading = tw.h4`uppercase text-xs font-medium pt-4 text-left text-stone-600`;
const Heading = tw.h1`text-3xl font-extrabold text-stone-900 sm:text-5xl sm:tracking-tight lg:text-6xl`;
const SubHeading = tw.h2`text-md font-medium text-stone-900 pt-3`;
const Body = tw.div`mt-1 max-w-prose text-left text-xs text-stone-800 leading-relaxed tracking-wide`;

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Wrapper>
        <Breadcrumbs content={breadcrumbs} />
        <Heading>Refund Policy</Heading>
        <br />
        <Preheading>Updated date: July 15th 2025</Preheading>
        <Body>
          At Drifter Apps, we strive to provide our clients with the highest quality service. However, we understand that there may be circumstances where you are not satisfied and consider requesting a refund. Our refund policy, as detailed below, outlines the circumstances under which a refund may be issued.
        </Body>
        <SubHeading>About Drifter</SubHeading>
        <Body className="mb-8">
          <span className="font-semibold">The owner of this website is:</span>
          <br />
          Drifter Apps, Uni.Ltd <br />R Philip Folque, 2 , 2, <br />
          Lisbon 1050-113 | Lisboa, Portugal
          <br />
          VAT No.: PT515983128
          <br />
          Legal nature: Sociedade Unipessoal por Quotas
          <br />
          <br />
          hello@marketmy.properties
        </Body>
        {refundPolicy.map((policy, index) => (
          <div key={index}>
            <SubHeading>{policy.title}</SubHeading>
            <Body>{policy.content}</Body>
          </div>
        ))}
      </Wrapper>
    </Suspense>
  );
}

const refundPolicy = [
  {
    title: "Service Completion",
    content:
      "Once a service has been fully rendered, it is considered complete, and no refund will be issued. This includes any planning, design, coding, and product development services.",
  },
  {
    title: "Project Cancellation",
    content:
      "If a project is cancelled by the client before completion but after work has begun, a partial refund may be issued. The refund amount will be proportional to the amount of work that has not been completed. Any milestones that have been reached before the cancellation will not be eligible for a refund.",
  },
  {
    title: "Non-refundable Services",
    content:
      "Certain services are non-refundable. These include services that involve third-party costs that Drifter Apps has paid on behalf of the client, such as domain registration, hosting, and third-party plugins or software.",
  },
  {
    title: "Stripe Payment Handling",
    content:
      "All payments and refunds are handled through Stripe. Please refer to Stripe's terms and conditions for their specific requirements regarding payment handling and refunds.",
  },
  {
    title: "European Union 14 day cooling off period",
    content:
      "Notwithstanding the above, if you are a resident of the European Union, you have the right to cancel or return your order within 14 days for any reason and without justification. As above, any work that has been completed during this period will not be eligible for a refund.",
  },
  {
    title: "Refund Process",
    content:
      "To request a refund, please contact us at hello@marketmy.properties. We will review your request and inform you of the outcome. If your refund is approved, it will be processed, and a credit will automatically be applied to your original method of payment within 10 business days.",
  },
  {
    title: "Changes to Refund Policy",
    content:
      "Drifter Apps reserves the right to change this refund policy at any time. Any changes will be posted on this page. Your continued use of our services after a change in the refund policy constitutes your acceptance of the new refund policy.",
  },
];

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Legal", href: "" },
  {
    label: "Refund Policy",
    href: "/legal/refunds",
    color: "text-blue-600 dark:text-blue-400",
  },
];
