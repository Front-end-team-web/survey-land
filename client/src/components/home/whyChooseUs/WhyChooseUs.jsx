import { motion } from "framer-motion";
import { FaChartPie, FaWandMagicSparkles } from "react-icons/fa6";
import { VscSettings } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";

const WhyChooseUs = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
  const { t } = useTranslation();

  const features = [
    {
      icon: FaWandMagicSparkles,
      title: t("whyChooseUs.cardTitle1"),
      description: t("whyChooseUs.cardDescription1"),
    },
    {
      icon: VscSettings,
      title: t("whyChooseUs.cardTitle2"),
      description: t("whyChooseUs.cardDescription2"),
    },
    {
      icon: FaChartPie,
      title: t("whyChooseUs.cardTitle3"),
      description: t("whyChooseUs.cardDescription3"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className={`pt-48 pb-20 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2
            className={`text-5xl font-bold font-bold mb-6 leading-snug ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {t("whyChooseUs.title1")}{" "}
            <span className="bg-gradient-to-r from-[#490F8F] to-[#7616EC] bg-clip-text text-transparent">
              {t("whyChooseUs.title2")}
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="text-center group"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#490F8F] to-[#7616EC] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h3
                className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                  isDarkMode
                    ? "text-white group-hover:text-[#7616EC]"
                    : "text-black group-hover:text-[#490F8F]"
                }`}
              >
                {feature.title}
              </motion.h3>

              <motion.p
                className={`leading-relaxed ${
                  isDarkMode ? "text-white/60" : "text-[#4B5563]"
                }`}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
