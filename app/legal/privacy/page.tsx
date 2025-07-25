import Breadcrumbs from "@/app/(shared)/Breadcrumbs";
import { Suspense } from "react";
import tw from "tailwind-styled-components";
import { Metadata } from "next";

type privacyPolicy = {
  title?: string;
  content?: string;
}[];

export const metadata: Metadata = {
  title: "Market My Properties | Privacy Policy",
  description: "",
};

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
        <Heading>Privacy Policy</Heading>
        <br />
        <Preheading>Updated date: July 15th 2025</Preheading>
          <Body>
            This privacy statement provides an overview of how Drifter Apps
            Unipessoal Limited (VAT:PT515983128), hereinafter DRIFTER, processes
            personal information and how we take your privacy into account.
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
          {privacyPolicy.map((policy, index) => (
            <div key={index}>
              <SubHeading>{policy.title}</SubHeading>
              <Body>{policy.content}</Body>
            </div>
          ))}
      </Wrapper>
    </Suspense>
  );
}

const privacyPolicy = [
  {
    title: "Purpose of Collection",
    content:
      "In connection with customer relationships, we must obtain information such as name, address, organization number, and other necessary information. This is information we only use to handle your customer relationship.",
  },
  {
    title: "Disclosure or Sale",
    content:
      "Disclosure or sale of personal data will not take place unless there is a statutory duty to provide information to public authorities.",
  },
  {
    title: "Customer Register",
    content:
      "Our customer register contains information about the customer such as company name, address, and information about contact persons at the customer and information about what services and product the customer has an agreement on.",
  },
  {
    title: "Cookies",
    content:
      "Drifter Apps, Uni.Ltd uses cookies on this website. By using our website, you agree that we can put these in your browser. Cookies are standard Internet technology that most websites use. We use this knowledge to offer you a better customer experience the next time you visit our website. Most browsers, such as Opera, Internet Explorer, Firefox, Safari etc, are set up so that cookies are accepted automatically. If you do not want to accept cookies, you must change the settings in your browser. Note that this setting may cause many websites to not work optimally.",
  },
  {
    title: "Contact Form",
    content:
      "When you fill out the contact form on the website, we store this information in our CRM system. We will store this information in order to provide better customer service.",
  },
  {
    title: "Email Communication",
    content:
      "All emails sent to our designated email are stored in our support system. These are logged as part of your customer relationship with us and are stored as long as you have a customer relationship with us.",
  },
  {
    title: "Sharing",
    content:
      "It is possible to share articles on the website in social media (Facebook, Twitter). Further handling of data shared on social media is governed by your agreement with the relevant online community.",
  },
  {
    title: "Access, Correction, Deletion",
    content:
      "Pursuant to section 18 of the personal data act, the individual has a right of access to the information that is registered about oneself. Access can be obtained by contacting Drifter Apps, Uni.Ltd.",
  },
  {
    title: "Responsible Data Processor",
    content:
      "Drifter Apps, Uni.Ltd is responsible for the handling of personal information. The person in question is responsible for ensuring that internal controls have been carried out with regard to the processing of personal data and that any deviations from current legislation are reported and corrected.",
  },
  {
    title: "Data Controller and Processor",
    content:
      "Drifter Apps, Uni.Ltd is the data controller and processor for the purposes of the GDPR and other relevant data protection laws in Portugal.",
  },
  {
    title: "Personal Data Processing",
    content:
      "We process personal data in accordance with the GDPR and the Portuguese Data Protection Law (Law No. 58/2019). This includes obtaining explicit consent from users before collecting and processing their personal data.",
  },
  {
    title: "Data Retention",
    content:
      "We retain personal data for periods based on the type of data and in accordance with GDPR and Portuguese law. The right to be forgotten can only be exercised after the end of the retention period.",
  },
  {
    title: "Data Breach Notification",
    content:
      "In the event of a data breach, we will notify the relevant authorities and affected individuals in accordance with GDPR requirements.",
  },
  {
    title: "Contact Form",
    content:
      "When you fill out the contact form on the website, we store this information in our CRM system. We will store this information in order to provide better customer service. We strive not to take care of your details longer than necessary. Contacts that are not / are customers of Drifter will be deleted.",
  },
  {
    title: "Rights of Data Subjects",
    content:
      "We respect the rights of data subjects as outlined in the GDPR, including the right to access, rectify, erase, and transfer their personal data, and the right to object to certain types of processing. Pursuant to section 18 of the Personal Data Act, the individual has a right of access to the information that is registered about oneself. Access can be obtained by contacting DRIFTER at hello@marketmy.properties. If registered information is incorrect, incomplete or you wish to delete your information, this may be required in accordance with the Personal Data Act § 27",
  },
  {
    title: "Data Protection Officer",
    content:
      "We have appointed Michael Soertsz as Data Protection Officer to oversee our data protection practices and ensure compliance with GDPR and European law. The person in question is responsible for ensuring that internal controls have been carried out with regard to the processing of personal data, and that any deviations from current legislation are reported and corrected. We strive at all times to follow current regulations for privacy. If you have any questions, please contact hello@marketmy.properties",
  },
  {
    title: "GDPR Compliance",
    content:
      "We are fully compliant with the GDPR and are committed to maintaining this compliance. We will notify users in a timely manner in the event of a data breach that involves their data.",
  },
];

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Legal", href: "" },
  {
    label: "Privacy Policy",
    href: "/legal/privacy",
    color: "text-blue-600 dark:text-blue-400",
  },
];
