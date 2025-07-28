import { useSelector } from "react-redux";
import icon1 from "../../../assets/featureImages/icon1.png";
import icon2 from "../../../assets/featureImages/icon2.png";
import icon3 from "../../../assets/featureImages/icon3.png";
import icon4 from "../../../assets/featureImages/icon4.png";
import icon5 from "../../../assets/featureImages/icon5.png";
import icon6 from "../../../assets/featureImages/icon6.png";
import { useTranslation } from "../../../hooks/useTranslation";
const FeatureDetails = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
  const { t, currentLanguage } = useTranslation();
  const isRTL = currentLanguage === "ar";
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
  const features = t("featuresListDetails", { returnObjects: true }) || [];

  return (
    <>
      <section className="px-4 py-8 lg:px-20 lg:py-16 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 p-4 rounded-xl ${
                isDarkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <div>
                <img
                  src={icons[index]}
                  alt="feature icon"
                  className="bg-[#BF4EE81F] p-2 rounded-md"
                />
              </div>
              <h2 className="tracking-wide text-xl font-medium text-[#7616EC]">
                {feature.title}
              </h2>
              <p
                className={`text-lg ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {feature.description}
              </p>
              <div className="flex items-center justify-end">
                <p className="text-md text-[#7616EC] flex items-center">
                  {t("featuresSectionSeeMore.seeMore")}
                  {isRTL ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-arrow-left-icon lucide-arrow-left mr-1 mt-1"
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
                      className="lucide lucide-arrow-left-icon lucide-arrow-left ml-1 mt-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeatureDetails;
