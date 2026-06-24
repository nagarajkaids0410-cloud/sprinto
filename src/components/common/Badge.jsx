import React from "react";

function Badge({ text, color = "#22C55E" }) {
  return (
    <span
      style={{
        background: `${color}20`,
        color,
        padding: "6px 14px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "600",
      }}
    >
      {text}
    </span>
  );
}

export default Badge;