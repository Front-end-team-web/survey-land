import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { QuestionsData } from "./PricingStore";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "../../../hooks/useTranslation";

const Questions = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`px-4 mx-auto max-w-7xl transition-colors duration-300 py-12`}
    >
      <div className="text-center mb-12 md:mb-20 flex flex-col gap-4">
        <h1 className="font-bold text-4xl md:text-6xl leading-tight text-gray-900 dark:text-white">
          <span className="text-[--main-color] dark:text-purple-400">
            {t("pages.pricing.Questions.Frequently Asked Questions")}
          </span>
        </h1>
        <p
          className={`font-normal text-xl md:text-2xl lg:text-3xl leading-snug md:leading-normal ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {t(
            "pages.pricing.Questions.Everything you need to know about our pricing and products"
          )}
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {QuestionsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
              isDarkMode ? "border-gray-600" : "border-[--main-color]"
            }`}
          >
            <button
              className={`w-full flex justify-between items-center p-6 md:p-8 text-left ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-purple-50"
              } transition-colors duration-200`}
              onClick={() => toggleQuestion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`question-${index}`}
            >
              <h3
                className={`text-lg md:text-xl font-semibold ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {t(`pages.pricing.Questions.${item.Q}`)}
              </h3>
              <span
                className={`ml-4 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                {activeIndex === index ? (
                  <FiChevronUp
                    className={`w-6 h-6 ${
                      isDarkMode ? "text-purple-400" : "text-[--main-color]"
                    }`}
                  />
                ) : (
                  <FiChevronDown
                    className={`w-6 h-6 ${
                      isDarkMode ? "text-purple-400" : "text-[--main-color]"
                    }`}
                  />
                )}
              </span>
            </button>

            <div
              id={`question-${index}`}
              className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ${
                isDarkMode ? "bg-gray-700" : "bg-white"
              } ${activeIndex === index ? "max-h-96 pb-6" : "max-h-0"}`}
            >
              <p
                className={`${
                  isDarkMode ? "text-gray-200" : "text-gray-600"
                } pt-2`}
              >
                {t(`pages.pricing.Questions.${item.response}`)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div
        className={`mt-16 text-center ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        <p className="text-lg mb-4">
          {t(`pages.pricing.Questions.Still have questions?`)}
          <span className={`text-[--main-color]`}>
            {t(`pages.pricing.Questions.Contact our support team`)}{" "}
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default Questions;
