// import React from "react";
// import myImage from "../assets/IMG_8555.jpg"; // Adjust the path as necessary
// import { Button } from "./button";

// export const Intro = () => {
//   return (
//     <div className="container  mx-auto w-3/4 flex justify-between items-center ">
//       <div className="text-justify w-1/2 ">
//         <p className="text-xl font-bold">App/backend developer</p>
//         <h1 className="text-4xl font-extrabold mt-4">Hello! My Name Is</h1>
//         <h1 className="text-4xl font-extrabold mt-2">Saghul Ahmed</h1>
//         <p className="text-justify  font-semibold mt-3">
//           I'm a mobile app and backend developer with expertise in React Native
//           and FastAPI. I build cross-platform apps and scalable backends,
//           focusing on performance, user experience, and delivering reliable
//           software solutions.
//         </p>
//       </div>
//       <div className="w-1/2 flex justify-end">
//         <img
//           src={myImage}
//           alt="Saghul Ahmed"
//           className="rounded-full w-3/4  object-cover" // Adjust size as needed
//         />
//       </div>
//     </div>
//   );
// };
import React from "react";
import myImage from "../assets/IMG_8555.jpg"; // Adjust the path as necessary
import { Button } from "./button"; // Assuming the Button component is still needed

export const Intro = () => {
  return (
    <div className="w-full flex mx-auto justify-evenly  items-center my-16">
      <div className="w-1/2">
        <p className="text-xl font-bold">App/backend developer</p>
        <h1 className="text-4xl font-extrabold mt-4">Hello! My Name Is</h1>
        <h1 className="text-4xl font-extrabold mt-2">Saghul Ahmed</h1>

        <p className="text-justify  font-semibold mt-3">
          I'm a mobile app and backend developer with expertise in React Native
          and FastAPI. I build cross-platform apps and scalable backends,
          focusing on performance, user experience, and delivering reliable
          software solutions.
        </p>
      </div>
      <div className="w-1/4">
        <img
          src={myImage}
          alt="Saghul Ahmed"
          className="w-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};
