import { motion } from "framer-motion";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaLock, FaQuestionCircle, FaUsers } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";

const FAQSection = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
  const { t } = useTranslation();

  const faqs = [
    {
      id: "item-1",
      icon: FaQuestionCircle,
      question: t("faqSection.faqQuestion1"),
      answer: t("faqSection.faqAnswer1"),
    },
    {
      id: "item-2",
      icon: FaLock,
      question: t("faqSection.faqQuestion2"),
      answer: t("faqSection.faqAnswer2"),
    },
    {
      id: "item-3",
      icon: BiSolidBarChartAlt2,
      question: t("faqSection.faqQuestion3"),
      answer: t("faqSection.faqAnswer3"),
    },
    {
      id: "item-4",
      icon: FaUsers,
      question: t("faqSection.faqQuestion4"),
      answer: t("faqSection.faqAnswer4"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className={`pb-20 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-5xl font-bold font-bold mb-8 max-w-5xl mx-auto leading-[4rem] ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {t("faqSection.title1")}{" "}
            <span className="bg-gradient-to-r from-[#490F8F] to-[#7616EC] bg-clip-text text-transparent">
              {t("faqSection.title2")}
            </span>
          </h2>
          <p
            className={`text-xl font-normal ${
              isDarkMode ? "text-white/60" : "text-[#4B5563]"
            }`}
          >
            {t("faqSection.subTitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 grid-cols-1 gap-5"
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className={`p-6 flex flex-col gap-3 rounded-2xl ${
                isDarkMode ? "bg-gray-800" : "bg-[#F7F7F7]"
              }`}
            >
              <div className="flex items-center gap-2">
                <faq.icon className="w-5 h-5 text-[#7616EC]" />
                <h4 className="text-xl font-semibold bg-gradient-to-r from-[#490F8F] to-[#7616EC] bg-clip-text text-transparent">
                  {faq.question}
                </h4>
              </div>
              <div
                className={`leading-relaxed space-y-1 ${
                  isDarkMode ? "text-gray-300" : "text-[#4B5563]"
                }`}
              >
                {faq.answer.split(". ").map((sentence, index) =>
                  sentence.trim() ? (
                    <p key={index}>
                      {sentence.trim()}
                      {sentence.endsWith(".") ? "" : "."}
                    </p>
                  ) : null
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
