import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "./store/slices/themeSlice";
import { setLanguage } from "./store/slices/languageSlice";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.theme);
  const { currentLanguage } = useSelector((state) => state.language);

  // Initialize theme and language from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedLanguage = localStorage.getItem("language");

    if (savedTheme) {
      dispatch(setTheme(savedTheme === "dark"));
    }

    if (savedLanguage) {
      dispatch(setLanguage(savedLanguage));
    }
  }, [dispatch]);

  // Apply theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Apply language changes
  useEffect(() => {
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
    localStorage.setItem("language", currentLanguage);
  }, [currentLanguage]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main className="pt-20">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
