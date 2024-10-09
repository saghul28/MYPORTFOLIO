import React from "react";
import { ServicesComponet } from "../Components/ServicesComponet";
import myIcon1 from "../assets/webac.png";
import myIcon2 from "../assets/appBa.png";

const Services = () => {
  return (
    <div className="mt-4">
      <h1 className="text-center text-2xl font-bold ">My Services</h1>
      <div className="flex justify-center">
        <ServicesComponet
          image={myIcon1}
          title="Backend Developer"
          description="Providing robust, scalable backend solutions using modern frameworks like FastAPI to ensure your system's performance"
        />
        <ServicesComponet
          image={myIcon2}
          title="App Developer"
          description="Specializing in mobile app development with React Native, delivering seamless user experiences across platforms"
        />
      </div>
    </div>
  );
};

export default Services;
