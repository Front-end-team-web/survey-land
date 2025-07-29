// Import
import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";

// Import Animation
import SplitTextMotion from "../../about/components/SplitTextMotion";
import SlideUpSplitTextMotion from "../../about/components/SlideUpSplitTextMotion";
import GetX from "../../about/components/GetX";

export default function Slide() {
  const { isDarkMode } = useSelector((state) => state.theme);
  // Variable Language
  const { currentLanguage } = useSelector((state) => state.language);
  // Variable JSON
  const { t } = useTranslation();
  return (
    <>
      <div className="overflow-hidden mt-20">
        {/* Section Two */}
        <div
          className={`flex flex-col justify-center items-center my-[60px] pt-10 py-10 md:pb-20 bg-[#7616EC]`}
        >
          <h2
            className={`text-xl  font-bold text-white tracking-wide  text-center px-5`}
          >
            <SplitTextMotion>
              {currentLanguage === "en"
                ? t("pages.features.section2.title")
                : t("pages.features.sectionAr.title")}
            </SplitTextMotion>
          </h2>
          <p
            className={`pb-6 pt-4 font-[400] px-4 text-center text-white text-base/8 px-5 `}
          >
            <SlideUpSplitTextMotion>
              {currentLanguage === "en"
                ? t("pages.features.section2.description")
                : t("pages.features.sectionAr.description")}
            </SlideUpSplitTextMotion>
          </p>
          <div
            className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ${
              currentLanguage !== "en" ? "gap-2" : ""
            } text-[#7616EC] `}
          >
            <GetX direction={`${currentLanguage == "en" ? "left" : "right"}`}>
              <button className="bg-white font-[500] text-[#7616EC] py-1 px-6 rounded-lg">
                {currentLanguage === "en"
                  ? t("pages.features.section2.btnStart")
                  : t("pages.features.sectionAr.btnStart")}
              </button>
            </GetX>
            <GetX direction={`${currentLanguage == "en" ? "right" : "left"}`}>
              <button className="py-1 px-6 rounded-lg border-2 border-solid border-gray-400 text-white ">
                {currentLanguage === "en"
                  ? t("pages.features.section2.btnContent")
                  : t("pages.features.sectionAr.btnContent")}
              </button>
            </GetX>
          </div>
        </div>
      </div>
    </>
  );
}
