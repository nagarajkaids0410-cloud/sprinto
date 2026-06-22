import React from "react";


const fleet = [
  {
    id: "TN20AB1234",
    type: "Box Truck",
    driver: "Nagaraj",
    location: "Chennai",
    capacity: "8 Tons",
    status: "Available",
  },
  {
    id: "KA09XY5678",
    type: "Box Truck",
    driver: "Rahul",
    location: "Bangalore",
    capacity: "10 Tons",
    status: "In Transit",
  },
  {
    id: "AP10MN9876",
    type: "Box Truck",
    driver: "Kumar",
    location: "Hyderabad",
    capacity: "12 Tons",
    status: "Loading",
  },
];

function FleetManagement() {
  return (
    <div>
      <h1
        style={{
          color: "white",
          marginBottom: "25px",
        }}
      >
        🚛 Fleet Management
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
          gap: "25px",
        }}
      >
        {fleet.map((truck) => (
          <div
            key={truck.id}
            style={{
              background: "#10243B",
              borderRadius: "20px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <img
              src={boxTruck}
              alt="truck"
              style={{
                width: "220px",
                height: "140px",
                objectFit: "contain",
              }}
            />

            <h2
              style={{
                color: "#fff",
              }}
            >
              {truck.type}
            </h2>

            <p style={{ color: "#8FA6C4" }}>
              {truck.id}
            </p>

            <p style={{ color: "#fff" }}>
              Driver : {truck.driver}
            </p>

            <p style={{ color: "#fff" }}>
              Location : {truck.location}
            </p>

            <p style={{ color: "#fff" }}>
              Capacity : {truck.capacity}
            </p>

            <div
              style={{
                marginTop: "15px",
                background: "#22C55E",
                display: "inline-block",
                padding: "8px 18px",
                borderRadius: "20px",
                color: "#fff",
              }}
            >
              {truck.status}
            </div>

            <br />

            <button
              style={{
                marginTop: "20px",
                background: "#00D9FF",
                color: "#071426",
                border: "none",
                padding: "12px 22px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FleetManagement;