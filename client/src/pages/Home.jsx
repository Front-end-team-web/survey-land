import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";

const Home = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-800"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        {t("pages.home.title")}
      </h1>
      <h2>ssdddfsdf</h2>
    </motion.div>
  );
};

export default Home;
