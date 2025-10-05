import React, { useState } from "react";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useTranslation } from "../../../hooks/useTranslation";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const ContactForm = () => {
  const [subject, setSubject] = useState("general");
  const { t } = useTranslation();
  const { currentLanguage } = useSelector((state) => state.language);
  const { isDarkMode } = useSelector((state) => state.theme);
  const IsArabic = currentLanguage === "ar";

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 min-h-[600px]">
        <motion.div
          initial={{ opacity: 0, x: IsArabic ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8 lg:p-10 rounded-2xl shadow-xl flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
                {t("contact.title")}
              </h2>
              <p className="text-base lg:text-lg text-purple-100 leading-relaxed">
                {t("contact.description")}
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center">
                  <PiPhoneCallFill className="w-6 h-6" />
                </div>
                <span className="text-lg">+2012 3456 789</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <span className="text-lg">surv.inf@email.com</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center">
                  <FaLocationDot className="w-5 h-5" />
                </div>
                <span className="text-lg">132 Tahrir Square Cairo, Egypt</span>
              </motion.div>
            </div>
          </div>

          <div className="flex gap-4 pt-8">
            {[
              { icon: FiFacebook, href: "#" },
              { icon: FaInstagram, href: "#" },
              { icon: BsTwitterX, href: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: IsArabic ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className={`block text-base font-semibold ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {t("contact.firstName")}
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder={t("contact.firstName")}
                  className={`
                    w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500
                    ${
                      isDarkMode
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-700"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-gray-50"
                    }
                  `}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className={`block text-base font-semibold ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {t("contact.lastName")}
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder={t("contact.lastName")}
                  className={`
                    w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500
                    ${
                      isDarkMode
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-700"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-gray-50"
                    }
                  `}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className={`block text-base font-semibold ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {t("contact.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={t("contact.email")}
                  className={`
                    w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500
                    ${
                      isDarkMode
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-700"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-gray-50"
                    }
                  `}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className={`block text-base font-semibold ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {t("contact.phone")}
                </label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder={t("contact.phone")}
                  className={`
                    w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500
                    ${
                      isDarkMode
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-700"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-gray-50"
                    }
                    ${IsArabic ? "text-right" : "text-left"}
                  `}
                />
              </div>
            </div>

            <div className="space-y-4">
              <label
                className={`block text-base font-semibold ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {t("contact.subjectLabel")}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { key: "general", value: "General Inquiry" },
                  { key: "technical", value: "Technical Issue" },
                  { key: "results", value: "Results Help" },
                  { key: "pricing", value: "Pricing Question" },
                ].map((option) => (
                  <label
                    key={option.key}
                    className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={option.key}
                      checked={subject === option.key}
                      onChange={() => setSubject(option.key)}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {t(`contact.subjects.${option.key}`)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label
                className={`block text-base font-semibold ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {t("contact.message")}
              </label>
              <textarea
                rows="6"
                placeholder={t("contact.message")}
                className={`
                  w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none
                  ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-700"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-gray-50"
                  }
                `}
              />
            </div>

            <div className="flex justify-end">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                {t("contact.send")}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
