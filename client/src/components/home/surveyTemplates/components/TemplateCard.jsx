import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "../../../../hooks/useTranslation";

const TemplateCard = ({ template }) => {
  const { t, currentLanguage } = useTranslation();
  const { isDarkMode } = useSelector((state) => state.theme);
  const isEnglish = currentLanguage === "en";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, delay: 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={template.image}
          alt={template.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute top-3 ${isEnglish ? "left-3" : "right-3"}`}>
          <span
            className={`${template.categoryColor} ${template.categoryText} px-2 py-1 rounded-full text-xs font-medium`}
          >
            {template.category}
          </span>
        </div>
      </div>

      <div className="p-3">
        <h3
          className={`text-lg font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {template.title}
        </h3>

        <p
          className={`text-sm mb-4 line-clamp-2 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {template.description}
        </p>

        <div className="flex items-center justify-between">
          <span
            className={`text-xs ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {template.questions}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#490F8F] to-[#7616EC] text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
          >
            {t("serveyTemplates.useTemplate")}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default TemplateCard;
