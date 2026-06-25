import React from "react";

export default function Sidebar({ activeTab, setActiveTab, onSignOut }) {
  return (
    <aside style={styles.sidebar}>
      {/* Agency Branding */}
      <div style={styles.brand}>
        <span style={{ fontSize: "1.6rem", marginRight: "8px" }}>🏢</span>
        Sprinto Agency
      </div>

      {/* Navigation Links */}
      <nav style={styles.nav}>
        <button 
          style={activeTab === "fleet" ? styles.activeNavBtn : styles.navBtn}
          onClick={() => setActiveTab("fleet")}
        >
          <span style={styles.icon}>🚛</span> Fleet Overview
        </button>
        
        <button 
          style={activeTab === "drivers" ? styles.activeNavBtn : styles.navBtn}
          onClick={() => setActiveTab("drivers")}
        >
          <span style={styles.icon}>👨‍✈️</span> Driver Roster
        </button>
        
        <button 
          style={activeTab === "dispatches" ? styles.activeNavBtn : styles.navBtn}
          onClick={() => setActiveTab("dispatches")}
        >
          <span style={styles.icon}>📋</span> Dispatches
        </button>
      </nav>

      {/* Logout Action */}
      <button style={styles.logoutBtn} onClick={onSignOut}>
        Sign Out ➔
      </button>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "280px",
    backgroundColor: "#111827",
    borderRight: "1px solid #1C2541",
    display: "flex",
    flexDirection: "column",
    padding: "30px 20px",
    boxSizing: "border-box",
    height: "100vh", // Full height
  },
  brand: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.3rem",
    fontWeight: "800",
    color: "#00F0FF", // Agency Cyan Accent
    marginBottom: "40px",
    letterSpacing: "0.5px"
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    flexGrow: 1,
  },
  navBtn: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    color: "#9CA3AF",
    border: "1px solid transparent",
    padding: "14px 18px",
    borderRadius: "8px",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "0.95rem",
    fontWeight: "600",
    transition: "all 0.2s ease"
  },
  activeNavBtn: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(0, 240, 255, 0.08)",
    color: "#00F0FF",
    border: "1px solid rgba(0, 240, 255, 0.2)",
    padding: "14px 18px",
    borderRadius: "8px",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "0.95rem",
    fontWeight: "700",
    boxShadow: "0 4px 12px rgba(0, 240, 255, 0.05)"
  },
  icon: {
    fontSize: "1.2rem",
    marginRight: "12px"
  },
  logoutBtn: {
    backgroundColor: "rgba(239, 68, 68, 0.1)", // Light red background
    color: "#EF4444",
    border: "1px solid rgba(239, 68, 68, 0.2)",
    padding: "14px",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "0.95rem",
    cursor: "pointer",
    transition: "all 0.2s ease",
    marginTop: "auto" // Pushes button to the very bottom
  }
};