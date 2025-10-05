import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";
import { motion } from "framer-motion";

const WorkSection = () => {
  const { t, currentLanguage } = useTranslation();
  const { isDarkMode } = useSelector((state) => state.theme);
  const isRTL = currentLanguage === "ar";

  const stepsData = t("pages.steps") || [];
  const steps = Array.isArray(stepsData) ? stepsData : [];

  const workTitle1 = t("pages.workSection.title.part1");
  const workTitle2 = t("pages.workSection.title.part2");

  if (steps.length === 0) {
    return (
      <div className="py-16 text-center">
        <p>No steps available</p>
      </div>
    );
  }

  return (
    <div className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="text-center px-2 mb-12">
        <h3
          className={`text-xl md:text-4xl font-bold ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          <span className="text-[#7616EC]">{workTitle1}</span> {workTitle2}
        </h3>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-items-center gap-6 px-4 lg:px-20">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`w-full h-full min-h-[190px] flex flex-col items-center text-center gap-4 p-6 rounded-md transition-colors ${
              isDarkMode
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#490F8F] to-[#7616EC] text-white flex items-center justify-center text-lg font-bold">
              {index + 1}
            </div>
            <h4
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {step.title}
            </h4>
            <p
              className={`w-[80%] text-sm leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
