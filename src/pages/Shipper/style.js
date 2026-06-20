export const styles = {
  dashboardContainer: {
    display: "flex",
    height: "100vh",            // Restricts layout to viewport bounds
    width: "100vw",
    overflow: "hidden",         // Prevents double scrollbars from appearing on the window
    backgroundColor: "#f3f4f6", // Light grey background matching the driver layout
    color: "#1f2937",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  sidebar: {
    width: "280px",
    minWidth: "280px",          // Prevents the sidebar from collapsing under content pressure
    backgroundColor: "#111827", // Dark navigation frame matching driver dashboard
    padding: "2rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    color: "#ffffff",
    height: "100%",             // Locks sidebar to full container height
    boxSizing: "border-box",
  },
  sidebarBrand: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "2.5rem",
  },
  brandText: {
    fontSize: "1.5rem",
    fontWeight: "700",
    letterSpacing: "1px",
    color: "#ffffff",
  },
  profileSection: {
    padding: "1.25rem",
    backgroundColor: "#1f2937",
    borderRadius: "12px",
    marginBottom: "2rem",
    textAlign: "center",
  },
  avatar: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
  profileName: {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "0.25rem",
    color: "#ffffff",
  },
  statusBadge: {
    display: "inline-block",
    padding: "0.25rem 0.75rem",
    backgroundColor: "#10b981", // Uniform green status badge
    color: "#ffffff",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "700",
  },
  navMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    flexGrow: 1,
  },
  navItem: {
    display: "flex",            // Use flex layout to support icons and text cleanly side by side
    alignItems: "center",
    gap: "0.75rem",
    width: "100%",
    padding: "1rem 1.25rem",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "8px",
    color: "#9ca3af",           // Subtle grey text matching dark dashboard standards
    textAlign: "left",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",          // Enforces interactive mouse click tracking
    transition: "all 0.2s ease",
    boxSizing: "border-box"
  },
  activeNav: {
    backgroundColor: "#2563eb", // Vibrant theme blue active layout indicator
    color: "#ffffff",
    fontWeight: "700"
  },
  logoutBtn: {
    padding: "1rem",
    backgroundColor: "#374151",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "700",
    marginTop: "auto",
    transition: "background 0.2s",
    width: "100%",
  },
  mainContent: {
    flexGrow: 1,
    padding: "2.5rem",
    height: "100%",             // Establishes maximum area context limit
    overflowY: "auto",          // Activates inner content scrolling cleanly!
    boxSizing: "border-box",
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2.5rem",
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: "1.5rem",
  },
  headerMetrics: {
    display: "flex",
    gap: "1.5rem",
  },
  miniMetric: {
    backgroundColor: "#ffffff",
    padding: "0.75rem 1.25rem",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    fontSize: "0.95rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  card: {
    backgroundColor: "#ffffff", // Crisp light workspace layout card
    borderRadius: "12px",
    padding: "2rem",
    border: "1px solid #e5e7eb",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)",
    color: "#111827",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: "1rem",
  },
  liveIndicator: {
    color: "#ef4444",           // Crimson alert indicator matches driver framework
    fontWeight: "700",
    fontSize: "0.9rem",
    letterSpacing: "1px",
  },
  tripId: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#4b5563",
  },
  tripGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1.5rem",
    marginBottom: "2rem",
  },
  label: {
    fontSize: "0.8rem",
    color: "#6b7280",
    fontWeight: "700",
    letterSpacing: "0.5px",
    marginBottom: "0.25rem",
  },
  value: {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#1f2937",
  },
  actionRow: {
    display: "flex",
    gap: "1rem",
  },
  primaryBtn: {
    padding: "0.85rem 1.5rem",
    backgroundColor: "#2563eb", 
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "700",
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "0.85rem 1.5rem",
    backgroundColor: "#ffffff",
    color: "#374151",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontWeight: "700",
    cursor: "pointer",
  },
  tableWrapper: {
    overflowX: "auto",
    marginTop: "1rem",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
  },
  th: {
    padding: "1rem",
    color: "#4b5563",
    fontWeight: "700",
    backgroundColor: "#f9fafb", 
    borderBottom: "2px solid #e5e7eb",
    fontSize: "0.9rem",
  },
  tr: {
    borderBottom: "1px solid #e5e7eb",
    transition: "background 0.2s",
  },
  td: {
    padding: "1rem",
    color: "#374151",
    fontSize: "0.95rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  input: {
    padding: "0.75rem 1rem",
    backgroundColor: "#f9fafb",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    color: "#111827",
    fontSize: "1rem",
    width: "100%",
    boxSizing: "border-box",
  },
  tableBtn: {
    padding: "0.5rem 1rem",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "600",
    fontSize: "0.875rem",
  }
};