import React from "react";
import { useState } from "react";

const DropDown = () => {
  const [currentDropIndex, setcurrentDropIndex] = useState();
  console.log(currentDropIndex);
  const data = [
    {
      id: 1,
      title: "cars",
      subTitles: { id: 1, subs: ["audi", "toyota", "mazda"] },
    },
    {
      id: 2,
      title: "cars",
      subTitles: { id: 2, subs: ["audi", "toyota", "mazda"] },
    },
    {
      id: 3,
      title: "cars",
      subTitles: { id: 3, subs: ["audi", "toyota", "mazda"] },
    },
  ];

  const handleMouseOver = (id) => {
    setcurrentDropIndex(id);
  };
  const handleMouseLeave = () => {
    setcurrentDropIndex(undefined);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {data.map((e) => (
        <div>
          <div
            id={e.id}
            style={{ width: 200 }}
            onMouseEnter={() => handleMouseOver(e.id)}
            onMouseLeave={handleMouseLeave}
          >
            {e.title}
            <br></br>
            {currentDropIndex === e.id && (
              <ul>
                {e.subTitles.subs.map((e) => (
                  <li>{e}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropDown;

// import React, { useState } from "react";

// const DropDown = () => {
//   const [currentDropIndex, setCurrentDropIndex] = useState(null);

//   const data = [
//     {
//       id: 1,
//       title: "cars",
//       subTitles: { id: 1, subs: ["audi", "toyota", "mazda"] },
//     },
//     {
//       id: 2,
//       title: "cars",
//       subTitles: { id: 2, subs: ["audi", "toyota", "mazda"] },
//     },
//     {
//       id: 3,
//       title: "cars",
//       subTitles: { id: 3, subs: ["audi", "toyota", "mazda"] },
//     },
//   ];

//   const handleMouseOver = (id) => {
//     setCurrentDropIndex(id);
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       {data.map((item) => (
//         <div key={item.id}>
//           <div
//             style={{ width: 200 }}
//             onMouseOver={() => handleMouseOver(item.id)}
//           >
//             {item.title}
//             {currentDropIndex === item.id && (
//               <div>{item.subTitles.subs.join(", ")}</div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DropDown;
