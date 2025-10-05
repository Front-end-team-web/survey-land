import * as React from "react";
import { createContext, useContext } from "react";
import { useSelector } from "react-redux";

const translations = {
  en: {
    // Navbar
    home: "Home",
    about: "About us",
    features: "Features",
    faqs: "FAQs",
    pricing: "Pricing",
    contact: "Contact us",
    register: "Register now",

    // Hero Section
    heroTitle: "Create powerful surveys",
    heroTitleHighlight: "in minutes",
    heroTitleEnd: ", not hours",
    heroDescription:
      "Survey Infinity helps you gather actionable insights through beautifully designed, interactive surveys with advanced analytics and seamless integration.",
    getStarted: "Get started",
    templates: "Templates",
    saveTime: "Save your time!",
    createShareAnalyze: "Create, share and analyze",

    // FAQ
    faqTitle: "Frequently",
    faqTitleHighlight: "Asked Questions",
    faqSubtitle: "Every thing you need to know about creating surveys",

    // Testimonials -
    testimonialsTitle: "What Our Users Say",
    testimonialsSubtitle: "Join thousands of satisfied customers worldwide",
    testimonial1Name: "James Mitchell",
    testimonial1Role: "Marketing Director",
    testimonial1Company: "TechCorp",
    testimonial1Content:
      "We use this platform intensively and seriously recommend it. The analytics have helped us optimize our customer engagement strategy better than ever before.",
    testimonial2Name: "David Chen",
    testimonial2Role: "Product Manager",
    testimonial2Company: "InnovateLab",
    testimonial2Content:
      "The survey templates are incredible. We can create professional surveys in minutes instead of hours which has revolutionized how we handle user feedback.",
    testimonial3Name: "Marcus Thompson",
    testimonial3Role: "Research Analyst",
    testimonial3Company: "DataDriven",
    testimonial3Content:
      "The survey analytics are incredibly helpful and the interface is intuitive. The advanced features and robust feedback help us make data-driven decisions.",

    // Pricing
    pricingTitle: "Choose",
    pricingHighlight: "Your Plan",
    pricingSubtitle: "Get the perfect plan for your survey needs",
    planStandard: "Standard",
    planProfessional: "Professional",
    planEnterprise: "Enterprise",
    planStandardSubtitle: "Free",
    planProfessionalSubtitle: "$35",
    planEnterpriseSubtitle: "$99",
    planPeriodForever: "forever",
    planPeriodMonth: "per month",
    planPopular: "Popular",
    featureUnlimitedSurveys: "Unlimited surveys",
    featureAdvancedSecurity: "Advanced security",
    featureApiAccess: "API access",
    featureEverythingStandard: "Everything in Standard",
    featureSocialExport: "Social media export",
    featureCustomIntegrations: "Custom integrations",
    featureEverythingProfessional: "Everything in Professional",
    featureWhiteLabel: "White label solution",
    buttonStartStandard: "Start with Standard",
    buttonStartProfessional: "Start with Professional",
    buttonStartEnterprise: "Start with Enterprise",

    // Success Stories
    successTitle: "Customer",
    successHighlight: "Success Stories",
    successSubtitle:
      "See how organizations are transforming their feedback process",
    storyTitle: "The Golden State Warriors innovate with insights",
    storyDescription:
      "Learn how a top NBA team makes strategic decisions to advance their game into areas of success.",
    storyCategorySports: "Sports Analytics",
    storyCategoryStrategy: "Team Strategy",
    storyCategoryInsights: "Data Insights",
    storyReadTime: "5 min read",
    storyViewLink: "View success story",

    // Footer
    footerDescription:
      "Create powerful surveys in minutes, not hours. Gather actionable insights with beautiful, interactive surveys.",
    products: "Products",
    resources: "Resources",
    stayUpdated: "Stay Updated",
    newsletter: "Subscribe to our newsletter to get our latest updates.",
    enterEmail: "Enter your email",
    subscribe: "Subscribe",
    copyright: "© 2024 Survey Infinity. All rights reserved.",
    terms: "Terms",
    privacy: "Privacy",
    cookies: "Cookies",
    licenses: "Licenses",
  },

  ar: {
    // Navbar
    home: "الرئيسية",
    about: "من نحن",
    features: "المميزات",
    faqs: "الأسئلة الشائعة",
    pricing: "الأسعار",
    contact: "اتصل بنا",
    register: "سجل الآن",

    // Hero Section
    heroTitle: "أنشئ استطلاعات قوية",
    heroTitleHighlight: "في دقائق",
    heroTitleEnd: "، وليس ساعات",
    heroDescription:
      "يساعدك Survey Infinity في جمع رؤى قابلة للتنفيذ من خلال استطلاعات تفاعلية مصممة بشكل جميل مع تحليلات متقدمة.",
    getStarted: "ابدأ الآن",
    templates: "القوالب",
    saveTime: "وفر وقتك!",
    createShareAnalyze: "إنشاء ومشاركة وتحليل",

    // FAQ
    faqTitle: "الأسئلة",
    faqTitleHighlight: "الشائعة",
    faqSubtitle: "كل ما تحتاج لمعرفته حول إنشاء الاستطلاعات",

    // Testimonials
    testimonialsTitle: "ماذا يقول عملاؤنا",
    testimonialsSubtitle: "انضم إلى آلاف العملاء الراضين حول العالم",
    testimonial1Name: "جيمس ميتشل",
    testimonial1Role: "مدير التسويق",
    testimonial1Company: "TechCorp",
    testimonial1Content:
      "نستخدم هذه المنصة بشكل مكثف ونوصي بها بشدة. ساعدتنا التحليلات في تحسين استراتيجية تفاعل العملاء بشكل أفضل من أي وقت مضى.",
    testimonial2Name: "ديفيد تشن",
    testimonial2Role: "مدير المنتج",
    testimonial2Company: "InnovateLab",
    testimonial2Content:
      "قوالب الاستطلاعات رائعة. يمكننا إنشاء استطلاعات احترافية في دقائق بدلاً من ساعات مما أحدث ثورة في طريقة تعاملنا مع ملاحظات المستخدمين.",
    testimonial3Name: "ماركوس ثومبسون",
    testimonial3Role: "محلل أبحاث",
    testimonial3Company: "DataDriven",
    testimonial3Content:
      "تحليلات الاستطلاعات مفيدة للغاية والواجهة بديهية. تساعدنا الميزات المتقدمة والتعليقات القوية في اتخاذ قرارات مستندة إلى البيانات.",

    // Pricing
    pricingTitle: "اختر",
    pricingHighlight: "خطتك",
    pricingSubtitle: "احصل على الخطة المثالية لاحتياجات الاستطلاع الخاصة بك",
    planStandard: "الأساسية",
    planProfessional: "الاحترافية",
    planEnterprise: "المؤسسية",
    planStandardSubtitle: "مجاناً",
    planProfessionalSubtitle: "35$",
    planEnterpriseSubtitle: "99$",
    planPeriodForever: "للأبد",
    planPeriodMonth: "شهرياً",
    planPopular: "الأكثر شعبية",
    featureUnlimitedSurveys: "استطلاعات غير محدودة",
    featureAdvancedSecurity: "أمان متقدم",
    featureApiAccess: "وصول API",
    featureEverythingStandard: "كل شيء في الأساسية",
    featureSocialExport: "تصدير لوسائل التواصل",
    featureCustomIntegrations: "تكاملات مخصصة",
    featureEverythingProfessional: "كل شيء في الاحترافية",
    featureWhiteLabel: "حل العلامة البيضاء",
    buttonStartStandard: "ابدأ مع الأساسية",
    buttonStartProfessional: "ابدأ مع الاحترافية",
    buttonStartEnterprise: "ابدأ مع المؤسسية",

    // Success Stories
    successTitle: "قصص",
    successHighlight: "نجاح العملاء",
    successSubtitle: "شاهد كيف تقوم المؤسسات بتحويل عملية التغذية الراجعة",
    storyTitle: "جولدن ستيت ووريورز يبتكرون بالرؤى",
    storyDescription:
      "تعرف على كيفية اتخاذ فريق NBA الرائد قرارات استراتيجية للتقدم في مجالات النجاح.",
    storyCategorySports: "تحليلات رياضية",
    storyCategoryStrategy: "استراتيجية الفريق",
    storyCategoryInsights: "رؤى البيانات",
    storyReadTime: "5 دقائق قراءة",
    storyViewLink: "عرض قصة النجاح",

    // Footer
    footerDescription:
      "أنشئ استطلاعات قوية في دقائق، وليس ساعات. اجمع رؤى قابلة للتنفيذ باستطلاعات جميلة وتفاعلية.",
    products: "المنتجات",
    resources: "الموارد",
    stayUpdated: "ابق محدثاً",
    newsletter: "اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات.",
    enterEmail: "أدخل بريدك الإلكتروني",
    subscribe: "اشترك",
    copyright: "© 2024 Survey Infinity. جميع الحقوق محفوظة.",
    terms: "الشروط",
    privacy: "الخصوصية",
    cookies: "ملفات تعريف الارتباط",
    licenses: "التراخيص",
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const language = currentLanguage || "en";

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
