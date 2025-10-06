import Card from "./components/Card";
import Contact from "./components/Contact";
import CustomersSay from "./components/CustomersSay";
import ScreenPage from "./components/ScreenPage";
import Slide from "./components/Slide";
import ValuesSection from "./components/ValuesSection";
import EndSection from "./components/EndSection";

const Index = () => {
  return (
    <>
      <ScreenPage />
      <Card />
      <ValuesSection />
      <Slide />
      <EndSection />
      <CustomersSay />
      <Contact />
    </>
  );
};
export default Index;
