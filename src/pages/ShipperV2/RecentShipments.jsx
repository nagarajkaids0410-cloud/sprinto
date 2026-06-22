import React from "react";

const shipments = [
  {
    id: "LS1001",
    truck: "TN20AB1234",
    pickup: "Chennai",
    destination: "Bangalore",
    amount: "₹45,000",
    status: "In Transit",
  },
  {
    id: "LS1002",
    truck: "KA01CD5678",
    pickup: "Hyderabad",
    destination: "Pune",
    amount: "₹32,000",
    status: "Delivered",
  },
  {
    id: "LS1003",
    truck: "TN09EF9087",
    pickup: "Coimbatore",
    destination: "Mumbai",
    amount: "₹58,000",
    status: "Pending",
  },
  {
    id: "LS1004",
    truck: "AP05GH7654",
    pickup: "Chennai",
    destination: "Delhi",
    amount: "₹82,000",
    status: "Assigned",
  },
];

function statusColor(status) {
  switch (status) {
    case "Delivered":
      return "#22C55E";
    case "Pending":
      return "#F59E0B";
    case "Assigned":
      return "#3B82F6";
    default:
      return "#00D9FF";
  }
}

function RecentShipments() {
  return (
    <div
      style={{
        background: "#10243B",
        borderRadius: "20px",
        padding: "25px",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ color: "#fff" }}>
          📦 Recent Shipments
        </h2>

        <button
          style={{
            background: "#00D9FF",
            color: "#071426",
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
          color: "#fff",
        }}
      >
        <thead>
          <tr>
            <th style={th}>Shipment ID</th>
            <th style={th}>Truck</th>
            <th style={th}>Pickup</th>
            <th style={th}>Destination</th>
            <th style={th}>Amount</th>
            <th style={th}>Status</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {shipments.map((item) => (
            <tr key={item.id}>
              <td style={td}>{item.id}</td>
              <td style={td}>{item.truck}</td>
              <td style={td}>{item.pickup}</td>
              <td style={td}>{item.destination}</td>
              <td style={td}>{item.amount}</td>

              <td style={td}>
                <span
                  style={{
                    background: statusColor(item.status),
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "13px",
                  }}
                >
                  {item.status}
                </span>
              </td>

              <td style={td}>
                <button
                  style={{
                    background: "#00D9FF",
                    border: "none",
                    color: "#071426",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = {
  padding: "15px",
  textAlign: "left",
  borderBottom: "1px solid #1E3A5F",
};

const td = {
  padding: "15px",
  borderBottom: "1px solid #1E3A5F",
};

export default RecentShipments;