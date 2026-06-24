import React from "react";

function ActivityTimeline() {
  const activities = [
    {
      title: "Truck TN-09-2345 Assigned",
      time: "2 min ago",
      color: "#C9A227",
    },
    {
      title: "Shipment Delivered",
      time: "15 min ago",
      color: "#22C55E",
    },
    {
      title: "Driver Accepted Load",
      time: "30 min ago",
      color: "#3B82F6",
    },
    {
      title: "AI Route Optimized",
      time: "1 hour ago",
      color: "#F59E0B",
    },
    {
      title: "Payment Received",
      time: "2 hours ago",
      color: "#22C55E",
    },
  ];

  return (
    <div
      style={{
        background: "#242424",
        border: "1px solid #3A3A3A",
        borderRadius: "20px",
        padding: "24px",
        height: "420px",
        overflowY: "auto",
      }}
    >
      <h2
        style={{
          color: "#FFFFFF",
          marginBottom: "25px",
          fontSize: "22px",
        }}
      >
        Recent Activity
      </h2>

      {activities.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: item.color,
              marginTop: "6px",
            }}
          />

          <div>
            <h4
              style={{
                color: "#FFFFFF",
                margin: 0,
                fontSize: "16px",
              }}
            >
              {item.title}
            </h4>

            <p
              style={{
                color: "#B0B0B0",
                marginTop: "6px",
                fontSize: "13px",
              }}
            >
              {item.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActivityTimeline;