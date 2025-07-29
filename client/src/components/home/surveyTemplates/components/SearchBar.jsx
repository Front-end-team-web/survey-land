import { motion } from 'framer-motion';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import { useTranslation } from '../../../../hooks/useTranslation';


const SearchBar = () => {
    const { register } = useForm();
    const { t, currentLanguage } = useTranslation();
    const isEnglish = currentLanguage === "en";

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-lg mx-auto"
        >
            <form className="relative">
                <div className="relative">
                    <input
                        {...register('searchQuery')}
                        type="text"
                        placeholder={t("serveyTemplates.searchPlaceholder")}
                        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 bg-white text-black ${isEnglish ? "pl-12 pr-20" : "pl-20 pr-12"}`}
                    />
                    <FaSearch className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 ${isEnglish ? "left-4" : "right-4"}`} />
                    <button
                        type="submit"
                        className={`absolute top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#490F8F] to-[#7616EC] text-white px-4 py-1.5 rounded-md font-medium hover:shadow-lg transition-all duration-300 ${isEnglish ? "right-2" : "left-2"}`}
                    >
                        {t("serveyTemplates.searchBtn")}
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default SearchBar;