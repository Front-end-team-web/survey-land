import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";
// IMPORT IMAGE
import page from "../../../assets/aboutImages/page.jpg";
// IMPORT ANIMATION
import SlideUpSplitTextMotion from "./SlideUpSplitTextMotion";
import SplitTextMotion from "./SplitTextMotion";

// Parent Component
export default function ScreenPage() {
  const { currentLanguage } = useSelector((state) => state.language);
  const { t } = useTranslation();
  return (
    <>
      {/*  first Section  */}
      <div className=" relative w-full  h-[100vh] md:h-[100vh] lg:h-screen ">
        <h1>{t("pages.about.title")}</h1>

        <img
          src={page}
          alt="Background"
          className=" absolute inset-0 w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black bg-opacity-85"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center text-[#7616EC] text-shadow-lg/30 tracking-[2px] ">
            <SplitTextMotion>
              {currentLanguage === "en"
                ? t("pages.about.titleSecEn")
                : t("pages.about.titleSec1")}
            </SplitTextMotion>
          </h1>
          <p
            style={{ lineHeight: "40px" }}
            className="text-lg md:text-xl text-center max-w-4xl mb-14 font-[350] 
            mt-5 
            "
          >
            <SlideUpSplitTextMotion>
              {currentLanguage === "en"
                ? t("pages.about.discretionEn")
                : t("pages.about.discretion")}
            </SlideUpSplitTextMotion>
          </p>
          {/* Div Button */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-[#7616EC]  hover:border-2 border-solid border-purple-400  hover:bg-[#7616EC]  text-white font-bold py-3 px-6 rounded-lg">
              {currentLanguage === "en"
                ? t("pages.about.buttonStartEn")
                : t("pages.about.buttonStart")}
            </button>
            <button className="  hover:border-2 border-solid border-purple-400  text-white font-bold py-3 px-6 rounded-lg">
              {currentLanguage === "en"
                ? t("pages.about.buttonViewEn")
                : t("pages.about.buttonView")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
