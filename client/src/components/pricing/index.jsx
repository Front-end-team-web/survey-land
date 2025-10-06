import React from "react";
import { useSelector } from "react-redux";
import ChoosePlan from "./components/ChoosePlan";
import ComparePlans from "./components/ComparePlans";
import Testimonial from "./components/Testimonial";
import Questions from "./components/Questions";
import GetStarted from "./components/GetStarted";

const Index = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
  return (
    <div
      className={`flex items-center flex-col w-full justify-center min-h-screen bg-gray-50 dark:bg-gray-800 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <ChoosePlan />
      <ComparePlans />
      <div className={`w-full ${isDarkMode ? "bg-gray-800" : "bg-[#F7F7F7]"}`}>
        <Testimonial />
      </div>
      <Questions />
      <div
        className={`w-full bg-gradient-to-t from-[#490F8F] to-[--main-color] animate-gradient-x`}
      >
        <GetStarted />
      </div>
    </div>
  );
};

export default Index;
