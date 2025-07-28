import React from "react";
import FQAImage from "../../../assets/faqsImages/amico.png";
import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";
const Definition = () => {
  const { currentLanguage } = useSelector((state) => state.language);
  
  const { t } = useTranslation();
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 max-w-6xl mx-auto ">
      <div className="md:w-1/2 text-center md:text-left space-y-4 mt-8 md:mt-0">
        <h1
          className={`text-3xl md:text-5xl font-bold  text-purple-700   ${
            currentLanguage == "ar" && "md:text-right"
          } `}
        >
          {currentLanguage == "ar" ? "الاسئلة الشائعة" : "FAQs"}
        </h1>
        <p
          className={`text-lg lg:text-xl font-semibold md:w-[90%] ${
            currentLanguage == "ar" && "md:text-right"
          }`}
        >
          {t("faqs.faqsParagraph")}
        </p>
      </div>
      <div className="md:w-1/2 p-10">
        <img src={FQAImage} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Definition;
