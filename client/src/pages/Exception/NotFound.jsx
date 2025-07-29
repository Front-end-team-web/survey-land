import { useSelector } from "react-redux";
import { useTranslation } from "../../hooks/useTranslation";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useSelector((state) => state.theme);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-800">
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
            {t("pages.notFound.title")}
          </h1>

          <Link
            to={"/"}
            className="cursor-pointer"
            style={{
              backgroundColor: isDarkMode ? "#8b5cf6" : "#7c3aed",
              color: "#ffffff",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              border: "none",
              fontSize: "1rem",
            }}
          >
            {t("pages.notFound.backToHome")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
