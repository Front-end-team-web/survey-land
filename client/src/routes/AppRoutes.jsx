import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Features from "../pages/Features";
import FAQs from "../pages/FAQs";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import NotFound from "../pages/Exception/NotFound";
import Auth from "../pages/Auth";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />


      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
