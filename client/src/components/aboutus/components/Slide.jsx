// Import Hooks
import { useTranslation } from "../../../hooks/useTranslation";
import { useSelector } from "react-redux";
// Import ICON
import { BsChatDotsFill } from "react-icons/bs"; // Chat
// IMPOrt ANIMATION
import GetX from "./GetX";
import SplitTextMotion from "./SplitTextMotion";
import SlideUpSplitTextMotion from "./SlideUpSplitTextMotion";

export default function Slide() {
  // Theme
  const { isDarkMode } = useSelector((state) => state.theme);
  const { currentLanguage } = useSelector((state) => state.language);
  const { t } = useTranslation();

  return (
    <>
      <GetX>
        {/* Parent Div */}
        <div
          className={` bg-[#7616EC] md:mx-8 md:p-10 text-center flex justify-center items-center flex-col rounded-lg mx-3 p-3 my-16
            ${isDarkMode ? "text-white" : "text-white"}
            ${isDarkMode ? "bg-gray-800" : ""}
            `}
        >
          {/* ICON */}
          <span className="text-4xl md:text-6xl my-3 md:my-2">
            <BsChatDotsFill />
          </span>
          {/* ==== ICON ===*/}

          {/* Title */}
          <h1
            className={`text-2xl md:text-4xl font-bold py-5 tracking-wide ${
              isDarkMode ? "text-[#7616EC]" : ""
            }`}
          >
            <SplitTextMotion>{t("pages.about.secStory.title")}</SplitTextMotion>
          </h1>
          {/* ===== Title ==== */}

          {/* Paragraph */}
          <p
            className={`text-bold text-base/8`}
            style={{ letterSpacing: "1px" }}
          >
            <SlideUpSplitTextMotion>
              {t("pages.about.secStory.description")}
            </SlideUpSplitTextMotion>
          </p>
          {/* ====== Paragraph ==== */}
        </div>
      </GetX>
    </>
  );
}
