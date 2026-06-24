import React from "react";

function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "Shipment Delivered",
      message: "Shipment LS-1024 has been successfully delivered.",
      time: "2 mins ago",
      type: "success",
    },
    {
      id: 2,
      title: "AI Route Updated",
      message: "AI found a faster route saving 18 km.",
      time: "15 mins ago",
      type: "warning",
    },
    {
      id: 3,
      title: "New Driver Joined",
      message: "Driver Arun Kumar has been approved.",
      time: "1 hour ago",
      type: "info",
    },
    {
      id: 4,
      title: "Truck Maintenance",
      message: "Truck TN09AB1234 is scheduled for maintenance.",
      time: "3 hours ago",
      type: "danger",
    },
    {
      id: 5,
      title: "Payment Received",
      message: "₹45,000 payment received from Amazon.",
      time: "Today",
      type: "success",
    },
  ];

  const getColor = (type) => {
    switch (type) {
      case "success":
        return "#22C55E";
      case "warning":
        return "#C9A227";
      case "danger":
        return "#EF4444";
      default:
        return "#3B82F6";
    }
  };

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
            Notifications
          </h1>

          <p
            style={{
              color: "#B0B0B0",
              marginTop: "8px",
            }}
          >
            Latest updates from your logistics network
          </p>
        </div>

        <button
          style={{
            background: "#C9A227",
            color: "#121212",
            border: "none",
            padding: "12px 22px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Mark All Read
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
          {
            title: "Total",
            value: "58",
          },
          {
            title: "Unread",
            value: "12",
          },
          {
            title: "Important",
            value: "7",
          },
          {
            title: "Today",
            value: "18",
          },
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
                color: "#C9A227",
                marginTop: "12px",
                fontSize: "36px",
              }}
            >
              {item.value}
            </h1>
          </div>
        ))}
      </div>

      {/* Notification List */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {notifications.map((notification) => (
          <div
            key={notification.id}
            style={{
              background: "#242424",
              border: "1px solid #3A3A3A",
              borderLeft: `5px solid ${getColor(notification.type)}`,
              borderRadius: "18px",
              padding: "22px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                {notification.title}
              </h3>

              <span
                style={{
                  color: "#B0B0B0",
                  fontSize: "13px",
                }}
              >
                {notification.time}
              </span>
            </div>

            <p
              style={{
                color: "#B0B0B0",
                marginTop: "12px",
                lineHeight: "24px",
              }}
            >
              {notification.message}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Notifications;

