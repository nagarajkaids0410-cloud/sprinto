import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import HomeView from "./Homeview";
import LoadManagement from "./Loadmanagement";
import Tracking from "./Tracking";
import FreightHistory from "./FreightHistory";
import { styles } from "./style";
import Profile from "./Profile";

function ShipperDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home"); // "home" or "manage"

  const shipperData = {
    company: "Reliance Retail Ltd",
    manager: "Aman Sharma",
    status: "Verified Enterprise"
  };

  return (
    <div style={styles.dashboardContainer}>
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        shipperData={shipperData} 
        onSignOut={() => navigate("/login")} 
      />

      <main style={styles.mainContent}>
        <header style={styles.topHeader}>
          <h2>Enterprise Shipper Portal</h2>
          <div style={styles.headerMetrics}>
            <div style={styles.miniMetric}>Account: <strong>{shipperData.company}</strong></div>
          </div>
        </header>

        {activeTab === "home" && <HomeView />}
        {activeTab === "manage" && <LoadManagement />}
        {activeTab === "profile" && <Profile />}
        {activeTab === "tracking" && <Tracking />}
        {activeTab === "history" && <FreightHistory />}
      </main>
    </div>
  );
}

export default ShipperDashboard;