import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AccountTypeSelection() {
  const [accountType, setAccountType] = useState("agency");
  const navigate = useNavigate();

  const handleNext = () => {
    if (accountType === "individual") {
      navigate("/register-individual");
    } else {
      navigate("/register-agency");
    }
  };

  return (
    <div style={styles.container}>
      {/* Brand Header */}
      <div style={styles.brandWrapper}>
        <span style={{ fontSize: "2.5rem" }}>🚛</span>
        <h1 style={styles.brandName}>Sprinto Fleet</h1>
        <p style={styles.brandSubtitle}>ACCOUNT PROVISIONING CONSOLE</p>
      </div>

      {/* Main Choice Box */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Identify Your Fleet Type</h2>
        <p style={styles.cardSubtitle}>Choose the account configuration that best describes your logistics operation.</p>

        {/* Multi-Column Layout Grid */}
        <div style={styles.grid}>
          {/* Agency Choice Panel */}
          <div
            style={{
              ...styles.choicePanel,
              ...(accountType === "agency" ? styles.choicePanelActive : {})
            }}
            onClick={() => setAccountType("agency")}
          >
            <div style={styles.panelIcon}>🏢</div>
            <h3 style={{
              ...styles.panelTitle,
              color: accountType === "agency" ? "#00F0FF" : "#FFFFFF"
            }}>Agency / Fleet Operator</h3>
            <p style={styles.panelDesc}>
              Managing multiple commercial transport trucks, dispatches, and sub-contracted drivers under an enterprise entity.
            </p>
            {accountType === "agency" && <div style={styles.radioDot} />}
          </div>

          {/* Individual Choice Panel */}
          <div
            style={{
              ...styles.choicePanel,
              ...(accountType === "individual" ? styles.choicePanelActive : {})
            }}
            onClick={() => setAccountType("individual")}
          >
            <div style={styles.panelIcon}>👨‍✈️</div>
            <h3 style={{
              ...styles.panelTitle,
              color: accountType === "individual" ? "#00F0FF" : "#FFFFFF"
            }}>Individual Driver</h3>
            <p style={styles.panelDesc}>
              Owner-operator or solo driver handling personal route assignments, fuel margins, and direct cargo telemetry.
            </p>
            {accountType === "individual" && <div style={styles.radioDot} />}
          </div>
        </div>
      </div>

      {/* Persistent Bottom-Right Action Control */}
      <button style={styles.nextButton} onClick={handleNext}>
        Next Step ➔
      </button>
    </div>
  );
}

// Styling Specifications Object
const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#0A0F1D",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', sans-serif",
    position: "relative",
    margin: 0,
    padding: 0,
    overflow: "hidden"
  },
  brandWrapper: {
    textAlign: "center",
    marginBottom: "30px"
  },
  brandName: {
    fontSize: "2.2rem",
    fontWeight: "800",
    letterSpacing: "2px",
    margin: "10px 0 2px 0"
  },
  brandSubtitle: {
    fontSize: "0.8rem",
    color: "#D97706",
    letterSpacing: "1px",
    margin: 0,
    fontWeight: "600"
  },
  card: {
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    borderRadius: "12px",
    padding: "40px",
    width: "680px", // Widen block layout to let panels sit beautifully side-by-side
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    textAlign: "center",
    boxSizing: "border-box"
  },
  cardTitle: {
    fontSize: "1.4rem",
    margin: "0 0 8px 0",
    fontWeight: "700"
  },
  cardSubtitle: {
    fontSize: "0.85rem",
    color: "#9CA3AF",
    margin: "0 0 30px 0",
    lineHeight: "1.4"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px"
  },
  choicePanel: {
    backgroundColor: "#2a3446ff",
    border: "1px solid #374151",
    borderRadius: "10px",
    padding: "25px 20px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box"
  },
  choicePanelActive: {
    backgroundColor: "rgba(0, 240, 255, 0.03)",
    borderColor: "#D97706",
    boxShadow: "0 0 15px rgba(0, 240, 255, 0.15)"
  },
  panelIcon: {
    fontSize: "2.5rem",
    marginBottom: "15px"
  },
  panelTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    margin: "0 0 10px 0",
    transition: "color 0.2s ease"
  },
  panelDesc: {
    fontSize: "0.8rem",
    color: "#9CA3AF",
    lineHeight: "1.5",
    margin: 0,
    textAlign: "center"
  },
  radioDot: {
    position: "absolute",
    top: "15px",
    right: "15px",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#D97706",
    boxShadow: "0 0 8px #D97706"
  },
  nextButton: {
    position: "absolute",
    bottom: "40px",
    right: "40px",
    backgroundColor: "#D97706",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "6px",
    padding: "14px 28px",
    fontSize: "0.95rem",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(37, 99, 235, 0.4)",
    transition: "transform 0.15s ease, background-color 0.2s ease"
  }
};