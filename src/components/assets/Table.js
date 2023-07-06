import React from "react";

const Table = ({ data, columns }) => {
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    height: "100%",
  };
  const tableHeaderStyle = {
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    position: "sticky",
    top: 0,
  };
  const tableRowStyle = {
    borderTop: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
  };
  const tableCellStyle = {
    padding: "20px",
  };

  return (
    <table style={tableStyle}>
      <thead style={tableHeaderStyle}>
        <tr>
          {columns.map((column, i) => (
            <th
              style={{ width: i === 2 ? 50 : 100, padding: 20 }}
              key={column.key}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr style={tableRowStyle} key={item.id}>
            {columns.map((column, i) => (
              <td
                style={{
                  width: i === 2 ? 500 : 100,
                  padding: "20px",
                  textAlign: "center",
                }}
                key={column.key}
              >
                {item[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
