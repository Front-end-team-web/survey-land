import { useSelector } from "react-redux";
import { useTranslation } from "../../../hooks/useTranslation";

const WorkSection = () => {
  const { t } = useTranslation();
  const steps = t("steps", { returnObjects: true });
  const { isDarkMode } = useSelector((state) => state.theme);
  return (
    <>
      <div className="mt-24 ">
        <div className="text-center px-2 ">
          <h3 className=" text-xl md:text-4xl font-bold mb-4 ">
            <span className="text-[#7616EC]">
              {t("workSection.title.part1")}
            </span>{" "}
            {t("workSection.title.part2")}
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-items-center gap-3 px-4 py-8 lg:px-20 lg:py-16">
          {steps.map((step, index) => (
            <div
              className={`w-full flex flex-col items-center text-center gap-4  p-5 rounded-md ${
                isDarkMode
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-800"
              } `}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#490F8F] to-[#7616EC] text-white  flex items-center justify-center">
                {index + 1}
              </div>
              <h4 className="text-2xl font-bold">{step.title}</h4>
              <p className="w-[80%] text-sm/relaxed text-gray-600 ">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkSection;
