import React from "react";

function ShipmentManagement() {
  const shipments = [
    {
      id: "LS1001",
      customer: "Amazon",
      source: "Chennai",
      destination: "Bangalore",
      truck: "TN09AB1234",
      status: "In Transit",
      amount: "₹25,000",
      color: "#C9A227",
    },
    {
      id: "LS1002",
      customer: "Flipkart",
      source: "Coimbatore",
      destination: "Hyderabad",
      truck: "TN22CD5678",
      status: "Delivered",
      amount: "₹42,000",
      color: "#22C55E",
    },
    {
      id: "LS1003",
      customer: "Reliance",
      source: "Madurai",
      destination: "Pune",
      truck: "TN58EF7890",
      status: "Pending",
      amount: "₹18,500",
      color: "#F59E0B",
    },
    {
      id: "LS1004",
      customer: "ITC",
      source: "Salem",
      destination: "Mumbai",
      truck: "TN77GH1122",
      status: "Loading",
      amount: "₹31,200",
      color: "#3B82F6",
    },
  ];

  return (
    <div>

      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <div>
          <h1
            style={{
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            Shipment Management
          </h1>

          <p
            style={{
              color: "#B0B0B0",
              marginTop: "8px",
            }}
          >
            Track and manage all shipments
          </p>
        </div>

        <button
          style={{
            background: "#C9A227",
            color: "#121212",
            border: "none",
            padding: "12px 22px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          + New Shipment
        </button>
      </div>

      {/* Summary */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {[
          { title: "Total Shipments", value: "248" },
          { title: "In Transit", value: "87" },
          { title: "Delivered", value: "143" },
          { title: "Pending", value: "18" },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: "#242424",
              border: "1px solid #3A3A3A",
              borderRadius: "18px",
              padding: "20px",
            }}
          >
            <p
              style={{
                color: "#B0B0B0",
                margin: 0,
              }}
            >
              {item.title}
            </p>

            <h1
              style={{
                color: "#FFFFFF",
                marginTop: "12px",
                fontSize: "36px",
              }}
            >
              {item.value}
            </h1>
          </div>
        ))}
      </div>

      {/* Table */}

      <div
        style={{
          background: "#242424",
          border: "1px solid #3A3A3A",
          borderRadius: "20px",
          padding: "20px",
          overflowX: "auto",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              {[
                "ID",
                "Customer",
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
                  }}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {shipments.map((shipment) => (
              <tr key={shipment.id}>
                <td
                  style={{
                    padding: "18px 15px",
                    color: "#FFFFFF",
                  }}
                >
                  {shipment.id}
                </td>

                <td
                  style={{
                    padding: "18px 15px",
                    color: "#FFFFFF",
                  }}
                >
                  {shipment.customer}
                </td>

                <td
                  style={{
                    padding: "18px 15px",
                    color: "#B0B0B0",
                  }}
                >
                  {shipment.source}
                </td>

                <td
                  style={{
                    padding: "18px 15px",
                    color: "#B0B0B0",
                  }}
                >
                  {shipment.destination}
                </td>

                <td
                  style={{
                    padding: "18px 15px",
                    color: "#FFFFFF",
                  }}
                >
                  {shipment.truck}
                </td>

                <td
                  style={{
                    padding: "18px 15px",
                  }}
                >
                  <span
                    style={{
                      background: `${shipment.color}20`,
                      color: shipment.color,
                      padding: "6px 14px",
                      borderRadius: "20px",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    {shipment.status}
                  </span>
                </td>

                <td
                  style={{
                    padding: "18px 15px",
                    color: "#22C55E",
                    fontWeight: "700",
                  }}
                >
                  {shipment.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default ShipmentManagement;