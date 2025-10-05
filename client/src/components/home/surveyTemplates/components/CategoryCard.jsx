import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "../../../../hooks/useTranslation";

const CategoryCard = ({ category }) => {
  const { icon: Icon, title, count } = category;
  const { isDarkMode } = useSelector((state) => state.theme);
  const { t, currentLanguage } = useTranslation();
  const isEnglish = currentLanguage === "en";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, delay: 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group ${
        isDarkMode ? "bg-gray-800" : "bg-[#F3F3F3]"
      }`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="group-hover:scale-110 transition-transform duration-300">
          <Icon className={`text-xl text-[#490F8F]`} />
        </div>
        <h3
          className={`text-lg font-semibold ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
      </div>

      <div className="flex items-center justify-between">
        <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
          {count} {t("serveyTemplates.templates")}
        </span>
        <span className="text-sm text-purple-600 font-medium group-hover:text-purple-700">
          {t("serveyTemplates.showAll")} {isEnglish ? "→" : "←"}
        </span>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
