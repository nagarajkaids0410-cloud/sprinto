import React from "react";
import {
  Truck,
  MapPin,
  Fuel,
  CircleCheck,
} from "lucide-react";

function FleetCard() {
  const trucks = [
    {
      id: "TN09AB1234",
      driver: "Arun Kumar",
      location: "Chennai",
      fuel: "82%",
      status: "Available",
      color: "#22C55E",
    },
    {
      id: "TN10XY5678",
      driver: "Vignesh",
      location: "Bangalore",
      fuel: "64%",
      status: "In Transit",
      color: "#3B82F6",
    },
    {
      id: "TN11CD7890",
      driver: "Praveen",
      location: "Coimbatore",
      fuel: "91%",
      status: "Loading",
      color: "#D4AF37",
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
        Fleet Overview
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
        }}
      >
        {trucks.map((truck, index) => (
          <div
            key={index}
            style={{
              background: "#1B1B1B",
              border: "1px solid #3A3A3A",
              borderRadius: "16px",
              padding: "20px",
              transition: "0.3s",
            }}
          >
            {/* Header */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Truck size={32} color="#D4AF37" />

              <span
                style={{
                  background: `${truck.color}20`,
                  color: truck.color,
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                {truck.status}
              </span>
            </div>

            {/* Truck */}

            <h3
              style={{
                color: "#FFFFFF",
                marginTop: "20px",
                marginBottom: "5px",
              }}
            >
              {truck.id}
            </h3>

            <p
              style={{
                color: "#B0B0B0",
                margin: 0,
              }}
            >
              Driver: {truck.driver}
            </p>

            {/* Location */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "18px",
                color: "#B0B0B0",
              }}
            >
              <MapPin size={16} color="#D4AF37" />
              {truck.location}
            </div>

            {/* Fuel */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "12px",
                color: "#B0B0B0",
              }}
            >
              <Fuel size={16} color="#3B82F6" />
              Fuel: {truck.fuel}
            </div>

            {/* Footer */}

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#22C55E",
                  fontWeight: "600",
                }}
              >
                <CircleCheck size={16} />
                Online
              </div>

              <button
                style={{
                  background: "#D4AF37",
                  color: "#121212",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FleetCard;