import React from "react";

function SearchBar() {
  return (
    <input
      placeholder="Search..."
      style={{
        width: "100%",
        padding: "12px 18px",
        background: "#1B1B1B",
        border: "1px solid #3A3A3A",
        borderRadius: "12px",
        color: "#FFFFFF",
      }}
    />
  );
}

export default SearchBar;