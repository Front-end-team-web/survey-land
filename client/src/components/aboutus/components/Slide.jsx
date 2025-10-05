import { useTranslation } from "../../../hooks/useTranslation";
import { useSelector } from "react-redux";
import { BsChatDotsFill } from "react-icons/bs";
import GetX from "../../../shared/animation/GetX";
import SplitTextMotion from "../../../shared/animation/SplitTextMotion";
import SlideUpSplitTextMotion from "../../../shared/animation/SlideUpSplitTextMotion";

export default function Slide() {
  const { isDarkMode } = useSelector((state) => state.theme);
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 my-16">
      <GetX>
        <div
          className={`bg-[#7616EC] text-center flex justify-center items-center flex-col rounded-lg p-10 ${
            isDarkMode ? "text-white bg-gray-800" : "text-white"
          }`}
        >
          <span className="text-4xl md:text-6xl my-3 md:my-2">
            <BsChatDotsFill />
          </span>
          <h1
            className={`text-2xl md:text-4xl font-bold py-5 tracking-wide ${
              isDarkMode ? "text-[#7616EC]" : ""
            }`}
          >
            <SplitTextMotion>{t("pages.about.secStory.title")}</SplitTextMotion>
          </h1>
          <p
            className={`text-bold text-base/8`}
            style={{ letterSpacing: "1px" }}
          >
            <SlideUpSplitTextMotion>
              {t("pages.about.secStory.description")}
            </SlideUpSplitTextMotion>
          </p>
        </div>
      </GetX>
    </div>
  );
}
