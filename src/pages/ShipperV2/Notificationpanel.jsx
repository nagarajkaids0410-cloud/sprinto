import React from "react";

const notifications = [
  {
    id: 1,
    type: "success",
    icon: "🚛",
    title: "Truck TN20AB1234 assigned successfully",
    time: "2 min ago",
  },
  {
    id: 2,
    type: "info",
    icon: "📦",
    title: "New shipment created from Chennai",
    time: "10 min ago",
  },
  {
    id: 3,
    type: "warning",
    icon: "⚠",
    title: "Traffic detected on NH44 route",
    time: "18 min ago",
  },
  {
    id: 4,
    type: "ai",
    icon: "🤖",
    title: "AI found a shorter delivery route",
    time: "22 min ago",
  },
  {
    id: 5,
    type: "success",
    icon: "✅",
    title: "Delivery completed successfully",
    time: "35 min ago",
  },
];

function NotificationPanel() {
  const getColor = (type) => {
    switch (type) {
      case "success":
        return "#22C55E";
      case "warning":
        return "#F59E0B";
      case "info":
        return "#00D9FF";
      case "ai":
        return "#8B5CF6";
      default:
        return "#00D9FF";
    }
  };

  return (
    <div
      style={{
        background: "#10243B",
        borderRadius: "20px",
        padding: "20px",
        height: "100%",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ color: "#fff", margin: 0 }}>
          🔔 Live Notifications
        </h2>

        <span
          style={{
            background: "#00D9FF",
            color: "#071426",
            padding: "6px 14px",
            borderRadius: "20px",
            fontWeight: "bold",
            fontSize: "13px",
          }}
        >
          LIVE
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {notifications.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#081321",
              borderLeft: `5px solid ${getColor(item.type)}`,
              padding: "15px",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                color: "#fff",
                fontWeight: "600",
                marginBottom: "6px",
              }}
            >
              {item.icon} {item.title}
            </div>

            <div
              style={{
                color: "#8FA6C4",
                fontSize: "13px",
              }}
            >
              {item.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationPanel;