// src/pages/driver/HomeView.jsx
import { styles } from "./style";

function HomeView({ activeTrip, completedTrips }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Active Cargo Console Card */}
      <section style={styles.card}>
        <div style={styles.cardHeader}>
          <span style={styles.liveIndicator}>● LIVE LONG-HAUL TRIP POOL</span>
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
            <p style={styles.label}>EST. TRANSIT WINDOW</p>
            <p style={styles.value}>{activeTrip.estDuration}</p>
          </div>
          <div>
            <p style={styles.label}>CARGO DETAILS</p>
            <p style={styles.value}>{activeTrip.material} ({activeTrip.weight})</p>
          </div>
          <div style={{ gridColumn: "span 2" }}>
            <p style={styles.label}>NET PAYOUT</p>
            <p style={{...styles.value, color: "#10b981", fontSize: "1.4rem"}}>{activeTrip.payout}</p>
          </div>
        </div>
        <div style={styles.actionRow}>
          <button style={styles.primaryBtn} onClick={() => alert("Truck Navigation Infrastructure Active.")}>
            📍 Open Truck Navigation Route
          </button>
          <button style={styles.secondaryBtn} onClick={() => alert("POD Scanner Unlocked.")}>
            📸 Upload POD / Delivery Receipt
          </button>
        </div>
      </section>

      {/* Detailed View Log Section */}
      <section style={styles.card}>
        <h3 style={{ marginBottom: "0.5rem" }}>📊 Detailed Recent Trip Log (Completed)</h3>
        <p style={{color: "#6b7280", marginBottom: "1rem"}}>Historical validation records for auditing commercial payload deliveries</p>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={{backgroundColor: "#f3f4f6"}}>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Route</th>
                <th style={styles.th}>Duration</th>
                <th style={styles.th}>Service Type</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {completedTrips.map((trip, idx) => (
                <tr key={idx} style={styles.tr}>
                  <td style={styles.td}>{trip.date}</td>
                  <td style={styles.td}><strong>{trip.route}</strong></td>
                  <td style={styles.td}>{trip.duration}</td>
                  <td style={styles.td}>{trip.material}</td>
                  <td style={styles.td}><span style={{color: "#10b981", fontWeight: "bold"}}>{trip.status}</span></td>
                  <td style={{...styles.td, color: "#10b981"}}><strong>{trip.revenue}</strong></td>
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