import React from "react";

function FleetStatus() {
  const fleets = [
    {
      title: "Available",
      value: 152,
      color: "#22C55E",
    },
    {
      title: "On Delivery",
      value: 87,
      color: "#C9A227",
    },
    {
      title: "Maintenance",
      value: 12,
      color: "#F59E0B",
    },
    {
      title: "Offline",
      value: 5,
      color: "#EF4444",
    },
  ];

  return (
    <div
      style={{
        background: "#242424",
        border: "1px solid #3A3A3A",
        borderRadius: "20px",
        padding: "24px",
      }}
    >
      <h2
        style={{
          color: "#FFFFFF",
          marginBottom: "25px",
        }}
      >
        Fleet Status
      </h2>

      {fleets.map((fleet, index) => (
        <div
          key={index}
          style={{
            marginBottom: "22px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                color: "#B0B0B0",
              }}
            >
              {fleet.title}
            </span>

            <span
              style={{
                color: fleet.color,
                fontWeight: "700",
              }}
            >
              {fleet.value}
            </span>
          </div>

          <div
            style={{
              width: "100%",
              height: "10px",
              background: "#1B1B1B",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${Math.min(fleet.value, 100)}%`,
                height: "100%",
                background: fleet.color,
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      ))}

      <div
        style={{
          marginTop: "30px",
          padding: "18px",
          background: "#1B1B1B",
          borderRadius: "15px",
          border: "1px solid #3A3A3A",
        }}
      >
        <p
          style={{
            color: "#B0B0B0",
            margin: 0,
          }}
        >
          Fleet Utilization
        </p>

        <h1
          style={{
            color: "#C9A227",
            marginTop: "10px",
            fontSize: "42px",
          }}
        >
          89%
        </h1>

        <p
          style={{
            color: "#22C55E",
            marginTop: "8px",
          }}
        >
          ▲ 6% better than last week
        </p>
      </div>
    </div>
  );
}

export default FleetStatus;