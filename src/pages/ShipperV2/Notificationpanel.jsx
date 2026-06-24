import React from "react";

function NotificationPanel() {
  const notifications = [
    {
      title: "New Shipment Created",
      message: "Shipment #LS2048 has been assigned.",
      time: "2 min ago",
      color: "#22C55E",
    },
    {
      title: "AI Route Updated",
      message: "AI saved 18 km for Chennai route.",
      time: "10 min ago",
      color: "#C9A227",
    },
    {
      title: "Driver Check-in",
      message: "Driver Arun Kumar started delivery.",
      time: "25 min ago",
      color: "#3B82F6",
    },
    {
      title: "Maintenance Alert",
      message: "Truck TN09AB5678 requires inspection.",
      time: "1 hour ago",
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
        height: "100%",
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
            fontSize: "22px",
          }}
        >
          Notifications
        </h2>

        <button
          style={{
            background: "#C9A227",
            color: "#121212",
            border: "none",
            padding: "8px 14px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          View All
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {notifications.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "15px",
              padding: "16px",
              background: "#1B1B1B",
              borderRadius: "14px",
              border: "1px solid #3A3A3A",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                marginTop: "6px",
                borderRadius: "50%",
                background: item.color,
                flexShrink: 0,
              }}
            />

            <div style={{ flex: 1 }}>
              <h4
                style={{
                  margin: 0,
                  color: "#FFFFFF",
                  fontSize: "15px",
                }}
              >
                {item.title}
              </h4>

              <p
                style={{
                  margin: "6px 0",
                  color: "#B0B0B0",
                  fontSize: "13px",
                  lineHeight: "18px",
                }}
              >
                {item.message}
              </p>

              <span
                style={{
                  color: "#C9A227",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationPanel;