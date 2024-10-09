import React from "react";
import myImage from "../assets/IMG_8555.jpg"; 


export const Intro = () => {
  return (
    <div className="w-3/2 flex flex-col-reverse md:flex-row mx-auto justify-evenly items-center my-12">
      <div className="w-full md:w-1/2 ">
        <p className="text-xl font-bold">App/backend developer</p>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-4">
          Hello! My Name Is
        </h1>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-2">
          Saghul Ahmed
        </h1>

        <p className="text-justify  font-semibold mt-3">
          I'm a mobile app and backend developer with expertise in React Native
          and FastAPI. I build cross-platform apps and scalable backends,
          focusing on performance, user experience, and delivering reliable
          software solutions.
        </p>
      </div>
      <div className="w-1/2   md:w-1/4 ">
        <img
          src={myImage}
          alt="Saghul Ahmed"
          className="w-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};
