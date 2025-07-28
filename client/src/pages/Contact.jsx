import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Index from "../components/contactus/Index"

const Contact = () => {
  const { currentLanguage } = useSelector((state) => state.language);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      
    >
       <Index/>
    </motion.div>
  );
};

export default Contact;
