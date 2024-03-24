import React from "react";
import { useState } from "react";
import "./Toggle.scss";

const Toggle = () => {
  const [isOn, setOn] = useState(false);

  const handleClick = () => {
    setOn(!isOn);
  };

  return (
    <button onClick={handleClick} className={`toggle ${isOn && "dark"}`}>
      <span className={`circle ${isOn && "dark"}`}></span>
      <span className={`icon ${isOn && "dark"}`}>
        <i className={`fa-solid ${!isOn ? "fa-sun-bright" : "fa-moon"}`}></i>
      </span>
    </button>
  );
};

export default Toggle;
