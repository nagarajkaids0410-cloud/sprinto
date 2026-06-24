import React from "react";

function CustomerManagement() {
  const customers = [
    {
      company: "Amazon",
      contact: "Rahul Sharma",
      shipments: 128,
      revenue: "₹8.2L",
      status: "Active",
    },
    {
      company: "Flipkart",
      contact: "Arun Kumar",
      shipments: 96,
      revenue: "₹6.5L",
      status: "Active",
    },
    {
      company: "Reliance",
      contact: "Vignesh",
      shipments: 82,
      revenue: "₹5.8L",
      status: "Premium",
    },
    {
      company: "ITC",
      contact: "Karthik",
      shipments: 44,
      revenue: "₹3.2L",
      status: "Inactive",
    },
  ];

  const getColor = (status) => {
    switch (status) {
      case "Premium":
        return "#22C55E";
      case "Active":
        return "#CD1C18";
      default:
        return "#F59E0B";
    }
  };

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
          <h1 style={{ color: "#fff", margin: 0 }}>
            🏢 Customer Management
          </h1>

          <p style={{ color: "#D9B4B4" }}>
            Manage enterprise customers
          </p>
        </div>

        <button
          style={{
            background: "#CD1C18",
            color: "#fff",
            border: "none",
            padding: "12px 22px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          + Add Customer
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gap: "20px",
        }}
      >
        {customers.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#4A0910",
              border: "1px solid #9B1313",
              borderRadius: "18px",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h2 style={{ color: "#fff", margin: 0 }}>
                  {item.company}
                </h2>

                <p style={{ color: "#D9B4B4" }}>
                  Contact : {item.contact}
                </p>
              </div>

              <span
                style={{
                  background: getColor(item.status),
                  color: "#fff",
                  padding: "8px 15px",
                  borderRadius: "20px",
                }}
              >
                {item.status}
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                marginTop: "20px",
              }}
            >
              <div>
                <p style={{ color: "#D9B4B4" }}>
                  Total Shipments
                </p>

                <h3 style={{ color: "#FFA896" }}>
                  {item.shipments}
                </h3>
              </div>

              <div>
                <p style={{ color: "#D9B4B4" }}>
                  Revenue
                </p>

                <h3 style={{ color: "#22C55E" }}>
                  {item.revenue}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default CustomerManagement;