import React, { useContext } from "react";
import { AppContext } from "../../App";

const Header = ({ pageTitle }) => {
  console.log(pageTitle);
  const style = {
    width: "100%",
    height: 100,
    padding: 20,
    backgroundColor: "#ffffff",
    color: "#040341",
    fontSize: 40,
    fontWeight: 300,
    textAlign: "center",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  };
  const { data, isLoading, error, navOpen, setNavOpen, english } =
    useContext(AppContext);
  return <div style={style}>{pageTitle}</div>;
};

export default Header;
