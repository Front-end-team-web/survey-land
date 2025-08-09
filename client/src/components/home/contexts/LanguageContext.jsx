import * as React from 'react';
import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Navbar
    home: 'Home',
    about: 'About us',
    features: 'Features',
    faqs: 'FAQs',
    pricing: 'Pricing',
    contact: 'Contact us',
    register: 'Register now',
    
    // Hero Section
    heroTitle: 'Create powerful surveys',
    heroTitleHighlight: 'in minutes',
    heroTitleEnd: ', not hours',
    heroDescription: 'Survey Infinity helps you gather actionable insights through beautifully designed, interactive surveys with advanced analytics and seamless integration.',
    getStarted: 'Get started',
    templates: 'Templates',
    saveTime: 'Save your time!',
    createShareAnalyze: 'Create, share and analyze',
    
    // FAQ
    faqTitle: 'Frequently',
    faqTitleHighlight: 'Asked Questions',
    faqSubtitle: 'Every thing you need to know about creating surveys',
    
    // Testimonials
    testimonialsTitle: 'What',
    testimonialsHighlight: 'Our Users',
    testimonialsEnd: 'Say',
    testimonialsSubtitle: 'Join thousands of satisfied customers worldwide',
    
    // Pricing
    pricingTitle: 'Choose',
    pricingHighlight: 'Your Plan',
    pricingSubtitle: 'Get the perfect plan for your survey needs',
    
    // Success Stories
    successTitle: 'Customer',
    successHighlight: 'Success Stories',
    successSubtitle: 'See how organizations are transforming their feedback process',
    
    // Footer
    footerDescription: 'Create powerful surveys in minutes, not hours. Gather actionable insights with beautiful, interactive surveys.',
    products: 'Products',
    resources: 'Resources',
    stayUpdated: 'Stay Updated',
    newsletter: 'Subscribe to our newsletter to get our latest updates.',
    enterEmail: 'Enter your email',
    subscribe: 'Subscribe',
    copyright: '© 2024 Survey Infinity. All rights reserved.',
    terms: 'Terms',
    privacy: 'Privacy',
    cookies: 'Cookies',
    licenses: 'Licenses'
  },

  ar: {
    // Navbar
    home: 'الرئيسية',
    about: 'من نحن',
    features: 'المزايا',
    faqs: 'الأسئلة الشائعة',
    pricing: 'الأسعار',
    contact: 'اتصل بنا',
    register: 'سجل الآن',
    
    // Hero Section
    heroTitle: 'أنشئ استطلاعات قوية',
    heroTitleHighlight: 'في دقائق',
    heroTitleEnd: '، وليس ساعات',
    heroDescription: 'يساعدك Survey Infinity في جمع رؤى قابلة للتنفيذ من خلال استطلاعات تفاعلية مصممة بشكل جميل مع تحليلات متقدمة.',
    getStarted: 'ابدأ الآن',
    templates: 'القوالب',
    saveTime: 'وفر وقتك!',
    createShareAnalyze: 'إنشاء ومشاركة وتحليل',
    
    // FAQ
    faqTitle: 'الأسئلة',
    faqTitleHighlight: 'الشائعة',
    faqSubtitle: 'كل ما تحتاج لمعرفته حول إنشاء الاستطلاعات',
    
    // Testimonials
    testimonialsTitle: 'ما يقوله',
    testimonialsHighlight: 'المستخدمون',
    testimonialsEnd: '  ',
    testimonialsSubtitle: 'انضم إلى آلاف العملاء الراضين حول العالم',
    
    // Pricing
    pricingTitle: 'اختر',
    pricingHighlight: 'خطتك',
    pricingSubtitle: 'احصل على الخطة المثالية لاحتياجات الاستطلاع الخاصة بك',
    
    // Success Stories
    successTitle: 'قصص',
    successHighlight: 'نجاح العملاء',
    successSubtitle: 'شاهد كيف تقوم المؤسسات بتحويل عملية التغذية الراجعة',
    
    // Footer
    footerDescription: 'أنشئ استطلاعات قوية في دقائق، وليس ساعات. اجمع رؤى قابلة للتنفيذ بأستطلاعات جميلة وتفاعلية.',
    products: 'المنتجات',
    resources: 'الموارد',
    stayUpdated: 'ابق محدثاً',
    newsletter: 'اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات.',
    enterEmail: 'أدخل بريدك الإلكتروني',
    subscribe: 'اشترك',
    copyright: '© 2024 Survey Infinity. جميع الحقوق محفوظة.',
    terms: 'الشروط',
    privacy: 'الخصوصية',
    cookies: 'ملفات تعريف الارتباط',
    licenses: 'التراخيص'
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};