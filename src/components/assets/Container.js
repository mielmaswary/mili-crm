import React from "react";

const Container = ({ children }) => {
  const containerStyle = {
    width: "85%",
    height: "auto",
    border: "1px solid #ccc",
    padding: "20px",
    boxSizing: "border-box",
    margin: "80px auto 150px auto",
    direction: "rtl",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        overflow: "scroll",
      }}
    >
      <div style={containerStyle}>{children}</div>
    </div>
  );
};

export default Container;
