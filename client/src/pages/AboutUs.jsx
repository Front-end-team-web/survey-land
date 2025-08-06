// All Import
import React from "react";
// Import Motion

import { motion } from "framer-motion";
// Import Component
//import Index from "../components/aboutus";
//  import Redux
import { useSelector } from "react-redux";
import { useTranslation } from "../hooks/useTranslation";
import Index from "../components/aboutus/Index";
// Main Function
const AboutUs = () => {
  // Hooks
  const { currentLanguage } = useSelector((state) => state.language);
  const { t } = useTranslation();
  const { isDarkMode } = useSelector((state) => state.theme);
  // main Return
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ backgroundColor: isDarkMode ? "#111827" : "white" }}
        className="tracking-[.8px] w-full overflow-hidden"
      >
        <Index />
        {/* className="flex items-center justify-center min-h-screen bg-gray-50
        dark:bg-gray-800" >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {currentLanguage === "en" ? "About Us" : "من نحن"}
        </h1> */}
      </motion.div>
    </>
  );
};

export default AboutUs;
