import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";
import { motion } from "framer-motion";

export default function EndSection() {
  const { isDarkMode } = useSelector((state) => state.theme);
  const { currentLanguage } = useSelector((state) => state.language);
  const { t } = useTranslation();
  const IsArabic = currentLanguage === "ar";

  const teamMembers = [
    {
      name: t("pages.about.endSection.michael.name"),
      job: t("pages.about.endSection.michael.job"),
      description: t("pages.about.endSection.michael.description"),
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: t("pages.about.endSection.oliver.name"),
      job: t("pages.about.endSection.oliver.job"),
      description: t("pages.about.endSection.oliver.description"),
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: t("pages.about.endSection.noah.name"),
      job: t("pages.about.endSection.noah.job"),
      description: t("pages.about.endSection.noah.description"),
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-700 mb-6 leading-tight">
          {t("pages.about.endSection.subSec.title")}
        </h1>
        <p className="text-lg lg:text-xl mx-auto text-gray-500">
          {t("pages.about.endSection.subSec.description")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className={`
              group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl
              ${
                isDarkMode
                  ? "bg-gray-800 hover:bg-gray-750"
                  : "bg-white hover:bg-gray-50"
              }
            `}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative overflow-hidden">
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                style={{ objectPosition: "center 20%" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x320/7C3AED/FFFFFF?text=Team+Member";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl lg:text-2xl font-bold text-purple-700 group-hover:text-purple-600 transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-sm lg:text-base font-medium text-gray-500">
                  {member.job}
                </p>
              </div>

              <p
                className={`
                text-sm lg:text-base leading-relaxed line-clamp-4
                ${isDarkMode ? "text-gray-300" : "text-black"}
              `}
              >
                {member.description}
              </p>

              <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
