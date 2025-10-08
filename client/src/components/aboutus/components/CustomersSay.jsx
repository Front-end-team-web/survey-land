import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";
import { FaQuoteRight } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  TITLE_SM,
  TITLE_MD,
  DESC_MD,
  DESC_SM,
} from "../../../design/SharedClasses";

const CustomersSay = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useSelector((state) => state.theme);
  const { currentLanguage } = useSelector((state) => state.language);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  ];

  const ratings = [4.1, 3.1, 2.1];

  const testimonials = t("pages.about.customersSay.testimonials").map(
    (testimonial, index) => ({
      ...testimonial,
      image: images[index],
      rating: ratings[index],
    })
  );

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      className={`py-16 flex flex-col items-center justify-center min-h-screen ${
        isDarkMode ? "bg-[#1F2937] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="overflow-hidden text-center">
          <h1
            className={`text-purple-600 font-semibold mb-6 ${TITLE_SM} md:${TITLE_MD}`}
          >
            {t("pages.about.customersSay.title")
              .split(" ")
              .map((word, index) => {
                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 }}
                  >
                    <span>
                      {word}
                      &nbsp;
                    </span>
                  </motion.span>
                );
              })}
          </h1>

          <motion.p
            className={`${DESC_SM} md:${DESC_MD} ${
              isDarkMode ? "text-white" : "text-black"
            }`}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t("pages.about.customersSay.desc")}
          </motion.p>
        </div>

        <motion.div
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="overflow-x-hidden"
        >
          <div
            className={`my-16 p-6 bg-[#E0E0E042] rounded-xl flex flex-col md:flex-row gap-8 md:gap-16`}
          >
            <span className={`text-4xl`}>
              <FaQuoteRight />
            </span>

            <div className="py-6 w-full md:w-3/4 mx-auto flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-2/4 xl:w-1/4">
                <motion.img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="p-1 md:w-[200px] md:h-[200px] xl:w-[200px] xl:h-[200px] rounded-xl object-cover"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                />
              </div>

              <motion.div
                className="w-full md:w-3/4 overflow-hidden"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <h1 className="font-medium text-[18px] w-full md:text-[16px] lg:text-[20px] xl:text-[24px]">
                  "{currentTestimonial.feedBack}"
                </h1>

                <div className="my-5 review flex items-center space-x-1">
                  <div className="stars flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => {
                      return (
                        <RiStarSFill
                          key={i}
                          className={`text-sm ${
                            i <= Math.round(currentTestimonial.rating)
                              ? "text-[#FFCC00]"
                              : "text-[#000]"
                          }`}
                        />
                      );
                    })}
                  </div>

                  <span>{currentTestimonial.rating}</span>
                </div>

                <div className="md:flex md:justify-between">
                  <div></div>
                  <div>
                    <h2>{currentTestimonial.name}</h2>
                    <p>{currentTestimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={handlePrev}
              className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <svg
                className="w-4 h-4 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => {
                return (
                  <span
                    key={index}
                    className={`rounded-full ${
                      index === currentIndex
                        ? "w-6 h-1 bg-purple-600"
                        : "w-1 h-1 bg-gray-400"
                    }
                   ${currentLanguage == "ar" ? "me-3" : ""}`}
                  ></span>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <svg
                className="w-4 h-4 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomersSay;
