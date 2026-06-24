import React from "react";
import {
  Bell,
  Truck,
  Package,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

function NotificationPanel() {
  const notifications = [
    {
      title: "Truck Assigned",
      message: "Truck TN09AB1234 assigned successfully",
      time: "2 min ago",
      icon: Truck,
      color: "#22C55E",
    },
    {
      title: "Shipment Created",
      message: "New shipment created for Chennai",
      time: "10 min ago",
      icon: Package,
      color: "#3B82F6",
    },
    {
      title: "Delivery Completed",
      message: "Order #LS1024 delivered",
      time: "35 min ago",
      icon: CheckCircle,
      color: "#D4AF37",
    },
    {
      title: "Traffic Alert",
      message: "Heavy traffic detected on NH48",
      time: "1 hour ago",
      icon: AlertTriangle,
      color: "#EF4444",
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
          Notifications
        </h2>

        <Bell color="#D4AF37" size={24} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {notifications.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "15px",
                background: "#1B1B1B",
                border: "1px solid #3A3A3A",
                borderRadius: "14px",
                padding: "15px",
              }}
            >
              <div
                style={{
                  width: "45px",
                  height: "45px",
                  background: `${item.color}20`,
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon size={22} color={item.color} />
              </div>

              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    color: "#FFFFFF",
                    margin: 0,
                    fontSize: "15px",
                  }}
                >
                  {item.title}
                </h4>

                <p
                  style={{
                    color: "#B0B0B0",
                    margin: "6px 0",
                    fontSize: "13px",
                  }}
                >
                  {item.message}
                </p>

                <span
                  style={{
                    color: "#D4AF37",
                    fontSize: "12px",
                  }}
                >
                  {item.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NotificationPanel;