import React from "react";
import {
  Truck,
  PackageCheck,
  MapPinned,
  BrainCircuit,
  Clock,
} from "lucide-react";

function ActivityTimeline() {
  const activities = [
    {
      title: "Truck Assigned",
      description: "TN09AB1234 assigned to Chennai Route",
      time: "2 mins ago",
      icon: Truck,
      color: "#22C55E",
    },
    {
      title: "Shipment Delivered",
      description: "Order LS-1045 delivered successfully",
      time: "20 mins ago",
      icon: PackageCheck,
      color: "#D4AF37",
    },
    {
      title: "Route Optimized",
      description: "AI reduced distance by 15 km",
      time: "45 mins ago",
      icon: BrainCircuit,
      color: "#3B82F6",
    },
    {
      title: "Vehicle Reached Pickup",
      description: "Driver arrived at Warehouse",
      time: "1 hour ago",
      icon: MapPinned,
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
        height: "100%",
      }}
    >
      <h2
        style={{
          color: "#FFFFFF",
          marginBottom: "25px",
        }}
      >
        Activity Timeline
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "15px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "14px",
                  background: `${activity.color}20`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <Icon
                  size={24}
                  color={activity.color}
                />
              </div>

              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    color: "#FFFFFF",
                    margin: 0,
                    fontSize: "16px",
                  }}
                >
                  {activity.title}
                </h4>

                <p
                  style={{
                    color: "#B0B0B0",
                    margin: "8px 0",
                    lineHeight: "22px",
                  }}
                >
                  {activity.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#D4AF37",
                    fontSize: "13px",
                  }}
                >
                  <Clock size={14} />
                  {activity.time}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ActivityTimeline;