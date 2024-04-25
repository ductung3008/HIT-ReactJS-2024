import React from "react";
import "./Button.scss";

const Button = ({ title, handleClick }) => {
  return (
    <button className="btn" onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
