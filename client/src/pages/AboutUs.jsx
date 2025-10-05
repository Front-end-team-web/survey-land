import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Index from "../components/aboutus/Index";
const AboutUs = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
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

export default AboutUs;
