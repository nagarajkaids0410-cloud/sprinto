import React from "react";

function RouteOptimizer() {
  const routes = [
    {
      from: "Chennai",
      to: "Bangalore",
      distance: "345 km",
      eta: "6h 20m",
      traffic: "Low",
      fuel: "18L",
      saving: "₹2,450",
      color: "#22C55E",
    },
    {
      from: "Coimbatore",
      to: "Hyderabad",
      distance: "812 km",
      eta: "13h 10m",
      traffic: "Medium",
      fuel: "42L",
      saving: "₹3,100",
      color: "#C9A227",
    },
    {
      from: "Madurai",
      to: "Pune",
      distance: "1298 km",
      eta: "20h 30m",
      traffic: "High",
      fuel: "65L",
      saving: "₹4,850",
      color: "#EF4444",
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
            Route Optimizer
          </h1>

          <p
            style={{
              color: "#B0B0B0",
              marginTop: "8px",
            }}
          >
            AI optimized routes for faster deliveries
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
          Optimize All
        </button>
      </div>

      {/* Summary Cards */}

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
            title: "Optimized Routes",
            value: "245",
          },
          {
            title: "Fuel Saved",
            value: "18%",
          },
          {
            title: "Time Saved",
            value: "152 hrs",
          },
          {
            title: "Cost Saved",
            value: "₹4.8L",
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

      {/* Route Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
          gap: "20px",
        }}
      >
        {routes.map((route, index) => (
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
                {route.from} → {route.to}
              </h2>

              <span
                style={{
                  background: `${route.color}20`,
                  color: route.color,
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                {route.traffic} Traffic
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginTop: "25px",
              }}
            >
              <div>
                <p style={{ color: "#B0B0B0" }}>Distance</p>
                <h3 style={{ color: "#FFFFFF" }}>{route.distance}</h3>
              </div>

              <div>
                <p style={{ color: "#B0B0B0" }}>ETA</p>
                <h3 style={{ color: "#FFFFFF" }}>{route.eta}</h3>
              </div>

              <div>
                <p style={{ color: "#B0B0B0" }}>Fuel</p>
                <h3 style={{ color: "#22C55E" }}>{route.fuel}</h3>
              </div>

              <div>
                <p style={{ color: "#B0B0B0" }}>Savings</p>
                <h3 style={{ color: "#22C55E" }}>{route.saving}</h3>
              </div>
            </div>

            <button
              style={{
                width: "100%",
                marginTop: "25px",
                background: "#C9A227",
                color: "#121212",
                border: "none",
                padding: "12px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              View Optimized Route
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default RouteOptimizer;