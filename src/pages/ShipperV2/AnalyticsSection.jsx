import React from "react";

function AnalyticsSection() {
  const analytics = [
    {
      title: "Revenue",
      value: "₹12.4L",
      change: "+18%",
      color: "#22C55E",
    },
    {
      title: "Completed Trips",
      value: "1,248",
      change: "+12%",
      color: "#C9A227",
    },
    {
      title: "Fuel Saved",
      value: "18%",
      change: "+5%",
      color: "#3B82F6",
    },
    {
      title: "AI Accuracy",
      value: "96%",
      change: "+2%",
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
          Business Analytics
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
          Export Report
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
        }}
      >
        {analytics.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#1B1B1B",
              border: "1px solid #3A3A3A",
              borderRadius: "16px",
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
                fontSize: "34px",
              }}
            >
              {item.value}
            </h1>

            <div
              style={{
                marginTop: "12px",
                color: item.color,
                fontWeight: "600",
              }}
            >
              {item.change} this month
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <div
          style={{
            height: "12px",
            background: "#1B1B1B",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "82%",
              height: "100%",
              background: "#C9A227",
            }}
          />
        </div>

        <p
          style={{
            marginTop: "12px",
            color: "#B0B0B0",
          }}
        >
          Overall Business Performance : <strong style={{ color: "#FFFFFF" }}>82%</strong>
        </p>
      </div>
    </div>
  );
}

export default AnalyticsSection;