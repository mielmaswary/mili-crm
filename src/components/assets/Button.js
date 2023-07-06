import React from "react";

const CustomButton = ({ title, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
};

export default CustomButton;
