import React from "react";
import {
  Truck,
  MapPin,
  Navigation,
  CircleDot,
} from "lucide-react";

function LiveMap() {
  return (
    <div
      style={{
        background: "#242424",
        border: "1px solid #3A3A3A",
        borderRadius: "20px",
        padding: "25px",
      }}
    >
      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div>
          <h2
            style={{
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            Live Fleet Tracking
          </h2>

          <p
            style={{
              color: "#B0B0B0",
              marginTop: "8px",
            }}
          >
            Real-time truck locations
          </p>
        </div>

        <div
          style={{
            background: "#22C55E20",
            color: "#22C55E",
            padding: "8px 15px",
            borderRadius: "12px",
            fontWeight: "600",
          }}
        >
          ● LIVE
        </div>
      </div>

      {/* Map */}

      <div
        style={{
          height: "420px",
          background: "#1B1B1B",
          borderRadius: "16px",
          border: "1px solid #3A3A3A",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Route */}

        <svg
          width="100%"
          height="100%"
          style={{
            position: "absolute",
          }}
        >
          <line
            x1="120"
            y1="120"
            x2="300"
            y2="170"
            stroke="#D4AF37"
            strokeWidth="4"
            strokeDasharray="8"
          />

          <line
            x1="300"
            y1="170"
            x2="520"
            y2="260"
            stroke="#22C55E"
            strokeWidth="4"
            strokeDasharray="8"
          />
        </svg>

        {/* Truck */}

        <div
          style={{
            position: "absolute",
            top: "100px",
            left: "100px",
          }}
        >
          <Truck size={36} color="#D4AF37" />
        </div>

        {/* Pickup */}

        <div
          style={{
            position: "absolute",
            top: "150px",
            left: "280px",
          }}
        >
          <MapPin size={32} color="#3B82F6" />
        </div>

        {/* Destination */}

        <div
          style={{
            position: "absolute",
            top: "240px",
            left: "500px",
          }}
        >
          <Navigation size={32} color="#22C55E" />
        </div>

        {/* Live Indicator */}

        <div
          style={{
            position: "absolute",
            top: "70px",
            right: "30px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#22C55E",
            fontWeight: "600",
          }}
        >
          <CircleDot size={18} />
          Live Tracking
        </div>
      </div>

      {/* Bottom Stats */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {[
          {
            title: "Running",
            value: "42",
            color: "#22C55E",
          },
          {
            title: "Pickup",
            value: "12",
            color: "#3B82F6",
          },
          {
            title: "Delivery",
            value: "19",
            color: "#D4AF37",
          },
          {
            title: "Delayed",
            value: "3",
            color: "#EF4444",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: "#121212",
              border: "1px solid #3A3A3A",
              borderRadius: "14px",
              padding: "18px",
              textAlign: "center",
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

            <h2
              style={{
                color: item.color,
                marginTop: "10px",
              }}
            >
              {item.value}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveMap;