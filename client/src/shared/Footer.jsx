// import { motion } from "framer-motion";
// import myLogo from "../assets/logo.png";
// import { useSelector } from "react-redux";
// import { useTranslation } from "../hooks/useTranslation";
// import { Link } from "react-router-dom";
// import {
//   FaTwitter,
//   FaLinkedin,
//   FaFacebook,
//   FaInstagram,
//   FaPlus,
// } from "react-icons/fa";

// const FooterSection = ({ title, links, className }) => (
//   <div className={className}>
//     <h1 className="text-white font-semibold mb-2">{title}</h1>
//     <ul className="space-y-2">
//       {links.map(({ to, label }) => (
//         <li key={to}>
//           <Link className="text-gray-400 hover:text-white" to={to}>
//             {label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const FooterAccordion = ({ id, title, links }) => (
//   <div className="block md:hidden details">
//     <input type="checkbox" className="hidden peer" id={id} />
//     <label
//       htmlFor={id}
//       className="cursor-pointer flex items-center justify-between"
//     >
//       <h1 className="text-white font-semibold">{title}</h1>
//       <span className="text-white">
//         <FaPlus />
//       </span>
//     </label>
//     <ul className="peer-checked:p-3 max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-64 space-y-2">
//       {links.map(({ to, label }) => (
//         <li key={to}>
//           <Link className="text-gray-400 hover:text-white" to={to}>
//             {label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const Footer = () => {
//   const { currentLanguage } = useSelector((state) => state.language);
//   const { t } = useTranslation();

//   const isRTL = currentLanguage === "ar";
//   const marginDirection = isRTL ? "mr-3" : "ml-3";

//   const productLinks = [
//     { to: "/productsSurveyBuilder", label: t("footer.productsSurveyBuilder") },
//     { to: "/productsQuizMaker", label: t("footer.productsQuizMaker") },
//     { to: "/productsFormCreator", label: t("footer.productsFormCreator") },
//     { to: "/productsPoolSystem", label: t("footer.productsPoolSystem") },
//     {
//       to: "/productsAnalyticsDashboard",
//       label: t("footer.productsAnalyticsDashboard"),
//     },
//   ];

//   const resourceLinks = [
//     { to: "/resourcesHelpCenter", label: t("footer.resourcesHelpCenter") },
//     { to: "/resourcesBlog", label: t("footer.resourcesBlog") },
//     { to: "/resourcesTutorials", label: t("footer.resourcesTutorials") },
//     { to: "/resourcesCaseStudies", label: t("footer.resourcesCaseStudies") },
//     { to: "/resourcesTemplates", label: t("footer.resourcesTemplates") },
//   ];

//   return (
//     <div className="bg-[#210048]">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="container mx-auto py-8 px-4"
//       >
//         <div className="flex flex-wrap gap-8 justify-between">
//           {/* Logo & Social */}
//           <div className="flex flex-col justify-between max-w-sm">
//             {/* <div className="flex items-center"> */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="flex items-center"
//             >
//               <img
//                 src={myLogo}
//                 alt="Survey Infinity Logo"
//                 className="w-12 h-12 object-contain"
//               />
//               <div className={`${marginDirection} flex items-center`}>
//                 <span className="text-xl font-bold text-white">Survey</span>
//                 <span
//                   className={`text-xl font-normal text-gray-400 ${
//                     isRTL ? "mr-2" : "ml-2"
//                   }`}
//                 >
//                   Infinity
//                 </span>
//               </div>
//             </motion.div>
//             {/* </div> */}

//             <p className="text-gray-400 mt-4 w-3/4">{t("footer.desc")}</p>

//             <ul className="flex gap-4 mt-4">
//               <li>
//                 <Link to="/twitter" aria-label="Twitter">
//                   <FaTwitter className="text-gray-400 hover:text-white" />
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/linkedin" aria-label="LinkedIn">
//                   <FaLinkedin className="text-gray-400 hover:text-white" />
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/facebook" aria-label="Facebook">
//                   <FaFacebook className="text-gray-400 hover:text-white" />
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/instagram" aria-label="Instagram">
//                   <FaInstagram className="text-gray-400 hover:text-white" />
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Desktop Sections */}
//           <FooterSection
//             className="hidden md:block md:pt-2"
//             title={t("footer.products")}
//             links={productLinks}
//           />
//           <FooterSection
//             className="hidden md:block md:pt-2"
//             title={t("footer.resources")}
//             links={resourceLinks}
//           />

//           <div className="hidden md:block max-w-xs md:pt-2">
//             <h1 className="text-white font-semibold">
//               {t("footer.stayUpdated")}
//             </h1>
//             <p className="text-gray-400 mt-2">{t("footer.stayUpdatedDesc")}</p>
//             <div className="mt-3 flex flex-col gap-y-4">
//               <input
//                 className="rounded py-1 px-2 focus:outline-none bg-purple-500/30 text-white"
//                 type="email"
//                 name="email"
//                 placeholder={t("footer.stayUpdatedEntreEmail")}
//               />
//               <button className="bg-purple-600 hover:bg-purple-700 text-white py-1 rounded">
//                 {t("footer.stayUpdatedSubscribe")}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Accordions */}
//           <div className="w-full md:hidden space-y-4">
//             <FooterAccordion
//               id="products"
//               title={t("footer.products")}
//               links={productLinks}
//             />
//             <FooterAccordion
//               id="resources"
//               title={t("footer.resources")}
//               links={resourceLinks}
//             />
//             <div className="details">
//               <input type="checkbox" className="hidden peer" id="stayUpdated" />
//               <label
//                 htmlFor="stayUpdated"
//                 className="cursor-pointer flex items-center justify-between"
//               >
//                 <h1 className="text-white font-semibold">
//                   {t("footer.stayUpdated")}
//                 </h1>

//                 <span className="text-white">
//                   <FaPlus />
//                 </span>
//               </label>
//               <div className="peer-checked:p-3 max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-64">
//                 <p className="text-gray-400">{t("footer.stayUpdatedDesc")}</p>
//                 <div className="flex flex-col gap-y-4 mt-2">
//                   <input
//                     className="rounded py-1 px-2 focus:outline-none bg-[#271F37] text-white"
//                     type="email"
//                     placeholder={t("footer.stayUpdatedEntreEmail")}
//                   />
//                   <button className="bg-purple-600 hover:bg-purple-700 text-white py-1 rounded">
//                     {t("footer.stayUpdatedSubscribe")}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-8 py-6 border-t border-white text-center flex flex-col md:flex-row md:items-center justify-between">
//           <h1 className="text-gray-400">&copy; {t("footer.rights")}</h1>
//           <ul className="flex flex-col md:flex-row gap-y-2 md:gap-x-4 mt-4 md:mt-0">
//             <li>
//               <Link className="text-gray-400 hover:text-white" to="/terms">
//                 {t("footer.terms")}
//               </Link>
//             </li>
//             <li>
//               <Link className="text-gray-400 hover:text-white" to="/privacy">
//                 {t("footer.privacy")}
//               </Link>
//             </li>
//             <li>
//               <Link className="text-gray-400 hover:text-white" to="/security">
//                 {t("footer.security")}
//               </Link>
//             </li>
//             <li>
//               <Link className="text-gray-400 hover:text-white" to="/cookies">
//                 {t("footer.cookies")}
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Footer;

import { motion } from "framer-motion";
import myLogo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { useTranslation } from "../hooks/useTranslation";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPlus,
} from "react-icons/fa";

const FooterSection = ({ title, links, className }) => (
  <div className={className}>
    <h1 className="text-white font-semibold mb-2">{title}</h1>
    <ul className="space-y-2">
      {links.map(({ to, label }) => (
        <li key={to}>
          <Link className="text-gray-400 hover:text-white" to={to}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const FooterAccordion = ({ id, title, links }) => (
  <div className="block md:hidden details">
    <input type="checkbox" className="hidden peer" id={id} />
    <label
      htmlFor={id}
      className="cursor-pointer flex items-center justify-between"
    >
      <h1 className="text-white font-semibold">{title}</h1>
      <span className="text-white">
        <FaPlus />
      </span>
    </label>
    <ul className="peer-checked:p-3 max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-64 space-y-2">
      {links.map(({ to, label }) => (
        <li key={to}>
          <Link className="text-gray-400 hover:text-white" to={to}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const { currentLanguage } = useSelector((state) => state.language);
  const { t } = useTranslation();

  const isRTL = currentLanguage === "ar";
  const marginDirection = isRTL ? "mr-3" : "ml-3";

  // مسارات مصححة بـ pages.
  const productLinks = [
    {
      to: "/productsSurveyBuilder",
      label: t("pages.footer.productsSurveyBuilder"),
    },
    { to: "/productsQuizMaker", label: t("pages.footer.productsQuizMaker") },
    {
      to: "/productsFormCreator",
      label: t("pages.footer.productsFormCreator"),
    },
    { to: "/productsPoolSystem", label: t("pages.footer.productsPoolSystem") },
    {
      to: "/productsAnalyticsDashboard",
      label: t("pages.footer.productsAnalyticsDashboard"),
    },
  ];

  const resourceLinks = [
    {
      to: "/resourcesHelpCenter",
      label: t("pages.footer.resourcesHelpCenter"),
    },
    { to: "/resourcesBlog", label: t("pages.footer.resourcesBlog") },
    { to: "/resourcesTutorials", label: t("pages.footer.resourcesTutorials") },
    {
      to: "/resourcesCaseStudies",
      label: t("pages.footer.resourcesCaseStudies"),
    },
    { to: "/resourcesTemplates", label: t("pages.footer.resourcesTemplates") },
  ];

  return (
    <div className="bg-[#210048]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-8 px-4"
      >
        <div className="flex flex-wrap gap-8 justify-between">
          {/* Logo & Social */}
          <div className="flex flex-col justify-between max-w-sm">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img
                src={myLogo}
                alt="Survey Infinity Logo"
                className="w-12 h-12 object-contain"
              />
              <div className={`${marginDirection} flex items-center`}>
                <span className="text-xl font-bold text-white">Survey</span>
                <span
                  className={`text-xl font-normal text-gray-400 ${
                    isRTL ? "mr-2" : "ml-2"
                  }`}
                >
                  Infinity
                </span>
              </div>
            </motion.div>

            <p className="text-gray-400 mt-4 w-3/4">{t("pages.footer.desc")}</p>

            <ul className="flex gap-4 mt-4">
              <li>
                <Link to="/twitter" aria-label="Twitter">
                  <FaTwitter className="text-gray-400 hover:text-white" />
                </Link>
              </li>
              <li>
                <Link to="/linkedin" aria-label="LinkedIn">
                  <FaLinkedin className="text-gray-400 hover:text-white" />
                </Link>
              </li>
              <li>
                <Link to="/facebook" aria-label="Facebook">
                  <FaFacebook className="text-gray-400 hover:text-white" />
                </Link>
              </li>
              <li>
                <Link to="/instagram" aria-label="Instagram">
                  <FaInstagram className="text-gray-400 hover:text-white" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Sections */}
          <FooterSection
            className="hidden md:block md:pt-2"
            title={t("pages.footer.products")}
            links={productLinks}
          />
          <FooterSection
            className="hidden md:block md:pt-2"
            title={t("pages.footer.resources")}
            links={resourceLinks}
          />

          <div className="hidden md:block max-w-xs md:pt-2">
            <h1 className="text-white font-semibold">
              {t("pages.footer.stayUpdated")}
            </h1>
            <p className="text-gray-400 mt-2">
              {t("pages.footer.stayUpdatedDesc")}
            </p>
            <div className="mt-3 flex flex-col gap-y-4">
              <input
                className="rounded py-1 px-2 focus:outline-none bg-purple-500/30 text-white"
                type="email"
                name="email"
                placeholder={t("pages.footer.stayUpdatedEntreEmail")}
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-1 rounded">
                {t("pages.footer.stayUpdatedSubscribe")}
              </button>
            </div>
          </div>

          {/* Mobile Accordions */}
          <div className="w-full md:hidden space-y-4">
            <FooterAccordion
              id="products"
              title={t("pages.footer.products")}
              links={productLinks}
            />
            <FooterAccordion
              id="resources"
              title={t("pages.footer.resources")}
              links={resourceLinks}
            />
            <div className="details">
              <input type="checkbox" className="hidden peer" id="stayUpdated" />
              <label
                htmlFor="stayUpdated"
                className="cursor-pointer flex items-center justify-between"
              >
                <h1 className="text-white font-semibold">
                  {t("pages.footer.stayUpdated")}
                </h1>

                <span className="text-white">
                  <FaPlus />
                </span>
              </label>
              <div className="peer-checked:p-3 max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-64">
                <p className="text-gray-400">
                  {t("pages.footer.stayUpdatedDesc")}
                </p>
                <div className="flex flex-col gap-y-4 mt-2">
                  <input
                    className="rounded py-1 px-2 focus:outline-none bg-[#271F37] text-white"
                    type="email"
                    placeholder={t("pages.footer.stayUpdatedEntreEmail")}
                  />
                  <button className="bg-purple-600 hover:bg-purple-700 text-white py-1 rounded">
                    {t("pages.footer.stayUpdatedSubscribe")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 py-6 border-t border-white text-center flex flex-col md:flex-row md:items-center justify-between">
          <h1 className="text-gray-400">&copy; {t("pages.footer.rights")}</h1>
          <ul className="flex flex-col md:flex-row gap-y-2 md:gap-x-4 mt-4 md:mt-0">
            <li>
              <Link className="text-gray-400 hover:text-white" to="/terms">
                {t("pages.footer.terms")}
              </Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-white" to="/privacy">
                {t("pages.footer.privacy")}
              </Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-white" to="/security">
                {t("pages.footer.security")}
              </Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-white" to="/cookies">
                {t("pages.footer.cookies")}
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
