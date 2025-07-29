import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '../../../hooks/useTranslation';

const GetStarted = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { t } = useTranslation();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="px-4 mx-auto max-w-7xl py-12 md:py-20 bg-gradient-to-t from-[#490F8F] to-[--main-color] animate-gradient-x"
        >
            {/* Header */}
            <div className="text-center mb-12 md:mb-16 flex flex-col gap-4">
                <h1 className="font-500 text-4xl leading-tight text-white">
                    {t('pages.pricing.GetStarted.Ready to get started?')}

                </h1>
                <p className="font-normal text-xl leading-snug md:leading-normal text-white text-opacity-90">
                    {t('pages.pricing.GetStarted.Join')}

                </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mx-auto w-full max-w-md">
                <button className="flex flex-row gap-1 justify-center items-center border-2 rounded-xl py-3 px-6 md:px-8 text-[--main-color] border-white bg-white  backdrop-blur-sm font-semibold text-base md:text-lg  hover:scale-[1.03] transition-all duration-300 ease-in-out whitespace-nowrap">
                    <span> {t('pages.pricing.GetStarted.Start free trial')}</span>

                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8H17M17 8L10 15M17 8L10 1" stroke="#7616EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button className="border-2 rounded-xl py-3 px-6 md:px-8 text-white bg-[--main-color] border-[--main-color] font-semibold text-base md:text-lg hover:bg-purple-700 hover:border-purple-700 hover:scale-[1.03] transition-all duration-300 ease-in-out whitespace-nowrap">
                    {t('pages.pricing.GetStarted.Contact sales')}

                </button>
            </div>
        </motion.div>
    );
};

export default GetStarted;
