import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "./store/slices/themeSlice";
import { setLanguage } from "./store/slices/languageSlice";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// UI Components
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { Toaster } from "./shared/layout/ui/toaster";
import { Toaster as Sonner } from "./shared/layout/ui/sonner";
import { TooltipProvider } from "./shared/layout/ui/tooltip";

// Providers
import { ThemeProvider } from "./components/home/contexts/ThemeContext";
import { LanguageProvider } from "./components/home/contexts/LanguageContext";

// Pages & Routes
import AppRoutes from "./routes/AppRoutes";
import Index from "./components/home/Index";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <Navbar />
                <main className="pt-20">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    {/* Routes Redux-based App */}
                    <Route path="/*" element={<AppRoutes />} />
                    {/* 404 Page */}
                    <Route path="*" element={<div>404 - Page Not Found</div>} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
