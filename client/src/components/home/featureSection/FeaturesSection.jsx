import React from "react";
import { useTranslation } from "../../../hooks/useTranslation";
import { useSelector } from "react-redux";

export default function FeaturesSection() {
  const { t } = useTranslation();
  const { currentLanguage } = useSelector((state) => state.language);
  const { isDarkMode } = useSelector((state) => state.theme);

  const featuresData = t("pages.featuresList") || [];
  const features = Array.isArray(featuresData) ? featuresData : [];

  const sectionTitle =
    t("pages.featuresSection.title.part1") +
    " " +
    t("pages.featuresSection.title.part2");
  const sectionSubtitle = t("pages.featuresSection.subtitle");

  if (features.length === 0) {
    return (
      <div className="py-16 text-center">
        <p>No features available</p>
      </div>
    );
  }

  return (
    <div className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {sectionTitle}
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-600">
                {feature.title}
              </h3>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
