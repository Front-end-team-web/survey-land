import icon1 from "../../../assets/homeImages/icon1.png";
import icon2 from "../../../assets/homeImages/icon2.png";
import icon3 from "../../../assets/homeImages/icon3.png";
import icon4 from "../../../assets/homeImages/icon4.png";
import icon5 from "../../../assets/homeImages/icon5.png";
import icon6 from "../../../assets/homeImages/icon6.png";
import { motion } from "framer-motion";
import { useTranslation } from "../../../hooks/useTranslation";
import CardFeature from "./CardFeature";

const icons = [icon1, icon2, icon3, icon6, icon5, icon4];

const FeaturesSection = () => {
  const { t } = useTranslation();
  const features = t("featuresList", { returnObjects: true });

  return (
    <>
      <div className="mt-5 mb-24">
        <div className="text-center px-2">
          <h2 className="text-xl md:text-4xl/[1.5] font-bold mb-4">
            <span className="text-[#7616EC]">
              {t("featuresSection.title.part1")}
            </span>{" "}
            {t("featuresSection.title.part2")}
            <br />
            {t("featuresSection.title.part3")}
            <span className="text-[#7616EC] px-2">
              {t("featuresSection.title.part4")}
            </span>
          </h2>
          <p className="mt-5">{t("featuresSection.subtitle")}</p>
        </div>

        <div>
          <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-items-center gap-10 px-4 py-8 lg:px-20 lg:py-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <CardFeature
                  image={icons[index]}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;
