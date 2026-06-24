import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VehicleTypeSelection() {
  const navigate = useNavigate();
  const [selectedVehicle, setSelectedVehicle] = useState("scv");

  const vehicleTiers = [
    {
      id: "scv",
      title: "Small Commercial Vehicles (SCVs)",
      desc: "Intra-city last-mile distribution. Ideal for tight urban delivery routes and agile cargo courier turnarounds.",
      icon: "🛺",
      capacity: "Max Payload: < 1.5 Tons"
    },
    {
      id: "lcv",
      title: "Light Commercial Vehicles (LCVs)",
      desc: "Medium short-haul city freight. Perfectly optimized for local supply distributions and light multi-stop delivery loops.",
      icon: "🚚",
      capacity: "Max Payload: 1.5 - 7.5 Tons"
    },
    {
      id: "mcv",
      title: "Medium Commercial Vehicles (MCVs)",
      desc: "Inter-city distribution channels. Heavy cargo construction logistics and multi-state freight transport corridors.",
      icon: "🚛",
      capacity: "Max Payload: 7.5 - 16 Tons"
    },
    {
      id: "hcv",
      title: "Heavy Commercial Vehicles (HCVs)",
      desc: "Long-haul cross-country cargo mapping. Heavy multi-axle freight containers designed for maximum transport payload capacities.",
      icon: "🚢", // Using a big ship/carrier emoji alternative or a massive heavy tractor trailer look
      capacity: "Max Payload: > 16 Tons"
    }
  ];

  const handleNext = () => {
    console.log("Saving Selected Vehicle Tier Telemetry: ", selectedVehicle);
    
    // Smoothly push the interface context into the document validation flow
    navigate("/verify-documents");
  };

  return (
    <div style={styles.container}>
      {/* Brand Header */}
      <div style={styles.brandWrapper}>
        <span style={{ fontSize: "2rem" }}>🚛</span>
        <h1 style={styles.brandName}>Sprinto Fleet</h1>
        <p style={styles.brandSubtitle}>FLEET ASSET CLASSIFICATION GATEWAY</p>
      </div>

      {/* Selector Container Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Select Fleet Vehicle Category</h2>
        <p style={styles.cardSubtitle}>
          Classify your core transport unit to match calibrated load allocations optimized for your weight parameters.
        </p>

        {/* 2x2 Grid Panel System */}
        <div style={styles.grid}>
          {vehicleTiers.map((tier) => {
            const isSelected = selectedVehicle === tier.id;
            return (
              <div
                key={tier.id}
                style={{
                  ...styles.tierPanel,
                  ...(isSelected ? styles.tierPanelActive : {})
                }}
                onClick={() => setSelectedVehicle(tier.id)}
              >
                <div style={styles.panelHeader}>
                  <span style={styles.panelIcon}>{tier.icon}</span>
                  {isSelected && <div style={styles.activeIndicator} />}
                </div>
                <h3 style={{
                  ...styles.panelTitle,
                  color: isSelected ? "#00F0FF" : "#FFFFFF"
                }}>
                  {tier.title}
                </h3>
                <p style={styles.panelDesc}>{tier.desc}</p>
                <div style={{
                  ...styles.capacityTag,
                  borderColor: isSelected ? "#00F0FF" : "#374151",
                  color: isSelected ? "#00F0FF" : "#9CA3AF"
                }}>
                  {tier.capacity}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Persistent Bottom-Right Action Control */}
      <button style={styles.nextButton} onClick={handleNext}>
        Next Step ➔
      </button>
    </div>
  );
}

// Layout Styling Object Configuration
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
  brandWrapper: { textAlign: "center", marginBottom: "20px" },
  brandName: { fontSize: "2rem", fontWeight: "800", letterSpacing: "2px", margin: "5px 0 2px 0" },
  brandSubtitle: { fontSize: "0.75rem", color: "#00F0FF", letterSpacing: "1px", margin: 0 },
  card: {
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    borderRadius: "12px",
    padding: "35px 40px",
    width: "820px", // Spacious wide dimension layout for premium 2x2 presentation matrix
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    boxSizing: "border-box"
  },
  cardTitle: { fontSize: "1.3rem", margin: "0 0 6px 0", fontWeight: "700", textAlign: "center" },
  cardSubtitle: { fontSize: "0.8rem", color: "#9CA3AF", margin: "0 0 30px 0", lineHeight: "1.4", textAlign: "center" },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px"
  },
  tierPanel: {
    backgroundColor: "#1F2937",
    border: "1px solid #374151",
    borderRadius: "10px",
    padding: "20px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box"
  },
  tierPanelActive: {
    backgroundColor: "rgba(0, 240, 255, 0.03)",
    borderColor: "#00F0FF",
    boxShadow: "0 0 15px rgba(0, 240, 255, 0.15)"
  },
  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px"
  },
  panelIcon: { fontSize: "2rem" },
  activeIndicator: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#00F0FF",
    boxShadow: "0 0 8px #00F0FF"
  },
  panelTitle: {
    fontSize: "1rem",
    fontWeight: "700",
    margin: "0 0 8px 0",
    transition: "color 0.2s ease"
  },
  panelDesc: {
    fontSize: "0.8rem",
    color: "#9CA3AF",
    lineHeight: "1.4",
    margin: "0 0 15px 0",
    flexGrow: 1
  },
  capacityTag: {
    fontSize: "0.75rem",
    fontWeight: "600",
    border: "1px solid",
    padding: "4px 10px",
    borderRadius: "4px",
    alignSelf: "flex-start",
    letterSpacing: "0.5px"
  },
  nextButton: {
    position: "absolute",
    bottom: "40px",
    right: "40px",
    backgroundColor: "#2563EB",
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