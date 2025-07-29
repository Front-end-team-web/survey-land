import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import loginPerson from "../../assets/authImages/login_person.png";
import Logo from "../../assets/authImages/logo.png";
import { useTranslation } from "../../hooks/useTranslation";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";

const Index = () => {
    const { isDarkMode } = useSelector((state) => state.theme);
    const [activeTab, setActiveTab] = useState('signup');
    const { t, currentLanguage } = useTranslation();
    const isArabic = currentLanguage === "ar";

    const handleForgotPassword = () => {
        console.log('Forgot password clicked');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`min-h-screen overflow-hidden relative ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
        >
            <div className={`min-h-screen grid lg:grid-cols-2 grid-cols-1`}>
                {/* Left Side - Form */}
                <div className="flex items-center justify-center lg:p-0 p-6">
                    <div className="w-full max-w-md">
                        <div className="flex items-center gap-3">
                            <img src={Logo} alt="logo" className="md:max-w-32 max-w-28" />
                            <span className="md:text-2xl text-xl font-bold">
                                <span className="bg-gradient-to-r from-[#490F8F] to-[#7616EC] bg-clip-text text-transparent">Survey</span>{" "}
                                Infinity
                            </span>
                        </div>

                        {/* Tab Navigation */}
                        <div className="flex justify-between p-4">
                            <button
                                className={`md:px-10 px-6 py-2 md:text-2xl text-base font-bold border-b-4 ${activeTab === 'login'
                                    ? 'bg-gradient-to-r from-[#490F8F] to-[#7616EC] bg-clip-text text-transparent border-[#7616EC]'
                                    : 'text-[#D1D1D1] border-[#D1D1D1] opacity-30'
                                    }`}
                                onClick={() => setActiveTab('login')}
                            >
                                {t("authPage.login")}
                            </button>
                            <button
                                className={`md:px-10 px-6 py-2 md:text-2xl text-base font-bold border-b-4 ${activeTab === 'signup'
                                    ? 'bg-gradient-to-r from-[#490F8F] to-[#7616EC] bg-clip-text text-transparent border-[#7616EC]'
                                    : 'text-[#D1D1D1] border-[#D1D1D1] opacity-30'
                                    }`}
                                onClick={() => setActiveTab('signup')}
                            >
                                {t("authPage.signUp")}
                            </button>
                        </div>

                        {/* Form Container */}
                        <div className="py-6">
                            <AnimatePresence mode="wait">
                                {activeTab === 'login' ? (
                                    <LoginForm key="login" onForgotPassword={handleForgotPassword} />
                                ) : (
                                    <SignupForm key="signup" />
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Right Side - Illustration */}
                <div className="hidden lg:flex justify-end relative overflow-hidden">
                    {/* Circle Arcs Background */}
                    <div className={`absolute top-1/2 -translate-y-1/2 ${isArabic ? "-left-1/2" : "-right-1/2"}`}>
                        <div className="xl:w-[900px] xl:h-[900px] lg:w-[700px] lg:h-[700px] rounded-full bg-[#CCA2FF] opacity-80"></div>
                        <div className="absolute top-1/2 left-1/2 xl:w-[700px] xl:h-[700px] lg:w-[500px] lg:h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C08DFF] opacity-60"></div>
                        <div className="absolute top-1/2 left-1/2 xl:w-[500px] xl:h-[500px] lg:w-[300px] lg:h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B379F9] opacity-40"></div>
                    </div>

                    {/* Foreground Content */}
                    <div className="relative z-10 h-full flex flex-col items-end justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={`relative -bottom-10 ${isArabic ? "xl:pl-22 lg:pl-24" : "xl:pr-2 lg:pr-6"}`}
                        >
                            <h2 className="text-5xl xl:text-[3.5rem] font-bold mb-1 text-white">
                                {t("authPage.welcome")}
                            </h2>
                            {activeTab === 'login' ? (
                                <p className="text-5xl xl:text-[3.5rem] font-bold text-white">{t("authPage.back")}</p>
                            ) : (
                                <p className="text-3xl font-semibold bg-gradient-to-r from-[#490F8F] to-[#7616EC] bg-clip-text text-transparent"><span className="text-5xl xl:text-[3.5rem] font-bold text-white">{t("authPage.to")}</span> {t("authPage.infinity")}</p>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <motion.img
                                src={loginPerson}
                                alt="Welcome illustration"
                                className={`w-64 h-64 lg:w-80 lg:h-80 object-contain relative ${isArabic ? "-left-[92px]" : "-right-[92px]"}`}
                                animate={{ rotateY: isArabic ? 180 : 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}


export default Index

