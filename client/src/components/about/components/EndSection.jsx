// Import
import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";

// Import Animation
import SplitTextMotion from "./SlideUpSplitTextMotion";
import SlideUpSplitTextMotion from "./SlideUpSplitTextMotion";
import GetX from "./GetX";
// Import Image
import Michael from "../../../assets/aboutImages/Michael.jpg";
import Oliver from "../../../assets/aboutImages/oliver.jpg";
import Noah from "../../../assets/aboutImages/Noah.jpg";
// Main Function
export default function MeetOur() {
  // Theme
  const { isDarkMode } = useSelector((state) => state.theme);
  // Variable Language
  const { currentLanguage } = useSelector((state) => state.language);
  // Variable JSON
  const { t } = useTranslation();
  return (
    <>
      {/* End Task */}
      <div className={`md:p-10 p-3 mt-16`}>
        <div className={` text-center `}>
            <h1
              className={`my-3 text-2xl md:text-4xl font-bold tracking-wide text-[#7616EC]
                `}
                >
              <SplitTextMotion>
              {currentLanguage === "en"
                ? t("pages.about.endSection.subSec.title")
                : t("pages.about.endSectionAr.subSec.title")}
          </SplitTextMotion>
            </h1>
          <p style={{ letterSpacing: "1px" }}>
            <SlideUpSplitTextMotion>
              {currentLanguage === "en"
                ? t("pages.about.endSection.subSec.description")
                : t("pages.about.endSectionAr.subSec.description")}
            </SlideUpSplitTextMotion>
          </p>
        </div>
        {/* Parent Card */}
        <div className={` flex flex-col md:flex-row md:gap-4 mt-20`}>
          {/* Card ONE Michael*/}
          <div className={`md:w-1/3 py-3 `}>
            <GetX direction={`${currentLanguage == "en" ? "left" : "right"}`}>
              <img
                className={` my-4  h-[400px] w-full  rounded-lg`}
                src={Michael}
                alt="Image"
              />
            </GetX>
            <h2
              className={`text-[#7616EC] font-bold text-lg tracking-wide px-3 py-1`}
            >
              <SlideUpSplitTextMotion>
                {currentLanguage === "en"
                  ? t("pages.about.endSection.michael.name")
                  : t("pages.about.endSectionAr.michael.name")}
              </SlideUpSplitTextMotion>
            </h2>
            <span className={` px-3 text-gray-500`}>
              {currentLanguage === "en"
                ? t("pages.about.endSection.michael.job")
                : t("pages.about.endSectionAr.michael.job")}
            </span>

            <p
              className={`px-3 text-gray-900 font-[500] tracking-wide py-3 ${
                isDarkMode ? "text-white" : ""
              }`}
            >
              <SplitTextMotion>
                {currentLanguage === "en"
                  ? t("pages.about.endSection.michael.description")
                  : t("pages.about.endSectionAr.michael.description")}
              </SplitTextMotion>
            </p>
          </div>

          {/* === Card One ==== */}

          {/* Card TOW  Oliver*/}
          <div className={`md:w-1/3 py-3 `}>
            <GetX direction="top">
              <img
                className={` my-4  h-[400px] w-full  rounded-lg`}
                src={Oliver}
                alt="Image"
              />
            </GetX>
            <h2
              className={`text-[#7616EC] font-bold text-lg tracking-wide px-3 py-1`}
            >
              <SlideUpSplitTextMotion>
                {currentLanguage === "en"
                  ? t("pages.about.endSection.oliver.name")
                  : t("pages.about.endSectionAr.oliver.name")}
              </SlideUpSplitTextMotion>
            </h2>
            <span className={` px-3 text-gray-500`}>
              {currentLanguage === "en"
                ? t("pages.about.endSection.oliver.job")
                : t("pages.about.endSectionAr.oliver.job")}
            </span>

            <p
              className={`px-3 text-gray-900 font-[500] tracking-wide py-3 ${
                isDarkMode ? "text-white" : ""
              }`}
            >
              <SplitTextMotion>
                {currentLanguage === "en"
                  ? t("pages.about.endSection.oliver.description")
                  : t("pages.about.endSectionAr.oliver.description")}
              </SplitTextMotion>
            </p>
          </div>

          {/* === Card Tow ==== */}

          {/* Card Three Noah*/}
          <div className={`md:w-1/3 py-3 `}>
            <GetX direction={`${currentLanguage == "en" ? "right" : "left"}`}>
              <img
                className={` my-4  h-[400px] w-full  rounded-lg`}
                src={Noah}
                alt="Image"
              />
            </GetX>
            <h2
              className={`text-[#7616EC] font-bold text-lg tracking-wide px-3 py-1`}
            >
              <SlideUpSplitTextMotion>
                {currentLanguage === "en"
                  ? t("pages.about.endSection.noah.name")
                  : t("pages.about.endSectionAr.noah.name")}
              </SlideUpSplitTextMotion>
            </h2>
            <span className={` px-3 text-gray-500`}>
              {currentLanguage === "en"
                ? t("pages.about.endSection.noah.job")
                : t("pages.about.endSectionAr.noah.job")}
            </span>

            <p
              className={`px-3 text-gray-900 font-[500] tracking-wide py-3 ${
                isDarkMode ? "text-white" : ""
              }`}
            >
              <SplitTextMotion>
                {currentLanguage === "en"
                  ? t("pages.about.endSection.noah.description")
                  : t("pages.about.endSectionAr.noah.description")}
              </SplitTextMotion>
            </p>
          </div>
          {/* === Card Three ==== */}
        </div>
        {/* === Parent Card ==== */}
      </div>
    </>
  );
}
