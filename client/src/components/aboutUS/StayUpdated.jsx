import { useSelector } from "react-redux";
import { useTranslation } from "../../hooks/useTranslation";

const StayUpdated = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useSelector((state) => state.theme);
  const { currentLanguage } = useSelector((state) => state.language);

  return (
    <div className="my-8 py-8">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden text-center">
          <h1 className="text-purple-600 font-semibold text-[38px] md:text-[52px]">
            {t("pages.about.stayUpdated.title")}
          </h1>

          <p className={`text-[18px] md:text-[26px] ${isDarkMode ? "text-white" : "text-black"}`}>
            {t("pages.about.stayUpdated.desc")}
          </p>
        </div>

        <form className="mt-20 md:w-2/3 mx-auto">
          <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4">
            <input
              type="text"
              id="name"
              placeholder={t("pages.about.stayUpdated.entreEmail")}
              className={`bg-white text-black border-2 border focus:outline-none rounded-xl px-3 py-2 w-full md:w-5/6 ${currentLanguage == 'ar' ? 'me-3' : ''}`}
            />

            <button className="bg-[#7616EC] text-white rounded-md py-2 px-8">
              {t("pages.about.stayUpdated.subscribe")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StayUpdated;
