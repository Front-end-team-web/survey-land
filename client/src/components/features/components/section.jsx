import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";
import Icon from "../../../assets/featuresImages/icon.png";
import card from "../../../assets/featuresImages/card.png";
import GetX from "../../../shared/animation/GetX";
import SplitTextMotion from "../../../shared/animation/SplitTextMotion";
import SlideUpSplitTextMotion from "../../../shared/animation/SlideUpSplitTextMotion";

export default function Section() {
  const { currentLanguage } = useSelector((state) => state.language);
  const { t } = useTranslation();

  const features = [
    { titleKey: "titleOne", descKey: "descriptionOne" },
    { titleKey: "titleTow", descKey: "descriptionTow" },
    { titleKey: "titleThree", descKey: "descriptionThree" },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="overflow-hidden">
        <h1 className="py-10 text-2xl md:text-3xl font-bold text-[#7616EC]">
          <SplitTextMotion>
            {t("pages.about.features.sectionFeature.mainTitle")}
          </SplitTextMotion>
        </h1>
        <div className={`md:flex items-center content-between lg:gap-16`}>
          <div>
            {features.map((item, index) => (
              <section key={index} className="lg:px-16 md:px-5 mb-6">
                <div className="flex items-center gap-3">
                  <GetX
                    direction={`${currentLanguage === "en" ? "right" : "left"}`}
                  >
                    <img src={Icon} alt="Icon" />
                  </GetX>
                  <h1 className="md:text-lg font-bold py-2 text-[#7616EC]">
                    <SplitTextMotion>
                      {t(
                        `pages.about.features.sectionFeature.${item.titleKey}`
                      )}
                    </SplitTextMotion>
                  </h1>
                </div>
                <p className="text-gray-500 mx-10 text-wrap md:w-[350px]">
                  <SlideUpSplitTextMotion>
                    {t(`pages.about.features.sectionFeature.${item.descKey}`)}
                  </SlideUpSplitTextMotion>
                </p>
              </section>
            ))}
          </div>
          <img
            src={card}
            alt=""
            className={`w-full h-[400px] md:w-[300px] lg:w-full`}
          />
        </div>
      </div>
    </div>
  );
}
