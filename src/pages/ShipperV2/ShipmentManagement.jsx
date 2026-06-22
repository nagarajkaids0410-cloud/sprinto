import React from "react";

const shipments = [
  {
    id: "LS1001",
    pickup: "Chennai",
    destination: "Bangalore",
    truck: "TN20AB1234",
    status: "In Transit",
    amount: "₹45,000",
  },
  {
    id: "LS1002",
    pickup: "Coimbatore",
    destination: "Hyderabad",
    truck: "TN09XY5678",
    status: "Pending",
    amount: "₹32,000",
  },
  {
    id: "LS1003",
    pickup: "Madurai",
    destination: "Pune",
    truck: "KA10MN9090",
    status: "Delivered",
    amount: "₹58,000",
  },
];

function ShipmentManagement() {
  return (
    <div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <div>
          <h1 style={{ color: "#fff" }}>
            📦 Shipment Management
          </h1>

          <p style={{ color: "#8FA6C4" }}>
            Manage all active and completed shipments
          </p>
        </div>

        <button
          style={{
            background: "#00D9FF",
            border: "none",
            padding: "14px 25px",
            borderRadius: "10px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          + New Shipment
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gap: "20px",
        }}
      >
        {shipments.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#10243B",
              borderRadius: "18px",
              padding: "25px",
              color: "#fff",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>

                <h2>{item.id}</h2>

                <p style={{ color: "#8FA6C4" }}>
                  🚚 {item.pickup} → {item.destination}
                </p>

                <p style={{ color: "#8FA6C4" }}>
                  Truck : {item.truck}
                </p>

              </div>

              <div
                style={{
                  textAlign: "right",
                }}
              >
                <h2>{item.amount}</h2>

                <div
                  style={{
                    marginTop: "10px",
                    background:
                      item.status === "Delivered"
                        ? "#22C55E"
                        : item.status === "Pending"
                        ? "#F59E0B"
                        : "#3B82F6",

                    padding: "8px 15px",
                    borderRadius: "20px",
                    display: "inline-block",
                  }}
                >
                  {item.status}
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "25px",
                display: "flex",
                gap: "15px",
              }}
            >
              <button
                style={{
                  background: "#00D9FF",
                  border: "none",
                  padding: "12px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                View Details
              </button>

              <button
                style={{
                  background: "#1E3A5F",
                  color: "#fff",
                  border: "none",
                  padding: "12px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Edit Shipment
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default ShipmentManagement;