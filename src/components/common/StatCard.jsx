import React from "react";
import Card from "./Card";

function StatCard({
  title,
  value,
  color = "#D4AF37",
}) {
  return (
    <Card>
      <p
        style={{
          color: "#B0B0B0",
          margin: 0,
        }}
      >
        {title}
      </p>

      <h1
        style={{
          color,
          marginTop: "12px",
          fontSize: "34px",
        }}
      >
        {value}
      </h1>
    </Card>
  );
}

export default StatCard;