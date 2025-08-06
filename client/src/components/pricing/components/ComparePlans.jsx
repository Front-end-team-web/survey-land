import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Compare_Plans } from "./PricingStore";
import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";

const ComparePlans = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
  const { t } = useTranslation();
  const controls = useAnimation();
  const ref = useRef(null);

  // Animation variants with smoother transitions
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        ease: "easeOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const sectionHeader = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0.05,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const renderFeatureValue = (value) => {
    if (typeof value === "boolean") {
      return (
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 10,
              duration: 0.6,
            },
          }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          className={
            value
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }
        >
          {value ? "✓" : "✗"}
        </motion.span>
      );
    }
    return (
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gray-700 dark:text-gray-300"
      >
        {value}
      </motion.span>
    );
  };

  return (
    <div
      ref={ref}
      className="px-4 mx-auto max-w-7xl w-full transition-colors duration-300 mb-[120px]"
    >
      {/* Header Section */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={container}
        className="text-center my-12 md:my-[100px] flex flex-col gap-6"
      >
        <motion.h1
          variants={item}
          className="font-bold text-4xl md:text-6xl leading-tight text-gray-900 dark:text-white"
        >
          <motion.span
            variants={item}
            className="text-[--main-color] dark:text-purple-400"
          >
            {t("pages.pricing.ComparePlans.Compare Plans")}
          </motion.span>
        </motion.h1>

        <motion.p
          variants={item}
          transition={{ delay: 0.2 }}
          className="font-normal text-xl md:text-2xl lg:text-3xl leading-snug md:leading-normal"
        >
          {t("pages.pricing.ComparePlans.Find the plan")}
        </motion.p>
      </motion.div>

      {/* Table Section */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={container}
        className="overflow-x-auto"
      >
        <motion.table
          variants={container}
          className={`min-w-full divide-y ${
            isDarkMode ? "divide-gray-700" : "divide-gray-200"
          } w-full border-b ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <motion.thead>
            <motion.tr variants={item}>
              <motion.th
                variants={item}
                className={`px-6 py-5 text-left text-xl font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {t("pages.pricing.ComparePlans.Features")}
              </motion.th>
              <motion.th
                variants={item}
                transition={{ delay: 0.1 }}
                className={`px-6 py-5 text-center text-xl font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {t("pages.pricing.ComparePlans.Basic")}
              </motion.th>
              <motion.th
                variants={item}
                transition={{ delay: 0.15 }}
                className={`px-6 py-5 text-center text-xl font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {t("pages.pricing.ComparePlans.Professional")}
              </motion.th>
              <motion.th
                variants={item}
                transition={{ delay: 0.2 }}
                className={`px-6 py-5 text-center text-xl font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {t("pages.pricing.ComparePlans.Enterprise")}
              </motion.th>
            </motion.tr>
          </motion.thead>

          <motion.tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {/* Survey Creation Section */}
            <motion.tr
              variants={sectionHeader}
              className={`bg-[--main-opacity-color] ${
                isDarkMode ? "bg-opacity-20" : "bg-opacity-10"
              }`}
            >
              <motion.td
                variants={sectionHeader}
                colSpan="4"
                className="px-6 py-4 font-semibold text-lg text-gray-700 dark:text-gray-300"
              >
                {t("pages.pricing.ComparePlans.Survey Creation")}
              </motion.td>
            </motion.tr>

            {Compare_Plans.SurveyCreation.map((item, i) => (
              <motion.tr
                key={`survey-${i}`}
                variants={item}
                whileHover={{
                  backgroundColor: isDarkMode
                    ? "rgba(255, 255, 255, 0.03)"
                    : "rgba(0, 0, 0, 0.02)",
                  transition: { duration: 0.3 },
                }}
                className="transition-colors duration-300"
              >
                <motion.td
                  className={`px-6 py-4 ${
                    isDarkMode ? "text-white" : "text-gray-700"
                  }`}
                  transition={{ delay: i * 0.05 }}
                >
                  {t(`pages.pricing.ComparePlans.${item.features}`)}
                </motion.td>
                <motion.td
                  className="px-6 py-4 text-center"
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  {renderFeatureValue(item.basic)}
                </motion.td>
                <motion.td
                  className="px-6 py-4 text-center"
                  transition={{ delay: i * 0.05 + 0.15 }}
                >
                  {renderFeatureValue(item.professional)}
                </motion.td>
                <motion.td
                  className="px-6 py-4 text-center"
                  transition={{ delay: i * 0.05 + 0.2 }}
                >
                  {renderFeatureValue(item.enterprise)}
                </motion.td>
              </motion.tr>
            ))}

            {/* Data Collection Section */}
            <motion.tr
              variants={sectionHeader}
              className={`bg-[--main-opacity-color] ${
                isDarkMode ? "bg-opacity-20" : "bg-opacity-10"
              }`}
            >
              <motion.td
                variants={sectionHeader}
                colSpan="4"
                className="px-6 py-4 font-semibold text-lg text-gray-700 dark:text-gray-300"
              >
                {t("pages.pricing.ComparePlans.Data Collection")}
              </motion.td>
            </motion.tr>

            {Compare_Plans.DataCollection.map((item, i) => (
              <motion.tr
                key={`data-${i}`}
                variants={item}
                whileHover={{
                  backgroundColor: isDarkMode
                    ? "rgba(255, 255, 255, 0.03)"
                    : "rgba(0, 0, 0, 0.02)",
                  transition: { duration: 0.3 },
                }}
                className="transition-colors duration-300"
              >
                <motion.td
                  className={`px-6 py-4 ${
                    isDarkMode ? "text-white" : "text-gray-700"
                  }`}
                  transition={{ delay: i * 0.05 }}
                >
                  {t(`pages.pricing.ComparePlans.${item.features}`)}
                </motion.td>
                <motion.td
                  className="px-6 py-4 text-center"
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  {renderFeatureValue(item.basic)}
                </motion.td>
                <motion.td
                  className="px-6 py-4 text-center"
                  transition={{ delay: i * 0.05 + 0.15 }}
                >
                  {renderFeatureValue(item.professional)}
                </motion.td>
                <motion.td
                  className="px-6 py-4 text-center"
                  transition={{ delay: i * 0.05 + 0.2 }}
                >
                  {renderFeatureValue(item.enterprise)}
                </motion.td>
              </motion.tr>
            ))}

            {/* Analysis & Reporting Section */}
            <motion.tr
              variants={sectionHeader}
              className={`bg-[--main-opacity-color] ${
                isDarkMode ? "bg-opacity-20" : "bg-opacity-10"
              }`}
            >
              <motion.td
                variants={sectionHeader}
                colSpan="4"
                className="px-6 py-4 font-semibold text-lg text-gray-700 dark:text-gray-300"
              >
                {t("pages.pricing.ComparePlans.Analysis & Reporting")}
              </motion.td>
            </motion.tr>

            {Compare_Plans.AnalysisReporting.map((item, i) => (
              <motion.tr
                key={`analysis-${i}`}
                variants={item}
                whileHover={{
                  backgroundColor: isDarkMode
                    ? "rgba(255, 255, 255, 0.03)"
                    : "rgba(0, 0, 0, 0.02)",
                  transition: { duration: 0.3 },
                }}
                className={`transition-colors duration-300 border-b ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <motion.td
                  className={`px-6 py-4 ${
                    isDarkMode ? "text-white" : "text-gray-700"
                  }`}
                  transition={{ delay: i * 0.05 }}
                >
                  {t(`pages.pricing.ComparePlans.${item.features}`)}
                </motion.td>
                <motion.td
                  className="px-6 py-4 text-center"
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  {renderFeatureValue(item.basic)}
                </motion.td>
                <motion.td
                  className="px-6 py-4 text-center"
                  transition={{ delay: i * 0.05 + 0.15 }}
                >
                  {renderFeatureValue(item.professional)}
                </motion.td>
                <motion.td
                  className="px-6 py-4 text-center"
                  transition={{ delay: i * 0.05 + 0.2 }}
                >
                  {renderFeatureValue(item.enterprise)}
                </motion.td>
              </motion.tr>
            ))}
          </motion.tbody>
        </motion.table>
      </motion.div>
    </div>
  );
};

export default ComparePlans;
