import React from "react";
import { Plans } from "./PricingStore";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";

const ChoosePlan = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
  const { t } = useTranslation();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="px-4 mx-auto ">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="text-center my-12 md:my-[100px] flex flex-col gap-4 items-center"
      >
        <motion.h1
          variants={item}
          className="font-bold text-4xl md:text-6xl leading-tight"
        >
          <motion.span className="text-[#7616EC]" variants={item}>
            {t("pages.pricing.ChoosePlan.Choose")}
          </motion.span>{" "}
          {t("pages.pricing.ChoosePlan.your Plan")}
        </motion.h1>

        <motion.p
          variants={item}
          className="font-normal text-xl md:text-2xl lg:text-3xl leading-snug md:leading-normal"
        >
          {t("pages.pricing.ChoosePlan.Choose your perfect plan")}
        </motion.p>

        <motion.p
          variants={item}
          className="text-lg md:text-xl lg:text-2xl leading-relaxed w-full md:w-4/5 lg:w-3/4 mx-auto text-center"
        >
          {t("pages.pricing.ChoosePlan.Choose the perfect")}
        </motion.p>

        {/* Toggle Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-3 md:gap-5 lg:gap-8 mx-auto w-full max-w-md mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`border-2 rounded-xl py-2 px-4 md:px-6 lg:px-8 text-gray-600 border-gray-600 font-semibold text-base md:text-lg whitespace-nowrap ${
              isDarkMode ? "text-white border-white" : ""
            }`}
          >
            {t("pages.pricing.ChoosePlan.Monthly")}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 rounded-xl py-2 px-4 md:px-6 lg:px-8 text-white bg-[--main-color] border-[--main-color] font-semibold text-base md:text-lg whitespace-nowrap"
          >
            {t("pages.pricing.ChoosePlan.Annual (save 20%)")}
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Plan Cards */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-12 w-full mx-auto items-center justify-center"
      >
        {Plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={cardItem}
            whileHover={{ y: -5 }}
            className={`border-2 border-[--main-color] p-6 md:p-8 rounded-2xl flex flex-col relative h-fit ${
              isDarkMode && index !== 1 ? "text-white border-white" : ""
            } ${
              index === 1
                ? "bg-[--main-color] text-white min-h-[660px]"
                : "text-[#490F8F] min-h-[620px]"
            }`}
          >
            {/* Popular Badge */}
            {index === 1 && (
              <motion.div
                initial={{ scale: 0, x: "-50%" }}
                animate={{ scale: 1, x: "-50%" }}
                transition={{ delay: 0.3 }}
                className="absolute text-white bg-[#0BBD85] px-4 py-1.5 md:px-5 md:py-2 rounded-3xl -top-3 left-1/2 text-sm md:text-base whitespace-nowrap"
              >
                {t("pages.pricing.ChoosePlan.Most popular")}
              </motion.div>
            )}

            {/* Plan Title */}
            <h3 className="text-2xl md:text-3xl font-bold mt-2">
              {t(`pages.pricing.ChoosePlan.${plan.title}`)}
            </h3>

            {/* Plan Price */}
            <p className="mt-4">
              <span className="text-2xl md:text-3xl font-bold">
                {plan.price}
              </span>
              /{plan.time}
            </p>

            {/* Plan Description */}
            <p className="my-4 text-base md:text-lg">
              {t(`pages.pricing.ChoosePlan.PlanDescriptions.${plan.title}`)}
            </p>

            {/* Plan Features */}
            <motion.ul className="list-disc px-6 space-y-2 mb-6 text-base md:text-lg">
              {plan.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                >
                  {t(`pages.pricing.ChoosePlan.PlanFeatures.${feature}`)}
                </motion.li>
              ))}
            </motion.ul>

            {/* Plan Action Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`mt-auto border-2 rounded-xl py-2 px-6 font-semibold text-lg w-full mx-auto ${
                index === 1
                  ? "bg-white text-[#490F8F] border-white"
                  : "bg-[--main-color] text-white border-[--main-color]"
              }`}
            >
              {t(`pages.pricing.ChoosePlan.PlanActions.${plan.action}`)}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* Money Back Guarantee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-[#490F8F] bg-[--main-opacity-color] w-full max-w-md md:max-w-lg px-4 py-3 md:py-4 rounded-3xl flex flex-row items-center justify-center gap-2 mx-auto mt-10 md:mt-16 mb-12 md:mb-20"
      >
        <motion.svg
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="w-8 h-8 md:w-10 md:h-10"
          viewBox="0 0 38 46"
          fill="currentColor"
        >
          <path d="M36.3291 6.2959L19.7373 0.641601C19.5371 0.573242 19.2686 0.539062 19 0.539062C18.7314 0.539062 18.4629 0.573242 18.2627 0.641601L1.6709 6.2959C1.26563 6.43262 0.933594 6.90137 0.933594 7.33106V30.8857C0.933594 31.3154 1.21191 31.8818 1.54883 32.1504L18.3799 45.2656C18.5508 45.3975 18.7705 45.4658 18.9951 45.4658C19.2197 45.4658 19.4443 45.3975 19.6104 45.2656L36.4414 32.1504C36.7783 31.8867 37.0566 31.3203 37.0566 30.8857V7.33106C37.0664 6.90137 36.7344 6.4375 36.3291 6.2959ZM33.5508 29.9482L19 41.2861L4.44922 29.9482V9.06934L19 4.1084L33.5508 9.06934V29.9482ZM13.7363 20.1338C13.5898 19.9336 13.3555 19.8115 13.1016 19.8115H10.4063C10.0889 19.8115 9.90332 20.1729 10.0889 20.4316L16.2607 28.9277C16.3337 29.0276 16.4292 29.1089 16.5395 29.1649C16.6498 29.2209 16.7718 29.2501 16.8955 29.2501C17.0192 29.2501 17.1412 29.2209 17.2515 29.1649C17.3618 29.1089 17.4573 29.0276 17.5303 28.9277L27.9111 14.6357C28.0967 14.377 27.9111 14.0156 27.5938 14.0156H24.8984C24.6494 14.0156 24.4102 14.1377 24.2637 14.3379L16.8955 24.4844L13.7363 20.1338Z" />
        </motion.svg>
        <span className="text-lg md:text-xl font-medium text-center md:text-left">
          {t("pages.pricing.ChoosePlan.30-day money-back guarantee")}
        </span>
      </motion.div>
    </div>
  );
};

export default ChoosePlan;
