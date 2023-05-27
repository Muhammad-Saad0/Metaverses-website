"use client";

const ExploreCard = ({
  id,
  image,
  title,
  isActive,
  setIsActive,
}) => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log(id);
    setIsActive(id);
  };
  return (
    <div
      onClick={handleClick}
      className={`h-[600px] rounded-3xl overflow-hidden relative`}
    >
      <img
        className="h-full w-full object-cover absolute z-0"
        src={image}
        alt="world-image"
      />
      <div className="flex flex-col justify-end h-full relative z-10">
        {isActive === id && (
          <div className="is-selected-background absolute bottom-0 h-1/3 w-full" />
        )}
        {isActive === id && (
          <p className="text-center relative z-10 text-white mb-4 cursor-pointer">
            Enter Metaverse
          </p>
        )}
        <h4
          className={`text-white raltive z-10 text-left font-semibold text-[20px] ${
            isActive === id
              ? "text-center text-[28px] mb-4"
              : "-rotate-90 mb-[100px]"
          }`}
        >
          {title}
        </h4>
      </div>
    </div>
  );
};

export default ExploreCard;
