import React, { useContext, useEffect, useState } from "react";
import Button from "../assets/Button";

import Modal from "../assets/Modal";
import { Link, useNavigate } from "react-router-dom";

import { AppContext } from "../../App";
const Navbar = () => {
  const { data, isLoading, error, navOpen, setNavOpen, english } =
    useContext(AppContext);

  const toggleBtnStyle = {
    position: "fixed",
    top: 0,
    [english ? "right" : "left"]: english
      ? navOpen
        ? 60
        : 0
      : navOpen
      ? -60
      : -140,
    margin: "0px 10px",
    width: 40,
    cursor: "pointer",
    fontSize: "50px",
    transform: "translateX(80px)",
    color: "#3d3c3a",
    marginRight: 30,
  };
  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <Modal isOpen={navOpen} />
      <div
        id={"nav-bar-container"}
        className={
          navOpen
            ? "navbar-open-" + (english ? "en" : "he")
            : "navbar-close-" + (english ? "en" : "he")
        }
      >
        <div
          className="toggleBtnStyle"
          style={toggleBtnStyle}
          onClick={toggleNavbar}
        >
          {navOpen ? "x" : "+"}
        </div>
        <Link to="/invitations">
          {" "}
          <Button
            title={english ? "About me" : "הזמנות"}
            className={"light-rounded-btn-blue"}
            onClick={toggleNavbar}
          />
        </Link>
        <Link to="/resume">
          {" "}
          <Button
            title={english ? "Resume" : ""}
            className={"light-rounded-btn-blue"}
            onClick={toggleNavbar}
          />
        </Link>
        <Link to="/projects">
          <Button
            title={english ? "Projects" : ""}
            className={"light-rounded-btn-blue"}
            onClick={toggleNavbar}
          />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
