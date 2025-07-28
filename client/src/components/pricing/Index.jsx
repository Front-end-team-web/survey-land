import React, { lazy } from "react";
// import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const ChoosePlan = lazy(() => import('./components/ChoosePlan'));
const ComparePlans = lazy(() => import('./components/ComparePlans'));
const Testimonial = lazy(() => import('./components/Testimonial'));
const Questions = lazy(() => import('./components/Questions'));
const GetStarted = lazy(() => import('./components/GetStarted'));

const Index = () => {
    // const { currentLanguage } = useSelector((state) => state.language);
    const { isDarkMode } = useSelector((state) => state.theme);
    return (
        <div className={`flex items-center flex-col w-full justify-center min-h-screen bg-gray-50 dark:bg-gray-800 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
            <ChoosePlan />
            <ComparePlans />
            <div className={`w-full ${isDarkMode ? 'bg-gray-800' : 'bg-[#F7F7F7]'}`}>
                <Testimonial />
            </div>
            <Questions />
            <div className={`w-full bg-gradient-to-t from-[#490F8F] to-[--main-color] animate-gradient-x`}>
                <GetStarted />
            </div>

        </div>
    )
}

export default Index


