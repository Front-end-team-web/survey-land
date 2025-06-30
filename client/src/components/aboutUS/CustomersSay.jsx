import { useSelector } from "react-redux";
import { useTranslation } from "../../hooks/useTranslation";
import { FaQuoteRight } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { useState } from "react";

const CustomersSay = () => {
  const testimonials = [
    {
      image:
        "https://media.istockphoto.com/id/1310533180/fr/photo/homme-adulte-%C3%A0-la-mode-gai-dans-le-cadre-de-ville.jpg?s=612x612&w=0&k=20&c=bcHVxsSAObt6h2R604K2btDMy-jSPyn2DeWLjI85lIE=",
      feedBack:
        "Survey infinity has transformed how we collect customer feedback. The insights we've gained have directly led to product improvements that our customers love.",
      rating: 4.1,
      name: "Thomas party",
      position: "product designer",
    },
    {
      image:
        "https://media.istockphoto.com/id/613557584/photo/portrait-of-a-beautifull-smiling-man.jpg?s=612x612&w=0&k=20&c=hkCg5CrmTKOApePbPOyo1U9GexEfIJOJqoLXJIvcN8E=",
      feedBack:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, voluptatum nemo neque sed modi ipsum voluptate hic, nisi omnis commodi, rem beatae architecto. Consequatur, libero?",
      rating: 3.1,
      name: "Noah Hunter",
      position: "designer graphique",
    },
    {
      image:
        "https://media.istockphoto.com/id/1644238002/photo/business-confidence-and-portrait-black-man-with-smile-in-office-startup-ceo-or-owner-at-hr.jpg?s=612x612&w=0&k=20&c=qv73OrrnOSfjzQuJiLOywdO2Ly7jsEmG6JhDXY1Qjc4=",
      feedBack:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, voluptatum nemo neque sed modi ipsum voluptate hic, nisi omnis commodi, rem beatae architecto. Consequatur, libero?",
      rating: 2.1,
      name: "Cairo Bilal",
      position: "developpeur web",
    },
  ];

  const { t } = useTranslation();
  const { isDarkMode } = useSelector((state) => state.theme);
  const { currentLanguage } = useSelector((state) => state.language);
  const [currentIndex, setCurrentIndex] = useState(0);

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
          <h1 className="text-purple-600 font-semibold text-[32px] mb-6">
            {t("pages.about.customersSay.title")}
          </h1>

          <p
            className={`text-[20px] ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {t("pages.about.customersSay.desc")}
          </p>
        </div>

        <div
          className={`my-16 p-6 bg-[#E0E0E042] rounded-xl flex flex-col md:flex-row gap-8 md:gap-16`}
        >
          <span className={`text-4xl`}>
            <FaQuoteRight />
          </span>

          <div className="py-6 w-full md:w-3/4 mx-auto flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-2/4 xl:w-1/4">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="p-1 md:w-[200px] md:h-[200px] xl:w-[200px] xl:h-[200px] rounded-xl"
              />
            </div>

            <div className="w-full md:w-3/4 overflow-hidden">
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
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center space-x-4">
          <button
            onClick={handlePrev}
            class="w-5 h-5 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <svg
              class="w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div class="flex items-center space-x-2">
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
            class="w-5 h-5 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <svg
              class="w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomersSay;
