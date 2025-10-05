import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Index from "../components/auth/Index";
const Auth = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <Index />
    </motion.div>
  );
};

export default Auth;
