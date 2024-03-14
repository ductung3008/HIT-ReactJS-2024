import React from "react";
import { useState } from "react";

const ToggleButton = () => {
  const [isOn, setStatus] = useState(false);

  const handleClick = () => {
    setStatus(!isOn);
  };

  return (
    <button
      className={`${isOn ? "bg-[#00bfff]" : ""} m-4 flex h-[50px] w-[100px] items-center rounded-full bg-[#c3c3c3]`}
      onClick={handleClick}
    >
      <span
        className={`${isOn ? "translate-x-[calc(100px-8px-40px)]" : ""} mx-1 block size-[40px] rounded-full bg-white transition-all duration-300`}
      ></span>
      <span
        className={`${isOn ? "-translate-x-8" : "ml-1"} text-lg font-bold text-white`}
      >
        {isOn ? "ON" : "OFF"}
      </span>
    </button>
  );
};

export default ToggleButton;
