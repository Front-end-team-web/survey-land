import { useSelector } from "react-redux";
import { useTranslation } from "../../hooks/useTranslation";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useSelector((state) => state.theme);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        isDarkMode ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      <div
        className={`p-8 rounded-xl max-w-2xl mx-auto text-center shadow-lg ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="mb-6">
          <h1
            className={`text-9xl font-bold ${
              isDarkMode ? "text-purple-400" : "text-purple-600"
            }`}
          >
            404
          </h1>
        </div>

        <h2
          className={`text-3xl font-bold mb-4 ${
            isDarkMode ? "text-purple-400" : "text-purple-700"
          }`}
        >
          {t("pages.about.notFound.title")}
        </h2>

        <p
          className={`text-lg mb-8 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {t("pages.about.notFound.description")}
        </p>

        <Link
          to="/"
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
            isDarkMode
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "bg-purple-600 hover:bg-purple-700 text-white"
          }`}
        >
          <Home size={20} />
          {t("pages.about.notFound.backToHome")}
        </Link>

        <div className="mt-8 flex justify-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              isDarkMode ? "bg-purple-400" : "bg-purple-600"
            } animate-bounce`}
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className={`w-2 h-2 rounded-full ${
              isDarkMode ? "bg-purple-400" : "bg-purple-600"
            } animate-bounce`}
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className={`w-2 h-2 rounded-full ${
              isDarkMode ? "bg-purple-400" : "bg-purple-600"
            } animate-bounce`}
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
