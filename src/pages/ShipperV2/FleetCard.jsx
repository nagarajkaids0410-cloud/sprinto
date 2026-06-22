import React from "react";

const fleetData = [
  {
    truck: "TN20AB1234",
    driver: "Nagaraj",
    status: "Available",
    color: "#22C55E",
  },
  {
    truck: "TN09CD5678",
    driver: "Rahul",
    status: "On Trip",
    color: "#3B82F6",
  },
  {
    truck: "KA01EF3456",
    driver: "Kumar",
    status: "Maintenance",
    color: "#F59E0B",
  },
];

function FleetCard() {
  return (
    <div
      style={{
        background: "#10243B",
        borderRadius: "20px",
        padding: "20px",
        color: "#ffffff",
        boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <h2>🚛 Fleet Status</h2>

        <button
          style={{
            background: "#00D9FF",
            color: "#071426",
            border: "none",
            padding: "10px 18px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          View All
        </button>
      </div>

      {/* KPI */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        <div>
          <h4>Total Fleet</h4>
          <h2>152</h2>
        </div>

        <div>
          <h4>Available</h4>
          <h2 style={{ color: "#22C55E" }}>98</h2>
        </div>

        <div>
          <h4>On Trip</h4>
          <h2 style={{ color: "#3B82F6" }}>42</h2>
        </div>

        <div>
          <h4>Maintenance</h4>
          <h2 style={{ color: "#F59E0B" }}>12</h2>
        </div>
      </div>

      {/* Table */}

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={th}>Truck</th>
            <th style={th}>Driver</th>
            <th style={th}>Status</th>
          </tr>
        </thead>

        <tbody>
          {fleetData.map((item, index) => (
            <tr key={index}>
              <td style={td}>{item.truck}</td>

              <td style={td}>{item.driver}</td>

              <td style={td}>
                <span
                  style={{
                    background: item.color,
                    padding: "6px 14px",
                    borderRadius: "20px",
                    color: "#fff",
                    fontWeight: "600",
                  }}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = {
  textAlign: "left",
  padding: "12px",
  borderBottom: "1px solid #1E3A5F",
};

const td = {
  padding: "15px 12px",
  borderBottom: "1px solid #1E3A5F",
};

export default FleetCard;