import React from "react";
import { useOrders } from "../../OrderContext";
import { styles } from "./style";

function FreightHistory() {
  const { globalLoads } = useOrders();

  return (
    <section style={styles.card}>
      <h2 style={{ marginBottom: "1.5rem" }}>
        📜 Freight History
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
        <div style={styles.card}>
          <h4>Total Loads</h4>
          <h2>{globalLoads.length}</h2>
        </div>

        <div style={styles.card}>
          <h4>Completed Loads</h4>
          <h2>
            {globalLoads.filter(l => l.status === "Delivered").length}
          </h2>
        </div>

        <div style={styles.card}>
          <h4>Active Loads</h4>
          <h2>
            {globalLoads.filter(l => l.status !== "Delivered").length}
          </h2>
        </div>
      </div>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Route</th>
              <th style={styles.th}>Commodity</th>
              <th style={styles.th}>Weight</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>

          <tbody>
            {globalLoads.map(load => (
              <tr key={load.id}>
                <td style={styles.td}>{load.id}</td>
                <td style={styles.td}>{load.route}</td>
                <td style={styles.td}>{load.material}</td>
                <td style={styles.td}>{load.weight}</td>
                <td style={styles.td}>{load.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default FreightHistory;