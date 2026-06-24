import React from "react";

function Table({ children }) {
  return (
    <div
      style={{
        background: "#242424",
        border: "1px solid #3A3A3A",
        borderRadius: "18px",
        padding: "20px",
        overflowX: "auto",
      }}
    >
      {children}
    </div>
  );
}

export default Table;