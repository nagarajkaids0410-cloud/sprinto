import React from "react";

function Sidebar({ activeMenu, setActiveMenu }) {
  const menus = [
    { id: "dashboard", icon: "🏠", name: "Dashboard" },
    { id: "fleet", icon: "🚛", name: "Fleet Management" },
    { id: "shipment", icon: "📦", name: "Shipments" },
    { id: "route", icon: "🗺️", name: "Route Optimizer" },
    { id: "tracking", icon: "📍", name: "Live Tracking" },
    { id: "ai", icon: "🤖", name: "AI Matching" },
    { id: "drivers", icon: "👨‍✈️", name: "Drivers" },
    { id: "analytics", icon: "📊", name: "Analytics" },
    { id: "reports", icon: "📑", name: "Reports" },
    { id: "notifications", icon: "🔔", name: "Notifications" },
    { id: "settings", icon: "⚙️", name: "Settings" },
    { id: "profile", icon: "👤", name: "Profile" },
  ];

  return (
    <div
      style={{
        width: "280px",
        background: "#1B1B1B",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        borderRight: "1px solid #3A3A3A",
        height: "100vh",
        overflowY: "auto",
        flexShrink: 0,
      }}
    >
      {/* Logo */}

      <div style={{ marginBottom: "25px" }}>
        <h1
          style={{
            color: "#C9A227",
            margin: 0,
            fontSize: "30px",
            fontWeight: "700",
            letterSpacing: "2px",
          }}
        >
          LOADSHARE
        </h1>

        <p
          style={{
            color: "#B0B0B0",
            marginTop: "8px",
            fontSize: "14px",
          }}
        >
          Logistics Command Center
        </p>
      </div>

      {/* Company Card */}

      <div
        style={{
          background: "#242424",
          padding: "20px",
          borderRadius: "18px",
          marginBottom: "25px",
          border: "1px solid #3A3A3A",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "55px",
          }}
        >
          🏢
        </div>

        <h3
          style={{
            margin: "10px 0 5px",
          }}
        >
          Reliance Retail
        </h3>

        <span
          style={{
            display: "inline-block",
            marginTop: "10px",
            padding: "6px 14px",
            background: "#C9A227",
            color: "#121212",
            borderRadius: "20px",
            fontWeight: "600",
            fontSize: "12px",
          }}
        >
          Enterprise Account
        </span>
      </div>

      {/* Menu */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flex: 1,
        }}
      >
        {menus.map((menu) => (
          <button
            key={menu.id}
            onClick={() => setActiveMenu(menu.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "15px",
              borderRadius: "14px",
              border:
                activeMenu === menu.id
                  ? "1px solid #C9A227"
                  : "1px solid transparent",

              background:
                activeMenu === menu.id
                  ? "#C9A227"
                  : "transparent",

              color:
                activeMenu === menu.id
                  ? "#121212"
                  : "#FFFFFF",

              cursor: "pointer",
              fontWeight: "600",
              fontSize: "15px",
              transition: "all .3s ease",
            }}
          >
            <span style={{ fontSize: "22px" }}>{menu.icon}</span>

            {menu.name}

            {menu.id === "tracking" && (
              <span
                style={{
                  marginLeft: "auto",
                  background: "#C9A227",
                  color: "#121212",
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                3
              </span>
            )}

            {menu.id === "notifications" && (
              <span
                style={{
                  marginLeft: "auto",
                  background: "#F59E0B",
                  color: "#121212",
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                5
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Fleet Status */}

      <div
        style={{
          background: "#242424",
          padding: "18px",
          borderRadius: "16px",
          marginTop: "20px",
          border: "1px solid #3A3A3A",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#B0B0B0",
            fontSize: "13px",
          }}
        >
          Fleet Status
        </p>

        <h3
          style={{
            margin: "10px 0",
            color: "#22C55E",
          }}
        >
          ● 18 Trucks Online
        </h3>

        <p
          style={{
            margin: 0,
            color: "#B0B0B0",
            fontSize: "12px",
          }}
        >
          Last Sync : 2 mins ago
        </p>
      </div>

      {/* Logout */}

      <button
        style={{
          marginTop: "15px",
          background: "#C9A227",
          color: "#121212",
          border: "none",
          padding: "15px",
          borderRadius: "14px",
          cursor: "pointer",
          fontWeight: "700",
          fontSize: "16px",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;