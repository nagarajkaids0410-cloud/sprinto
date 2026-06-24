import React from "react";

function LiveMap() {
  return (
    <div
      style={{
        background: "#4A0910",
        borderRadius: "20px",
        padding: "20px",
        height: "420px",
        position: "relative",
        overflow: "hidden",
        border: "1px solid #9B1313",
        boxShadow: "0 8px 25px rgba(0,0,0,0.35)",
      }}
    >
      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              color: "#FFFFFF",
              margin: 0,
              fontSize: "24px",
            }}
          >
            🗺 Live Fleet Map
          </h2>

          <p
            style={{
              color: "#FFA896",
              marginTop: "8px",
            }}
          >
            Real-time Truck & Shipment Tracking
          </p>
        </div>

        <div
          style={{
            background: "#CD1C18",
            color: "#FFFFFF",
            padding: "10px 18px",
            borderRadius: "10px",
            fontWeight: "700",
            height: "fit-content",
          }}
        >
          ● LIVE
        </div>
      </div>

      {/* Map Area */}

      <div
        style={{
          height: "320px",
          borderRadius: "16px",
          background:
            "linear-gradient(135deg,#38000A,#4A0910,#9B1313)",
          position: "relative",
          border: "1px solid #9B1313",
        }}
      >
        {/* Truck 1 */}

        <div
          style={{
            position: "absolute",
            top: "70px",
            left: "120px",
            fontSize: "32px",
          }}
        >
          🚛
        </div>

        {/* Truck 2 */}

        <div
          style={{
            position: "absolute",
            top: "170px",
            left: "420px",
            fontSize: "32px",
          }}
        >
          🚚
        </div>

        {/* Pickup */}

        <div
          style={{
            position: "absolute",
            top: "90px",
            left: "300px",
            fontSize: "28px",
          }}
        >
          📍
        </div>

        {/* Destination */}

        <div
          style={{
            position: "absolute",
            top: "230px",
            left: "620px",
            fontSize: "28px",
          }}
        >
          🎯
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
            x1="140"
            y1="90"
            x2="320"
            y2="105"
            stroke="#FFA896"
            strokeWidth="4"
            strokeDasharray="8"
          />

          <line
            x1="320"
            y1="105"
            x2="640"
            y2="240"
            stroke="#CD1C18"
            strokeWidth="4"
            strokeDasharray="8"
          />
        </svg>

        {/* Bottom Status */}

        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            display: "flex",
            gap: "25px",
            color: "#FFFFFF",
            fontWeight: "600",
            flexWrap: "wrap",
          }}
        >
          <span style={{ color: "#22C55E" }}>
            🟢 Running : 42
          </span>

          <span style={{ color: "#FFA896" }}>
            📍 Pickup : 12
          </span>

          <span style={{ color: "#CD1C18" }}>
            🚚 Delivery : 19
          </span>

          <span style={{ color: "#FF6B6B" }}>
            🚦 Traffic Delay : 3
          </span>
        </div>
      </div>
    </div>
  );
}

export default LiveMap;