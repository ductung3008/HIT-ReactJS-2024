import React from "react";
import "./Button.scss";

const Button = ({ Content, onClick, backgroundColor, textColor }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      {Content}
    </button>
  );
};

export default Button;
