import React from "react";
import myImage from "../assets/IMG_8555.jpg";
import { Button } from "./Button";

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col-reverse items-center   md:flex-row mx-auto md:justify-evenly ">
      <div className="w-full  md:w-1/2">
        <p className="text-justify font-medium">
          I am a dedicated app developer with one year of experience
          specializing in React Native for front-end development and Python with
          FastAPI for backend services. My passion for creating intuitive and
          efficient applications drives me to continuously enhance my skills and
          embrace new technologies. I thrive on building seamless user
          experiences and optimizing backend performance, ensuring that my
          projects not only meet client expectations but also deliver lasting
          value. I am eager to connect and collaborate with others who share a
          commitment to innovative solutions in the tech industry.
        </p>
        <div className="mt-4 font-extrabold">
          <Button
            name="Resume"
            onClick="https://drive.google.com/file/d/143KLP_7QBdCSRTnEPPpPDt4hl2Fl0oyS/view?usp=sharing"
          />
        </div>
      </div>
      <div className="w-1/2 md:w-1/4 ">
        <img src={myImage} className=" w-full object-cover rounded-full"></img>
      </div>
    </div>
  );
};

export default AboutUs;
