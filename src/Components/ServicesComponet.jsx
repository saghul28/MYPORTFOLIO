import React from "react";

export const ServicesComponet = ({ image, title, description }) => {
  return (
    <div className="w-[500px]  flex flex-col items-center justify-center text-center p-6 font-semibold">
      <img src={image} width="100px" height="100px" alt={title} />
      <p className="p-2 font-bold">{title}</p>
      <p className="text-justify">{description}</p>
    </div>
  );
};
