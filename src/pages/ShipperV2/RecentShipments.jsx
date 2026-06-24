import React from "react";

function RecentShipments() {
  const shipments = [
    {
      id: "LS-1024",
      company: "Amazon",
      route: "Chennai → Bangalore",
      truck: "TN09AB1234",
      amount: "₹25,000",
      status: "Delivered",
      color: "#22C55E",
    },
    {
      id: "LS-1025",
      company: "Flipkart",
      route: "Coimbatore → Hyderabad",
      truck: "TN11CD4567",
      amount: "₹18,500",
      status: "In Transit",
      color: "#C9A227",
    },
    {
      id: "LS-1026",
      company: "Reliance",
      route: "Madurai → Chennai",
      truck: "TN58EF7890",
      amount: "₹31,200",
      status: "Loading",
      color: "#F59E0B",
    },
  ];

  return (
    <div
      style={{
        background: "#242424",
        border: "1px solid #3A3A3A",
        borderRadius: "20px",
        padding: "25px",
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
        <h2
          style={{
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          Recent Shipments
        </h2>

        <button
          style={{
            background: "#C9A227",
            color: "#121212",
            border: "none",
            padding: "10px 18px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          View All
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "20px",
        }}
      >
        {shipments.map((shipment, index) => (
          <div
            key={index}
            style={{
              background: "#1B1B1B",
              border: "1px solid #3A3A3A",
              borderRadius: "18px",
              padding: "20px",
              transition: "0.3s",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "15px",
              }}
            >
              <h3
                style={{
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                {shipment.company}
              </h3>

              <span
                style={{
                  background: `${shipment.color}20`,
                  color: shipment.color,
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                {shipment.status}
              </span>
            </div>

            <p
              style={{
                color: "#B0B0B0",
                marginBottom: "12px",
              }}
            >
              Shipment ID
            </p>

            <h4
              style={{
                color: "#FFFFFF",
                marginTop: 0,
              }}
            >
              {shipment.id}
            </h4>

            <div
              style={{
                marginTop: "15px",
              }}
            >
              <p
                style={{
                  color: "#B0B0B0",
                  marginBottom: "5px",
                }}
              >
                Route
              </p>

              <div
                style={{
                  color: "#C9A227",
                  fontWeight: "600",
                }}
              >
                {shipment.route}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#B0B0B0",
                    marginBottom: "5px",
                  }}
                >
                  Truck
                </p>

                <h4
                  style={{
                    color: "#FFFFFF",
                    margin: 0,
                  }}
                >
                  {shipment.truck}
                </h4>
              </div>

              <div
                style={{
                  textAlign: "right",
                }}
              >
                <p
                  style={{
                    color: "#B0B0B0",
                    marginBottom: "5px",
                  }}
                >
                  Revenue
                </p>

                <h3
                  style={{
                    color: "#22C55E",
                    margin: 0,
                  }}
                >
                  {shipment.amount}
                </h3>
              </div>
            </div>

            <button
              style={{
                marginTop: "20px",
                width: "100%",
                background: "#C9A227",
                color: "#121212",
                border: "none",
                padding: "12px",
                borderRadius: "10px",
                fontWeight: "700",
                cursor: "pointer",
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

export default RecentShipments;