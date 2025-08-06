import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Features from "../pages/Features";
import FAQs from "../pages/FAQs";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import NotFound from "../pages/Exception/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/features" element={<Features />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
