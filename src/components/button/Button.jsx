import React from "react";
import "./Button.css";

const Button = ({ color, title, className, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={className}
      onClick={() => onClick()}
    >
      {title}
    </button>
  );
};

export default Button;
