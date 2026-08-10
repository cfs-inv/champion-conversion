"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export default function FAQAccordion({
  items,
}: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      {items.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${
            activeIndex === index ? "active" : ""
          }`}
        >
          <button
            className="faq-question"
            onClick={() => toggleItem(index)}
          >
            <span>{item.question}</span>
            <span className="faq-icon">+</span>
          </button>

          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}