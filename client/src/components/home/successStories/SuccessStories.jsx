import { useLanguage } from "../contexts/LanguageContext";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const SuccessStories = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useSelector((state) => state.theme);

  const stories = [
    {
      title: t("storyTitle"),
      description: t("storyDescription"),
      category: t("storyCategorySports"),
      readTime: t("storyReadTime"),
      image: "photo-1605810230434-7631ac76ec81",
    },
    {
      title: t("storyTitle"),
      description: t("storyDescription"),
      category: t("storyCategoryStrategy"),
      readTime: t("storyReadTime"),
      image: "photo-1498050108023-c5249f4df085",
    },
    {
      title: t("storyTitle"),
      description: t("storyDescription"),
      category: t("storyCategoryInsights"),
      readTime: t("storyReadTime"),
      image: "photo-1487058792275-0ad4aaf24ca7",
    },
  ];

  return (
    <section
      className={`py-20 px-6 lg:px-10 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">
          <span className={isDarkMode ? "text-purple-400" : "text-purple-700"}>
            {t("successTitle")}
          </span>{" "}
          <span className={isDarkMode ? "text-white" : "text-black"}>
            {t("successHighlight")}
          </span>
        </h2>

        <p
          className={`text-center mb-16 text-lg ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {t("successSubtitle")}
        </p>

        <div className="grid md:grid-cols-3 gap-10 place-items-center">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border w-full sm:max-w-[400px] min-h-[280px] ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="h-40 relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${story.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {story.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className={`font-bold text-lg mb-3 leading-tight transition-colors ${
                    isDarkMode
                      ? "text-white group-hover:text-purple-400"
                      : "text-gray-900 group-hover:text-purple-700"
                  }`}
                >
                  {story.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {story.description}
                </p>
                <div className="flex justify-between items-center">
                  <span
                    className={`font-medium text-sm transition-colors ${
                      isDarkMode
                        ? "text-purple-400 hover:text-purple-300"
                        : "text-purple-600 hover:text-purple-700"
                    }`}
                  >
                    {t("storyViewLink")}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {story.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
