import React from "react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

function FleetChart() {
  const data = [
    {
      name: "Available",
      value: 128,
    },
    {
      name: "Running",
      value: 18,
    },
    {
      name: "Maintenance",
      value: 6,
    },
  ];

  const colors = [
    "#22C55E",
    "#D4AF37",
    "#EF4444",
  ];

  return (
    <div
      style={{
        background: "#242424",
        border: "1px solid #3A3A3A",
        borderRadius: "20px",
        padding: "25px",
        height: "420px",
      }}
    >
      <h2
        style={{
          color: "#FFFFFF",
          marginBottom: "20px",
        }}
      >
        Fleet Distribution
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            outerRadius={120}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={colors[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FleetChart;