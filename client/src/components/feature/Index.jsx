import { motion } from "framer-motion";
import FeatureInfo from "./components/FeatureInfo";
import FeatureDetails from "./components/FeatureDetails";
import FeatureAllNeeds from "./components/FeatureAllNeeds";
const Index = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <FeatureInfo />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <FeatureDetails />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <FeatureAllNeeds />
      </motion.div>
    </>
  );
};

export default Index;
