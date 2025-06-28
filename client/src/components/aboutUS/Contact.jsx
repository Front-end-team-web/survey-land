import { useSelector } from "react-redux";
import { useTranslation } from "../../hooks/useTranslation";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import StayUpdated from "./StayUpdated";

const Contact = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useSelector((state) => state.theme);
  const { currentLanguage } = useSelector((state) => state.language);

  return (
    <>
      <div
        className={`py-16 flex flex-col items-center justify-center min-h-screen ${
          isDarkMode ? "bg-[#1F2937] text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="overflow-hidden text-center">
            <h1 className="text-purple-600 font-semibold text-[28px]">
              {t("pages.about.contact.title")}
            </h1>

            <p
              className={`text-[20px] ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {t("pages.about.contact.desc")}
            </p>
          </div>

          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className={`px-8 py-16 flex flex-col justify-between rounded-xl bg-gradient-to-br from-[#7616EC] to-[#490F8F] text-white`}
            >
              <div className="overflow-hidden">
                <h1 className="font-semibold text-[28px]">
                  {t("pages.about.contact.contactInfo")}
                </h1>

                <p className="text-[20px]">
                  {t("pages.about.contact.contactInfoDesc")}
                </p>
              </div>

              <div className="my-6 space-y-6">
                <div className="flex space-x-3">
                  <FaMapMarkerAlt className={`mt-1 text-xl ${currentLanguage === 'ar' ? 'me-3' :'' }`} />
                  <div>
                    <h3 className="font-semibold">
                      {t("pages.about.contact.ourHeadquarters")}
                    </h3>
                    <p>
                      123 Survey Street, San Francisco, CA 94103, United States
                    </p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <BsTelephone className={`mt-1 text-xl ${currentLanguage === 'ar' ? 'me-3' :'' }`} />
                  <div>
                    <h3 className="font-semibold">
                      {t("pages.about.contact.phone")}
                    </h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <FaEnvelope className={`mt-1 text-xl ${currentLanguage === 'ar' ? 'me-3' :'' }`} />
                  <div>
                    <h3 className="font-semibold">
                      {t("pages.about.contact.email")}
                    </h3>
                    <p>info@surveypro.example</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-x-7">
                <h1 className="text-[28px]">
                  {t("pages.about.contact.followUs")}
                </h1>

                <ul className="mt-5 flex space-x-4">
                  <li>
                    <a href="/instagram">
                      <FaInstagram />
                    </a>
                  </li>

                  <li>
                    <a href="/twitter">
                      <FaXTwitter />
                    </a>
                  </li>

                  <li>
                    <a href="/facebook">
                      <FaFacebookF />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={`flex flex-col justify-between px-8 py-6 rounded-xl text-black ${
                isDarkMode ? "bg-white text-black" : ""
              }`}
            >
              <div className="overflow-hidden">
                <h2 className="text-[32px]">
                  {t("pages.about.contact.sendUsMessage")}
                </h2>
              </div>

              <form>
                <div className="flex flex-col md:flex-row my-4 gap-6">
                  <div className="md:w-1/2 flex flex-col">
                    <label htmlFor="name" className="mb-3">
                      {t("pages.about.contact.name")}
                    </label>

                    <input
                      type="text"
                      id="name"
                      className="bg-white text-black border-2 border focus:outline-none rounded-xl px-3 py-2 w-full"
                      placeholder={t("pages.about.contact.name")}
                    />
                  </div>

                  <div className="md:w-1/2 flex flex-col">
                    <label htmlFor="name" className="mb-3">
                      {t("pages.about.contact.email")}
                    </label>

                    <input
                      type="email"
                      id="email"
                      className="bg-white text-black border-2 border focus:outline-none rounded-xl px-3 py-2 w-full"
                      placeholder={t("pages.about.contact.entreEmail")}
                    />
                  </div>
                </div>

                <div className="flex flex-col my-4 ">
                  <label htmlFor="subject" className="mb-3">
                    {t("pages.about.contact.subject")}
                  </label>

                  <input
                    type="text"
                    id="subject"
                    className="bg-white text-black border-2 border focus:outline-none rounded-xl px-3 py-2"
                    placeholder={t("pages.about.contact.subject")}
                  />
                </div>

                <div className="flex flex-col my-4">
                  <label htmlFor="message" className="mb-3">
                    {t("pages.about.contact.message")}
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    className="bg-white text-black border-2 border focus:outline-none rounded-xl px-3 py-2"
                    placeholder={t("pages.about.contact.message")}
                  ></textarea>
                </div>

                <button className="py-2 px-8 w-full md:w-auto bg-[#7616EC] text-white rounded-md">
                  {t("pages.about.contact.sendMesssage")}
                </button>
              </form>
            </div>
          </div>

          <StayUpdated />
        </div>
      </div>
    </>
  );
};

export default Contact;
