import React from "react";

export const ServicesComponent = ({ image, title, description }) => {
  return (
    <div className="w-full md:w-1/3 lg:w-[400px] flex flex-col items-center justify-center text-center p-4 md:p-6 font-semibold">
      <img
        src={image}
        className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
        alt={title}
      />
      <p className="p-2 font-bold text-lg">{title}</p>
      <p className="text-justify text-sm md:text-base">{description}</p>
    </div>
  );
};
