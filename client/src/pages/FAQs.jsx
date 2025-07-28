import { motion } from "framer-motion";
import Index from "../components/faqs/Index";

const FAQs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Index />
    </motion.div>
  );
};

export default FAQs;
