import { styles } from "./style";

function Sidebar({ activeTab, setActiveTab, driverData, onSignOut }) {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.sidebarBrand}>
        <span style={{ fontSize: "1.8rem" }}>🚛</span>
        <span style={styles.brandText}>Sprinto Fleet</span>
      </div>
      
      <div style={styles.profileSection}>
        <div style={styles.avatar}>👨‍✈️</div>
        <h3 style={styles.profileName}>{driverData.name}</h3>
        <span style={{...styles.statusBadge, backgroundColor: "#2563eb"}}>
          {driverData.status}
        </span>
      </div>

      <nav style={styles.navMenu}>
        <button 
          style={{...styles.navItem, ...(activeTab === "home" ? styles.activeNav : {})}} 
          onClick={() => setActiveTab("home")}
        >
          🏠 My Active Run
        </button>
        <button 
          style={{...styles.navItem, ...(activeTab === "loads" ? styles.activeNav : {})}} 
          onClick={() => setActiveTab("loads")}
        >
          📋 Available Load Board
        </button>
      </nav>

      <button style={styles.logoutBtn} onClick={onSignOut}>
        🚪 Driver Sign Out
      </button>
    </aside>
  );
}

export default Sidebar;