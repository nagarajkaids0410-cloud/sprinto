import React from "react";
import {
  BrainCircuit,
  TrendingUp,
  Route,
  Fuel,
  IndianRupee,
  Sparkles,
} from "lucide-react";

function AIInsights() {
  const insights = [
    {
      title: "Best Truck Match",
      value: "TN09AB1234",
      subtitle: "98% AI Confidence",
      icon: BrainCircuit,
      color: "#D4AF37",
    },
    {
      title: "Demand Prediction",
      value: "+18%",
      subtitle: "Expected Tomorrow",
      icon: TrendingUp,
      color: "#22C55E",
    },
    {
      title: "Route Optimization",
      value: "15 KM Saved",
      subtitle: "Fastest Route",
      icon: Route,
      color: "#3B82F6",
    },
    {
      title: "Fuel Savings",
      value: "12 Litres",
      subtitle: "AI Estimated",
      icon: Fuel,
      color: "#F59E0B",
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
          AI Insights
        </h2>

        <Sparkles color="#D4AF37" size={28} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "18px",
        }}
      >
        {insights.map((item, index) => {
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

                  <h2
                    style={{
                      color: "#FFFFFF",
                      marginTop: "10px",
                    }}
                  >
                    {item.value}
                  </h2>
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
                  <Icon size={28} color={item.color} />
                </div>
              </div>

              <p
                style={{
                  color: "#D4AF37",
                  marginTop: "15px",
                  fontSize: "14px",
                }}
              >
                {item.subtitle}
              </p>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: "25px",
          background: "#1B1B1B",
          border: "1px solid #3A3A3A",
          borderRadius: "16px",
          padding: "20px",
        }}
      >
        <h3
          style={{
            color: "#FFFFFF",
            marginTop: 0,
          }}
        >
          AI Recommendation
        </h3>

        <p
          style={{
            color: "#B0B0B0",
            lineHeight: "24px",
          }}
        >
          Assign <strong style={{ color: "#D4AF37" }}>Truck TN09AB1234</strong>
          {" "}to the Chennai → Bangalore shipment.
          Estimated delivery time will improve by
          <strong style={{ color: "#22C55E" }}> 18%</strong>
          {" "}while reducing fuel cost by
          <strong style={{ color: "#22C55E" }}> ₹2,450</strong>.
        </p>

        <button
          style={{
            marginTop: "15px",
            background: "#D4AF37",
            color: "#121212",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Apply Recommendation
        </button>
      </div>
    </div>
  );
}

export default AIInsights;