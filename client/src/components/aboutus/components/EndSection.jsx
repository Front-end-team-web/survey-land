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
export default function EndSection() {
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
              {t("pages.about.endSection.subSec.title")}
            </SplitTextMotion>
          </h1>
          <p style={{ letterSpacing: "1px" }}>
            <SlideUpSplitTextMotion>
              {t("pages.about.endSection.subSec.description")}
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
                {t("pages.about.endSection.michael.name")}
              </SlideUpSplitTextMotion>
            </h2>
            <span className={` px-3 text-gray-500`}>
              {t("pages.about.endSection.michael.job")}
            </span>

            <p
              className={`px-3 text-gray-900 font-[500] tracking-wide py-3 ${
                isDarkMode ? "text-white" : ""
              }`}
            >
              <SplitTextMotion>
                {t("pages.about.endSection.michael.description")}
              </SplitTextMotion>
            </p>
          </div>

          {/* Card TWO  Oliver*/}
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
                {t("pages.about.endSection.oliver.name")}
              </SlideUpSplitTextMotion>
            </h2>
            <span className={` px-3 text-gray-500`}>
              {t("pages.about.endSection.oliver.job")}
            </span>

            <p
              className={`px-3 text-gray-900 font-[500] tracking-wide py-3 ${
                isDarkMode ? "text-white" : ""
              }`}
            >
              <SplitTextMotion>
                {t("pages.about.endSection.oliver.description")}
              </SplitTextMotion>
            </p>
          </div>

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
                {t("pages.about.endSection.noah.name")}
              </SlideUpSplitTextMotion>
            </h2>
            <span className={` px-3 text-gray-500`}>
              {t("pages.about.endSection.noah.job")}
            </span>

            <p
              className={`px-3 text-gray-900 font-[500] tracking-wide py-3 ${
                isDarkMode ? "text-white" : ""
              }`}
            >
              <SplitTextMotion>
                {t("pages.about.endSection.noah.description")}
              </SplitTextMotion>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
