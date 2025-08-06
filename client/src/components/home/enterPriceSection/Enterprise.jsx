import React from "react";
import { useTranslation } from "../../../hooks/useTranslation";
import { useSelector } from "react-redux";

export default function Enterprise() {
  const { t } = useTranslation();
  const { currentLanguage } = useSelector((state) => state.language);
  const { isDarkMode } = useSelector((state) => state.theme);

  // المسار الصحيح بـ pages.
  const enterpriseData = t("pages.enterprise") || {};

  const title = enterpriseData.title || "Enterprise Solutions";
  const description =
    enterpriseData.description || "Scale your research capabilities";
  const features = enterpriseData.features || [];
  const buttonText = enterpriseData.button || "Learn More";

  const safeFeatures = Array.isArray(features) ? features : [];

  return (
    <div className={`py-16 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ul className="space-y-4">
              {safeFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
