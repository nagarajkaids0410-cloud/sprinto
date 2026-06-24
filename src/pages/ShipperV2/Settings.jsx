import React from "react";

function Settings() {
  return (
    <div>

      {/* Header */}

      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          Settings
        </h1>

        <p
          style={{
            color: "#B0B0B0",
            marginTop: "8px",
          }}
        >
          Manage your application preferences
        </p>
      </div>

      {/* Settings Grid */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
          gap: "25px",
        }}
      >

        {/* Company */}

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
              color: "#C9A227",
              marginBottom: "20px",
            }}
          >
            Company Information
          </h2>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#B0B0B0" }}>
              Company Name
            </label>

            <input
              defaultValue="LoadShare Logistics"
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "12px",
                background: "#1B1B1B",
                border: "1px solid #3A3A3A",
                color: "#FFFFFF",
                borderRadius: "10px",
              }}
            />
          </div>

          <div>
            <label style={{ color: "#B0B0B0" }}>
              Email
            </label>

            <input
              defaultValue="admin@loadshare.com"
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "12px",
                background: "#1B1B1B",
                border: "1px solid #3A3A3A",
                color: "#FFFFFF",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>

        {/* Notifications */}

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
              color: "#C9A227",
              marginBottom: "20px",
            }}
          >
            Notification Settings
          </h2>

          {[
            "Email Notifications",
            "SMS Alerts",
            "AI Recommendations",
            "Fleet Updates",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "18px",
              }}
            >
              <span
                style={{
                  color: "#FFFFFF",
                }}
              >
                {item}
              </span>

              <input type="checkbox" defaultChecked />
            </div>
          ))}
        </div>

        {/* Security */}

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
              color: "#C9A227",
              marginBottom: "20px",
            }}
          >
            Security
          </h2>

          <button
            style={{
              width: "100%",
              padding: "12px",
              background: "#C9A227",
              color: "#121212",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
              marginBottom: "15px",
            }}
          >
            Change Password
          </button>

          <button
            style={{
              width: "100%",
              padding: "12px",
              background: "#1B1B1B",
              color: "#FFFFFF",
              border: "1px solid #3A3A3A",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Enable Two Factor Authentication
          </button>
        </div>

        {/* Appearance */}

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
              color: "#C9A227",
              marginBottom: "20px",
            }}
          >
            Appearance
          </h2>

          <p
            style={{
              color: "#B0B0B0",
              marginBottom: "15px",
            }}
          >
            Current Theme
          </p>

          <div
            style={{
              background: "#121212",
              border: "1px solid #C9A227",
              color: "#FFFFFF",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Premium Black & Gold
          </div>
        </div>

      </div>

      {/* Save */}

      <div
        style={{
          marginTop: "35px",
          textAlign: "right",
        }}
      >
        <button
          style={{
            background: "#C9A227",
            color: "#121212",
            border: "none",
            padding: "14px 28px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "700",
            fontSize: "15px",
          }}
        >
          Save Changes
        </button>
      </div>

    </div>
  );
}

export default Settings;