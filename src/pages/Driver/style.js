// src/pages/Driver/style.js

// Styles for Settings view panels
export const settingsStyles = {
  container: {
    backgroundColor: "#0B132B",
    border: "1px solid #1C2541",
    borderRadius: "12px",
    padding: "30px",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#FFFFFF"
  },
  headerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid #1C2541",
    paddingBottom: "15px",
    marginBottom: "25px"
  },
  sectionTitle: {
    fontSize: "1.4rem",
    color: "#00F0FF",
    margin: 0,
    letterSpacing: "1px"
  },
  sectionSubtitle: {
    color: "#8D99AE",
    fontSize: "0.85rem",
    margin: "6px 0 0 0"
  },
  statusBanner: {
    border: "1px solid",
    padding: "8px 16px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "700",
    letterSpacing: "0.5px",
    backgroundColor: "rgba(11, 19, 43, 0.6)"
  },
  settingsGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  settingsCard: {
    backgroundColor: "#1C2541",
    border: "1px solid #3A506B",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  },
  cardTitle: {
    fontSize: "1rem",
    color: "#FFFFFF",
    margin: "0 0 15px 0",
    borderBottom: "1px solid rgba(58, 80, 107, 0.5)",
    paddingBottom: "8px",
    fontWeight: "600",
    letterSpacing: "0.5px"
  },
  settingRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid rgba(58, 80, 107, 0.3)"
  },
  settingLabel: {
    fontSize: "0.9rem",
    color: "#E2E8F0",
    fontWeight: "600"
  },
  settingDesc: {
    fontSize: "0.75rem",
    color: "#8D99AE",
    marginTop: "2px",
    lineHeight: "1.4"
  },
  toggleSwitch: {
    width: "42px",
    height: "22px",
    accentColor: "#00F0FF",
    cursor: "pointer"
  },
  selectMenu: {
    backgroundColor: "#0B132B",
    color: "#FFFFFF",
    border: "1px solid #3A506B",
    padding: "8px 12px",
    borderRadius: "4px",
    fontSize: "0.85rem",
    outline: "none",
    cursor: "pointer"
  },
  supportButton: {
    padding: "12px",
    backgroundColor: "transparent",
    border: "1px solid #EF233C",
    color: "#EF233C",
    borderRadius: "6px",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "0.85rem",
    textAlign: "center"
  }
};

// Styles mapped exactly to sidebar.jsx's JSX keys
export const styles = {
  sidebar: {
    width: "260px",
    backgroundColor: "#111827",
    borderRight: "1px solid #1C2541",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    height: "100vh",
    boxSizing: "border-box"
  },
  sidebarBrand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "35px"
  },
  brandText: {
    fontSize: "1.3rem",
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: "0.5px"
  },
  profileSection: {
    backgroundColor: "#1F2937",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
    marginBottom: "25px",
    border: "1px solid #1C2541"
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
    padding: "4px 10px",
    borderRadius: "12px",
    letterSpacing: "0.5px"
  },
  navMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flexGrow: 1
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
    borderRadius: "6px",
    color: "#9CA3AF",
    fontSize: "0.9rem",
    fontWeight: "600",
    background: "transparent",
    border: "none",
    width: "100%",
    textAlign: "left",
    cursor: "pointer",
    transition: "all 0.2s ease"
  },
  activeNav: {
    color: "#FFFFFF",
    backgroundColor: "#2563EB"
  },
  logoutBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "12px",
    backgroundColor: "#374151",
    border: "1px solid #4B5563",
    color: "#FFFFFF",
    borderRadius: "6px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "0.85rem",
    width: "100%",
    marginTop: "auto"
  }
};