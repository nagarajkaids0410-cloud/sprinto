import React from "react";

const cardStyle = {
  background: "#10243B",
  borderRadius: "16px",
  padding: "20px",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "140px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
};

const valueStyle = {
  fontSize: "36px",
  fontWeight: "bold",
  marginTop: "10px",
};

const growthStyle = {
  marginTop: "12px",
  color: "#22C55E",
  fontWeight: "600",
};

function KpiCards() {
  const cards = [
    {
      title: "Available Trucks",
      value: "152",
      icon: "🚛",
      growth: "+15%",
    },
    {
      title: "Active Loads",
      value: "87",
      icon: "📦",
      growth: "+8%",
    },
    {
      title: "Revenue",
      value: "₹12.4L",
      icon: "💰",
      growth: "+18%",
    },
    {
      title: "Deliveries",
      value: "1248",
      icon: "✅",
      growth: "99%",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
      }}
    >
      {cards.map((card, index) => (
        <div key={index} style={cardStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h3>{card.title}</h3>
            <span style={{ fontSize: "30px" }}>{card.icon}</span>
          </div>

          <div style={valueStyle}>{card.value}</div>

          <div style={growthStyle}>{card.growth} this month</div>
        </div>
      ))}
    </div>
  );
}

export default KpiCards;