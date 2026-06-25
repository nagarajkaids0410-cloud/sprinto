import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Importing the sidebar we just made!

export default function AgencyDashboard() {
  const [activeTab, setActiveTab] = useState("fleet");

  const handleSignOut = () => {
    console.log("Signing out agency...");
    // navigate("/login"); // Add your logout routing here later
  };

  return (
    <div style={styles.dashboardContainer}>
      {/* Mounted Sidebar Component */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onSignOut={handleSignOut} 
      />

      {/* Main Dynamic Content Area */}
      <main style={styles.mainContent}>
        <header style={styles.topHeader}>
          <div>
            <h2 style={styles.headerTitle}>Agency Fleet Command Center</h2>
            <p style={styles.headerSubtitle}>Monitor dispatches and manage driver logistics</p>
          </div>
          <div style={styles.profileBadge}>🏢 Agency Admin</div>
        </header>

        {/* Tab Views */}
        <div style={styles.contentArea}>
          {activeTab === "fleet" && (
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Active Fleet Status</h3>
              <p style={styles.cardText}>🚛 12 Vehicles Deployed | 🛑 3 Idle | 🔧 1 Under Maintenance</p>
              {/* Add your fleet data grid or charts here later */}
            </div>
          )}

          {activeTab === "drivers" && (
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Driver Roster</h3>
              <p style={styles.cardText}>Manage your sub-contracted operators, view active hours, and process payroll.</p>
              {/* Add your driver list map here later */}
            </div>
          )}

          {activeTab === "dispatches" && (
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Active Dispatches</h3>
              <p style={styles.cardText}>Track live loads, route telemetry, and delivery confirmations.</p>
              {/* Add your active orders list here later */}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// Layout styling for the main dashboard shell
const styles = {
  dashboardContainer: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#0A0F1D",
    color: "#FFFFFF",
    fontFamily: "'Segoe UI', sans-serif",
    overflow: "hidden",
  },
  mainContent: {
    flexGrow: 1,
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    boxSizing: "border-box",
    overflowY: "auto",
  },
  topHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    padding: "20px 30px",
    borderRadius: "12px",
  },
  headerTitle: {
    margin: "0 0 6px 0",
    fontSize: "1.4rem",
    fontWeight: "700",
  },
  headerSubtitle: {
    margin: 0,
    fontSize: "0.85rem",
    color: "#9CA3AF",
  },
  profileBadge: {
    backgroundColor: "rgba(0, 240, 255, 0.1)",
    color: "#00F0FF",
    padding: "8px 16px",
    borderRadius: "20px",
    fontSize: "0.85rem",
    fontWeight: "700",
    border: "1px solid rgba(0, 240, 255, 0.2)"
  },
  contentArea: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  card: {
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  cardTitle: {
    margin: "0 0 12px 0",
    fontSize: "1.2rem",
    color: "#00F0FF",
  },
  cardText: {
    margin: 0,
    color: "#D1D5DB",
    lineHeight: "1.6",
  }
};