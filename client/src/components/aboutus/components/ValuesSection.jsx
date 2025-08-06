// Import
import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";
// Import Motion
import { motion } from "framer-motion";
import SplitTextMotion from "./SplitTextMotion";
import SlideUpSplitTextMotion from "./SlideUpSplitTextMotion";
import GetX from "./GetX";
// Import Icon
import { FaRegLightbulb } from "react-icons/fa"; //Lamp
import { CiHeart } from "react-icons/ci"; //Heart
import { FiUsers } from "react-icons/fi"; //User

// Export Component
export default function ValuesSection() {
  // Theme
  const { isDarkMode } = useSelector((state) => state.theme);
  // Variable Language
  const { currentLanguage } = useSelector((state) => state.language);
  // Variable JSON
  const { t } = useTranslation();

  return (
    <>
      {/* Parent Dev */}
      <div className="md:pt-16">
        {/* Main Title */}
        <h1 className="text-2xl md:text-4xl font-bold text-[#7616EC] text-center md:py-16 py-6">
          <SplitTextMotion>
            {currentLanguage === "en" ? "Our Core Values" : "قيمنا الأساسية"}
          </SplitTextMotion>
        </h1>
        {/* ========= Main Title ===== */}

        {/* Div Parent Component  */}
        <div
          className={` flex flex-col md:flex-row md:justify-between md:gap-8 lg:gap-10 container mx-auto p-8 md:px-10 px-3 w-full gap-3 h-full `}
        >
          {/* Div Component One */}
          <GetX direction={`${currentLanguage == "en" ? "left" : "right"}`}>
            <div className={`w-full h-full flex-1`}>
              <div
                className={`flex flex-col p-5 h-full items-stretch
                ${
                  isDarkMode ? "bg-gray-800" : "bg-[rgba(253,226,243,0.2)]"
                } rounded-lg `}
              >
                {/* ICON */}
                <span className="text-xl">{<FaRegLightbulb />}</span>
                {/* === ICON ==== */}
                {/* Title */}
                <h2 className={`font-bold text-[#7616EC] mt-6 mb-2 md:text-xl`}>
                  <SplitTextMotion>
                    {t("pages.about.ValuesSection.sec1.title")}
                  </SplitTextMotion>
                </h2>
                {/*====== Title =====*/}
                {/* Description */}
                <motion.p className=" text-base/8 font-[400] ">
                  <SlideUpSplitTextMotion>
                    {t("pages.about.ValuesSection.sec1.description")}
                  </SlideUpSplitTextMotion>
                </motion.p>
                {/*==== Description =====*/}
              </div>
            </div>
          </GetX>
          {/* =====  Div Component One ==== */}

          {/* Div Component Two */}
          <GetX direction="top">
            <div className={`w-full h-full flex-1 `}>
              <div
                className={`flex flex-col p-5 h-full items-stretch 
                ${
                  isDarkMode ? "bg-gray-800" : "bg-[rgba(253,226,243,0.2)]"
                } rounded-lg `}
              >
                {/* ICON */}
                <span className="text-xl">{<CiHeart />}</span>
                {/* === ICON ==== */}
                {/* Title */}
                <h2 className={`font-bold text-[#7616EC] mt-6 mb-2 md:text-xl`}>
                  <SplitTextMotion>
                    {t("pages.about.ValuesSection.sec2.title")}
                  </SplitTextMotion>
                </h2>
                {/*====== Title =====*/}

                {/* Description */}
                <p className=" text-base/8 font-[400] ">
                  <SlideUpSplitTextMotion>
                    {t("pages.about.ValuesSection.sec2.description")}
                  </SlideUpSplitTextMotion>
                </p>
                {/*==== Description =====*/}
              </div>
            </div>
          </GetX>
          {/* =====  Div Component Two ==== */}

          {/* Div Component Three */}
          <GetX direction={`${currentLanguage == "en" ? "right" : "left"}`}>
            <div className={`w-full h-full flex-1`}>
              <div
                className={`flex flex-col p-5 h-full items-stretch 
                ${
                  isDarkMode ? "bg-gray-800" : "bg-[rgba(253,226,243,0.2)]"
                } rounded-lg `}
              >
                {/* ICON */}
                <span className="text-xl">{<FiUsers />}</span>
                {/* === ICON ==== */}
                {/* Title */}
                <h2 className={`font-bold text-[#7616EC] mt-6 mb-2 md:text-xl`}>
                  <SplitTextMotion>
                    {t("pages.about.ValuesSection.sec3.title")}
                  </SplitTextMotion>
                </h2>
                {/*====== Title =====*/}
                {/* Description */}
                <p className=" text-base/8 font-[400] ">
                  <SlideUpSplitTextMotion>
                    {t("pages.about.ValuesSection.sec3.description")}
                  </SlideUpSplitTextMotion>
                </p>
                {/*==== Description =====*/}
              </div>
            </div>
          </GetX>
          {/* =====  Div Component Three ==== */}
        </div>
        {/* Div Parent Component  */}
      </div>
    </>
  );
}
