import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { TestimonialData } from './PricingStore';
// import { useTranslation } from '../../hooks/useTranslation'
import { useTranslation } from '../../../hooks/useTranslation';

const TestimonialComponent = () => {
    const { isDarkMode } = useSelector((state) => state.theme)
    const [currentIndex, setCurrentIndex] = useState(0);
    const { currentLanguage } = useSelector((state) => state.language);
    const { t } = useTranslation();
    const isRTL = currentLanguage === 'ar';

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === TestimonialData.length - 1 ? 0 : prevIndex + 1
            )
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div
            className={`px-4 mx-auto max-w-7xl w-full transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-[#F7F7F7]'}`}
            dir={isRTL ? 'rtl' : 'ltr'}
        >
            <div className="text-center py-12 md:py-20 flex flex-col gap-4">
                <h1 className="font-bold text-4xl md:text-6xl leading-tight text-gray-900 dark:text-white">
                    <span className="text-[--main-color] dark:text-purple-400">
                        {t('pages.pricing.Testimonial.Trusted by thousands')}
                    </span>
                </h1>
                <p className={`font-normal text-xl md:text-2xl lg:text-3xl leading-snug md:leading-normal ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {t('pages.pricing.Testimonial.See what our customers have to say about their experience')}
                </p>
            </div>

            {/* Testimonial Slider */}
            <div className="relative max-w-4xl mx-auto pb-16">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: isRTL ? `translateX(${currentIndex * 100}%)` : `translateX(-${currentIndex * 100}%)`,
                            direction: isRTL ? 'rtl' : 'ltr'
                        }}
                    >
                        {TestimonialData.map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-full px-4"
                            >
                                <div className={`px-4 py-10 md:p-10 rounded-xl h-fit ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>

                                    <p
                                        className={`text-lg md:text-xl italic mb-8 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} ${isRTL ? 'text-right' : 'text-left'}`}
                                    >
                                        "{t(`pages.pricing.Testimonial.${item.text}`)}"
                                    </p>

                                    <div className={`flex ${isRTL ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col items-center gap-2`}>
                                        <div className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} w-full gap-2 items-center`}>
                                            <img
                                                src={item.image}
                                                alt={t(`pages.pricing.Testimonial.${item.name}`)}
                                                className="w-16 h-16 rounded-full object-cover"
                                            />
                                            <div className={`flex flex-col items-start flex-1 ${isRTL ? 'items-end' : 'items-start'}`}>
                                                <h4 className={`font-semibold text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                                    {t(`pages.pricing.Testimonial.${item.name}`)}
                                                </h4>
                                                <p className={`text-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    {t(`pages.pricing.Testimonial.${item.role}`)}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex h-[100%] justify-end items-end">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-6 h-6 ${i < item.starNumber ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-500'}`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialComponent