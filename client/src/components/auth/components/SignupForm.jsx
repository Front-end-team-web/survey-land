import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaLock, FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { z } from "zod";
import AppleIcon from "../../../assets/authImages/apple.svg";
import GoogleIcon from "../../../assets/authImages/google.svg";
import MicrosoftIcon from "../../../assets/authImages/microsoft.svg";
import { useTranslation } from '../../../hooks/useTranslation';


const signupSchema = z.object({
    userName: z.string().min(2, "User name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});


const SignupForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { t, currentLanguage } = useTranslation();
    const isArabic = currentLanguage === "ar";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = (data) => {
        setIsLoading(true);
        setTimeout(() => {
            console.log(data);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="space-y-4">
                <div className="space-y-1">
                    <div className="relative">
                        <FaUser className={`absolute top-1/2 transform -translate-y-1/2 text-[#7616EC] w-4 h-4 ${isArabic ? "right-3" : "left-3"}`} />
                        <input
                            id="userName"
                            type="text"
                            placeholder={t("authPage.usernamePlaceholder")}
                            className={`h-12 w-full shadow-lg rounded-lg focus-visible:outline-[#7616EC] ${isArabic ? "pr-10" : "pl-10"}`}
                            {...register('userName')}
                        />
                    </div>
                    {errors.userName && (
                        <p className="text-red-500 text-sm">{errors.userName.message}</p>
                    )}
                </div>

                <div className="space-y-1">
                    <div className="relative">
                        <IoMail className={`absolute top-1/2 transform -translate-y-1/2 text-[#7616EC] w-4 h-4 ${isArabic ? "right-3" : "left-3"}`} />
                        <input
                            id="email"
                            type="email"
                            placeholder={t("authPage.emailPlaceholder")}
                            className={`h-12 w-full shadow-lg rounded-lg focus-visible:outline-[#7616EC] ${isArabic ? "pr-10" : "pl-10"}`}
                            {...register('email')}
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                </div>

                <div className="space-y-1">
                    <div className="relative">
                        <FaLock className={`absolute top-1/2 transform -translate-y-1/2 text-[#7616EC] w-4 h-4 ${isArabic ? "right-3" : "left-3"}`} />
                        <input
                            id="password"
                            type="password"
                            placeholder={t("authPage.passwordPlaceholder")}
                            className={`h-12 w-full shadow-lg rounded-lg focus-visible:outline-[#7616EC] ${isArabic ? "pr-10" : "pl-10"}`}
                            {...register('password')}
                        />
                    </div>
                    {errors.password && (
                        <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                </div>
            </div>

            <button
                type="submit"
                className="w-full h-12 bg-[#7616EC] text-white font-bold rounded-lg md:text-xl text-base mt-8"
                disabled={isLoading}
            >
                {isLoading ? t("authPage.signUpButton1") : t("authPage.signUpButton2")}
            </button>

            <div className="mt-8">
                {/* Divider with text */}
                <div className="flex items-center justify-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="mx-4 text-sm text-gray-500">{t("authPage.signupWith")}</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                {/* Social login buttons */}
                <div className="flex justify-center gap-4 mt-4">
                    <button className="w-12 h-12 p-2 border border-gray-300 rounded-lg shadow hover:shadow-md transition">
                        <img src={GoogleIcon} alt="Google" className="w-full h-full object-contain" />
                    </button>
                    <button className="w-12 h-12 p-2 border border-gray-300 rounded-lg shadow hover:shadow-md transition">
                        <img src={AppleIcon} alt="Apple" className="w-full h-full object-contain" />
                    </button>
                    <button className="w-12 h-12 p-2 border border-gray-300 rounded-lg shadow hover:shadow-md transition">
                        <img src={MicrosoftIcon} alt="Microsoft" className="w-full h-full object-contain" />
                    </button>
                </div>
            </div>
        </motion.form>
    )
}

export default SignupForm