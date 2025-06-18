import { useSelector } from "react-redux";
import enTranslations from "../locales/en.json";
import arTranslations from "../locales/ar.json";

const translations = {
  en: enTranslations,
  ar: arTranslations,
};

export const useTranslation = () => {
  const { currentLanguage } = useSelector((state) => state.language);

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[currentLanguage];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return { t, currentLanguage };
};
