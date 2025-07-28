const CardFeature = ({ image, title, description }) => {
  return (
    <>
      <div className="w-full flex flex-col items-center text-center gap-5 ">
        <img src={image} alt={title} className="w-6 " />
        <h3 className="text-[#7616EC] text-xl font-medium">{title}</h3>
        <p className="w-[80%] text-body-base/relaxed">{description}</p>
      </div>
    </>
  );
};

export default CardFeature;
