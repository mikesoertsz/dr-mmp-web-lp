import Image from "next/image";
import { InnerWrap, Wrapper } from "../(shared)/atoms";

const guarantees = {
  titleblock: {
    preheading: "Payment Methods",
    heading: "We Accept",
    methods: [
      {
        name: "Visa",
        icon: "/ico/payment/svg/visa.svg",
      },
      {
        name: "Mastercard",
        icon: "/ico/payment/svg/master.svg",
      },
      {
        name: "American Express",
        icon: "/ico/payment/svg/amex2.svg",
      },
      {
        name: "Paypal",
        icon: "/ico/payment/svg/paypal.svg",
      },
      {
        name: "SEPA",
        icon: "/ico/payment/svg/sepa.svg",
      },
    ],
  },
  left: {
    heading: "100% Money Back Guarantee",
    description:
      "If you're not satisfied with your purchase, we'll refund your money. No questions asked.",
  },
};

export default function DesireGuarantees() {
  return (
    <Wrapper className="flex justify-center items-center py-8 bg-[#F7F0E8] border-t border-b border-stone-300/40">
      <InnerWrap className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
        <div className="col-span-1 flex flex-col items-center md:items-end justify-center text-right">
          <h4 className="text-center md:text-end text-md font-medium font-inter text-stone-900">
            {guarantees.left.heading}
          </h4>
          <p className="text-center md:text-end text-sm font-inter text-stone-500 max-w-100">
            {guarantees.left.description}
          </p>
        </div>
        <ul className="flex gap-4 col-span-1 items-center justify-center">
          {guarantees.titleblock.methods.map((method, index) => (
            <li key={index} className="flex flex-col items-center">
              <Image
                src={method.icon}
                alt={method.name}
                width={40}
                height={40}
                className="saturate-0"
              />
            </li>
          ))}
        </ul>
        <div className="col-span-1 flex flex-col items-center md:items-start justify-center text-left">
          <h4 className="text-md font-medium font-inter text-stone-900">
            Buy with Confidence
          </h4>
          <p className="text-sm font-inter text-gray-800 flex items-center justify-center gap-1 mt-3">
            Secure payments with{" "}
            <Image
              src="/img/stripe.svg"
              alt="Stripe"
              width={36}
              height={15}
              className=""
            />
            .
          </p>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
