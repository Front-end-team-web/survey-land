import icon from "../../../assets/featureImages/featureIcon.png";
import { useTranslation } from "../../../hooks/useTranslation";

const FeatureInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center">
        <div className="p-8 max-w-4xl w-full text-center mt-12 md:mt-16">
          <div className="flex items-center justify-center gap-6 mb-16">
            <div className="hidden md:flex items-center justify-center">
              <img src={icon} alt="feature icon" className="w-16" />
            </div>

            <h1 className="text-6xl font-bold text-[#7616EC] tracking-wide">
              {t("featuresHeader.sectionTitle")}
            </h1>

            <div className="hidden md:flex items-center justify-center">
              <img src={icon} alt="feature icon" className="w-16" />
            </div>
          </div>

          <div className="space-y-8 md:space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#7616EC]">
                {t("featuresHeader.headline.part1")}
              </span>{" "}
              {t("featuresHeader.headline.part2")}{" "}
              <span className="text-[#7616EC]">
                {t("featuresHeader.headline.part3")}
              </span>
            </h2>

            <p className="text-md md:text-xl leading-relaxed">
              {t("featuresHeader.description")}
            </p>

            <div className="pt-5 flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#490F8F] to-[#7616EC] text-center px-16 py-2 text-white text-body-base rounded-md">
                {t("featuresHeader.button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureInfo;
