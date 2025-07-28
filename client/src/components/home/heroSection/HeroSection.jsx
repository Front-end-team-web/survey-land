import { useTranslation } from "../../../hooks/useTranslation";
import HeroImage from "../../../assets/homeImages/heroDev.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t, currentLanguage } = useTranslation();
  const isRTL = currentLanguage === "ar";
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center gap-8 px-4 py-8 lg:px-20 lg:py-16">
        {/* Text Section */}
        <motion.div
          className="w-full flex flex-col items-center md:items-start order-2 md:order-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className={`text-3xl/tight lg:text-5xl/tight font-bold mb-6 md:mb-12 mt-3 md:mt-0 ${
              isRTL ? "text-center md:text-right" : "text-center md:text-left"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-[#7616EC]">
              {t("HeroSection.title.part1")}
            </span>{" "}
            {t("HeroSection.title.part2")}{" "}
            <span className="text-[#7616EC] px-2">
              {t("HeroSection.title.part3")}
            </span>
            , {t("HeroSection.title.part4")}
          </motion.h1>

          <motion.p
            className={`mt-4 text-content-secondary text-[16px]/relaxed max-w-full lg:max-w-[70%] ${
              isRTL ? "md:text-right text-center" : "text-center md:text-left"
            } leading-7 mb-6 md:mb-12`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t("HeroSection.subtitle")}
          </motion.p>

          <motion.div
            className="mt-4 flex flex-col md:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {/* Buttons */}
            <button className="bg-gradient-to-r from-[#490F8F] to-[#7616EC] flex items-center flex-row px-16 py-2 text-white  text-body-base rounded-md ">
              <span>{t("HeroSection.buttonOne")}</span>
            </button>

            <div className="flex items-center">
              <button
                className="border border-[#7616EC] flex items-center
          hover:bg-gradient-to-r from-[#490F8F] to-[#7616EC] hover:border-0
          hover:text-white transition duration-500 ease-in-out
          flex-row px-16 py-2 text-body-base rounded-md"
              >
                <span>{t("HeroSection.buttonTwo")}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right ml-3"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full flex flex-col items-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img src={HeroImage} alt="hero" className="w-[85%]" />
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
