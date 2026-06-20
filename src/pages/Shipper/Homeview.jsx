import React from "react";
import { styles } from "./style";
import { useOrders } from "../../OrderContext";

function HomeView() {
  // Only one clean declaration inside the component framework block
  const { globalLoads = [] } = useOrders() || {};

  const pendingCount = globalLoads.filter((l) => l.status === "Admin Review").length;
  const transitCount = globalLoads.filter(
    (l) => l.status === "Dispatched to Drivers" || l.status === "Assigned to Fleet"
  ).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
        <div style={{ ...styles.card, borderLeft: "6px solid #f59e0b" }}>
          <h4 style={styles.label}>PENDING PROXIMITY AUDITS</h4>
          <h2 style={{ fontSize: "2rem", marginTop: "0.5rem" }}>{pendingCount} Tenders</h2>
        </div>
        <div style={{ ...styles.card, borderLeft: "6px solid #10b981" }}>
          <h4 style={styles.label}>DISPATCHED / ACTIVE REVENUE LOADS</h4>
          <h2 style={{ fontSize: "2rem", marginTop: "0.5rem" }}>{transitCount} Orders</h2>
        </div>
      </div>

      <section style={styles.card}>
        <div style={styles.cardHeader}>
          <h3>📈 Enterprise Supply Chain Stream</h3>
          <span style={styles.liveIndicator}>● LIVE ENGINE TRACKING</span>
        </div>
        
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Route Domain</th>
                <th style={styles.th}>Commodity</th>
                <th style={styles.th}>Weight</th>
                <th style={styles.th}>Current Status State</th>
              </tr>
            </thead>
            <tbody>
              {globalLoads.length === 0 ? (
                <tr>
                  <td colSpan="5" style={{ ...styles.td, textAlign: "center", padding: "2rem", color: "#6b7280" }}>
                    No active freight postings found in pipeline history.
                  </td>
                </tr>
              ) : (
                globalLoads.slice(0, 5).map((load) => (
                  <tr key={load.id} style={styles.tr}>
                    <td style={styles.td}><strong>{load.id}</strong></td>
                    <td style={styles.td}>{load.route}</td>
                    <td style={styles.td}>{load.material}</td>
                    <td style={styles.td}>{load.weight}</td>
                    <td style={styles.td}>
                      <span style={{
                        fontWeight: "700",
                        color: load.status === "Admin Review" ? "#f59e0b" : load.status === "Dispatched to Drivers" ? "#2563eb" : "#10b981"
                      }}>
                        {load.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default HomeView;