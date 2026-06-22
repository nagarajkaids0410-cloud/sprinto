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
    { id: "settings", icon: "⚙️", name: "Settings" },
    { id: "profile", icon: "👤", name: "Profile" },
  ];

  return (
    <div
      style={{
        width: "280px",
        background: "#081321",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        borderRight: "1px solid #10243B",
        minHeight: "100vh",
      }}
    >
      {/* Logo */}

      <div style={{ marginBottom: "30px" }}>
        <h1
          style={{
            color: "#00D9FF",
            margin: 0,
            fontSize: "30px",
          }}
        >
          LOADSHARE
        </h1>

        <p
          style={{
            color: "#8FA6C4",
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
          background: "#10243B",
          padding: "18px",
          borderRadius: "15px",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            fontSize: "55px",
            textAlign: "center",
          }}
        >
          🏢
        </div>

        <h3
          style={{
            textAlign: "center",
            margin: "10px 0 5px",
          }}
        >
          Reliance Retail
        </h3>

        <p
          style={{
            textAlign: "center",
            color: "#00D9FF",
            fontSize: "13px",
          }}
        >
          Enterprise Account
        </p>
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
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",

              background:
                activeMenu === menu.id
                  ? "#00D9FF"
                  : "transparent",

              color:
                activeMenu === menu.id
                  ? "#071426"
                  : "#ffffff",

              fontWeight: "600",
              fontSize: "15px",

              transition: "0.3s",
            }}
          >
            <span style={{ fontSize: "22px" }}>
              {menu.icon}
            </span>

            {menu.name}

            {menu.id === "tracking" && (
              <span
                style={{
                  marginLeft: "auto",
                  background: "#EF4444",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "22px",
                  height: "22px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              >
                3
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Logout */}

      <button
        style={{
          marginTop: "20px",
          background: "#EF4444",
          border: "none",
          color: "#fff",
          padding: "15px",
          borderRadius: "12px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        🚪 Logout
      </button>
    </div>
  );
}

export default Sidebar;