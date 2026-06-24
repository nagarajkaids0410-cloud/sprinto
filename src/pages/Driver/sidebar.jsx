import React from "react";

function Sidebar({ activeTab, setActiveTab, driverData, onSignOut }) {

  // Fully updated array including your upcoming modules
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "route", label: "Route Pathfinder", icon: "🎯" },
    { id: "loads", label: "Available Load Board", icon: "🤖" },
    { id: "earnings", label: "My Earnings", icon: "💼" },
    { id: "reports", label: "Reports & Analytics", icon: "📈" },      // Ready for your new report file
    { id: "notifications", label: "Notifications", icon: "🔔" },  // Ready for your new notification file
    { id: "settings", label: "Settings", icon: "⚙️" },
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "update", label: "Update Documents", icon: "📂" },  
  ];

  return (
    <aside style={forcedDarkStyles.sidebar}>
      {/* Brand Header */}
      <div style={forcedDarkStyles.sidebarBrand}>
        <span style={{ fontSize: "1.8rem" }}>🚛</span>
        <span style={forcedDarkStyles.brandText}>Sprinto Fleet</span>
      </div>
      
      {/* Driver Identity Card */}
      <div style={forcedDarkStyles.profileSection}>
        <div style={forcedDarkStyles.avatar}>👨‍✈️</div>
        <h3 style={forcedDarkStyles.profileName}>{driverData?.name || "Driver Terminal"}</h3>
        <span style={forcedDarkStyles.statusBadge}>
          {driverData?.status || "ONLINE • RADAR ON"}
        </span>
      </div>

      {/* Dynamic Navigation Links */}
      <nav style={forcedDarkStyles.navMenu}>
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button 
              key={item.id}
              style={{
                ...forcedDarkStyles.navItem, 
                ...(isActive ? forcedDarkStyles.activeNav : {})
              }} 
              onClick={() => setActiveTab(item.id)}
            >
              <span style={{ marginRight: "12px", fontSize: "1.1rem" }}>{item.icon}</span>
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Sign Out Footer Button */}
      <button style={forcedDarkStyles.logoutBtn} onClick={onSignOut}>
        🚪 Driver Sign Out
      </button>
    </aside>
  );
}

const forcedDarkStyles = {
  sidebar: {
    width: "260px",
    backgroundColor: "#111827", 
    borderRight: "1px solid #1C2541", 
    display: "flex",
    flexDirection: "column",
    padding: "24px 16px",
    height: "100vh",
    boxSizing: "border-box",
    overflowY: "auto",         // Smooth scrolling handles our expanded list beautifully
    flexShrink: 0
  },
  sidebarBrand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "32px",
    paddingLeft: "8px",
    flexShrink: 0
  },
  brandText: {
    fontSize: "1.3rem",
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: "-0.5px"
  },
  profileSection: {
    backgroundColor: "#1F2937",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
    marginBottom: "25px",
    border: "1px solid #1C2541",
    flexShrink: 0
  },
  avatar: {
    fontSize: "2rem",
    marginBottom: "8px"
  },
  profileName: {
    fontWeight: "700",
    fontSize: "0.95rem",
    color: "#FFFFFF",
    margin: "0 0 6px 0"
  },
  statusBadge: {
    display: "inline-block",
    fontSize: "0.7rem",
    fontWeight: "800",
    color: "#FFFFFF",
    backgroundColor: "#2563EB",
    padding: "4px 10px",
    borderRadius: "12px",
    letterSpacing: "0.5px"
  },
  navMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flexGrow: 1,
    marginBottom: "20px"
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
    borderRadius: "6px",
    color: "#9CA3AF",
    fontSize: "0.9rem",
    fontWeight: "600",
    backgroundColor: "transparent", 
    border: "none",
    width: "100%",
    textAlign: "left",
    cursor: "pointer",
    transition: "all 0.2s ease",
    outline: "none",
    flexShrink: 0
  },
  activeNav: {
    backgroundColor: "#2563EB", 
    color: "#FFFFFF",
    fontWeight: "700",
    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.2)"
  },
  logoutBtn: {
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
    borderRadius: "6px",
    color: "#EF4444",
    fontSize: "0.9rem",
    fontWeight: "600",
    backgroundColor: "transparent", 
    border: "none",
    width: "100%",
    textAlign: "left",
    cursor: "pointer",
    marginTop: "auto",
    outline: "none",
    flexShrink: 0
  }
};

export default Sidebar;