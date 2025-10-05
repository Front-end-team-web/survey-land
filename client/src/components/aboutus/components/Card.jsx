import { useTranslation } from "../../../hooks/useTranslation";
import { useSelector } from "react-redux";
import card1 from "../../../assets/aboutImages/card1.jpg";
import card2 from "../../../assets/aboutImages/card2.jpg";
import SplitTextMotion from "../../../shared/animation/SplitTextMotion";
import GetX from "../../../shared/animation/GetX";

export default function Card() {
  const { isDarkMode } = useSelector((state) => state.theme);
  const { currentLanguage } = useSelector((state) => state.language);
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 pt-16">
      {/* Card One */}
      <div
        className={`flex flex-col md:flex-row mx-auto md:mb-16 ${
          isDarkMode ? "bg-[#111827]" : "bg-white"
        } text-xl`}
      >
        <div className={`w-full md:w-1/2 md:order-1`}>
          <GetX direction={`${currentLanguage == "en" ? "left" : "right"}`}>
            <img
              src={card1}
              alt={"Card"}
              className="rounded-lg w-full h-[400px] object-cover"
            />
          </GetX>
        </div>
        <div
          className={`w-full md:w-1/2 text-start md:order-1 ${
            isDarkMode
              ? ""
              : "bg-[radial-gradient(circle_at_center,_#fde2f3_3%,_transparent_50%)]"
          } md:py-8 rounded-lg md:px-10 lg:px-20 mb-16 px-2`}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-[#7616EC] my-4">
            <SplitTextMotion>
              {t("pages.about.sections.sec1.title")}
            </SplitTextMotion>
          </h1>
          <GetX direction={`${currentLanguage !== "en" ? "left" : "right"}`}>
            <p
              className="font-[500] lg:w-[500px] md:w-[320px] text-base/6 mt-1 text-base/8 text-wrap break-all max-w-sm"
              style={{ color: isDarkMode ? "white" : "#111827" }}
            >
              {t("pages.about.sections.sec1.paragraph")}
            </p>
          </GetX>
        </div>
      </div>

      {/* Card Two */}
      <div
        className={`flex flex-col md:flex-row mx-auto md:mb-16 ${
          isDarkMode ? "bg-[#111827]" : "bg-white"
        } text-xl h-full`}
      >
        <div className={`w-full md:w-1/2 md:order-2`}>
          <GetX direction={`${currentLanguage !== "en" ? "left" : "right"}`}>
            <img
              src={card2}
              alt={"Card2"}
              className="rounded-lg w-full h-[400px] object-cover"
            />
          </GetX>
        </div>
        <div
          className={`w-full md:w-1/2 text-start md:order-1 ${
            isDarkMode
              ? ""
              : "bg-[radial-gradient(circle_at_center,_#fde2f3_3%,_transparent_50%)]"
          } md:py-8 rounded-lg md:px-1 lg:px-10 mb-16 px-2`}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-[#7616EC] my-4">
            <SplitTextMotion>
              {t("pages.about.sections.sec2.title")}
            </SplitTextMotion>
          </h1>
          <GetX direction={`${currentLanguage == "en" ? "left" : "right"}`}>
            <p
              className="font-[500] lg:w-[500px] md:w-[320px] text-base/6 mt-1 text-base/8 text-wrap break-all max-w-sm"
              style={{ color: isDarkMode ? "white" : "#111827" }}
            >
              {t("pages.about.sections.sec2.paragraph")}
            </p>
          </GetX>
        </div>
      </div>
    </div>
  );
}
