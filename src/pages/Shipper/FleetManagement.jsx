import React, { useState } from "react";
import { styles } from "./style";

function FleetManagement() {
  const [fleet] = useState([
    {
      id: 1,
      truck: "TN20AB1234",
      driver: "Nagaraj",
      type: "Container",
      capacity: "20T",
      location: "Chennai",
      status: "Available",
    },
    {
      id: 2,
      truck: "TN09XY4567",
      driver: "Rahul",
      type: "Trailer",
      capacity: "15T",
      location: "Salem",
      status: "On Trip",
    },
    {
      id: 3,
      truck: "TN14CD7890",
      driver: "Kumar",
      type: "Mini Truck",
      capacity: "10T",
      location: "Coimbatore",
      status: "Maintenance",
    },
  ]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        <div style={styles.card}>
          <h4>Total Fleet</h4>
          <h1>156</h1>
        </div>

        <div style={styles.card}>
          <h4>Available</h4>
          <h1 style={{ color: "#22c55e" }}>98</h1>
        </div>

        <div style={styles.card}>
          <h4>On Trip</h4>
          <h1 style={{ color: "#3b82f6" }}>42</h1>
        </div>

        <div style={styles.card}>
          <h4>Maintenance</h4>
          <h1 style={{ color: "#f59e0b" }}>16</h1>
        </div>
      </div>

      <div style={styles.card}>

        <h2 style={{ marginBottom: "20px" }}>
          🚛 Fleet Management
        </h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          <input
            placeholder="Search Truck..."
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          />

          <select
            style={{
              padding: "12px",
              borderRadius: "8px",
            }}
          >
            <option>All Status</option>
            <option>Available</option>
            <option>On Trip</option>
            <option>Maintenance</option>
          </select>
        </div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Truck</th>
              <th style={styles.th}>Driver</th>
              <th style={styles.th}>Vehicle</th>
              <th style={styles.th}>Capacity</th>
              <th style={styles.th}>Location</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>

          <tbody>
            {fleet.map((item) => (
              <tr key={item.id}>
                <td style={styles.td}>{item.truck}</td>
                <td style={styles.td}>{item.driver}</td>
                <td style={styles.td}>{item.type}</td>
                <td style={styles.td}>{item.capacity}</td>
                <td style={styles.td}>{item.location}</td>
                <td
                  style={{
                    ...styles.td,
                    color:
                      item.status === "Available"
                        ? "#22c55e"
                        : item.status === "On Trip"
                        ? "#3b82f6"
                        : "#f59e0b",
                    fontWeight: "700",
                  }}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FleetManagement;