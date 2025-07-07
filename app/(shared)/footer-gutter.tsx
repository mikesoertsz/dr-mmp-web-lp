import Link from "next/link";

export const footer = {
  text: {
    title: "MarketMy.Properties",
    subtitle: "",
    description: "",
    trademark: "All rights reserved.",
    drifter: {
      title: "MarketMy.Properties",
      url: "https://www.marketmy.properties",
    },
  },
  links: [
    {
      text: "Careers",
      url: "/company/careers",
    },
    {
      text: "Terms",
      url: "/legal/terms",
    },
    {
      text: "Refunds",
      url: "/legal/refunds",
    },
    {
      text: "Privacy",
      url: "/legal/privacy",
    },
    {
      text: "GDPR",
      url: "/legal/gdpr",
    },
  ],
};

export default function FooterGutter() {
  return (
    <section className="mx-auto w-full border border-t-2 border-slate-100 h-8 py-0 my-0">
      <div className="grid w-full grid-cols-1 px-4 text-[12px] antialiased text-stone-600 md:grid-cols-3 items-center h-8 gap-4">
        <div className="flex flex-row items-center justify-center w-full md:justify-start md:items-start group">
          <span className="text-xs text-gray-600 dark:text-gray-500 sm:text-center mr-1">
            {footer.text.title} &copy;{new Date().getFullYear()}.
          </span>
          <p>{footer.text.trademark}</p>
        </div>
        <div className="items-center justify-center hidden w-full mx-auto md:flex ">
          <ul className="flex flex-row items-center justify-center gap-1 my-2 md:my-0">
            {footer.links?.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="pl-1 no-underline transition duration-100 ease-in-out hover:text-gray-900"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="items-center justify-center hidden md:flex md:justify-end">
          <p>
            A{" "}
            <a
              href="http://www.drifter.agency"
              className="font-semibold text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Drifter
            </a>{" "}
            brand.
          </p>
        </div>
      </div>
    </section>
  );
}
