import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Index from "../components/features/index";

const Features = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: isDarkMode ? "#111827" : "white" }}
      className=" min-h-screen bg-gray-50 dark:bg-gray-800"
    >
      <Index />
    </motion.div>
  );
};
export default Features;
