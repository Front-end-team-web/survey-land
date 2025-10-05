import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Index from "../components/home/Index";

const Home = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-[calc(100vh-80px)] w-full
        ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
        `}
    >
      <Index />
    </motion.div>
  );
};

export default Home;
