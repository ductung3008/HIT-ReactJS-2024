import React from "react";
import "./Button.scss";

const Button = ({ title, width, height, handleClick, children }) => {
  return (
    <>
      <button className="btn" onClick={handleClick} style={{ width, height }}>
        {title}
      </button>
      {children}
    </>
  );
};

export default Button;
