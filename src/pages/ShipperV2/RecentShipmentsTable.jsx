import React from "react";

function RecentShipmentsTable() {
  const shipments = [
    {
      id: "LS1001",
      from: "Chennai",
      to: "Bangalore",
      truck: "TN09AB2345",
      status: "In Transit",
      revenue: "₹25,000",
    },
    {
      id: "LS1002",
      from: "Coimbatore",
      to: "Hyderabad",
      truck: "TN22CD9876",
      status: "Delivered",
      revenue: "₹42,500",
    },
    {
      id: "LS1003",
      from: "Madurai",
      to: "Pune",
      truck: "TN58EF1234",
      status: "Pending",
      revenue: "₹18,750",
    },
    {
      id: "LS1004",
      from: "Salem",
      to: "Mumbai",
      truck: "TN77GH4567",
      status: "In Transit",
      revenue: "₹38,900",
    },
    {
      id: "LS1005",
      from: "Trichy",
      to: "Delhi",
      truck: "TN10JK5678",
      status: "Delivered",
      revenue: "₹52,300",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "#22C55E";
      case "In Transit":
        return "#C9A227";
      case "Pending":
        return "#F59E0B";
      default:
        return "#B0B0B0";
    }
  };

  return (
    <div
      style={{
        background: "#242424",
        border: "1px solid #3A3A3A",
        borderRadius: "20px",
        padding: "25px",
        overflowX: "auto",
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

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            {[
              "Shipment ID",
              "Source",
              "Destination",
              "Truck",
              "Status",
              "Revenue",
            ].map((head) => (
              <th
                key={head}
                style={{
                  color: "#B0B0B0",
                  textAlign: "left",
                  padding: "15px",
                  borderBottom: "1px solid #3A3A3A",
                  fontWeight: "600",
                }}
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {shipments.map((shipment) => (
            <tr
              key={shipment.id}
              style={{
                transition: "0.3s",
              }}
            >
              <td
                style={{
                  padding: "18px 15px",
                  color: "#FFFFFF",
                  borderBottom: "1px solid #2F2F2F",
                  fontWeight: "600",
                }}
              >
                {shipment.id}
              </td>

              <td
                style={{
                  padding: "18px 15px",
                  color: "#B0B0B0",
                  borderBottom: "1px solid #2F2F2F",
                }}
              >
                {shipment.from}
              </td>

              <td
                style={{
                  padding: "18px 15px",
                  color: "#B0B0B0",
                  borderBottom: "1px solid #2F2F2F",
                }}
              >
                {shipment.to}
              </td>

              <td
                style={{
                  padding: "18px 15px",
                  color: "#FFFFFF",
                  borderBottom: "1px solid #2F2F2F",
                }}
              >
                {shipment.truck}
              </td>

              <td
                style={{
                  padding: "18px 15px",
                  borderBottom: "1px solid #2F2F2F",
                }}
              >
                <span
                  style={{
                    background: `${getStatusColor(shipment.status)}20`,
                    color: getStatusColor(shipment.status),
                    padding: "6px 14px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  {shipment.status}
                </span>
              </td>

              <td
                style={{
                  padding: "18px 15px",
                  color: "#22C55E",
                  borderBottom: "1px solid #2F2F2F",
                  fontWeight: "700",
                }}
              >
                {shipment.revenue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentShipmentsTable;