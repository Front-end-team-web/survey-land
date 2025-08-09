import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

const SuccessStories = () => {
  const { t } = useLanguage();

  const stories = [
    {
      title: "The Golden State Warriors innovate with insights",
      description: "Learn how a top NBA team makes strategic decisions to advance their game into areas of success.",
      category: "Sports Analytics",
      readTime: "5 min read",
      image: "photo-1605810230434-7631ac76ec81"
    },
    {
      title: "The Golden State Warriors innovate with insights", 
      description: "Learn how a top NBA team makes strategic decisions to advance their game into areas of success.",
      category: "Team Strategy",
      readTime: "5 min read",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      title: "The Golden State Warriors innovate with insights",
      description: "Learn how a top NBA team makes strategic decisions to advance their game into areas of success.",
      category: "Data Insights",
      readTime: "5 min read",
      image: "photo-1487058792275-0ad4aaf24ca7"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">
          <span className="text-purple-700">{t('successTitle')}</span> <span className="text-black dark:text-white">{t('successHighlight')}</span>
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-center mb-16 text-lg">
          {t('successSubtitle')}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="h-48 relative overflow-hidden">
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
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors leading-tight">
                  {story.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {story.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-600 dark:text-purple-400 font-medium text-sm hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                    View success story
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
