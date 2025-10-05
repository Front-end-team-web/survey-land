import icon1 from "../../../assets/featureImages/Need1.png";
import icon2 from "../../../assets/featureImages/Need2.png";
import icon3 from "../../../assets/featureImages/Need3.png";
import icon4 from "../../../assets/featureImages/Need4.png";
import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";

const FeatureAllNeeds = () => {
  const icons = [icon1, icon2, icon3, icon4];

  const { t, currentLanguage } = useTranslation();
  const FeatureAllNeedsSteps = t("FeatureAllNeedsSteps", {
    returnObjects: true,
  });
  const { isDarkMode } = useSelector((state) => state.theme);
  const isRTL = currentLanguage === "ar";

  return (
    <div className="container mx-auto px-4">
      <div className="mt-24">
        <div className="text-center px-2">
          <h3 className="text-xl md:text-4xl font-bold mb-4">
            {t("FeatureAllNeeds.title.part1")}{" "}
            <span className="text-[#7616EC]">
              {t("FeatureAllNeeds.title.part2")}
            </span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-stretch justify-items-center gap-3 py-8 lg:py-16">
          {FeatureAllNeedsSteps.map((step, index) => (
            <div
              key={index}
              className={`w-full h-full flex flex-col items-center text-center gap-4 p-5 rounded-md ${
                isDarkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <div>
                <img
                  src={icons[index]}
                  alt="feature icon"
                  className="bg-[#BF4EE81F] p-2 rounded-md w-9 h-9"
                />
              </div>
              <h4 className="tracking-wide text-xl font-medium text-[#7616EC]">
                {step.title}
              </h4>
              <p
                className={`${isRTL ? "w-[80%]" : "w-[100%]"} text-sm/relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureAllNeeds;
