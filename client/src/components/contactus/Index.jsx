import React from "react";
import { useSelector } from "react-redux";
import ContactForm from "./components/ContactForm";

const Index = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
  return (
    <div className={isDarkMode ? "bg-gray-800 w-full " : "bg-white w-full"}>
      <ContactForm />
    </div>
  );
};

export default Index;
