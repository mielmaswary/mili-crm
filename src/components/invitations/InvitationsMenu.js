import React from "react";
import Container from "../assets/Container";
import { Link, useNavigate } from "react-router-dom";

const InvitationsMenu = () => {
  const data = [
    {
      title: "הזמנה חדשה",
      icon: "/add-button.png",
      linkTo: "/invitations/new",
    },
    {
      title: "לכל ההזמנות",
      icon: "/add-button.png",
      linkTo: "/invitations/all",
    },
    {
      title: "הזמנה חדשה",
      icon: "/add-button.png",
    },
  ];
  const styles = {
    menuItemContainer: {
      width: "40%",
      height: 115,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "10px 0",
    },
    link: {
      textDecoration: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "10px 0",
      margin: "auto",
    },

    title: { textAlign: "center", color: "#4A4646" },
    icon: { width: "60%" },
  };

  const menuItems = data.map((item) => (
    <div style={styles.menuItemContainer}>
      <Link style={styles.link} to={item.linkTo}>
        <h4 style={styles.title}>{item.title}</h4>
        <img style={styles.icon} src={item.icon}></img>
      </Link>
    </div>
  ));
  return <Container>{menuItems}</Container>;
};

export default InvitationsMenu;
