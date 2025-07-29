// All Import
import React from "react";
// Import Motion
import { motion } from "framer-motion";
// Import Component
import Index from "../components/about";
//  import Redux
import { useSelector } from "react-redux";
import { useTranslation } from "../hooks/useTranslation";
// Main Function
const About = () => {
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
      </motion.div>
    </>
  );
};

export default About;
