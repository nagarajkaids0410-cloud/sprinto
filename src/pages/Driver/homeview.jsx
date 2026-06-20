import { styles } from "./style";
import { useOrders } from "../../OrderContext";

function HomeView({ activeTrip, completedTrips }) {
  const { globalLoads } = useOrders();

  // Find if there's any active load explicitly assigned to this driver asset right now
  const assignedLoad = globalLoads.find(l => l.status === "Assigned to Fleet");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Primary Trip Manifest Card */}
      <section style={styles.card}>
        <div style={styles.cardHeader}>
          <span style={styles.liveIndicator}>● CURRENT ASSIGNED RUN MANIFEST</span>
          <span style={styles.tripId}>{assignedLoad ? assignedLoad.id : activeTrip.id}</span>
        </div>

        <div style={styles.tripGrid}>
          <div>
            <div style={styles.label}>ROUTE SEGMENT CONTAINER</div>
            <div style={styles.value}>{assignedLoad ? assignedLoad.route : activeTrip.origin}</div>
          </div>
          <div>
            <div style={styles.label}>COMMODITY & CARGO DETAIL</div>
            <div style={styles.value}>{assignedLoad ? assignedLoad.material : activeTrip.material}</div>
          </div>
          <div>
            <div style={styles.label}>TOTAL MANIFEST PAYLOAD WEIGHT</div>
            <div style={styles.value}>{assignedLoad ? assignedLoad.weight : activeTrip.weight}</div>
          </div>
          <div>
            <div style={styles.label}>GUARANTEED TRIP PAYOUT VALUE</div>
            <div style={{ ...styles.value, color: "#10b981" }}>
              <strong>{assignedLoad ? assignedLoad.price : activeTrip.payout}</strong>
            </div>
          </div>
        </div>

        <div style={styles.actionRow}>
          <button style={styles.primaryBtn}>🗺️ Launch Commercial Navigation</button>
          <button style={styles.secondaryBtn}>📞 Contact Dispatch Center</button>
        </div>
      </section>

      {/* Legacy Pay Ledger Table Section */}
      <section style={styles.card}>
        <h3 style={{ marginBottom: "1rem" }}>📋 Historical Shift Log Tenders</h3>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Timestamp</th>
                <th style={styles.th}>Route Run Log</th>
                <th style={styles.th}>Duration</th>
                <th style={styles.th}>Payout Earnings</th>
              </tr>
            </thead>
            <tbody>
              {completedTrips.map((trip, idx) => (
                <tr key={idx} style={styles.tr}>
                  <td style={styles.td}>{trip.date}</td>
                  <td style={styles.td}>{trip.route}</td>
                  <td style={styles.td}>{trip.duration}</td>
                  <td style={{ ...styles.td, color: "#10b981" }}><strong>{trip.revenue}</strong></td>
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