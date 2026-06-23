import React, { useState } from "react";
import Sidebar from "./sidebar";
import LoadBoardView from "./loardboard";
import DriverSettingsView from "./Settings";

// Mock driver data
const driverInfo = {
  name: "Captain Nagaraj",
  status: "ACTIVE • EN ROUTE",
  truckNo: "IND-TN-04-AX-2026"
};

function DriverDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showNotifications, setShowNotifications] = useState(true);
  const [isDutyActive, setIsDutyActive] = useState(true); // Connected state for header switch

  // Real-time notification alerts array
  const alerts = [
    { id: 1, type: "AI MATCH", msg: "Optimal high-yield return load matched near drop-point.", time: "2m ago" },
    { id: 2, type: "TRAFFIC", msg: "Heavy congestion detected on NH-48. Route optimization updated.", time: "12m ago" },
    { id: 3, type: "SYSTEM", msg: "Digital Fuel receipt processed for Fuel Station #14.", time: "1h ago" }
  ];

  const handleSignOut = () => {
    alert("Signing out from Driver Command Console...");
  };

  // Helper function to render content dynamically based on the selected sidebar tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "loads":
        return <LoadBoardView availableLoads={[]} />;
        
      case "settings":
        return <DriverSettingsView />;
        
      case "profile":
        return (
          <div style={dashboardStyles.fallbackPanel}>
            <h2>👤 Driver Credentials</h2>
            <p style={{ color: "#8D99AE" }}>Commercial Driver License (CDL), active hours of service (HOS), and safety ratings.</p>
          </div>
        );
        
      case "dashboard":
      default:
        return (
          <div style={dashboardStyles.workspaceLayout}>
            {/* CENTERPIECE INTERACTIVE ROUTE MAP WORKSPACE */}
            <div style={dashboardStyles.mapPanel}>
              <div style={dashboardStyles.panelHeader}>
                <h2 style={dashboardStyles.panelTitle}>🗺️ INTERACTIVE OPTIMIZATION & TRAFFIC MAP</h2>
                <span style={dashboardStyles.mapBadge}>
                  {isDutyActive ? "LIVE GPS TRACKING ACTIVE" : "TELEMETRY TRANSIT SUSPENDED"}
                </span>
              </div>
              
              {/* Map Canvas Mock */}
              <div style={dashboardStyles.mapMockCanvas}>
                {/* Overlay HUD indicators */}
                <div style={dashboardStyles.mapHudCard}>
                  <div style={{fontWeight: 'bold', color: '#00F0FF', marginBottom: '4px'}}>CURRENT TELEMETRY</div>
                  <div>Vehicle: {driverInfo.truckNo}</div>
                  <div>Avg Speed: {isDutyActive ? "62 km/h" : "0 km/h"}</div>
                  <div>Est. Fuel Burn: {isDutyActive ? "32L / 100km" : "--"}</div>
                </div>

                {/* Dynamic HUD route pointers */}
                <div style={dashboardStyles.mapRouteOverlay}>
                  <div>📍 Pickup Hub A (Chennai) ———[AI Optimized Route: Clean]———&gt; 🏁 Drop Terminal B (Bangalore)</div>
                </div>

                <div style={dashboardStyles.mapCenterTarget}>
                  {isDutyActive && <div style={dashboardStyles.radarPulse}></div>}
                  <span style={{fontSize: '2rem', zIndex: 2}}>🚚</span>
                </div>
              </div>
            </div>

            {/* NOTIFICATIONS DRAWER PANEL */}
            {showNotifications && (
              <div style={dashboardStyles.notificationDrawer}>
                <h3 style={dashboardStyles.drawerTitle}>CRITICAL FEED</h3>
                <div style={dashboardStyles.drawerList}>
                  {alerts.map(alert => (
                    <div key={alert.id} style={dashboardStyles.alertCard}>
                      <div style={dashboardStyles.alertMeta}>
                        <span style={dashboardStyles.alertType}>{alert.type}</span>
                        <span style={dashboardStyles.alertTime}>{alert.time}</span>
                      </div>
                      <p style={dashboardStyles.alertText}>{alert.msg}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div style={dashboardStyles.container}>
      {/* UPGRADED LOGISTICS SIDEBAR */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        driverData={{
          ...driverInfo,
          status: isDutyActive ? "ACTIVE • EN ROUTE" : "OFFLINE • INACTIVE"
        }} 
        onSignOut={handleSignOut} 
      />

      {/* Main Console Stage */}
      <main style={dashboardStyles.mainContent}>
        
        {/* Header Bar */}
        <header style={dashboardStyles.header}>
          <div>
            <h1 style={dashboardStyles.headerTitle}>DRIVER TELEMETRY BASE</h1>
            <p style={dashboardStyles.headerSubtitle}>Operational Module {" > "} {activeTab.toUpperCase()}</p>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {/* Custom Modern Premium Toggle Switch */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "0.8rem", fontWeight: "700", color: isDutyActive ? "#00F0FF" : "#EF233C" }}>
                DUTY: {isDutyActive ? "ON" : "OFF"}
              </span>
              <div 
                style={{
                  ...dashboardStyles.switchTrack,
                  backgroundColor: isDutyActive ? "#2563EB" : "#374151"
                }}
                onClick={() => setIsDutyActive(!isDutyActive)}
              >
                <div style={{
                  ...dashboardStyles.switchKnob,
                  transform: isDutyActive ? "translateX(20px)" : "translateX(0px)"
                }} />
              </div>
            </div>

            {activeTab === "dashboard" && (
              <button 
                style={dashboardStyles.notificationToggle} 
                onClick={() => setShowNotifications(!showNotifications)}
              >
                {showNotifications ? "❌ Hide Feed" : `🔔 Alerts (${alerts.length})`}
              </button>
            )}
          </div>
        </header>

        {/* LOGISTICS KPI CARDS SECTION */}
        {activeTab === "dashboard" && (
          <section style={dashboardStyles.kpiGrid}>
            <div style={dashboardStyles.kpiCard}>
              <div style={dashboardStyles.kpiHeader}>
                <span style={dashboardStyles.kpiLabel}>AVAILABLE TRUCKS</span>
                <span style={dashboardStyles.kpiIcon}>🚛</span>
              </div>
              <div style={dashboardStyles.kpiValue}>24 <span style={dashboardStyles.kpiSubtext}>Active Fleet</span></div>
            </div>

            <div style={dashboardStyles.kpiCard}>
              <div style={dashboardStyles.kpiHeader}>
                <span style={dashboardStyles.kpiLabel}>ACTIVE LOADS</span>
                <span style={dashboardStyles.kpiIcon}>📦</span>
              </div>
              <div style={dashboardStyles.kpiValue}>12 <span style={dashboardStyles.kpiSubtext}>In Transit</span></div>
            </div>

            <div style={dashboardStyles.kpiCard}>
              <div style={dashboardStyles.kpiHeader}>
                <span style={dashboardStyles.kpiLabel}>ESTIMATED REVENUE</span>
                <span style={dashboardStyles.kpiIcon}>💰</span>
              </div>
              <div style={dashboardStyles.kpiValue}>$14,250 <span style={dashboardStyles.kpiSubtext}>This Month</span></div>
            </div>

            <div style={dashboardStyles.kpiCard}>
              <div style={dashboardStyles.kpiHeader}>
                <span style={dashboardStyles.kpiLabel}>COMPLETED RUNS</span>
                <span style={dashboardStyles.kpiIcon}>🏁</span>
              </div>
              <div style={dashboardStyles.kpiValue}>98.4% <span style={dashboardStyles.kpiSubtext}>On-Time Rating</span></div>
            </div>
          </section>
        )}

        {/* Dynamic Workspace Placement */}
        {renderTabContent()}

      </main>
    </div>
  );
}

// Layout Styles Object
const dashboardStyles = {
  container: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#0A0F1D", 
    color: "#FFFFFF",
    overflow: "hidden",
    fontFamily: "'Segoe UI', Roboto, sans-serif"
  },
  mainContent: {
    flexGrow: 1,
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    overflowY: "auto",
    boxSizing: "border-box"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #1C2541",
    paddingBottom: "15px"
  },
  headerTitle: {
    fontSize: "1.6rem",
    fontWeight: "800",
    letterSpacing: "2px",
    color: "#FFFFFF",
    margin: 0
  },
  headerSubtitle: {
    fontSize: "0.85rem",
    color: "#00F0FF", 
    margin: "4px 0 0 0",
    fontWeight: "600"
  },
  switchTrack: {
    width: "44px",
    height: "24px",
    borderRadius: "12px",
    padding: "2px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    boxSizing: "border-box"
  },
  switchKnob: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    transition: "transform 0.2s ease",
    boxShadow: "0px 1px 3px rgba(0,0,0,0.4)"
  },
  notificationToggle: {
    background: "#1C2541",
    border: "1px solid #00F0FF",
    color: "#00F0FF",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: "0 0 10px rgba(0, 240, 255, 0.15)"
  },
  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px"
  },
  kpiCard: {
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  },
  kpiHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px"
  },
  kpiLabel: {
    fontSize: "0.8rem",
    color: "#9CA3AF",
    fontWeight: "700",
    letterSpacing: "1px"
  },
  kpiIcon: {
    fontSize: "1.2rem"
  },
  kpiValue: {
    fontSize: "1.75rem",
    fontWeight: "700",
    color: "#00F0FF"
  },
  kpiSubtext: {
    fontSize: "0.8rem",
    color: "#9CA3AF",
    display: "block",
    fontWeight: "normal",
    marginTop: "2px"
  },
  workspaceLayout: {
    display: "flex",
    gap: "20px",
    flexGrow: 1,
    minHeight: "450px"
  },
  mapPanel: {
    flexGrow: 2,
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },
  panelHeader: {
    padding: "15px 20px",
    borderBottom: "1px solid #1C2541",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  panelTitle: {
    fontSize: "1rem",
    margin: 0,
    fontWeight: "700",
    color: "#FFFFFF"
  },
  mapBadge: {
    backgroundColor: "rgba(0, 240, 255, 0.1)",
    border: "1px solid #00F0FF",
    color: "#00F0FF",
    fontSize: "0.75rem",
    padding: "4px 8px",
    borderRadius: "4px",
    fontWeight: "700"
  },
  mapMockCanvas: {
    flexGrow: 1,
    backgroundColor: "#070B14", 
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "radial-gradient(#1C2541 1px, transparent 1px)",
    backgroundSize: "24px 24px"
  },
  mapHudCard: {
    position: "absolute",
    top: "15px",
    left: "15px",
    backgroundColor: "rgba(11, 19, 43, 0.85)",
    border: "1px solid #3A506B",
    borderRadius: "6px",
    padding: "12px",
    fontSize: "0.8rem",
    color: "#E2E8F0"
  },
  mapRouteOverlay: {
    position: "absolute",
    bottom: "15px",
    backgroundColor: "rgba(11, 19, 43, 0.9)",
    border: "1px solid #00F0FF",
    borderRadius: "6px",
    padding: "10px 20px",
    fontSize: "0.85rem",
    color: "#FFFFFF"
  },
  mapCenterTarget: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  radarPulse: {
    position: "absolute",
    width: "60px",
    height: "60px",
    border: "2px solid #00F0FF",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 240, 255, 0.1)"
  },
  notificationDrawer: {
    width: "320px",
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    borderRadius: "10px",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  drawerTitle: {
    fontSize: "0.9rem",
    fontWeight: "700",
    color: "#EF233C", 
    margin: 0,
    letterSpacing: "1px"
  },
  drawerList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    overflowY: "auto"
  },
  alertCard: {
    backgroundColor: "#1F2937",
    borderLeft: "4px solid #00F0FF",
    padding: "10px 12px",
    borderRadius: "4px"
  },
  alertMeta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "4px"
  },
  alertType: {
    fontSize: "0.7rem",
    fontWeight: "800",
    color: "#00F0FF"
  },
  alertTime: {
    fontSize: "0.7rem",
    color: "#9CA3AF"
  },
  alertText: {
    fontSize: "0.8rem",
    margin: 0,
    color: "#E5E7EB",
    lineHeight: "1.3"
  },
  fallbackPanel: {
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    borderRadius: "10px",
    padding: "30px",
    textAlign: "center",
    marginTop: "10px"
  }
};

export default DriverDashboard;