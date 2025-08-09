import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

const PricingPlans = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: "Standard",
      subtitle: "Free",
      price: "0",
      period: "forever",
      features: ["Unlimited surveys", "Advanced security", "API access"],
      buttonText: "Start with Standard",
      popular: false,
      buttonStyle: "bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white",
    },
    {
      name: "Professional",
      subtitle: "$35",
      price: "35",
      period: "per month",
      features: ["Everything in Standard", "Advanced security", "API access", "Social media export", "Custom integrations"],
      buttonText: "Start with Professional",
      popular: true,
      buttonStyle: "bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white",
    },
    {
      name: "Enterprise",
      subtitle: "$99",
      price: "99",
      period: "per month",
      features: ["Everything in Professional", "Advanced security", "API access", "White label solution", "Custom integrations"],
      buttonText: "Start with Enterprise",
      popular: false,
      buttonStyle: "bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-10 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-purple-700 dark:text-purple-400">
          {t("pricingTitle")} <span className="text-gray-900 dark:text-white">{t("pricingHighlight")}</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-16 text-lg">
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
              className={`bg-white dark:bg-gray-700 rounded-2xl p-8 relative border dark:border-gray-600
                ${
                  plan.popular
                    ? "ring-2 ring-purple-600 dark:ring-purple-400 transform shadow-2xl glow-popular"
                    : "hover:shadow-lg dark:hover:shadow-2xl"
                }
                transition-all duration-300`}
            >
              {plan.popular && (
                <motion.div
                  className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  Popular
                </motion.div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{plan.subtitle}</div>
                {plan.period && <p className="text-gray-500 dark:text-gray-400 text-sm">{plan.period}</p>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-5 h-5 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold transition-colors ${plan.buttonStyle}`}>
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