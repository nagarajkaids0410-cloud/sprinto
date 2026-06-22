import React from "react";

function LiveMap() {
  return (
    <div
      style={{
        background: "#10243B",
        borderRadius: "20px",
        padding: "20px",
        height: "420px",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div>
          <h2
            style={{
              color: "#ffffff",
              margin: 0,
            }}
          >
            🗺 Live Fleet Map
          </h2>

          <p
            style={{
              color: "#8FA6C4",
              marginTop: "8px",
            }}
          >
            Real-time Truck & Shipment Tracking
          </p>
        </div>

        <div
          style={{
            background: "#00D9FF",
            color: "#071426",
            padding: "10px 18px",
            borderRadius: "10px",
            fontWeight: "600",
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
            "linear-gradient(135deg,#081321,#10243B,#0B1E33)",
          position: "relative",
        }}
      >
        {/* Truck 1 */}

        <div
          style={{
            position: "absolute",
            top: "70px",
            left: "120px",
            fontSize: "30px",
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
            fontSize: "30px",
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
            fontSize: "26px",
          }}
        >
          📍
        </div>

        {/* Drop */}

        <div
          style={{
            position: "absolute",
            top: "230px",
            left: "620px",
            fontSize: "26px",
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
            stroke="#00D9FF"
            strokeWidth="3"
            strokeDasharray="8"
          />

          <line
            x1="320"
            y1="105"
            x2="640"
            y2="240"
            stroke="#22C55E"
            strokeWidth="3"
            strokeDasharray="8"
          />
        </svg>

        {/* Status */}

        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            display: "flex",
            gap: "30px",
            color: "#ffffff",
          }}
        >
          <span>🟢 Running : 42</span>
          <span>🔵 Pickup : 12</span>
          <span>🟠 Delivery : 19</span>
          <span>🔴 Traffic Delay : 3</span>
        </div>
      </div>
    </div>
  );
}

export default LiveMap;