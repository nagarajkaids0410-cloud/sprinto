import React, { useState } from "react";

const earningsData = {
  totalEarned: "4,850.00",
  availableBalance: "1,240.50",
  thisMonth: "1,820.00",
  transactions: [
    { id: "TXN-9921", route: "Poznan → Berlin", date: "06/24/2026", amount: "450.00", status: "Completed" },
    { id: "TXN-9918", route: "Warsaw → Poznan", date: "06/22/2026", amount: "620.00", status: "Completed" },
    { id: "TXN-9890", route: "Berlin → Wroclaw", date: "06/18/2026", amount: "750.00", status: "Completed" },
    { id: "TXN-Q901", route: "Prague → Berlin", date: "06/25/2026", amount: "350.00", status: "Pending" },
  ]
};

export default function DriverEarningsView() {
  const [isCashingOut, setIsCashingOut] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.statsRow}>
        <div style={{ ...styles.card, borderColor: "#00F0FF" }}>
          <span style={styles.cardTitle}>💳 Available Balance</span>
          <div style={styles.balanceRow}>
            <span style={{ ...styles.bigValue, color: "#00F0FF" }}>${earningsData.availableBalance}</span>
            <button style={styles.cashOutButton} onClick={() => alert("Initiating Cash Out...")}>Cash Out</button>
          </div>
        </div>

        <div style={styles.card}>
          <span style={styles.cardTitle}>📈 Gross Earnings (YTD)</span>
          <span style={styles.bigValue}>${earningsData.totalEarned}</span>
        </div>

        <div style={styles.card}>
          <span style={styles.cardTitle}>📅 Earned This Month</span>
          <span style={styles.bigValue}>${earningsData.thisMonth}</span>
        </div>
      </div>

      <div style={styles.tableCard}>
        <h3 style={{ color: "#FFFFFF", margin: "0 0 20px 0" }}>📋 Payout & Trip History</h3>
        <div style={styles.tableHeaderGrid}>
          <div>Trip / Route</div>
          <div>Date</div>
          <div>Reference ID</div>
          <div style={{ textAlign: "right" }}>Amount</div>
        </div>
        {earningsData.transactions.map((item) => (
          <div key={item.id} style={styles.tableRowGrid}>
            <div style={{ fontWeight: "700" }}>{item.route}</div>
            <div style={{ color: "#8D99AE" }}>{item.date}</div>
            <div style={{ fontFamily: "monospace", color: "#8D99AE" }}>{item.id}</div>
            <div style={{ textAlign: "right", color: "#00F0FF", fontWeight: "700" }}>${item.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { display: "flex", flexDirection: "column", gap: "24px", width: "100%" },
  statsRow: { display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: "20px" },
  card: { backgroundColor: "#111827", border: "1px solid #1C2541", borderRadius: "10px", padding: "20px" },
  cardTitle: { fontSize: "0.75rem", color: "#8D99AE", fontWeight: "700", letterSpacing: "1px" },
  bigValue: { fontSize: "1.8rem", fontWeight: "800", color: "#FFFFFF", display: "block", marginTop: "10px" },
  balanceRow: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" },
  cashOutButton: { backgroundColor: "#2563EB", color: "#FFFFFF", border: "none", padding: "8px 16px", borderRadius: "6px", fontWeight: "700", cursor: "pointer" },
  tableCard: { backgroundColor: "#111827", border: "1px solid #1C2541", borderRadius: "10px", padding: "24px" },
  tableHeaderGrid: { display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", borderBottom: "1px solid #1C2541", paddingBottom: "10px", fontSize: "0.8rem", color: "#8D99AE", fontWeight: "700" },
  tableRowGrid: { display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", paddingTop: "15px", paddingBottom: "15px", borderBottom: "1px solid #1C2541", fontSize: "0.85rem", color: "#FFFFFF", alignItems: "center" }
};