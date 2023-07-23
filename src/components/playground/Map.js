import React, { useState } from "react";

const Map = () => {
  const [hoveredItemIndex, sethoveredItemIndex] = useState(0);
  const [hoveredDropdownItemIndex, setHoveredDropdownItemIndex] = useState();
  console.log(hoveredItemIndex);
  const navbarData = [
    {
      id: 1,
      title: "Link 1",
      dropdownItems: ["Dropdown Item 1", "Dropdown Item 2", "Dropdown Item 3"],
    },
    {
      id: 2,
      title: "Link 2",
      dropdownItems: ["Dropdown Item 1", "Dropdown Item 2", "Dropdown Item 3"],
    },
    {
      id: 3,
      title: "Link 3",
      dropdownItems: ["Dropdown Item 1", "Dropdown Item 2", "Dropdown Item 3"],
    },
    {
      id: 4,
      title: "Link 4",
      dropdownItems: ["Dropdown Item 1", "Dropdown Item 2", "Dropdown Item 3"],
    },
    {
      id: 5,
      title: "Link 5",
      dropdownItems: ["Dropdown Item 1", "Dropdown Item 2", "Dropdown Item 3"],
    },
    {
      id: 6,
      title: "Link 6",
      dropdownItems: ["Dropdown Item 1", "Dropdown Item 2", "Dropdown Item 3"],
    },
    {
      id: 7,
      title: "Link 7",
      dropdownItems: ["Dropdown Item 1", "Dropdown Item 2", "Dropdown Item 3"],
    },
    {
      id: 8,
      title: "Link 8",
      // dropdownItems: ["Dropdown Item 1", "Dropdown Item 2", "Dropdown Item 3"],
    },
  ];

  const styles = {
    navbar: {
      backgroundColor: "black",
      height: 70,
      display: "flex",
      width: "100%",
      zIndex: 3,
    },
    navbarItem: {
      padding: "20px 10px 50px 10px",
      margin: "10px 10px 10px 0",
      cursor: "pointer",
      width: 100,
      height: "70%",
      position: "relative",
      color: "yellow",
    },
    dropDownContainer: {
      width: 150,
      height: 100,
      padding: 10,
      paddingTop: 20,
      border: "solid 1px #ccc",
      borderTop: "none",
      position: "absolute",
      top: 60,
      left: 0,
      zIndex: 1,
    },
    dropdownItemHovered: {
      padding: 4,
      color: "orange",
    },
    dropdownItemNotHovered: {
      padding: 4,
      color: "#3e3e3f",
    },
  };

  const handleMouseEnter = (id) => {
    sethoveredItemIndex(id);
  };
  const handleDropdownItemHovered = (id) => {
    setHoveredDropdownItemIndex(id);
  };
  const handleDropdownItemNotHovered = () => {
    setHoveredDropdownItemIndex(-1);
  };
  
  const navbarElements = navbarData.map((el, i) => (
    <div
      onMouseEnter={() => handleMouseEnter(i + 1)}
      onMouseLeave={() => sethoveredItemIndex(-1)}
      style={styles.navbarItem}
    >
      {" "}
      {el.title}
      {hoveredItemIndex === i + 1 && (
        <div style={styles.dropDownContainer}>
          {el.dropdownItems.map((item, i) => (
            <h6
              style={
                i + 1 === hoveredDropdownItemIndex
                  ? styles.dropdownItemHovered
                  : styles.dropdownItemNotHovered
              }
              onMouseEnter={() => handleDropdownItemHovered(i + 1)}
              onMouseLeave={handleDropdownItemNotHovered}
            >
              {item}
            </h6>
          ))}
        </div>
      )}
    </div>
  ));

  return <div style={styles.navbar}>{navbarElements}</div>;
};

export default Map;
