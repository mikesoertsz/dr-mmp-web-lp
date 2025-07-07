"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "@/lib/translations";

export function FAQSection() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: "How long does virtual staging take?",
      answer: "Most virtual staging projects are completed within 48-72 hours. Rush delivery is available for urgent projects at an additional fee."
    },
    {
      question: "Can you stage furnished properties?",
      answer: "Yes! We can virtually remove existing furniture and replace it with new staging, or enhance existing furniture with additional decor and styling elements."
    },
    {
      question: "How many design styles do you offer?",
      answer: "We offer 5 core design styles: Modern Contemporary, Luxury Traditional, Scandinavian, Mediterranean, and Industrial Chic. Each can be customized to match your target buyer demographic."
    },
    {
      question: "What's the difference between virtual staging and virtual renovation?",
      answer: "Virtual staging adds furniture and decor to empty or existing spaces. Virtual renovation involves structural changes like wall removal, kitchen updates, or bathroom redesigns."
    },
    {
      question: "Can I request specific furniture pieces or brands?",
      answer: "Absolutely! We can match specific furniture styles, brands, or pieces you have in mind. Just provide reference images and we'll recreate the look."
    },
    {
      question: "Do you provide before/after comparisons?",
      answer: "Yes, all packages include before/after comparison images that are perfect for showcasing the transformation in your marketing materials."
    },
    {
      question: "Can you stage outdoor spaces?",
      answer: "Yes, we can virtually stage patios, terraces, gardens, and pool areas. This is especially effective for luxury properties with significant outdoor living spaces."
    },
    {
      question: "What if I need changes after delivery?",
      answer: "All packages include revisions. Basic packages include 1 revision, Premium includes 2-3 revisions, and Luxury packages may include unlimited revisions."
    },
    {
      question: "Can you create multiple staging options for one room?",
      answer: "Yes! This is great for showing different buyer demographics. For example, we can show a bedroom as both a master suite and a home office."
    },
    {
      question: "Is virtual staging suitable for commercial properties?",
      answer: "Absolutely. We have experience staging offices, retail spaces, restaurants, and hotels. Commercial staging helps potential tenants or buyers visualize the space's potential."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t("serviceContent.faq.title")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Get answers to common questions about our virtual staging and interior design services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:design@marketmy.properties" 
              className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
            >
              design@marketmy.properties
            </a>
            <span className="hidden sm:inline text-slate-400">•</span>
            <a 
              href="tel:+351XXXXXXXXX" 
              className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
            >
              +351 XXX XXX XXX
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}