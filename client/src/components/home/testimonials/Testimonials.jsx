import { useLanguage } from "../contexts/LanguageContext";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Testimonials = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useSelector((state) => state.theme);

  const testimonials = [
    {
      name: t("testimonial1Name"),
      role: t("testimonial1Role"),
      company: t("testimonial1Company"),
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: t("testimonial1Content"),
      rating: 5,
    },
    {
      name: t("testimonial2Name"),
      role: t("testimonial2Role"),
      company: t("testimonial2Company"),
      avatar:
        "https://wallpapers.com/images/hd/people-pictures-l249k27mbdjw72lh.jpg",
      content: t("testimonial2Content"),
      rating: 5,
    },
    {
      name: t("testimonial3Name"),
      role: t("testimonial3Role"),
      company: t("testimonial3Company"),
      avatar:
        "https://assets.andersonranch.org/uploads/2021/11/Salwan_Headshot-1152x1440.jpg",
      content: t("testimonial3Content"),
      rating: 5,
    },
  ];

  return (
    <section
      className={`py-20 px-6 lg:px-10 transition-colors duration-200 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl lg:text-5xl font-bold text-center mb-4 ${
            isDarkMode ? "text-purple-400" : "text-purple-700"
          }`}
        >
          {t("testimonialsTitle")}
        </h2>

        <p
          className={`text-center mb-16 text-lg ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {t("testimonialsSubtitle")}
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`rounded-xl shadow-md flex flex-col justify-between p-6 w-full sm:w-[350px] min-h-[280px] max-h-[320px] border ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                transition: { type: "spring", stiffness: 200, damping: 12 },
              }}
              animate={{
                rotate: [0, 1.5, 0, -1.5, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 6,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4
                    className={`font-bold text-lg ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {testimonial.role}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      isDarkMode ? "text-purple-400" : "text-purple-600"
                    }`}
                  >
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p
                className={`text-base leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
