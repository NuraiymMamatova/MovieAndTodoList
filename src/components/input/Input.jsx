import React from "react";
import "./Input.css";

const Input = ({
  title,
  labelClassName,
  inputType = "text",
  value,
  checked = false,
  onChange,
  className,
  placeholder,
}) => {
  return (
    <input
      id={className}
      placeholder={placeholder}
      checked={checked}
      className={className}
      type={inputType}
      min={1}
      max={5}
      value={value}
      onChange={onChange}
    />

    // <label htmlFor={className}>
    //   {labelClassName ? <h1 className={labelClassName}>{title}</h1> : title}
    // </label>
  );
};

export default Input;
