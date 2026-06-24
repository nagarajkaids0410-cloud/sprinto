import React from "react";

function Topbar() {
  return (
    <div
      style={{
        height: "80px",
        background: "#1B1B1B",
        borderBottom: "1px solid #3A3A3A",

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        padding: "0px 30px",
      }}
    >
      {/* Left */}

      <div>

        <h2
          style={{
            color: "#FFFFFF",
          }}
        >
          Dashboard
        </h2>

        <p
          style={{
            color: "#B0B0B0",
            marginTop: "5px",
          }}
        >
          Welcome back to Sprintto Enterprise
        </p>

      </div>

      {/* Search */}

      <input

        placeholder="Search Trucks, Drivers, Shipments"

        style={{

          width: "400px",

          background: "#242424",

          border: "1px solid #3A3A3A",

          color: "#FFFFFF",

          padding: "14px",

          borderRadius: "12px",

        }}

      />

      {/* Right */}

      <div

        style={{

          display: "flex",

          gap: "20px",

          alignItems: "center",

        }}

      >

        <div

          style={{

            background: "#242424",

            padding: "12px",

            borderRadius: "12px",

            border: "1px solid #3A3A3A",

          }}

        >

          🔔

        </div>

        <div

          style={{

            display: "flex",

            alignItems: "center",

            gap: "10px",

          }}

        >

          <div

            style={{

              width: "45px",

              height: "45px",

              borderRadius: "50%",

              background: "#C9A227",

              color: "#121212",

              display: "flex",

              justifyContent: "center",

              alignItems: "center",

              fontWeight: "700",

            }}

          >

            RR

          </div>

          <div>

            <div

              style={{

                color: "#FFFFFF",

                fontWeight: "600",

              }}

            >

              Reliance Retail

            </div>

            <div

              style={{

                color: "#B0B0B0",

                fontSize: "13px",

              }}

            >

              Enterprise

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Topbar;