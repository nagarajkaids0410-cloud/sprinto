
import { useOrders } from "../../OrderContext";

function HomeView() {
  const { globalLoads } = useOrders();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <section style={styles.card}>
        <h3 style={{ marginBottom: "0.5rem" }}>🏭 Total Global Freight Pipelines</h3>
        <p style={{ color: "#6b7280", marginBottom: "1rem" }}>Overview audit monitor across corporate shippers and network drivers</p>

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Shipper Corporate</th>
                <th style={styles.th}>Route Segments</th>
                <th style={styles.th}>Manifest Weights</th>
                <th style={styles.th}>Bidding Values</th>
                <th style={styles.th}>Status Mode</th>
              </tr>
            </thead>
            <tbody>
              {globalLoads.map((load) => (
                <tr key={load.id} style={styles.tr}>
                  <td style={styles.td}><strong>{load.id}</strong></td>
                  <td style={styles.td}>{load.shipper || "Enterprise Vendor"}</td>
                  <td style={styles.td}>{load.route}</td>
                  <td style={styles.td}>{load.weight}</td>
                  <td style={{ ...styles.td, color: "#10b981" }}><strong>{load.price}</strong></td>
                  <td style={styles.td}>
                    <span style={load.status === "Admin Review" ? styles.badgeReview : styles.badgeReady}>
                      {load.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default HomeView;