import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import avatar1 from "../../../assets/homeImages/avatar1.svg";
import avatar2 from "../../../assets/homeImages/avatar2.svg";
import avatar3 from "../../../assets/homeImages/avatar3.svg";
import avatar4 from "../../../assets/homeImages/avatar4.svg";
import avatar5 from "../../../assets/homeImages/avatar1.svg";
import avatar6 from "../../../assets/homeImages/avatar6.svg";
import { useTranslation } from '../../../hooks/useTranslation';
import statsBg from "../../../assets/homeImages/stats-bg.png";


const StatsSection = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
  const { t } = useTranslation();

  const stats = [
    {
      value: "5M+",
      label: t("statsSection.stats1")
    },
    {
      value: "99.5%",
      label: t("statsSection.stats2")
    },
    {
      value: "42%",
      label: t("statsSection.stats3")
    },
    {
      value: "1.5M+",
      label: t("statsSection.stats4")
    }
  ];

  const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-48 relative">
      {/* Background decoration */}
      <img
        src={statsBg}
        alt="Background"
        className="absolute inset-0 top-1/2 -translate-y-1/2 object-cover object-center opacity-10 z-0 mx-auto size-[35rem]"
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-5xl font-bold font-bold mb-8 max-w-5xl mx-auto leading-[4rem] ${
              isDarkMode ? " text-white" : "text-black"
            }`}
          >
            {t("statsSection.title1")}{" "}
            <span className="bg-gradient-to-r from-[#490F8F] to-[#7616EC] bg-clip-text text-transparent">
              {t("statsSection.title2")}
            </span>{" "}
            {t("statsSection.title3")}
          </h2>

          <div className="flex justify-center mb-8">
            <div className="flex -space-x-4">
              {avatars.map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-1 border-white shadow-lg flex items-center justify-center overflow-hidden"
                >
                  <img src={i} alt="Avatar" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-[#490F8F] to-[#7616EC] py-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="space-y-2"
              >
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  className="text-3xl md:text-4xl font-bold text-white"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm md:text-base text-[#E8E8E8] font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;