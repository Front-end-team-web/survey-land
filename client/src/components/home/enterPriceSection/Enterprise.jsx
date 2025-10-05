import { useTranslation } from "../../../hooks/useTranslation";
import { useSelector } from "react-redux";
import HeroImage from "../../../assets/homeImages/Enterprice.png";
import iconEnterprice from "../../../assets/homeImages/iconEnterprice.png";

const Enterprise = () => {
  const { t, currentLanguage } = useTranslation();
  const { isDarkMode } = useSelector((state) => state.theme);
  const isRTL = currentLanguage === "ar";

  const enterpriseData = t("pages.enterprise") || {};
  const features = enterpriseData.features || [];
  const safeFeatures = Array.isArray(features) ? features : [];

  return (
    <div
      className={`grid lg:grid-cols-2 grid-cols-1 items-center justify-items-center gap-8 px-4 py-8 lg:px-20 lg:py-16 ${
        isDarkMode
          ? "bg-gradient-to-br from-[#2d0a57] to-[#4a1584]"
          : "bg-gradient-to-br from-[#490F8F] to-[#7616EC]"
      }`}
    >
      <div className="w-full flex flex-col items-center md:items-start order-2 md:order-1">
        <h1
          className={`text-3xl/tight text-white lg:text-5xl/tight font-bold mb-6 md:mb-3 mt-3 md:mt-0 ${
            isRTL ? "text-center md:text-right" : "text-center md:text-left"
          }`}
        >
          {enterpriseData.title || "Enterprise Solutions"}
        </h1>

        <p
          className={`mt-4 text-white text-[18px]/relaxed max-w-full lg:max-w-[70%] ${
            isRTL ? "md:text-right text-center" : "text-center md:text-left"
          } leading-7 mb-6 md:mb-4 ${isDarkMode ? "opacity-90" : ""}`}
        >
          {enterpriseData.description || "Scale your research capabilities"}
        </p>

        <div className="mt-4 flex flex-col gap-2 text-[25px] mb-5 text-white font-semibold">
          {safeFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <img src={iconEnterprice} alt="feature icon" className="w-6" />
              <span className={isDarkMode ? "opacity-95" : ""}>{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <button
            className={`flex items-center flex-row px-16 py-2 font-medium text-base rounded-md transition-all duration-300 hover:shadow-lg ${
              isDarkMode
                ? "bg-white text-[#7616EC] hover:bg-gray-100"
                : "bg-white text-[#7616EC] hover:bg-gray-50"
            }`}
          >
            {enterpriseData.button || "Learn More"}
            {isRTL ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-left mr-1 mt-1"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-1 mt-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="w-full order-1 md:order-2">
        <img src={HeroImage} alt="Enterprise solution" className="w-full" />
      </div>
    </div>
  );
};

export default Enterprise;
