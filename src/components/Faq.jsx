import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqData = [
  {
    question: 'What is the return policy?',
    answer: 'You can return the product within 30 days of delivery for a full refund, provided it is unused and in original condition.',
  },
  {
    question: 'Is this product machine washable?',
    answer: 'Yes, it is machine washable. For best results, wash cold and tumble dry on low.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Currently, we ship within the EU and to select international countries. Shipping fees may apply.',
  },
  {
    question: 'Will the colors fade after washing?',
    answer: 'No, we use high-quality eco-friendly inks that are designed to resist fading with proper care.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4 text-left max-w-[1240px] md:mx-auto mx-2">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4 ">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b pb-3 ">
            <button
              className="flex justify-between items-center w-full cursor-pointer text-left text-lg font-medium text-gray-800"
              onClick={() => toggleIndex(index)}
            >
              {faq.question}
              {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </button>

           
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-40 mt-2' : 'max-h-0 '
              }`}
            >
              <p className="text-gray-600 text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
