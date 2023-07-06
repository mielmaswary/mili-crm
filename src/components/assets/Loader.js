import React from "react";
import { Blocks } from "react-loader-spinner";

const Loader = () => {
  const containerStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={containerStyle}>
      <Blocks
        visible={true}
        height="80px"
        width="80px"
        ariaLabel="blocks-loading"
      />
    </div>
  );
};

export default Loader;
