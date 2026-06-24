import React from "react";

function LiveTracking() {
  const trucks = [
    {
      id: "TN09AB1234",
      driver: "Arun Kumar",
      location: "Chennai",
      destination: "Bangalore",
      speed: "68 km/h",
      progress: 78,
      status: "Running",
      color: "#22C55E",
    },
    {
      id: "TN22CD5678",
      driver: "Praveen",
      location: "Vellore",
      destination: "Hyderabad",
      speed: "55 km/h",
      progress: 52,
      status: "In Transit",
      color: "#C9A227",
    },
    {
      id: "TN58EF7890",
      driver: "Vignesh",
      location: "Madurai",
      destination: "Pune",
      speed: "0 km/h",
      progress: 18,
      status: "Loading",
      color: "#F59E0B",
    },
  ];

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
            Live Tracking
          </h1>

          <p
            style={{
              color: "#B0B0B0",
              marginTop: "8px",
            }}
          >
            Real-time fleet monitoring dashboard
          </p>
        </div>

        <button
          style={{
            background: "#C9A227",
            color: "#121212",
            border: "none",
            padding: "12px 22px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Refresh
        </button>
      </div>

      {/* Statistics */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {[
          { title: "Online Trucks", value: "148" },
          { title: "Deliveries", value: "92" },
          { title: "Average Speed", value: "62 km/h" },
          { title: "On-Time", value: "97%" },
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

      {/* Live Map */}

      <div
        style={{
          background: "#242424",
          border: "1px solid #3A3A3A",
          borderRadius: "20px",
          padding: "25px",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            color: "#FFFFFF",
            marginBottom: "20px",
          }}
        >
          Live Fleet Map
        </h2>

        <div
          style={{
            height: "320px",
            background: "#1B1B1B",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#C9A227",
            fontSize: "28px",
            border: "1px dashed #3A3A3A",
          }}
        >
          🗺️ Interactive Map Area
        </div>
      </div>

      {/* Tracking Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
          gap: "20px",
        }}
      >
        {trucks.map((truck, index) => (
          <div
            key={index}
            style={{
              background: "#242424",
              border: "1px solid #3A3A3A",
              borderRadius: "20px",
              padding: "22px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2
                style={{
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                🚛 {truck.id}
              </h2>

              <span
                style={{
                  background: `${truck.color}20`,
                  color: truck.color,
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                {truck.status}
              </span>
            </div>

            <p
              style={{
                color: "#B0B0B0",
                marginTop: "15px",
              }}
            >
              Driver
            </p>

            <h3
              style={{
                color: "#FFFFFF",
              }}
            >
              {truck.driver}
            </h3>

            <p style={{ color: "#B0B0B0" }}>
              {truck.location} → {truck.destination}
            </p>

            <div
              style={{
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#FFFFFF",
                  marginBottom: "8px",
                }}
              >
                <span>Trip Progress</span>
                <span>{truck.progress}%</span>
              </div>

              <div
                style={{
                  height: "10px",
                  background: "#1B1B1B",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${truck.progress}%`,
                    height: "100%",
                    background: "#C9A227",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p style={{ color: "#B0B0B0" }}>
                  Speed
                </p>

                <h3
                  style={{
                    color: "#22C55E",
                  }}
                >
                  {truck.speed}
                </h3>
              </div>

              <button
                style={{
                  background: "#C9A227",
                  color: "#121212",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "600",
                  height: "fit-content",
                }}
              >
                Track
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default LiveTracking;