import { useSelector } from "react-redux";
import { useTranslation } from "../../hooks/useTranslation";
import { FaQuoteRight } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";

const CustomersSay = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useSelector((state) => state.theme);

  return (
    <div
      className={`py-16 flex flex-col items-center justify-center min-h-screen ${
        isDarkMode ? "bg-[#1F2937] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="overflow-hidden text-center">
          <h1 className="text-purple-600 font-semibold text-[28px]">
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
                src="https://valoxy.org/blog/wp-content/uploads/2013/03/choisir-7-1.jpg"
                alt="image"
                className="p-1 md:w-[200px] md:h-[200px] xl:w-[200px] xl:h-[200px] rounded-xl"
              />
            </div>

            <div className="w-full md:w-3/4 overflow-hidden">
              <h1 className="font-medium text-[18px] w-full md:text-[16px] lg:text-[20px] xl:text-[24px]">
                Survey infinity has transformed how we collect customer
                feedback. The insights we've gained have directly led to product
                improvements that our customers love."
              </h1>

              <div className="my-5 review flex items-center space-x-1">
                <div className="stars flex space-x-1">
                  <RiStarSFill className="text-sm text-[#FFCC00]" />
                  <RiStarSFill className="text-sm text-[#FFCC00]" />
                  <RiStarSFill className="text-sm text-[#FFCC00]" />
                  <RiStarSFill className="text-sm text-[#FFCC00]" />
                  <RiStarSFill />
                </div>

                <span>4.1</span>
              </div>

              <div className="md:flex md:justify-between">
                <div></div>
                <div>
                  <h2>Thomas party</h2>
                  <p>product designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center space-x-4">
          <button class="w-5 h-5 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300">
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
            <span class="w-6 h-1 rounded-full bg-purple-600"></span>
            <span class="w-1 h-1 rounded-full bg-gray-400"></span>
            <span class="w-1 h-1 rounded-full bg-gray-400"></span>
          </div>

          <button class="w-5 h-5 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300">
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
