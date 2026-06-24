import React from "react";

function DriverPerformance() {
  const drivers = [
    {
      name: "Arun Kumar",
      score: 98,
    },
    {
      name: "Vignesh",
      score: 95,
    },
    {
      name: "Praveen",
      score: 91,
    },
    {
      name: "Suresh",
      score: 88,
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
          marginBottom: "20px",
        }}
      >
        Top Driver Performance
      </h2>

      {drivers.map((driver, index) => (
        <div
          key={index}
          style={{
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#FFFFFF",
            }}
          >
            <span>{driver.name}</span>

            <span
              style={{
                color: "#D4AF37",
              }}
            >
              {driver.score}%
            </span>
          </div>

          <div
            style={{
              marginTop: "8px",
              height: "8px",
              background: "#121212",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                width: `${driver.score}%`,
                height: "100%",
                background: "#D4AF37",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DriverPerformance;