import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "Is Learner Space free?",
      answer:
        "Yes! Learner Space is completely free to use. We believe everyone deserves access to clarity when choosing their learning path.",
    },
    {
      question: "How are recommendations made?",
      answer:
        "Our algorithm analyzes your goals, learning style, budget, and preferences to match you with platforms that best fit your needs all without bias or sponsorship.",
    },
    {
      question: "Will it work for my goals?",
      answer:
        "Whether you're learning a new skill, advancing your career, or exploring a new field, Learner Space helps you find the right platform for your unique journey.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div
              className={`faq-accordion-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <button
                className="faq-accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="faq-accordion-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="faq-accordion-content">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
