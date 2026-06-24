import React from "react";
import {
  Truck,
  CircleCheck,
  Wrench,
  Fuel,
} from "lucide-react";

function FleetStatus() {
  const fleet = [
    {
      title: "Total Fleet",
      value: "152",
      icon: Truck,
      color: "#D4AF37",
    },
    {
      title: "Available",
      value: "128",
      icon: CircleCheck,
      color: "#22C55E",
    },
    {
      title: "Maintenance",
      value: "12",
      icon: Wrench,
      color: "#EF4444",
    },
    {
      title: "Fuel Efficiency",
      value: "94%",
      icon: Fuel,
      color: "#3B82F6",
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
      <h2
        style={{
          color: "#FFFFFF",
          marginBottom: "25px",
        }}
      >
        Fleet Status
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        {fleet.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              style={{
                background: "#1B1B1B",
                border: "1px solid #3A3A3A",
                borderRadius: "16px",
                padding: "20px",
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
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </p>

                  <h1
                    style={{
                      color: "#FFFFFF",
                      marginTop: "10px",
                    }}
                  >
                    {item.value}
                  </h1>
                </div>

                <div
                  style={{
                    width: "55px",
                    height: "55px",
                    background: `${item.color}20`,
                    borderRadius: "14px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    size={28}
                    color={item.color}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <p
          style={{
            color: "#B0B0B0",
            marginBottom: "10px",
          }}
        >
          Fleet Utilization
        </p>

        <div
          style={{
            width: "100%",
            height: "12px",
            background: "#121212",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "84%",
              height: "100%",
              background: "#D4AF37",
            }}
          />
        </div>

        <p
          style={{
            color: "#D4AF37",
            marginTop: "10px",
            fontWeight: "600",
          }}
        >
          84% Fleet Utilized
        </p>
      </div>
    </div>
  );
}

export default FleetStatus;