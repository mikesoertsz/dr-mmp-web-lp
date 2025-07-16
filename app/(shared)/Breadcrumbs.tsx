import { FiChevronRight } from "react-icons/fi";

type Props = {
  content: {
    label?: string;
    href?: string;
  }[];
};

export default function Breadcrumbs({ content }: Props) {
  return (
    <div className="flex items-center justify-start overflow-hidden py-8 w-full">
      {content.map((step, i) => (
        <div key={i} className="flex items-center">
          {i !== 0 && (
            <span className="mx-1 text-stone-600">
              <FiChevronRight size={13} className="text-stone-400" />
            </span>
          )}
          <a
            href={step.href}
            className="text-xs text-stone-500 hover:text-stone-600 tracking-wide"
          >
            {step.label}
          </a>
        </div>
      ))}
    </div>
  );
}
