import React from "react";
import react from "../assets/react.svg";

const Footer = () => {
  return (
    <div className="h-[400px] bg-[#59749B] flex items-center justify-center">
      <div className="flex flex-col gap-2">
        <img src={react} className="h-[50px] w-[50px] ml-6" />
        <h1 className="text-[24px] font-semibold text-white">Company</h1>
      </div>
    </div>
  );
};

export default Footer;
