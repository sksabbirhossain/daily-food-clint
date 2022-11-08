import React from "react";

const Button = ({ children, className }) => {
  return <button type="button" className={`mainBtn ${className}`}>{children}</button>;
};

export default Button;
