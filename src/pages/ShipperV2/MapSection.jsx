import React from "react";

function MapSection() {
  return (
    <div
      style={{
        background: "#10243B",
        borderRadius: "20px",
        padding: "20px",
        height: "450px",
        color: "#ffffff",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h2>🌍 Live Logistics Network</h2>

        <div
          style={{
            background: "#00D9FF",
            color: "#071426",
            padding: "8px 18px",
            borderRadius: "20px",
            fontWeight: "bold",
          }}
        >
          LIVE
        </div>
      </div>

      {/* Map */}

      <div
        style={{
          width: "100%",
          height: "360px",
          borderRadius: "15px",
          background:
            "linear-gradient(135deg,#071426,#10243B,#0B3050)",
          position: "relative",
        }}
      >
        {/* Truck 1 */}

        <div
          style={{
            position: "absolute",
            left: "20%",
            top: "35%",
            fontSize: "35px",
          }}
        >
          🚛
        </div>

        {/* Truck 2 */}

        <div
          style={{
            position: "absolute",
            left: "65%",
            top: "55%",
            fontSize: "35px",
          }}
        >
          🚛
        </div>

        {/* Pickup */}

        <div
          style={{
            position: "absolute",
            left: "30%",
            top: "65%",
            fontSize: "28px",
          }}
        >
          📍
        </div>

        {/* Delivery */}

        <div
          style={{
            position: "absolute",
            left: "75%",
            top: "25%",
            fontSize: "28px",
          }}
        >
          📦
        </div>

        {/* Route */}

        <svg
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <line
            x1="250"
            y1="250"
            x2="700"
            y2="100"
            stroke="#00D9FF"
            strokeWidth="4"
            strokeDasharray="10"
          />
        </svg>

        {/* Bottom Info */}

        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            display: "flex",
            gap: "25px",
            color: "#ffffff",
          }}
        >
          <span>🚛 Trucks : 152</span>

          <span>📦 Loads : 87</span>

          <span>🟢 Active Routes : 48</span>

          <span>⚡ Avg ETA : 3.2 hrs</span>
        </div>
      </div>
    </div>
  );
}

export default MapSection;