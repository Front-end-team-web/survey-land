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
  const IsArabic = currentLanguage == "ar" ? true : false;

  return (
    <div className="flex flex-col md:flex-row p-6 md:p-12  gap-10  md:h-[calc(60vh)] lg:min-h-[calc(100vh-50px)]">
      {/* Left Panel */}
      <motion.div
        initial={{ opacity: 0, x: IsArabic? 100 : -100}}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8 rounded-xl w-full   md:h-full md:w-2/5 space-y-6 shadow-lg flex flex-col justify-between "
      >
        <div>
          <h2 className="md:text-xl lg:text-2xl font-bold">
            {t("contact.title")}
          </h2>
          <p className="text-sm lg:text-lg text-gray-300">
            {t("contact.description")}
          </p>
        </div>
        <div className="space-y-6 text-sm">
          <div className="flex items-center gap-3">
            <span>
              <PiPhoneCallFill />
            </span>
            <span className="text-xs lg:text-base">+2012 3456 789</span>
          </div>
          <div className="flex items-center gap-3">
            <span>
              <FaEnvelope />
            </span>
            <span className="text-xs lg:text-base">surv.inf@email.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span>
              <FaLocationDot />
            </span>
            <span className="text-xs lg:text-base">
              132 Yahrir Square Cairo, Egypt
            </span>
          </div>
        </div>
        <div className=" flex gap-2 pt-4">
          <motion.a
            href="#"
            whileHover={{
              scale: 1.2,
              rotate: 10,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-2 rounded-full bg-purple-900 text-base"
          >
            <FiFacebook />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{
              scale: 1.2,
              rotate: 10,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-2 rounded-full bg-purple-900 text-base"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{
              scale: 1.2,
              rotate: 10,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-2 rounded-full bg-purple-900 text-base"
          >
            <BsTwitterX />
          </motion.a>
        </div>
      </motion.div>

      {/* Right Panel */}
      <motion.div
        initial={{ opacity: 0, x:IsArabic ? -100 : 100}}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full h-full md:w-3/5 flex flex-col justify-between space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col mb-3 md:mr-3 md:rtl:mr-0 md:rtl:ml-3">
            <label
              htmlFor="firstName"
              className="mb-1 md:text-sm lg:text-base font-medium text-purple-600"
            >
              {t("contact.firstName")}
            </label>
            <input
              id="firstName"
              type="text"
              placeholder={t("contact.firstName")}
              className="border md:text-xs lg:text-base border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          <div className="flex flex-col mb-3 md:mr-3 md:rtl:mr-0 md:rtl:ml-3">
            <label
              htmlFor="lastName"
              className="mb-1 md:text-sm lg:text-base font-medium text-purple-600"
            >
              {t("contact.lastName")}
            </label>
            <input
              id="lastName"
              type="text"
              placeholder={t("contact.lastName")}
              className="border md:text-xs lg:text-base border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          <div className="flex flex-col mb-3 md:mr-3 md:rtl:mr-0 md:rtl:ml-3">
            <label
              htmlFor="email"
              className="mb-1 md:text-sm lg:text-base font-medium text-purple-600  "
            >
              {t("contact.email")}
            </label>
            <input
              id="email"
              type="email"
              placeholder={t("contact.email")}
              className="border md:text-xs lg:text-base  border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          <div className="flex flex-col mb-3 md:mr-3 md:rtl:mr-0 md:rtl:ml-3">
            <label
              htmlFor="phone"
              className="mb-1 md:text-sm lg:text-base font-medium text-purple-600"
            >
              {t("contact.phone")}
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              placeholder={t("contact.phone")}
              className="border md:text-xs lg:text-base border-gray-300 rounded-lg px-3 py-2 rtl:text-right"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium text-sm mb-2">
            {t("contact.subjectLabel")}
          </label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-2">
            {[
              { key: "general", value: "General Inquiry" },
              { key: "technical", value: "Technical Issue" },
              { key: "results", value: "Results Help" },
              { key: "pricing", value: "Pricing Question" },
            ].map((option) => (
              <label key={option.key} className="flex items-center text-sm">
                <input
                  type="radio"
                  value={option.key}
                  checked={subject === option.key}
                  onChange={() => setSubject(option.key)}
                  className="accent-purple-600 mr-3 rtl:mr-0 rtl:ml-3"
                />
                {t(`contact.subjects.${option.key}`)}
              </label>
            ))}
          </div>
        </div>

        <textarea
          rows="5"
          placeholder={t("contact.message")}
          className="w-full   border border-gray-300 rounded-lg p-3  "
        ></textarea>

        <div className="flex justify-end  items-end w-full">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-lg hover:opacity-90  "
          >
            {t("contact.send")}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
export default ContactForm;
