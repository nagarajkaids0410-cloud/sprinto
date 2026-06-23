import React, { useState } from "react";

function LoadBoardView({ availableLoads = [] }) {
  const [acceptedLoadIds, setAcceptedLoadIds] = useState([]);

  const handleAccept = (loadId, shipperName) => {
    setAcceptedLoadIds((prev) => [...prev, loadId]);
    alert(`⚡ AI MATCH LOCKED: Shipment ${loadId} from ${shipperName} has been successfully assigned to your truck route!`);
  };

  // Premium mock data containing rich logistics metrics if your parent component doesn't provide them yet
  const dynamicLoads = availableLoads.length > 0 ? availableLoads : [
    {
      id: "SPL-9041",
      shipper: "Adani Logistics Group",
      origin: "Mundra Port, GJ",
      destination: "NCR Warehouse, Delhi",
      time: "14 hrs 30 mins",
      material: "Electronics Component Pallets",
      weight: "12,400 kg",
      fuelCost: "₹22,400",
      price: "₹65,000",
      matchScore: "98%"
    },
    {
      id: "SPL-3281",
      shipper: "Reliance Industries",
      origin: "Jamnagar Refineries, GJ",
      destination: "Chakan Industrial Area, Pune",
      time: "18 hrs 15 mins",
      material: "Polymers & Raw Petrochemicals",
      weight: "24,000 kg",
      fuelCost: "₹34,800",
      price: "₹92,500",
      matchScore: "94%"
    },
    {
      id: "SPL-5502",
      shipper: "Tata Steel BSL",
      origin: "Jamshedpur Plant, JH",
      destination: "Sriperumbudur Hub, Chennai",
      time: "26 hrs 00 mins",
      material: "Automotive Steel Coils",
      weight: "18,500 kg",
      fuelCost: "₹42,100",
      price: "₹1,18,000",
      matchScore: "89%"
    }
  ];

  return (
    <section style={boardStyles.container}>
      {/* Header Info Section */}
      <div style={boardStyles.headerWrapper}>
        <div>
          <h2 style={boardStyles.title}>🤖 Real-Time Smart Load Board</h2>
          <p style={boardStyles.subtitle}>
            AI Truck-to-Load Engine active. Displaying highly optimized matching commercial orders by authorized shippers.
          </p>
        </div>
        <div style={boardStyles.activePulse}>
          <span style={boardStyles.pulseRadar}></span> LIVE STREAMING
        </div>
      </div>

      {/* Grid Layout Container */}
      <div style={boardStyles.cardsGrid}>
        {dynamicLoads.map((load) => {
          const isAccepted = acceptedLoadIds.includes(load.id);
          
          return (
            <div key={load.id} style={{
              ...boardStyles.loadCard,
              ...(isAccepted ? boardStyles.acceptedCard : {})
            }}>
              {/* Card Header */}
              <div style={boardStyles.cardHeader}>
                <div>
                  <span style={boardStyles.shipperLabel}>SHIPPER</span>
                  <h3 style={boardStyles.shipperName}>{load.shipper}</h3>
                </div>
                <div style={boardStyles.matchBadge}>
                  {load.matchScore || "92%"} AI MATCH
                </div>
              </div>

              {/* Route Segment Design */}
              <div style={boardStyles.routeSection}>
                <div style={boardStyles.routeRow}>
                  <span style={boardStyles.routeDot}>🟢</span>
                  <div style={boardStyles.locationBlock}>
                    <p style={boardStyles.locLabel}>PICKUP POINT</p>
                    <p style={boardStyles.locText}>{load.origin || "N/A"}</p>
                  </div>
                </div>
                
                <div style={boardStyles.routeLine}></div>

                <div style={boardStyles.routeRow}>
                  <span style={boardStyles.routeDot}>🔴</span>
                  <div style={boardStyles.locationBlock}>
                    <p style={boardStyles.locLabel}>DROP DELIVERY POINT</p>
                    <p style={boardStyles.locText}>{load.destination || "N/A"}</p>
                  </div>
                </div>
              </div>

              {/* Cargo & Time Specifics */}
              <div style={boardStyles.metaGrid}>
                <div>
                  <span style={boardStyles.metaTitle}>CARGO</span>
                  <p style={boardStyles.metaValue}>{load.material}</p>
                </div>
                <div>
                  <span style={boardStyles.metaTitle}>EST. TRANSIT</span>
                  <p style={boardStyles.metaValue}>⏳ {load.time || "12.5 Hrs"}</p>
                </div>
                <div>
                  <span style={boardStyles.metaTitle}>WEIGHT TARE</span>
                  <p style={boardStyles.metaValue}>⚖️ {load.weight}</p>
                </div>
              </div>

              {/* Financial Command Metrics Panel */}
              <div style={boardStyles.financialsPanel}>
                <div style={boardStyles.finBlock}>
                  <span style={boardStyles.finLabel}>EST. FUEL COST</span>
                  <p style={boardStyles.fuelValue}>{load.fuelCost || "₹18,200"}</p>
                </div>
                <div style={boardStyles.finBlock}>
                  <span style={boardStyles.finLabel}>TOTAL REVENUE PAYOUT</span>
                  <p style={boardStyles.payoutValue}>{load.price}</p>
                </div>
              </div>

              {/* Action Button */}
              <button
                style={{
                  ...boardStyles.actionButton,
                  ...(isAccepted ? boardStyles.actionDisabled : {})
                }}
                onClick={() => !isAccepted && handleAccept(load.id, load.shipper)}
                disabled={isAccepted}
              >
                {isAccepted ? "✓ ASSIGNED TO ASSET" : "🔒 LOCK & DISPATCH ROUTE"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Tactical Command Center StyleSheet Object
const boardStyles = {
  container: {
    backgroundColor: "#0B132B", // Deep dark blue background
    minHeight: "100vh",
    padding: "30px",
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    color: "#FFFFFF",
  },
  headerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid #1C2541",
    paddingBottom: "20px",
    marginBottom: "30px",
  },
  title: {
    fontSize: "1.6rem",
    fontWeight: "700",
    color: "#00F0FF", // Neon Cyan
    margin: 0,
    letterSpacing: "0.5px",
  },
  subtitle: {
    fontSize: "0.95rem",
    color: "#8D99AE",
    margin: "8px 0 0 0",
  },
  activePulse: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "rgba(0, 240, 255, 0.1)",
    border: "1px solid #00F0FF",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    color: "#00F0FF",
    fontWeight: "700",
    letterSpacing: "1px",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
    gap: "25px",
  },
  loadCard: {
    backgroundColor: "#1C2541", // Lighter command center navy card background
    border: "1px solid #3A506B",
    borderRadius: "12px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    transition: "transform 0.2s ease, border-color 0.2s ease",
  },
  acceptedCard: {
    borderColor: "#64748b",
    opacity: 0.65,
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "18px",
  },
  shipperLabel: {
    fontSize: "0.7rem",
    color: "#8D99AE",
    fontWeight: "700",
    letterSpacing: "1px",
  },
  shipperName: {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#FFFFFF",
    margin: "3px 0 0 0",
  },
  matchBadge: {
    backgroundColor: "rgba(0, 240, 255, 0.15)",
    border: "1px solid #00F0FF",
    borderRadius: "4px",
    color: "#00F0FF",
    padding: "4px 8px",
    fontSize: "0.75rem",
    fontWeight: "700",
  },
  routeSection: {
    position: "relative",
    backgroundColor: "#0B132B",
    padding: "12px 15px",
    borderRadius: "8px",
    marginBottom: "15px",
    border: "1px solid #1C2541",
  },
  routeRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  routeDot: {
    fontSize: "0.8rem",
    zIndex: 2,
  },
  routeLine: {
    position: "absolute",
    left: "21px",
    top: "28px",
    bottom: "28px",
    width: "2px",
    borderLeft: "2px dashed #3A506B",
    zIndex: 1,
  },
  locationBlock: {
    display: "flex",
    flexDirection: "column",
  },
  locLabel: {
    margin: 0,
    fontSize: "0.65rem",
    color: "#8D99AE",
    fontWeight: "600",
  },
  locText: {
    margin: "2px 0 0 0",
    fontSize: "0.9rem",
    color: "#E2E8F0",
    fontWeight: "500",
  },
  metaGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "10px",
    marginBottom: "15px",
    padding: "0 5px",
  },
  metaTitle: {
    fontSize: "0.65rem",
    color: "#8D99AE",
    fontWeight: "700",
  },
  metaValue: {
    margin: "3px 0 0 0",
    fontSize: "0.8rem",
    color: "#FFFFFF",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  financialsPanel: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#111A34",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #1C2541",
    marginBottom: "20px",
  },
  finBlock: {
    display: "flex",
    flexDirection: "column",
  },
  finLabel: {
    fontSize: "0.65rem",
    color: "#8D99AE",
    fontWeight: "600",
  },
  fuelValue: {
    margin: "4px 0 0 0",
    color: "#FFB703", // Warning amber for fuel overhead cost
    fontWeight: "700",
    fontSize: "1rem",
  },
  payoutValue: {
    margin: "4px 0 0 0",
    color: "#00F0FF", // Bright Cyan for target income revenue
    fontWeight: "800",
    fontSize: "1.1rem",
  },
  actionButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#00F0FF",
    color: "#0B132B", // Deep contrast text color
    border: "none",
    borderRadius: "6px",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "0.9rem",
    letterSpacing: "0.5px",
    transition: "all 0.2s ease",
    boxShadow: "0 0 10px rgba(0, 240, 255, 0.3)",
  },
  actionDisabled: {
    backgroundColor: "#475569",
    color: "#94A3B8",
    cursor: "not-allowed",
    boxShadow: "none",
  }
};

export default LoadBoardView;