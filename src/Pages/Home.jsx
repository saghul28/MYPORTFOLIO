import React from "react";
import { Intro } from "../Components/Intro";
import Services from "./Services";

import ProjectComponent from "../Components/ProjectComponent";
import ContactUs from "../Components/ContactUs";
import Header from "../Components/Header";
import "./Home.css";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="mx-[40px] my-[30px] bg-[#F9FAFF]">
      <div>
        <Header />
      </div>
      <div>
        <Intro />
      </div>
      <div id="services">
        <Services />
      </div>
      <div className="my-10" id="project">
        <h1 className="text-center text-2xl font-extrabold mb-6">Projects</h1>
        <ProjectComponent />
      </div>
      <div id="about">
        <h1 className="text-center text-2xl font-extrabold mb-6">About Me</h1>
        <AboutUs />
      </div>
      {/* <div className="my-10" id="contact">
        <ContactUs />
      </div> */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
