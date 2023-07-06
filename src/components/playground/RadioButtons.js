import React, { useState } from "react";

const RadioButtons = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const radioStyles = {
    container: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
    },
    button: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    label: {
      paddingLeft: "10px",
      position: "relative",
      cursor: "pointer",
    },
    input: {
      display: "none",
    },
    radioButton: {
      width: "20px",
      height: "20px",
      marginRight: "10px",
      border: "4px solid white",
      outline: "2px solid orange",
      borderRadius: "50%",
      backgroundColor: "white",
      position: "relative",
    },
    selectedRadioButton: {
      backgroundColor: "orange",
      width: "20px",
      height: "20px",
      marginRight: "10px",
    },
  };

  return (
    <div style={radioStyles.container}>
      <label style={radioStyles.button}>
        <input
          type="radio"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={handleChange}
          style={radioStyles.input}
        />
        <span
          style={{
            ...radioStyles.radioButton,
            ...(selectedValue === "option1" && radioStyles.selectedRadioButton),
          }}
        />
        Option 1
      </label>
      <label style={radioStyles.button}>
        <input
          type="radio"
          value="option2"
          checked={selectedValue === "option2"}
          onChange={handleChange}
          style={radioStyles.input}
        />
        <span
          style={{
            ...radioStyles.radioButton,
            ...(selectedValue === "option2" && radioStyles.selectedRadioButton),
          }}
        />
        Option 2
      </label>
      <label style={radioStyles.button}>
        <input
          type="radio"
          value="option3"
          checked={selectedValue === "option3"}
          onChange={handleChange}
          style={radioStyles.input}
        />
        <span
          style={{
            ...radioStyles.radioButton,
            ...(selectedValue === "option3" && radioStyles.selectedRadioButton),
          }}
        />
        Option 3
      </label>
      <label style={radioStyles.button}>
        <input
          type="radio"
          value="option4"
          checked={selectedValue === "option4"}
          onChange={handleChange}
          style={radioStyles.input}
        />
        <span
          style={{
            ...radioStyles.radioButton,
            ...(selectedValue === "option4" && radioStyles.selectedRadioButton),
          }}
        />
        Option 4
      </label>
    </div>
  );
};

export default RadioButtons;
