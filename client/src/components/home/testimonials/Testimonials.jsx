import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "TechCorp",
      avatar: "https://img.freepik.com/fotos-gratis/ei-clique-aqui-retrato-de-mulher-ruiva-charmosa-e-fofa-de-aparencia-amigavel-com-sueter-roxo-apontando-para-o-canto-superior-esquerdo-com-o-dedo-indicador-e-sorrindo-mostrando-o-espaco-da-copia-recomendando-oferecendo_1258-81548.jpg?t=st=1708498704~exp=1708499304~hmac=b49bdd554bbe7b0f2881825439020feef95fbd1a2df3110b579fb06551f8cca4",
      content:
        "We use this platform intensively and seriously recommend it. Customer optimize better than perfection. It's perfect for our needs.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Product Manager",
      company: "InnovateLab",
      avatar: "https://wallpapers.com/images/hd/people-pictures-l249k27mbdjw72lh.jpg",
      content:
        "The survey templates are incredible. We can create professional surveys in minutes instead of hours which has revolutionized how we handle user feedback.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Research Analyst",
      company: "DataDriven",
      avatar: "https://assets.andersonranch.org/uploads/2021/11/Salwan_Headshot-1152x1440.jpg",
      content:
        "The survey analytics are incredibly helpful and the interface is more intuitive. The advanced features and robust feedback help us make data-driven decisions.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-10 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-purple-700 dark:text-purple-400">
          {t("testimonialsTitle")}{" "}
          <span className="text-gray-900 dark:text-white">{t("testimonialsHighlight")}</span> {t("testimonialsEnd")}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-16 text-lg">
          {t("testimonialsSubtitle")}
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md flex flex-col justify-between p-6 w-full max-w-sm mx-auto"
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
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
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
