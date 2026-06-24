import React from "react";
import { styles } from "./style";

function Sidebar({ activeTab, setActiveTab, driverData, onSignOut }) {

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "loads", label: "Available Load Board", icon: "🤖" },
    { id: "settings", label: "Settings", icon: "⚙️" },
    { id: "profile", label: "Profile", icon: "👤" },
    // New Update Documents navigation item injected seamlessly here
    { id: "update", label: "Update Documents", icon: "📂" },
  ];

  return (
    <aside style={styles.sidebar}>
      {/* Brand Header */}
      <div style={styles.sidebarBrand}>
        <span style={{ fontSize: "1.8rem" }}>🚛</span>
        <span style={styles.brandText}>Sprinto Fleet</span>
      </div>
      
      {/* Driver Identity Card */}
      <div style={styles.profileSection}>
        <div style={styles.avatar}>👨‍✈️</div>
        <h3 style={styles.profileName}>{driverData?.name || "Driver Terminal"}</h3>
        <span style={{...styles.statusBadge, backgroundColor: "#2563eb"}}>
          {driverData?.status || "ONLINE"}
        </span>
      </div>

      {/* Dynamic Navigation System */}
      <nav style={styles.navMenu}>
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button 
              key={item.id}
              style={{
                ...styles.navItem, 
                ...(isActive ? styles.activeNav : {})
              }} 
              onClick={() => setActiveTab(item.id)}
            >
              <span style={{ marginRight: "12px" }}>{item.icon}</span>
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Sign Out Trigger */}
      <button style={styles.logoutBtn} onClick={onSignOut}>
        🚪 Driver Sign Out
      </button>
    </aside>
  );
}

export default Sidebar;