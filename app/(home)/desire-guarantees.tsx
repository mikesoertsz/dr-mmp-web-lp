import { InnerWrap, Wrapper } from "../(shared)/atoms";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa";
import { SiSepa } from "react-icons/si";

const guarantees = {
  titleblock: {
    preheading: "Payment Methods",
    heading: "We Accept",
    methods: [
      { name: "Visa", icon: <FaCcVisa size={32} /> },
      { name: "Mastercard", icon: <FaCcMastercard size={32} /> },
      { name: "American Express", icon: <FaCcAmex size={32} /> },
      { name: "Paypal", icon: <FaCcPaypal size={32} /> },
      { name: "SEPA", icon: <SiSepa size={32} /> },
    ],
  },
};

export default function DesireGuarantees() {
  return (
    <Wrapper className="flex justify-center items-center py-8">
      <InnerWrap className="flex gap-8">
        {guarantees.titleblock.methods.map((method) => (
          <div key={method.name} className="flex flex-col items-center">
            {method.icon}
            <span className="text-sm mt-2">{method.name}</span>
          </div>
        ))}
      </InnerWrap>
    </Wrapper>
  );
}
