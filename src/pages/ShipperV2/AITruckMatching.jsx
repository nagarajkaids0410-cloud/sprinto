import React from "react";

function AITruckMatching() {
  const recommendations = [
    {
      truck: "TN09AB1234",
      route: "Chennai → Bangalore",
      score: "98%",
      fuel: "12% Saved",
      savings: "₹4,500",
    },
    {
      truck: "TN22CD5678",
      route: "Coimbatore → Hyderabad",
      score: "94%",
      fuel: "9% Saved",
      savings: "₹3,200",
    },
    {
      truck: "TN58EF7890",
      route: "Madurai → Pune",
      score: "91%",
      fuel: "7% Saved",
      savings: "₹2,850",
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
            AI Truck Matching
          </h1>

          <p
            style={{
              color: "#B0B0B0",
              marginTop: "8px",
            }}
          >
            AI-powered truck recommendations
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
          Run AI Matching
        </button>
      </div>

      {/* AI Stats */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {[
          { title: "AI Accuracy", value: "96%" },
          { title: "Fuel Saved", value: "18%" },
          { title: "Matches Today", value: "142" },
          { title: "Cost Saved", value: "₹1.2L" },
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

      {/* Recommendations */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
          gap: "20px",
        }}
      >
        {recommendations.map((item, index) => (
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
                marginBottom: "20px",
              }}
            >
              <h2
                style={{
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                🚛 {item.truck}
              </h2>

              <span
                style={{
                  background: "#22C55E20",
                  color: "#22C55E",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontWeight: "600",
                }}
              >
                Match {item.score}
              </span>
            </div>

            <p
              style={{
                color: "#B0B0B0",
                marginBottom: "8px",
              }}
            >
              Route
            </p>

            <h4
              style={{
                color: "#C9A227",
                marginTop: 0,
              }}
            >
              {item.route}
            </h4>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div>
                <p style={{ color: "#B0B0B0" }}>
                  Fuel Saving
                </p>

                <h3
                  style={{
                    color: "#22C55E",
                  }}
                >
                  {item.fuel}
                </h3>
              </div>

              <div>
                <p style={{ color: "#B0B0B0" }}>
                  Cost Saving
                </p>

                <h3
                  style={{
                    color: "#22C55E",
                  }}
                >
                  {item.savings}
                </h3>
              </div>
            </div>

            <button
              style={{
                width: "100%",
                marginTop: "20px",
                background: "#C9A227",
                color: "#121212",
                border: "none",
                padding: "12px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Assign Truck
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default AITruckMatching;