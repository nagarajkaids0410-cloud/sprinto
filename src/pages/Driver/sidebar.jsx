// src/pages/driver/Sidebar.jsx
import { styles } from "./style";

function Sidebar({ activeTab, setActiveTab, driverData, onSignOut }) {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.sidebarBrand}>
        <span style={{ fontSize: "1.8rem" }}> can 🚛</span>
        <span style={styles.brandText}>Sprinto Drive</span>
      </div>
      
      <div style={styles.profileSection}>
        <div style={styles.avatar}>👤</div>
        <h3 style={styles.profileName}>{driverData.name}</h3>
        <span style={styles.statusBadge}>{driverData.status}</span>
      </div>

      <nav style={styles.navMenu}>
        <button 
          style={{...styles.navItem, ...(activeTab === "home" ? styles.activeNav : {})}} 
          onClick={() => setActiveTab("home")}
        >
          🏠 Home Workspace
        </button>
        <button 
          style={{...styles.navItem, ...(activeTab === "loads" ? styles.activeNav : {})}} 
          onClick={() => setActiveTab("loads")}
        >
          📦 Available Load Board
        </button>
        <button style={styles.navItem} onClick={() => alert("Earnings module coming next sync!")}>
          🪙 Wallet & Earnings
        </button>
      </nav>

      <button style={styles.logoutBtn} onClick={onSignOut}>
        🚪 System Sign Out
      </button>
    </aside>
  );
}

export default Sidebar;