import React from "react";

const InvitationCard = ({ data }) => {
  const { contactName, date, id } = data;

  const styles = {
    container: {
      border: "solid #ccc 1px",
      padding: 10,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      margin: 9,
      cursor: "pointer",
    },
  };
  return (
    <div style={styles.container}>
      <p>שם:{contactName}</p>
      <br></br>
      <p>תאריך: {date}</p>
    </div>
  );
};

export default InvitationCard;
