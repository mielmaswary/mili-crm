import React, { useState } from "react";

const Modal = ({ isOpen }) => {
  const style = {
   
  };
  return (
    <div className={isOpen ? "modal-open" : "modal-close"} style={style}></div>
  );
};

export default Modal;
