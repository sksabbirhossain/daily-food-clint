import React from "react";

const Button = ({ children, className }) => {
  return <button type="submit" className={`mainBtn ${className}`}>{children}</button>;
};

export default Button;
