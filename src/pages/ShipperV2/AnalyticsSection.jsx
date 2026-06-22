import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const revenueData = [
  { day: "Mon", revenue: 120 },
  { day: "Tue", revenue: 180 },
  { day: "Wed", revenue: 140 },
  { day: "Thu", revenue: 250 },
  { day: "Fri", revenue: 310 },
  { day: "Sat", revenue: 280 },
  { day: "Sun", revenue: 360 },
];

const shipmentData = [
  { name: "Pending", value: 18 },
  { name: "Running", value: 42 },
  { name: "Delivered", value: 65 },
];

function AnalyticsSection() {
  return (
    <div
      style={{
        background: "#10243B",
        borderRadius: "20px",
        padding: "25px",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h2
        style={{
          color: "#fff",
          marginBottom: "25px",
        }}
      >
        📊 Revenue & Delivery Analytics
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
        }}
      >
        {/* Revenue Chart */}

        <div
          style={{
            background: "#081321",
            borderRadius: "15px",
            padding: "20px",
          }}
        >
          <h3 style={{ color: "#fff" }}>
            Weekly Revenue
          </h3>

          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={revenueData}>
              <CartesianGrid stroke="#1b3555" />

              <XAxis dataKey="day" stroke="#8FA6C4" />

              <YAxis stroke="#8FA6C4" />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#00D9FF"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Shipment Status */}

        <div
          style={{
            background: "#081321",
            borderRadius: "15px",
            padding: "20px",
          }}
        >
          <h3
            style={{
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            Shipment Status
          </h3>

          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={shipmentData}>
              <CartesianGrid stroke="#1b3555" />

              <XAxis dataKey="name" stroke="#8FA6C4" />

              <YAxis stroke="#8FA6C4" />

              <Tooltip />

              <Bar
                dataKey="value"
                fill="#00D9FF"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom KPI */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "15px",
          marginTop: "25px",
        }}
      >
        <div
          style={{
            background: "#081321",
            padding: "18px",
            borderRadius: "12px",
          }}
        >
          <h4 style={{ color: "#8FA6C4" }}>
            Total Revenue
          </h4>

          <h2 style={{ color: "#22C55E" }}>
            ₹12.8 Lakh
          </h2>
        </div>

        <div
          style={{
            background: "#081321",
            padding: "18px",
            borderRadius: "12px",
          }}
        >
          <h4 style={{ color: "#8FA6C4" }}>
            Active Loads
          </h4>

          <h2 style={{ color: "#00D9FF" }}>
            42
          </h2>
        </div>

        <div
          style={{
            background: "#081321",
            padding: "18px",
            borderRadius: "12px",
          }}
        >
          <h4 style={{ color: "#8FA6C4" }}>
            Completed
          </h4>

          <h2 style={{ color: "#F59E0B" }}>
            186
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsSection;