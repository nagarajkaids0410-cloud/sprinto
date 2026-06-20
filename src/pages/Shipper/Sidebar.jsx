import React from "react";
import { styles } from "./style";

function Sidebar({ activeTab, setActiveTab, shipperData, onSignOut }) {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.sidebarBrand}>
        <span style={{ fontSize: "1.8rem" }}>📦</span>
        <span style={styles.brandText}>Sprinto Ship</span>
      </div>
      
      <div style={styles.profileSection}>
        <div style={styles.avatar}>🏢</div>
        <h3 style={styles.profileName}>{shipperData.company}</h3>
        <span style={styles.statusBadge}>{shipperData.status}</span>
      </div>

      <nav style={styles.navMenu}>
        <button
  style={{...styles.navItem, ...(activeTab === "home" ? styles.activeNav : {})}}
  onClick={() => setActiveTab("home")}
>
  📊 Logistics Overview
</button>

<button
  style={{...styles.navItem, ...(activeTab === "manage" ? styles.activeNav : {})}}
  onClick={() => setActiveTab("manage")}
>
  ➕ Post & Manage Freight
</button>

<button
  style={{...styles.navItem, ...(activeTab === "profile" ? styles.activeNav : {})}}
  onClick={() => setActiveTab("profile")}
>
  🏢 Company Profile
</button>
      </nav>

      <button style={styles.logoutBtn} onClick={onSignOut}>
        🚪 System Sign Out
      </button>
      <button
  style={{
    ...styles.navItem,
    ...(activeTab === "tracking" ? styles.activeNav : {})
  }}
  onClick={() => setActiveTab("tracking")}
>
  📍 Shipment Tracking
</button>

<button
  style={{
    ...styles.navItem,
    ...(activeTab === "history" ? styles.activeNav : {})
  }}
  onClick={() => setActiveTab("history")}
>
  📜 Freight History
</button>
    </aside>
  );
}

export default Sidebar;