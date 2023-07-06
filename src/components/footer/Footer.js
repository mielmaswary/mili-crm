import React, { useContext } from "react";
import { AppContext } from "../../App";

const Footer = ({ pageTitle }) => {
  console.log(pageTitle);
  const style = {
    width: "100%",
    height: 50,
    position: "fixed",
    bottom: 0,
    maringTop: 30,
    padding: 20,
    zIndex: 10,
    backgroundColor: "#ffffff",
    color: "#040341",
    fontSize: 40,
    fontWeight: 300,
    textAlign: "center",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  };
  const { data, isLoading, error, navOpen, setNavOpen, english } =
    useContext(AppContext);
  return <div style={style}></div>;
};

export default Footer;
