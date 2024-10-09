import React from "react";
import { ServicesComponent } from "../Components/ServicesComponet";
import myIcon1 from "../assets/webac.png";
import myIcon2 from "../assets/appBa.png";

const Services = () => {
  return (
    <div className="mt-4 flex flex-col items-center px-4">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-6">
        My Services
      </h1>
      <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-6 md:justify-center">
        <ServicesComponent
          image={myIcon1}
          title="Backend Developer"
          description="Providing robust, scalable backend solutions using modern frameworks like FastAPI to ensure your system's performance"
        />
        <ServicesComponent
          image={myIcon2}
          title="App Developer"
          description="Specializing in mobile app development with React Native, delivering seamless user experiences across platforms"
        />
      </div>
    </div>
  );
};

export default Services;
