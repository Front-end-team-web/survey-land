import { useSelector } from "react-redux";
import Definition from "./components/Definition";
import FAQSection from "./components/FAQSection";

const Index = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
  return (
    <div
      className={
        isDarkMode
          ? "bg-gray-800 w-full "
          : "bg-gradient-to-r from-white via-[#C6B4FA] to-white w-full"
      }
    >
      <Definition />
      <FAQSection />
    </div>
  );
};

export default Index;
