import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const FAQs = () => {
  const { currentLanguage } = useSelector((state) => state.language);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-800"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        {currentLanguage === "en" ? "FAQs" : "الأسئلة الشائعة"}
      </h1>
    </motion.div>
  );
};

export default FAQs;
