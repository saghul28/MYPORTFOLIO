import React from "react";
import { primary } from "./common";

export const Button = ({ name, onClick }) => {
  return (
    <div
      className={`w-[100px] p-3 text-center bg-[${primary}] hover:bg-[#091057] rounded-3xl text-white transition duration-200`}
    >
      <a href={onClick}>{name}</a>
    </div>
  );
};
