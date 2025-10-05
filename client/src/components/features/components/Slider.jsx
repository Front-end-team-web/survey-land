import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";
import SplitTextMotion from "../../../shared/animation/SplitTextMotion";
import SlideUpSplitTextMotion from "../../../shared/animation/SlideUpSplitTextMotion";
import GetX from "../../../shared/animation/GetX";

export default function Slider() {
  const { currentLanguage } = useSelector((state) => state.language);
  const { t } = useTranslation();

  return (
    <>
      <div className="overflow-hidden mt-20">
        <div
          className={`flex flex-col justify-center items-center my-[60px] pt-10 py-10 md:pb-20 bg-[#7616EC]`}
        >
          <h2
            className={`text-xl  font-bold text-white tracking-wide  text-center px-5`}
          >
            <SplitTextMotion>
              {t("pages.about.features.section2.title")}
            </SplitTextMotion>
          </h2>
          <p
            className={`pb-6 pt-4 font-[400] px-4 text-center text-white text-base/8 px-5 `}
          >
            <SlideUpSplitTextMotion>
              {t("pages.about.features.section2.description")}
            </SlideUpSplitTextMotion>
          </p>
          <div
            className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ${
              currentLanguage !== "en" ? "gap-2" : ""
            } text-[#7616EC] `}
          >
            <GetX direction={`${currentLanguage == "en" ? "left" : "right"}`}>
              <button className="bg-white font-[500] text-[#7616EC] py-1 px-6 rounded-lg">
                {t("pages.about.features.section2.btnStart")}
              </button>
            </GetX>
            <GetX direction={`${currentLanguage == "en" ? "right" : "left"}`}>
              <button className="py-1 px-6 rounded-lg border-2 border-solid border-gray-400 text-white ">
                {t("pages.about.features.section2.btnContent")}
              </button>
            </GetX>
          </div>
        </div>
      </div>
    </>
  );
}
