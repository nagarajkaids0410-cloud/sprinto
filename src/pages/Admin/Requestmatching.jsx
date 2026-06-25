
import { useOrders } from "../../OrderContext";


function RequestMatching() {
  const { globalLoads, dispatchToDrivers } = useOrders();

  // Filters items sitting in the admin review station
  const pendingMatching = globalLoads.filter(load => load.status === "Admin Review");

  const handleRouteTransfer = (load) => {
    // Parse metric distance value string to floating float checks
    const currentDistanceNum = parseFloat(load.distance);

    if (currentDistanceNum > 5.0) {
      alert(`⚠️ Dispatch Rejected: Nearest active carrier truck asset is outside compliance radius grid boundaries (${load.distance}). Fleet asset must be under 5 km.`);
      return;
    }

    dispatchToDrivers(load.id);
    alert(`⚡ Route Accepted: Carrier asset identified at ${load.distance} range. Freight matching pushed out directly onto Driver Load Board logs successfully.`);
  };

  return (
    <section style={styles.card}>
      <h3 style={{ marginBottom: "0.3rem" }}>🎯 Proximity Geo-Fencing Optimization</h3>
      <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
        Enforces corporate service SLAs: Transfer requests from shippers to drivers **only if within a 5 km operational range**.
      </p>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Manifest ID</th>
              <th style={styles.th}>Shipper Account</th>
              <th style={styles.th}>Target Route Matrix</th>
              <th style={styles.th}>Fleet Range Distance</th>
              <th style={styles.th}>Status Condition</th>
              <th style={{ ...styles.th, textAlign: "center" }}>Enforce Routing Block</th>
            </tr>
          </thead>
          <tbody>
            {pendingMatching.length === 0 ? (
              <tr><td colSpan="6" style={{ ...styles.td, textAlign: "center", padding: "2rem" }}>No pending client freight loads currently require gateway verification clearance blocks.</td></tr>
            ) : (
              pendingMatching.map((load) => {
                const distanceCheck = parseFloat(load.distance) <= 5.0;
                return (
                  <tr key={load.id} style={styles.tr}>
                    <td style={styles.td}><strong>{load.id}</strong></td>
                    <td style={styles.td}>{load.shipper}</td>
                    <td style={styles.td}>{load.route}</td>
                    <td style={{ ...styles.td, color: distanceCheck ? "#10b981" : "#ef4444", fontWeight: "700" }}>
                      {load.distance} {distanceCheck ? "📢 (Under 5km)" : "❌ (Too Far)"}
                    </td>
                    <td style={styles.td}><span style={styles.badgeReview}>{load.status}</span></td>
                    <td style={{ ...styles.td, textAlign: "center" }}>
                      <button
                        style={{
                          ...styles.primaryBtn,
                          backgroundColor: distanceCheck ? "#10b981" : "#6b7280",
                          cursor: "pointer"
                        }}
                        onClick={() => handleRouteTransfer(load)}
                      >
                        Push to Fleet Board
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default RequestMatching;