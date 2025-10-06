import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import HeroSection from "./heroSection/HeroSection";
import FeaturesSection from "./featureSection/FeaturesSection";
import Enterprise from "./enterPriceSection/Enterprise";
import WorkSection from "./workSection/WorkSection";
import SurveyTemplates from "./surveyTemplates/SurveyTemplates";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";
import StatsSection from "./statsSection/StatsSection";
import FAQSection from "./faqSection/FAQSection";
import Testimonials from "./testimonials/Testimonials";
import PricingPlans from "./pricingPlans/PricingPlans";
import SuccessStories from "./successStories/SuccessStories";

const Index = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  const sectionVariants = {
    hidden: { y: 30 },
    visible: {
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className={`${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      {/* Hero Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className={`${isDarkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <HeroSection />
      </motion.div>

      {/* Features Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className={`${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <FeaturesSection />
      </motion.div>

      {/* Enterprise Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Enterprise />
      </motion.div>

      {/* Work Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className={`${isDarkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <WorkSection />
      </motion.div>

      {/* Survey Templates */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className={`${isDarkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <SurveyTemplates />
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className={`${isDarkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <WhyChooseUs />
      </motion.div>

      {/* Stats Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className={`${isDarkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <StatsSection />
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className={`${isDarkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <FAQSection />
      </motion.div>

      {/* Last 3 Sections  */}
      <div className={`${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
        <Testimonials />
        <PricingPlans />
        <SuccessStories />
      </div>
    </div>
  );
};

export default Index;
