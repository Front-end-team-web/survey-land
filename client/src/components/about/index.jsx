// Import All Component
import Card from "./components/Card";
import ScreenPage from "./components/ScreenPage";
import ValuesSection from "./components/ValuesSection";
import Slide from "./components/Slide";
import EndSection from "./components/EndSection";
export default function Index() {
  return (
    <>
      <div>
        <ScreenPage />
        <Card />
        <ValuesSection />
        <Slide />
        <EndSection />
      </div>
    </>
  );
}
