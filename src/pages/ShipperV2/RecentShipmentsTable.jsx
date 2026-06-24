import React from "react";
import {
  Truck,
  CheckCircle,
  Clock,
  MapPin,
} from "lucide-react";

function RecentShipmentsTable() {
  const shipments = [
    {
      id: "LS-1025",
      customer: "Amazon",
      route: "Chennai → Bangalore",
      status: "In Transit",
      truck: "TN09AB1234",
      color: "#3B82F6",
    },
    {
      id: "LS-1024",
      customer: "Flipkart",
      route: "Coimbatore → Chennai",
      status: "Delivered",
      truck: "TN10XY5678",
      color: "#22C55E",
    },
    {
      id: "LS-1023",
      customer: "Reliance",
      route: "Madurai → Salem",
      status: "Loading",
      truck: "TN11CD7890",
      color: "#D4AF37",
    },
    {
      id: "LS-1022",
      customer: "Dmart",
      route: "Trichy → Erode",
      status: "Delayed",
      truck: "TN12EF4321",
      color: "#EF4444",
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
      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "25px",
        }}
      >
        <div>
          <h2
            style={{
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            Recent Shipments
          </h2>

          <p
            style={{
              color: "#B0B0B0",
              marginTop: "8px",
            }}
          >
            Latest logistics operations
          </p>
        </div>

        <button
          style={{
            background: "#D4AF37",
            color: "#121212",
            border: "none",
            padding: "10px 18px",
            borderRadius: "10px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          View All
        </button>
      </div>

      {/* Table */}

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr
            style={{
              color: "#B0B0B0",
              borderBottom: "1px solid #3A3A3A",
            }}
          >
            <th align="left">Shipment</th>
            <th align="left">Customer</th>
            <th align="left">Route</th>
            <th align="left">Truck</th>
            <th align="left">Status</th>
          </tr>
        </thead>

        <tbody>
          {shipments.map((shipment, index) => (
            <tr
              key={index}
              style={{
                borderBottom: "1px solid #2F2F2F",
                height: "70px",
              }}
            >
              <td style={{ color: "#FFFFFF" }}>
                {shipment.id}
              </td>

              <td style={{ color: "#FFFFFF" }}>
                {shipment.customer}
              </td>

              <td
                style={{
                  color: "#B0B0B0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <MapPin size={15} color="#D4AF37" />
                  {shipment.route}
                </div>
              </td>

              <td
                style={{
                  color: "#FFFFFF",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Truck size={16} color="#D4AF37" />
                  {shipment.truck}
                </div>
              </td>

              <td>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: `${shipment.color}20`,
                    color: shipment.color,
                    padding: "8px 14px",
                    borderRadius: "20px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  {shipment.status === "Delivered" ? (
                    <CheckCircle size={15} />
                  ) : (
                    <Clock size={15} />
                  )}

                  {shipment.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentShipmentsTable;