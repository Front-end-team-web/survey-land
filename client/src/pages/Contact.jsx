import React from "react";
import { motion } from "framer-motion";
import Index from "../components/contactus/Index";

const Contact = () => {
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

export default Contact;
