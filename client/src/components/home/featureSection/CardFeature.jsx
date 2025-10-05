import icon1 from "../../../assets/homeImages/icon1.png";
import icon2 from "../../../assets/homeImages/icon2.png";
import icon3 from "../../../assets/homeImages/icon3.png";
import icon4 from "../../../assets/homeImages/icon4.png";
import icon5 from "../../../assets/homeImages/icon5.png";
import icon6 from "../../../assets/homeImages/icon6.png";
import { motion } from "framer-motion";
import { useTranslation } from "../../../hooks/useTranslation";
import { useSelector } from "react-redux";

const icons = [icon1, icon2, icon3, icon6, icon5, icon4];

const CardFeature = ({ image, title, description, isDarkMode }) => {
  return (
    <div className="w-full flex flex-col items-center text-center gap-5">
      <img src={image} alt={title} className="w-6" />
      <h3 className="text-[#7616EC] text-xl font-medium">{title}</h3>
      <p
        className={`w-[80%] text-body-base/relaxed ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
};
