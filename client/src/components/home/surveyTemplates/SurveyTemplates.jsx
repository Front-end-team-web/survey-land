import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCommentDots,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";
import CategoryCard from './components/CategoryCard';
import SearchBar from './components/SearchBar';
import TemplateCard from './components/TemplateCard';


const SurveyTemplates = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
  const { t } = useTranslation();

  const categories = [
    {
      icon: FaBriefcase,
      title: t("serveyTemplates.categoryCardTitle1"),
      count: 42,
    },
    {
      icon: FaGraduationCap,
      title: t("serveyTemplates.categoryCardTitle2"),
      count: 35,
    },
    {
      icon: FaCommentDots,
      title: t("serveyTemplates.categoryCardTitle3"),
      count: 56,
    },
    {
      icon: FaUsers,
      title: t("serveyTemplates.categoryCardTitle4"),
      count: 28,
    },
  ];

  const templates = [
    {
      id: 1,
      category: t("serveyTemplates.badge1"),
      title: t("serveyTemplates.templateCardTitle1"),
      description: t("serveyTemplates.templateCardDescription1"),
      questions: `25 ${t("serveyTemplates.questions")}`,
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      categoryColor: "bg-purple-100",
      categoryText: "text-purple-700",
    },
    {
      id: 2,
      category: t("serveyTemplates.badge2"),
      title: t("serveyTemplates.templateCardTitle2"),
      description: t("serveyTemplates.templateCardDescription2"),
      questions: `20 ${t("serveyTemplates.questions")}`,
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      categoryColor: "bg-purple-100",
      categoryText: "text-purple-700",
    },
    {
      id: 3,
      category: t("serveyTemplates.badge3"),
      title: t("serveyTemplates.templateCardTitle3"),
      description: t("serveyTemplates.templateCardDescription3"),
      questions: `30 ${t("serveyTemplates.questions")}`,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      categoryColor: "bg-purple-100",
      categoryText: "text-purple-700",
    },
    {
      id: 4,
      category: t("serveyTemplates.badge4"),
      title: t("serveyTemplates.templateCardTitle4"),
      description: t("serveyTemplates.templateCardDescription4"),
      questions: `15 ${t("serveyTemplates.questions")}`,
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      categoryColor: "bg-purple-100",
      categoryText: "text-purple-700",
    },
  ];

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-5xl font-bold font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>
            {t("serveyTemplates.title1")}{" "}
            <span className="bg-gradient-to-r from-[#490F8F] to-[#7616EC] bg-clip-text text-transparent">
              {t("serveyTemplates.title2")}
            </span>
          </h2>
          <p className={`text-2xl font-normal mx-auto mb-10 ${isDarkMode ? "text-white/60" : "text-[#4B5563]"}`}>
            {t("serveyTemplates.subTitle")}
          </p>

          <SearchBar />
        </motion.div>

        {/* Categories Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              category={category}
            />
          ))}
        </motion.div>

        {/* Templates Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
            />
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button
            className="bg-gradient-to-r from-[#490F8F] to-[#7616EC] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            {t("serveyTemplates.loadMore")}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SurveyTemplates;
