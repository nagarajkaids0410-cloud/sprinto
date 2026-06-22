import React from "react";

function Topbar() {
  return (
    <div
      style={{
        height: "80px",
        background: "#10243B",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Left */}
      <div>
        <h2
          style={{
            color: "#fff",
            margin: 0,
            fontSize: "28px",
            fontWeight: "700",
          }}
        >
          Logistics Command Center
        </h2>

        <p
          style={{
            color: "#8FA6C4",
            margin: "5px 0 0 0",
            fontSize: "14px",
          }}
        >
          Real-Time Fleet & Shipment Monitoring
        </p>
      </div>

      {/* Right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search shipment, truck..."
          style={{
            width: "300px",
            padding: "12px 20px",
            borderRadius: "12px",
            border: "none",
            background: "#081321",
            color: "#fff",
            outline: "none",
          }}
        />

        <div
          style={{
            background: "#081321",
            padding: "10px 15px",
            borderRadius: "12px",
            color: "#00D9FF",
            fontWeight: "600",
          }}
        >
          🔔 4 Alerts
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              background: "#00D9FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#071426",
              fontWeight: "bold",
            }}
          >
            N
          </div>

          <div>
            <div style={{ color: "#fff", fontWeight: "600" }}>
              Nagaraj
            </div>

            <div
              style={{
                color: "#8FA6C4",
                fontSize: "13px",
              }}
            >
              Enterprise Shipper
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;