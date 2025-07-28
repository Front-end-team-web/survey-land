import { useTranslation } from "../../../hooks/useTranslation";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";
import { useSelector } from "react-redux";

const FAQSection = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const { currentLanguage } = useSelector((state) => state.language);
  const IsArabic = currentLanguage == "ar" ? true : false;
  const data = [
    {
      category: t("faqs.howItWorks.title"),
      questions: [
        {
          question: t("faqs.howItWorks.q1"),
          answer: t("faqs.howItWorks.a1"),
        },
        {
          question: t("faqs.howItWorks.q2"),
          answer: t("faqs.howItWorks.a2"),
        },
        {
          question: t("faqs.howItWorks.q3"),
          answer: t("faqs.howItWorks.a3"),
        },
      ],
    },
    {
      category: t("faqs.account.title"),
      questions: [
        {
          question: t("faqs.account.q1"),
          answer: t("faqs.account.a1"),
        },
        {
          question: t("faqs.account.q2"),
          answer: t("faqs.account.a2"),
        },
      ],
    },
    {
      category: t("faqs.customization.title"),
      questions: [
        {
          question: t("faqs.customization.q1"),
          answer: t("faqs.customization.a1"),
        },
        {
          question: t("faqs.customization.q2"),
          answer: t("faqs.customization.a2"),
        },
      ],
    },
    {
      category: t("faqs.results.title"),
      questions: [
        {
          question: t("faqs.results.q1"),
          answer: t("faqs.results.a1"),
        },
        {
          question: t("faqs.results.q2"),
          answer: t("faqs.results.a2"),
        },
      ],
    },
  ];

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto space-y-10">
      {data.map((section, index) => (
        // <div key={index} className="md:flex md:gap-8">
        <motion.div
          key={index}
          className="md:flex md:gap-8"
          initial={{ opacity: 0, x: IsArabic ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: index * 0.5 }}
        >
          {/* Left: category title */}
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-purple-700 font-bold text-lg md:text-2xl lg:text-3xl">
              {section.category}
            </h3>
          </div>

          {/* Right: questions */}

          <div className="md:w-2/3 space-y-4">
            {section.questions.map((item, i) => {
              const isOpen = openIndex === `${index}-${i}`;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: IsArabic ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: i * 0.3 }}
                  className={`${
                    isDarkMode ? "border-white" : "border-black"
                  } border-b pb-5`}
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : `${index}-${i}`)
                    }
                  >
                    <p className="text-base md:text-lg lg:text-xl font-bold ">
                      {item.question}
                    </p>
                    {isOpen ? (
                      <FaMinus
                        className={`${
                          isDarkMode ? "text-white" : "text-purple-600"
                        } w-5 h-5`}
                      />
                    ) : (
                      <FaPlus
                        className={`${
                          isDarkMode ? "text-white" : "text-purple-600"
                        } w-5 h-5`}
                      />
                    )}
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className={`overflow-hidden text-gray-700`}
                      >
                        <p
                          className={`py-2 ${
                            isDarkMode ? "text-white" : "text-gray-600"
                          }`}
                        >
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQSection;
