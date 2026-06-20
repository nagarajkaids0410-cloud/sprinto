import { useState } from "react";
import { styles } from "./style";

function LoadBoardView({ availableLoads }) {
  const [acceptedLoadIds, setAcceptedLoadIds] = useState([]);

  const handleAccept = (loadId) => {
    setAcceptedLoadIds((prev) => [...prev, loadId]);
    alert(`Route ${loadId} has been successfully locked and assigned to your truck asset!`);
  };

  return (
    <section style={styles.card}>
      <h3 style={{ marginBottom: "0.3rem" }}>Market Load Board Matching Your Truck Type</h3>
      <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
        Accept assignments instantly to secure matching commercial routes
      </p>
      
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr style={{ backgroundColor: "#f3f4f6" }}>
              <th style={styles.th}>Load ID</th>
              <th style={styles.th}>Route Segment</th>
              <th style={styles.th}>Commodity</th>
              <th style={styles.th}>Weight</th>
              <th style={styles.th}>Offer Price</th>
              <th style={{ ...styles.th, textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {availableLoads.map((load) => {
              const isAccepted = acceptedLoadIds.includes(load.id);
              
              return (
                <tr key={load.id} style={styles.tr}>
                  <td style={styles.td}><strong>{load.id}</strong></td>
                  <td style={styles.td}>{load.route}</td>
                  <td style={styles.td}>{load.material}</td>
                  <td style={styles.td}>{load.weight}</td>
                  <td style={{ ...styles.td, color: "#10b981" }}>
                    <strong>{load.price}</strong>
                  </td>
                  <td style={{ ...styles.td, textAlign: "center" }}>
                    <button 
                      style={{
                        ...styles.tableBtn,
                        backgroundColor: isAccepted ? "#64748b" : "#10b981", 
                        cursor: isAccepted ? "not-allowed" : "pointer",
                        transition: "all 0.2s ease",
                        opacity: isAccepted ? 0.8 : 1
                      }} 
                      onClick={() => !isAccepted && handleAccept(load.id)}
                      disabled={isAccepted}
                    >
                      {isAccepted ? "✓ Assigned" : "Accept Load"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default LoadBoardView;