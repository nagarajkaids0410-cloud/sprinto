import { styles } from "./style";

function Sidebar({ activeTab, setActiveTab, onSignOut }) {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.sidebarBrand}>
        <span style={{ fontSize: "1.8rem" }}>🛡️</span>
        <span style={styles.brandText}>Sprinto Control</span>
      </div>
      
      <div style={styles.profileSection}>
        <div style={styles.avatar}>👑</div>
        <h3 style={styles.profileName}>Super Admin</h3>
        <span style={{...styles.statusBadge, backgroundColor: "#d97706"}}>HQ Dispatcher</span>
      </div>

      <nav style={styles.navMenu}>
        <button style={{...styles.navItem, ...(activeTab === "home" ? styles.activeNav : {})}} onClick={() => setActiveTab("home")}>
          📊 General Overview
        </button>
        <button style={{...styles.navItem, ...(activeTab === "matching" ? styles.activeNav : {})}} onClick={() => setActiveTab("matching")}>
          🎯 Radius Control Match
        </button>
      </nav>

      <button style={styles.logoutBtn} onClick={onSignOut}>
        🚪 System Sign Out
      </button>
    </aside>
  );
}

export default Sidebar;