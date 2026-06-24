import React from "react";

function KpiCards() {
  const cards = [
    {
      title: "Available Trucks",
      value: "152",
      icon: "🚛",
      growth: "+15%",
      color: "#22C55E",
    },
    {
      title: "Active Shipments",
      value: "87",
      icon: "📦",
      growth: "+8%",
      color: "#C9A227",
    },
    {
      title: "Monthly Revenue",
      value: "₹12.4L",
      icon: "💰",
      growth: "+18%",
      color: "#22C55E",
    },
    {
      title: "Completed Deliveries",
      value: "1248",
      icon: "✅",
      growth: "99%",
      color: "#F59E0B",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            background: "#242424",
            border: "1px solid #3A3A3A",
            borderRadius: "18px",
            padding: "24px",
            transition: "0.3s",
            cursor: "pointer",
            boxShadow: "0 10px 25px rgba(0,0,0,.25)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.border = "1px solid #C9A227";
            e.currentTarget.style.boxShadow =
              "0 15px 35px rgba(201,162,39,.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.border = "1px solid #3A3A3A";
            e.currentTarget.style.boxShadow =
              "0 10px 25px rgba(0,0,0,.25)";
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  color: "#B0B0B0",
                  fontSize: "14px",
                  marginBottom: "10px",
                }}
              >
                {card.title}
              </p>

              <h1
                style={{
                  color: "#FFFFFF",
                  fontSize: "38px",
                  margin: 0,
                }}
              >
                {card.value}
              </h1>

              <div
                style={{
                  marginTop: "18px",
                  color: card.color,
                  fontWeight: "600",
                }}
              >
                ▲ {card.growth} this month
              </div>
            </div>

            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "18px",
                background: "#C9A22720",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "34px",
              }}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default KpiCards;