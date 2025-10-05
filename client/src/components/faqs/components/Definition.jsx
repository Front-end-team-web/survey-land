import React from "react";
import FQAImage from "../../../assets/faqsImages/amico.png";
import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";
import { motion } from "framer-motion";

const Definition = () => {
  const { currentLanguage } = useSelector((state) => state.language);
  const { isDarkMode } = useSelector((state) => state.theme);
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left space-y-6"
          initial={{ opacity: 0, x: currentLanguage === "ar" ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className={`text-4xl lg:text-5xl xl:text-6xl font-bold text-purple-700 leading-tight ${
              currentLanguage === "ar" ? "lg:text-right" : ""
            }`}
          >
            {currentLanguage === "ar" ? "الأسئلة الشائعة" : "FAQs"}
          </h1>
          <p
            className={`text-lg lg:text-xl xl:text-2xl leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } ${currentLanguage === "ar" ? "lg:text-right" : ""}`}
          >
            {t("faqs.faqsParagraph")}
          </p>
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: currentLanguage === "ar" ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={FQAImage}
            alt="FAQs Illustration"
            className="w-full h-auto max-w-md mx-auto lg:max-w-full object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Definition;
