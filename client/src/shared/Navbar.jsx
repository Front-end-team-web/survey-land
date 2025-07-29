import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { toggleTheme } from "../store/slices/themeSlice";
import { setLanguage } from "../store/slices/languageSlice";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "../hooks/useTranslation";
import myLogo from "../assets/logo.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode } = useSelector((state) => state.theme);
  const { currentLanguage } = useSelector((state) => state.language);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  // Navigation items
  const navItems = [
    { name: t("navbar.home"), path: "/" },
    { name: t("navbar.about"), path: "/about" },
    { name: t("navbar.features"), path: "/features" },
    { name: t("navbar.faqs"), path: "/faqs" },
    { name: t("navbar.pricing"), path: "/pricing" },
    { name: t("navbar.contact"), path: "/contact" },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleLanguageChange = (lang) => {
    dispatch(setLanguage(lang));
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 shadow-lg transition-all duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo and brand name */}
          <div className="flex items-center">
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
              <div
                className={`${currentLanguage === "ar" ? "mr-3" : "ml-3"
                  } flex items-center`}
              >
                <span
                  className={`text-xl font-bold ${isDarkMode ? "text-purple-400" : "text-purple-700"
                    }`}
                >
                  Survey
                </span>
                <span
                  className={`text-xl font-normal ${currentLanguage === "ar" ? "mr-2" : "ml-2"
                    } ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Infinity
                </span>
              </div>
            </motion.div>
          </div>

          {/* Navigation links - Desktop */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div
              className={`flex items-center ${currentLanguage === "ar" ? "space-x-reverse" : ""
                } space-x-1`}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={item.path}
                    className={`px-4 py-2 text-base font-medium transition-all duration-200 relative group ${location.pathname === item.path
                        ? `${isDarkMode ? "text-purple-400" : "text-purple-600"
                        } font-bold`
                        : `${isDarkMode
                          ? "text-gray-300 hover:text-purple-400"
                          : "text-gray-700 hover:text-purple-600"
                        }`
                      }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 ${isDarkMode ? "bg-purple-400" : "bg-purple-600"
                        } transform transition-transform duration-200 ${location.pathname === item.path
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                        }`}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side controls - Desktop & Mobile */}
          <div className="flex items-center gap-3">
            {/* Mobile menu button - Only visible on small screens */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <FiX
                  className={`w-6 h-6 ${isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                />
              ) : (
                <FiMenu
                  className={`w-6 h-6 ${isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                />
              )}
            </button>

            {/* Desktop controls */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language toggle button - Direct switch */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  handleLanguageChange(currentLanguage === "ar" ? "en" : "ar")
                }
                className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 min-w-[100px] ${isDarkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                <MdLanguage className="w-5 h-5 flex-shrink-0" />
                <span
                  className={`text-sm font-medium whitespace-nowrap ${currentLanguage === "ar" ? "mr-2" : "ml-2"
                    }`}
                >
                  {currentLanguage === "ar" ? "English" : "العربية"}
                </span>
              </motion.button>

              {/* Theme toggle -  */}
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <button
                    onClick={handleThemeToggle}
                    className={`relative inline-flex items-center h-10 rounded-full w-20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${isDarkMode
                        ? "bg-purple-600 focus:ring-offset-gray-900"
                        : "bg-gray-300 focus:ring-offset-white"
                      }`}
                    style={{ direction: "ltr" }}
                    aria-label={
                      isDarkMode
                        ? "Switch to light mode"
                        : "Switch to dark mode"
                    }
                  >
                    <span
                      className={`${isDarkMode ? "translate-x-11" : "translate-x-1"
                        } inline-block w-8 h-8 transform bg-white rounded-full transition-transform duration-300 shadow-md flex items-center justify-center`}
                    >
                      {isDarkMode ? (
                        <FiMoon className="w-4 h-4 text-purple-600" />
                      ) : (
                        <FiSun className="w-4 h-4 text-yellow-500" />
                      )}
                    </span>
                  </button>
                </motion.div>
              </div>

              {/* Register button */}
              <motion.button
                onClick={() => navigate("/auth")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap flex-shrink-0 ${isDarkMode
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
              >
                {t("navbar.register")}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu - Full width dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-t ${isDarkMode
                ? "border-gray-700 bg-gray-900"
                : "border-gray-200 bg-white"
              }`}
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile navigation links */}
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${location.pathname === item.path
                        ? `${isDarkMode
                          ? "bg-purple-900/30 text-purple-400"
                          : "bg-purple-50 text-purple-600"
                        } font-bold`
                        : `${isDarkMode
                          ? "text-gray-300 hover:bg-gray-800 hover:text-purple-400"
                          : "text-gray-700 hover:bg-gray-100 hover:text-purple-600"
                        }`
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile controls */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
                {/* Language toggle button - Mobile */}
                <button
                  onClick={() =>
                    handleLanguageChange(currentLanguage === "ar" ? "en" : "ar")
                  }
                  className={`w-full flex items-center justify-center px-4 py-3 rounded-lg transition-colors duration-200 ${isDarkMode
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  <MdLanguage className="w-5 h-5 flex-shrink-0" />
                  <span
                    className={`text-sm font-medium ${currentLanguage === "ar" ? "mr-2" : "ml-2"
                      }`}
                  >
                    {currentLanguage === "ar" ? "English" : "العربية"}
                  </span>
                </button>

                {/* Theme toggle - Mobile */}
                <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                  <span
                    className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                  >
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </span>
                  <button
                    onClick={handleThemeToggle}
                    className={`relative inline-flex items-center h-8 rounded-full w-14 transition-colors duration-300 focus:outline-none ${isDarkMode ? "bg-purple-600" : "bg-gray-300"
                      }`}
                    style={{ direction: "ltr" }}
                  >
                    <span
                      className={`${isDarkMode ? "translate-x-8" : "translate-x-1"
                        } inline-block w-6 h-6 transform bg-white rounded-full transition-transform duration-300 shadow-md flex items-center justify-center`}
                    >
                      {isDarkMode ? (
                        <FiMoon className="w-3 h-3 text-purple-600" />
                      ) : (
                        <FiSun className="w-3 h-3 text-yellow-500" />
                      )}
                    </span>
                  </button>
                </div>

                {/* Register button - Mobile */}
                <button
                  onClick={() => navigate("/auth")}
                  className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg ${isDarkMode
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                >
                  {t("navbar.register")}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
