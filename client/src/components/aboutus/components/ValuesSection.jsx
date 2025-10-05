import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";
import { motion } from "framer-motion";
import GetX from "../../../shared/animation/GetX";
import SlideUpSplitTextMotion from "../../../shared/animation/SlideUpSplitTextMotion";
import SplitTextMotion from "../../../shared/animation/SplitTextMotion";
import { CiHeart } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

export default function ValuesSection() {
  const { isDarkMode } = useSelector((state) => state.theme);
  const { currentLanguage } = useSelector((state) => state.language);
  const { t } = useTranslation();

  return (
    <>
      <div className="md:pt-16">
        <h1 className="text-2xl md:text-4xl font-bold text-[#7616EC] text-center md:py-16 py-6">
          <SplitTextMotion>
            {currentLanguage === "en" ? "Our Core Values" : "قيمنا الأساسية"}
          </SplitTextMotion>
        </h1>

        <div
          className={` flex flex-col md:flex-row md:justify-between md:gap-8 lg:gap-10 container mx-auto p-8 md:px-10 px-3 w-full gap-3 h-full `}
        >
          <GetX direction={`${currentLanguage == "en" ? "left" : "right"}`}>
            <div className={`w-full h-full flex-1`}>
              <div
                className={`flex flex-col p-5 h-full items-stretch
                ${
                  isDarkMode ? "bg-gray-800" : "bg-[rgba(253,226,243,0.2)]"
                } rounded-lg `}
              >
                <span className="text-xl">{<FaRegLightbulb />}</span>
                <h2 className={`font-bold text-[#7616EC] mt-6 mb-2 md:text-xl`}>
                  <SplitTextMotion>
                    {t("pages.about.ValuesSection.sec1.title")}
                  </SplitTextMotion>
                </h2>
                <motion.p className=" text-base/8 font-[400] ">
                  <SlideUpSplitTextMotion>
                    {t("pages.about.ValuesSection.sec1.description")}
                  </SlideUpSplitTextMotion>
                </motion.p>
              </div>
            </div>
          </GetX>

          <GetX direction="top">
            <div className={`w-full h-full flex-1 `}>
              <div
                className={`flex flex-col p-5 h-full items-stretch 
                ${
                  isDarkMode ? "bg-gray-800" : "bg-[rgba(253,226,243,0.2)]"
                } rounded-lg `}
              >
                <span className="text-xl">{<CiHeart />}</span>
                <h2 className={`font-bold text-[#7616EC] mt-6 mb-2 md:text-xl`}>
                  <SplitTextMotion>
                    {t("pages.about.ValuesSection.sec2.title")}
                  </SplitTextMotion>
                </h2>

                <p className=" text-base/8 font-[400] ">
                  <SlideUpSplitTextMotion>
                    {t("pages.about.ValuesSection.sec2.description")}
                  </SlideUpSplitTextMotion>
                </p>
              </div>
            </div>
          </GetX>

          <GetX direction={`${currentLanguage == "en" ? "right" : "left"}`}>
            <div className={`w-full h-full flex-1`}>
              <div
                className={`flex flex-col p-5 h-full items-stretch 
                ${
                  isDarkMode ? "bg-gray-800" : "bg-[rgba(253,226,243,0.2)]"
                } rounded-lg `}
              >
                <span className="text-xl">{<FiUsers />}</span>
                <h2 className={`font-bold text-[#7616EC] mt-6 mb-2 md:text-xl`}>
                  <SplitTextMotion>
                    {t("pages.about.ValuesSection.sec3.title")}
                  </SplitTextMotion>
                </h2>
                <p className=" text-base/8 font-[400] ">
                  <SlideUpSplitTextMotion>
                    {t("pages.about.ValuesSection.sec3.description")}
                  </SlideUpSplitTextMotion>
                </p>
              </div>
            </div>
          </GetX>
        </div>
      </div>
    </>
  );
}
