import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import { useSelector } from "react-redux";

const Home = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
  const { currentLanguage } = useSelector((state) => state.language);
  const { t } = useTranslation();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
        paddingTop: "6rem", 
        padding: "6rem 2rem 2rem 2rem",
      }}
    >
      
      <div
        style={{
          backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#1f2937",
          padding: "2rem",
          borderRadius: "12px",
          maxWidth: "600px",
          margin: "0 auto",
          boxShadow: isDarkMode
            ? "0 10px 25px rgba(0, 0, 0, 0.3)"
            : "0 10px 25px rgba(0, 0, 0, 0.1)",
        }}
      >
        
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: isDarkMode ? "#a855f7" : "#7c3aed",
            marginBottom: "1rem",
          }}
        >
          {/* {currentLanguage === "ar" ? "مرحباً بك" : "Welcome to Home Page"} */}
          {t("Test")}
        </h1>

       
        <p
          style={{
            fontSize: "1.1rem",
            color: isDarkMode ? "#d1d5db" : "#374151",
            marginBottom: "1.5rem",
          }}
        >
          {currentLanguage === "ar"
            ? "هذا النص يتغير لونه حسب الثيم المختار"
            : "This text changes color based on the selected theme"}
        </p>

       
        <button
          style={{
            backgroundColor: isDarkMode ? "#8b5cf6" : "#7c3aed",
            color: "#ffffff",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            border: "none",
            fontSize: "1rem",
            cursor: "pointer",
          }}
          onClick={() => alert("تم النقر!")}
        >
          {currentLanguage === "ar" ? "اضغط هنا" : "Click Me"}
        </button>
      </div>
    </div>
  );
  );
};

export default Home;
