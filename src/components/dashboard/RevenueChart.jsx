import React from "react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function RevenueChart() {
  const data = [
    { month: "Jan", revenue: 450 },
    { month: "Feb", revenue: 520 },
    { month: "Mar", revenue: 610 },
    { month: "Apr", revenue: 700 },
    { month: "May", revenue: 850 },
    { month: "Jun", revenue: 920 },
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
        Revenue Analytics
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={data}>
          <CartesianGrid stroke="#3A3A3A" />

          <XAxis
            dataKey="month"
            stroke="#B0B0B0"
          />

          <YAxis stroke="#B0B0B0" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#D4AF37"
            fill="#D4AF37"
            fillOpacity={0.25}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueChart;