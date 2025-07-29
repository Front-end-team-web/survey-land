import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaLock, FaUser } from "react-icons/fa";
import { z } from "zod";
import { useTranslation } from '../../../hooks/useTranslation';

const loginSchema = z.object({
    email: z.string().min(1, "Email or phone number is required"),
    password: z.string().min(1, "Password is required"),
});


const LoginForm = ({ onForgotPassword }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { t, currentLanguage } = useTranslation();
    const isArabic = currentLanguage === "ar";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
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
            className="space-y-10"
        >
            <div className="space-y-2">
                <div className="relative">
                    <FaUser className={`absolute top-1/2 transform -translate-y-1/2 text-[#7616EC] w-4 h-4 ${isArabic ? "right-3" : "left-3"}`} />
                    <input
                        id="email"
                        type="text"
                        placeholder={t("authPage.emailPhonePlaceholder")}
                        className={`h-12 w-full shadow-lg rounded-lg focus-visible:outline-[#7616EC] ${isArabic ? "pr-10" : "pl-10"}`}
                        {...register('email')}
                    />
                </div>
                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
            </div>

            <div className="space-y-2">
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

            <div className="flex justify-between md:flex-row flex-col gap-6">
                <button
                    type="button"
                    className="bg-gradient-to-r from-[#490F8F] to-[#7616EC] bg-clip-text text-transparent text-base font-semibold"
                    onClick={onForgotPassword}
                >
                    {t("authPage.forgetPassword")}
                </button>
                <button
                    type="submit"
                    className="px-10 py-2 bg-[#7616EC] text-white font-bold text-xl rounded-lg"
                    disabled={isLoading}
                >
                    {isLoading ? t("authPage.loginButton1") : t("authPage.loginButton2")}
                </button>
            </div>
        </motion.form>
    )
}

export default LoginForm