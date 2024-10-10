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
    <div className="md:mx-[40px]  bg-[#F9FAFF]">
      <div >
        <Header />
      </div>
      <div className="mx-[20px] md:mx-0">
        <Intro />
      </div>
      <div id="services" className="mx-[20px] md:mx-0">
        <Services />
      </div>
      <div className="my-10  mx-[20px] md:mx-0  " id="project">
        <h1 className="text-center text-2xl font-extrabold mb-6">Projects</h1>
        <ProjectComponent />
      </div>
      <div id="about" className="mx-[20px] md:mx-0">
        <h1 className="text-center text-2xl font-extrabold mb-6">About Me</h1>
        <AboutUs />
      </div>
      <div className="my-10" id="contact">
        <ContactUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
