import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DriverDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Sample Hackathon Data Mocking
  const driverData = {
    name: "Rajesh Kumar",
    vehicle: "Tata Prima 5530.S (MH-12-QX-4567)",
    status: "Available",
    walletBalance: "₹14,250",
    tripsCompleted: 48,
  };

  const activeTrip = {
    id: "SPT-9902",
    origin: "Chakan Industrial Area, Pune",
    destination: "Sriperumbudur Hub, Chennai",
    material: "Automobile Components",
    weight: "18 Tons",
    payout: "₹42,000",
    status: "In Transit",
  };

  const availableLoads = [
    { id: "L-4091", route: "Mumbai to Delhi", material: "Pharma Goods", weight: "12T", price: "₹38,000" },
    { id: "L-4092", route: "Bangalore to Hyderabad", material: "FMCG Cartons", weight: "15T", price: "₹24,500" },
    { id: "L-4093", route: "Nagpur to Indore", material: "Steel Coils", weight: "22T", price: "₹51,000" },
  ];

  return (
    <div style={styles.dashboardContainer}>
      {/* --- SIDEBAR WORKSPACE --- */}
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
            style={{...styles.navItem, ...(activeTab === "overview" ? styles.activeNav : {})}} 
            onClick={() => setActiveTab("overview")}
          >
            📊 Workspace Overview
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

        <button style={styles.logoutBtn} onClick={() => navigate("/login")}>
          🚪 System Sign Out
        </button>
      </aside>

      {/* --- MAIN WORKSPACE VIEW --- */}
      <main style={styles.mainContent}>
        {/* Top Metric Bar */}
        <header style={styles.topHeader}>
          <h2>Driver Control Center</h2>
          <div style={styles.headerMetrics}>
            <div style={styles.miniMetric}>Wallet: <strong>{driverData.walletBalance}</strong></div>
            <div style={styles.miniMetric}>Trips: <strong>{driverData.tripsCompleted}</strong></div>
          </div>
        </header>

        {activeTab === "overview" ? (
          <div>
            {/* Active Cargo Console Card */}
            <section style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.liveIndicator}>● LIVE TRIP POOL</span>
                <span style={styles.tripId}>{activeTrip.id}</span>
              </div>
              <div style={styles.tripGrid}>
                <div>
                  <p style={styles.label}>FROM</p>
                  <p style={styles.value}>{activeTrip.origin}</p>
                </div>
                <div>
                  <p style={styles.label}>TO</p>
                  <p style={styles.value}>{activeTrip.destination}</p>
                </div>
                <div>
                  <p style={styles.label}>CARGO DETAILS</p>
                  <p style={styles.value}>{activeTrip.material} ({activeTrip.weight})</p>
                </div>
                <div>
                  <p style={styles.label}>NET PAYOUT</p>
                  <p style={{...styles.value, color: "#10b981"}}>{activeTrip.payout}</p>
                </div>
              </div>
              <div style={styles.actionRow}>
                <button style={styles.primaryBtn} onClick={() => alert("GPS Infrastructure Mock Active.")}>
                  📍 Open Live Navigation Route
                </button>
                <button style={styles.secondaryBtn} onClick={() => alert("POD Scanner Unlocked.")}>
                  📸 Upload Pod / Delivery Receipt
                </button>
              </div>
            </section>
          </div>
        ) : (
          /* Available Loads Sub-Panel */
          <section style={styles.card}>
            <h3>Market Load Board Matching Your Truck Type</h3>
            <p style={{color: "#6b7280", marginBottom: "1rem"}}>Accept assignments instantly to lock down routes</p>
            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead>
                  <tr style={{backgroundColor: "#f3f4f6"}}>
                    <th style={styles.th}>Load ID</th>
                    <th style={styles.th}>Route Segment</th>
                    <th style={styles.th}>Commodity</th>
                    <th style={styles.th}>Weight</th>
                    <th style={styles.th}>Offer Price</th>
                    <th style={styles.th}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {availableLoads.map((load) => (
                    <tr key={load.id} style={styles.tr}>
                      <td style={styles.td}><strong>{load.id}</strong></td>
                      <td style={styles.td}>{load.route}</td>
                      <td style={styles.td}>{load.material}</td>
                      <td style={styles.td}>{load.weight}</td>
                      <td style={{...styles.td, color: "#10b981"}}><strong>{load.price}</strong></td>
                      <td style={styles.td}>
                        <button style={styles.tableBtn} onClick={() => alert(`Route ${load.id} assigned to your asset!`)}>
                          Accept Load
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

// Inline Clean Styles to isolate layout rules beautifully without breaking your App.css setup
const styles = {
  dashboardContainer: { display: "flex", minHeight: "100vh", backgroundColor: "#f8fafc", fontFamily: "sans-serif", color: "#1e293b" },
  sidebar: { width: "280px", backgroundColor: "#0f172a", color: "#fff", display: "flex", flexDirection: "column", padding: "1.5rem" },
  sidebarBrand: { display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" },
  brandText: { fontSize: "1.4rem", fontWeight: "bold", background: "linear-gradient(to right, #3b82f6, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  profileSection: { display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem", backgroundColor: "#1e293b", borderRadius: "12px", marginBottom: "2rem" },
  avatar: { fontSize: "2.5rem", marginBottom: "0.5rem" },
  profileName: { fontSize: "1.1rem", margin: "0.2rem 0" },
  statusBadge: { backgroundColor: "#10b981", fontSize: "0.75rem", padding: "0.2rem 0.6rem", borderRadius: "20px", fontWeight: "bold" },
  navMenu: { display: "flex", flexDirection: "column", gap: "0.5rem", flexGrow: 1 },
  navItem: { padding: "0.75rem 1rem", border: "none", borderRadius: "8px", backgroundColor: "transparent", color: "#94a3b8", textAlignment: "left", cursor: "pointer", fontSize: "1rem", transition: "0.2s" },
  activeNav: { backgroundColor: "#3b82f6", color: "#fff", fontWeight: "bold" },
  logoutBtn: { backgroundColor: "#ef4444", color: "#fff", border: "none", padding: "0.75rem", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" },
  mainContent: { flexGrow: 1, padding: "2rem" },
  topHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", borderBottom: "1px solid #e2e8f0", paddingBottom: "1rem" },
  headerMetrics: { display: "flex", gap: "1rem" },
  miniMetric: { padding: "0.5rem 1rem", backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px" },
  card: { backgroundColor: "#fff", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)", border: "1px solid #e2e8f0" },
  cardHeader: { display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f1f5f9", paddingBottom: "1rem", marginBottom: "1rem" },
  liveIndicator: { color: "#ef4444", fontWeight: "bold", display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.9rem" },
  tripId: { fontWeight: "bold", color: "#64748b" },
  tripGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem", marginBottom: "1.5rem" },
  label: { fontSize: "0.75rem", color: "#64748b", fontWeight: "bold", uppercase: "true", margin: 0 },
  value: { fontSize: "1.1rem", margin: "0.2rem 0", fontWeight: "500" },
  actionRow: { display: "flex", gap: "1rem" },
  primaryBtn: { backgroundColor: "#3b82f6", color: "#fff", border: "none", padding: "0.75rem 1.5rem", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" },
  secondaryBtn: { backgroundColor: "#f1f5f9", color: "#1e293b", border: "1px solid #cbd5e1", padding: "0.75rem 1.5rem", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" },
  tableWrapper: { overflowX: "auto", marginTop: "1rem" },
  table: { width: "100%", borderCollapse: "collapse", textAlignment: "left" },
  th: { padding: "0.75rem", borderBottom: "2px solid #e2e8f0" },
  td: { padding: "0.75rem", borderBottom: "1px solid #e2e8f0" },
  tr: { transition: "0.2s", ":hover": { backgroundColor: "#f8fafc" } },
  tableBtn: { backgroundColor: "#10b981", color: "#fff", border: "none", padding: "0.4rem 0.8rem", borderRadius: "6px", cursor: "pointer", fontSize: "0.9rem", fontWeight: "bold" }
};

export default DriverDashboard;