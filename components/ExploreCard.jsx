"use client";

const ExploreCard = ({ id, image, title }) => (
  <div className="h-[600px] w-[200px] rounded-3xl overflow-hidden relative">
    <img
      className="h-full w-full object-cover absolute z-0"
      src={image}
      alt="world-image"
    />
    <div className="flex flex-col justify-end h-full z-10">
      <h4 className="text-white font-semibold mb-[100px] text-[26px] -rotate-90">
        {title}
      </h4>
    </div>
  </div>
);

export default ExploreCard;
