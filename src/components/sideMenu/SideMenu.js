import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

const SideMenu = () => {
  const navigate = useNavigate();
  const { data, isLoading, error, navOpen, setNavOpen, english, setenglish } =
    useContext(AppContext);
  const containerStyle = {
    width: "170px",
    height: "100vh",
    background: "rgb(2,0,36)",
    background:
      "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(2,0,36,1) 100%)",
    position: "fixed",
    top: 0,
    left: english ? 0 : "calc( 100vw - 170px)",
    zIndex: 12,
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    overflow: "hidden",
  };

  const titleStyle = {
    color: "white",
    letterSpacing: 1,
    fontSize: 25,
  };
  const subTitleStyle = {
    fontSize: 18,
    fontWeight: 300,
    color: "white",
    wordBreak: "break-word",
  };
  const imgStyle = {
    width: "180%",
    height: "180px",
    objectFit: "cover",
    objectPosition: "top",
    marginBottom: 20,
  };
  const switchLangStyle = {
    color: "white",
    marginTop: "auto",
    padding: 10,
    fontSize: 14,
    cursor: "pointer",
  };

  const switchLang = () => {
    setenglish(!english);
    const navbar = document.getElementById("nav-bar-container");
    navbar.style.opacity = 0;
    navbar.style.transition = "none";
    setTimeout(() => {
      navbar.style.opacity = 1;
      navbar.style.transition = "0.9s all";
    }, 200);
  };
  return (
    <div id="side-bar-container" style={containerStyle}>
      <img style={imgStyle} src="miel-image-1.jpg" />
      <h3 style={titleStyle}>מיאל</h3>
      <h5 style={subTitleStyle}>אומן בסמטאות</h5>

      <h5 onClick={switchLang} style={switchLangStyle}>
        {english ? "עברית" : "English"}
      </h5>
    </div>
  );
};

export default SideMenu;
