import { useLanguage } from "../contexts/LanguageContext";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const PricingPlans = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useSelector((state) => state.theme);

  const plans = [
    {
      name: t("planStandard"),
      subtitle: t("planStandardSubtitle"),
      price: "0",
      period: t("planPeriodForever"),
      features: [
        t("featureUnlimitedSurveys"),
        t("featureAdvancedSecurity"),
        t("featureApiAccess"),
      ],
      buttonText: t("buttonStartStandard"),
      popular: false,
    },
    {
      name: t("planProfessional"),
      subtitle: t("planProfessionalSubtitle"),
      price: "35",
      period: t("planPeriodMonth"),
      features: [
        t("featureEverythingStandard"),
        t("featureAdvancedSecurity"),
        t("featureApiAccess"),
        t("featureSocialExport"),
        t("featureCustomIntegrations"),
      ],
      buttonText: t("buttonStartProfessional"),
      popular: true,
    },
    {
      name: t("planEnterprise"),
      subtitle: t("planEnterpriseSubtitle"),
      price: "99",
      period: t("planPeriodMonth"),
      features: [
        t("featureEverythingProfessional"),
        t("featureAdvancedSecurity"),
        t("featureApiAccess"),
        t("featureWhiteLabel"),
        t("featureCustomIntegrations"),
      ],
      buttonText: t("buttonStartEnterprise"),
      popular: false,
    },
  ];

  return (
    <section
      className={`py-20 px-6 lg:px-10 transition-colors duration-200 ${
        isDarkMode ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl lg:text-5xl font-bold text-center mb-4 ${
            isDarkMode ? "text-purple-400" : "text-purple-700"
          }`}
        >
          {t("pricingTitle")}{" "}
          <span className={isDarkMode ? "text-white" : "text-gray-900"}>
            {t("pricingHighlight")}
          </span>
        </h2>
        <p
          className={`text-center mb-16 text-lg ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {t("pricingSubtitle")}
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`rounded-2xl p-8 relative border transition-all duration-300 ${
                isDarkMode ? "bg-gray-700 border-gray-600" : "bg-white"
              } ${
                plan.popular
                  ? `ring-2 transform shadow-2xl glow-popular ${
                      isDarkMode ? "ring-purple-400" : "ring-purple-600"
                    }`
                  : isDarkMode
                  ? "hover:shadow-2xl"
                  : "hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <motion.div
                  className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  {t("planPopular")}
                </motion.div>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`text-xl font-bold mb-1 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <div
                  className={`text-4xl font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.subtitle}
                </div>
                {plan.period && (
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {plan.period}
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-center ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                        isDarkMode ? "bg-green-900" : "bg-green-100"
                      }`}
                    >
                      <span
                        className={`text-sm ${
                          isDarkMode ? "text-green-400" : "text-green-600"
                        }`}
                      >
                        ✓
                      </span>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-colors ${
                  isDarkMode
                    ? "bg-purple-500 hover:bg-purple-600 text-white"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
