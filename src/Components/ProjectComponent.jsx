import React from "react";
import myImage from "../assets/medistock.png";

const ProjectComponent = () => {
  const project = {
    title: "Medical Stock Management",
    description:
      "This is a medical stock management system that helps manage the inventory of medical products. It supports barcode scanning, importing, and exporting of data.",
  };

  return (
    <div  className="flex flex-col md:flex-row items-center md:w-3/4  mx-auto rounded-lg border-2">
      {/* Image container */}
      <div className="w-full  md:w-1/2">
        <img
          src={myImage}
          className="w-full h-[300px] object-fill rounded-lg"
          alt="Project Image"
        />
      </div>

      {/* Content container */}
      <div className="p-4 w-full md:w-1/2">
        <h1 className="text-3xl font-bold ">{project.title}</h1>
        <p className="text-lg text-justify">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectComponent;
