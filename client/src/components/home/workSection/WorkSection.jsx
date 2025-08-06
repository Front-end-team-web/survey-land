import React from "react";
import { useTranslation } from "../../../hooks/useTranslation";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function WorkSection() {
  const { t } = useTranslation();
  const { currentLanguage } = useSelector((state) => state.language);
  const { isDarkMode } = useSelector((state) => state.theme);

  // المسارات الصحيحة بـ pages.
  const workTitle =
    t("pages.workSection.title.part1") +
    " " +
    t("pages.workSection.title.part2");
  const stepsData = t("pages.steps") || [];
  const steps = Array.isArray(stepsData) ? stepsData : [];

  if (steps.length === 0) {
    return (
      <div className="py-16 text-center">
        <p>No steps available</p>
      </div>
    );
  }

  return (
    <div className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {workTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
