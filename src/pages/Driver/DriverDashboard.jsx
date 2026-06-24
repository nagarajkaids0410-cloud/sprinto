import React, { useState } from "react";
import Sidebar from "./sidebar";
import LoadBoardView from "./loardboard";
import DriverSettingsView from "./Settings";
import ProfileView from "./ProfileView";
import UpdateDocumentsView from "./UpdateDocumentsView";
import DriverEarningsView from "./Earnings";
import NotificationsView from "./NotificationsView";
import ReportsView from "./ReportsView";
import RouteView from "./RouteView";

// Operational mock payload data mapping exactly to your telemetry system constants
const driverInfo = {
  name: "Captain Nagaraj",
  role: "Driver Elite",
  drivingHours: "16h 12m",
  totalTrips: "84",
  distanceDriven: "1,628",
  truckNo: "TN-04-AX-2026"
};

function DriverDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isDutyActive, setIsDutyActive] = useState(true);
  
  // Real-time Chat state parameters
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: "shipper", label: "Adani Logistics Group", text: "Captain, make sure container seal matches manifest token ID: SPL-9041.", time: "05:45 AM" },
    { id: 2, sender: "driver", label: "You", text: "Affirmative, check completed at loading deck. Gate pass scanned.", time: "06:02 AM" },
    { id: 3, sender: "shipper", label: "Adani Logistics Group", text: "Excellent. Alert Bangalore Terminal dispatch when vector is 10km out.", time: "11:20 AM" }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: "driver",
      label: "You",
      text: chatInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMsg]);
    setChatInput("");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "route":
        return <RouteView />;
      case "loads":
        return <LoadBoardView availableLoads={[]} />;
      case "reports":
        return <ReportsView />;
      case "notifications":
        return <NotificationsView />; // <-- Forces notifications to render solo, hiding the dashboard grid!
      case "settings":
        return <DriverSettingsView />;
      case "profile":
        return <ProfileView />;
      case "update":
        return <UpdateDocumentsView />;
      case "earnings":
        return <DriverEarningsView />;
      case "dashboard":
      default:
        return (
          <div style={dashboardStyles.blueprintContainer}>
            
            {/* TOP ROW: THREE PREMIUM METRIC CARDS SIDE-BY-SIDE */}
            <div style={dashboardStyles.topMetricsGrid}>
              
              {/* Card 1: Total Shifts */}
              <div style={dashboardStyles.darkCard}>
                <span style={dashboardStyles.metricTitle}>📊 TOTAL RUN SHIFTS</span>
                <div style={dashboardStyles.metricMainRow}>
                  <span style={dashboardStyles.metricBigValue}>{driverInfo.totalTrips}</span>
                  <span style={dashboardStyles.growthBadge}>+4.2% MONTHLY</span>
                </div>
                {/* Sparkline Telemetry Bars */}
                <div style={dashboardStyles.sparkGraph}>
                  <div style={{ ...dashboardStyles.graphBar, height: "40%", backgroundColor: "#1C2541" }}></div>
                  <div style={{ ...dashboardStyles.graphBar, height: "60%", backgroundColor: "#1C2541" }}></div>
                  <div style={{ ...dashboardStyles.graphBar, height: "50%", backgroundColor: "#2563EB" }}></div>
                  <div style={{ ...dashboardStyles.graphBar, height: "85%", backgroundColor: "#00F0FF" }}></div>
                  <div style={{ ...dashboardStyles.graphBar, height: "70%", backgroundColor: "#10B981" }}></div>
                </div>
              </div>

              {/* Card 2: Distance Tracked */}
              <div style={dashboardStyles.darkCard}>
                <span style={dashboardStyles.metricTitle}>🛣️ DISTANCE TRACKED</span>
                <div style={dashboardStyles.metricMainRow}>
                  <span style={dashboardStyles.metricBigValue}>
                    {driverInfo.distanceDriven} <span style={{ fontSize: "1rem", color: "#8D99AE" }}>km</span>
                  </span>
                </div>
                {/* Mini graph telemetry */}
                <div style={dashboardStyles.sparkGraph}>
                  <div style={{ ...dashboardStyles.graphBar, height: "30%", backgroundColor: "#2563EB" }}></div>
                  <div style={{ ...dashboardStyles.graphBar, height: "55%", backgroundColor: "#2563EB" }}></div>
                  <div style={{ ...dashboardStyles.graphBar, height: "75%", backgroundColor: "#00F0FF" }}></div>
                  <div style={{ ...dashboardStyles.graphBar, height: "40%", backgroundColor: "#1C2541" }}></div>
                  <div style={{ ...dashboardStyles.graphBar, height: "90%", backgroundColor: "#10B981" }}></div>
                </div>
              </div>

              {/* Card 3: Dispatched Asset Details */}
              <div style={{ ...dashboardStyles.darkCard, justifyContent: "space-between" }}>
                <div>
                  <span style={dashboardStyles.metricTitle}>🚍 DISPATCHED ASSET DETAILS</span>
                  <div style={dashboardStyles.vehicleSpecGrid}>
                    <div>
                      <span style={dashboardStyles.specLabel}>Registration ID</span>
                      <p style={dashboardStyles.specValue}>{driverInfo.truckNo}</p>
                    </div>
                    <div>
                      <span style={dashboardStyles.specLabel}>Telemetry Link</span>
                      <p style={{ ...dashboardStyles.specValue, color: "#10B981" }}>● SECURE LINKED</p>
                    </div>
                  </div>
                </div>
                <div style={dashboardStyles.assetFooterEmoji}>🚛 Operational Fleet Asset</div>
              </div>

            </div>

            {/* MIDDLE ROW: FULL WIDTH SCHEDULE PANEL */}
            <div style={dashboardStyles.darkCard}>
              <h3 style={dashboardStyles.blockHeaderTitle}>📋 UPCOMING SCHEDULED CONTRACTS</h3>
              <div style={dashboardStyles.tripsTable}>
                <div style={dashboardStyles.tableRow}>
                  <div style={{ fontWeight: "700", color: "#FFFFFF" }}>Chennai Port</div>
                  <div style={dashboardStyles.dashedDividerRoute}>6h 15m</div>
                  <div style={{ fontWeight: "700", color: "#FFFFFF" }}>Bangalore Hub</div>
                  <div style={dashboardStyles.tableMetaText}>24/06/2026</div>
                  <span style={{ ...dashboardStyles.statusPill, backgroundColor: "rgba(0, 240, 255, 0.1)", color: "#00F0FF", border: "1px solid #00F0FF" }}>En Route</span>
                </div>
                <div style={dashboardStyles.tableRow}>
                  <div style={{ fontWeight: "700", color: "#FFFFFF" }}>Hyderabad</div>
                  <div style={dashboardStyles.dashedDividerRoute}>11h 30m</div>
                  <div style={{ fontWeight: "700", color: "#FFFFFF" }}>Mumbai Terminal</div>
                  <div style={dashboardStyles.tableMetaText}>26/06/2026</div>
                  <span style={{ ...dashboardStyles.statusPill, backgroundColor: "rgba(16, 185, 129, 0.1)", color: "#10B981", border: "1px solid #10B981" }}>Planned</span>
                </div>
              </div>
            </div>

            {/* BOTTOM ROW: CHAT WITH SHIPPER CONSOLE */}
            <div style={dashboardStyles.darkCard}>
              <div style={dashboardStyles.chatHeader}>
                <h3 style={{ ...dashboardStyles.blockHeaderTitle, margin: 0 }}>💬 SECURE SHIPPER DISPATCH CHANNEL</h3>
                <div style={dashboardStyles.activeContactBadge}>
                  <span style={dashboardStyles.onlinePulse}></span> Connected To: Adani Logistics Terminal
                </div>
              </div>

              {/* Message Feed Display Window */}
              <div style={dashboardStyles.chatMessageWindow}>
                {messages.map((msg) => {
                  const isDriver = msg.sender === "driver";
                  return (
                    <div 
                      key={msg.id} 
                      style={{
                        ...dashboardStyles.chatRow,
                        justifyContent: isDriver ? "flex-end" : "flex-start"
                      }}
                    >
                      <div style={{ maxWidth: "70%", display: "flex", flexDirection: "column" }}>
                        <span style={{
                          ...dashboardStyles.chatMetaName,
                          textAlign: isDriver ? "right" : "left"
                        }}>
                          {msg.label} • <span style={{ fontWeight: "normal", color: "#8D99AE" }}>{msg.time}</span>
                        </span>
                        <div style={{
                          ...dashboardStyles.chatBubbleBase,
                          ...(isDriver ? dashboardStyles.chatBubbleDriver : dashboardStyles.chatBubbleShipper)
                        }}>
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Interactive Messenger Input Actions */}
              <form onSubmit={handleSendMessage} style={dashboardStyles.chatInputArea}>
                <button type="button" style={dashboardStyles.chatAttachBtn} onClick={() => alert("Upload Manifest Scan/Asset Document Option Triggered.")}>
                  📎
                </button>
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Transmit securely to cargo loading manager..." 
                  style={dashboardStyles.chatInputField}
                />
                <button type="submit" style={dashboardStyles.chatSendBtn}>
                  🚀 Transmit
                </button>
              </form>
            </div>

          </div>
        );
    }
  };

  return (
    <div style={dashboardStyles.container}>
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        driverData={{
          name: driverInfo.name,
          status: isDutyActive ? "ACTIVE • RADAR ON" : "CONSOLE TERMINATED"
        }} 
        onSignOut={() => alert("Exiting Driver Command Suite...")} 
      />

      <main style={dashboardStyles.mainContent}>
        {/* PREMIUM CYBER HEADER DASH BAR */}
        <header style={dashboardStyles.header}>
          <div style={dashboardStyles.searchContainer}>
            <span style={{ marginRight: "8px", color: "#8D99AE" }}>🔍</span>
            <input type="text" placeholder="Scan telemetry commands..." style={dashboardStyles.searchInput} />
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={dashboardStyles.drivingHoursBox}>
              ⚡ SHIFT LOGS: <strong style={{ color: "#00F0FF", marginLeft: "4px" }}>{driverInfo.drivingHours}</strong>
            </div>

            {/* Duty Toggle Switch */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: "700", color: isDutyActive ? "#10B981" : "#EF233C" }}>
                {isDutyActive ? "DUTY ACTIVE" : "OFF-LINE"}
              </span>
              <label style={dashboardStyles.switchLabel}>
                <input 
                  type="checkbox" 
                  checked={isDutyActive} 
                  onChange={() => setIsDutyActive(!isDutyActive)} 
                  style={{ display: "none" }} 
                />
                <div style={{ 
                  ...dashboardStyles.switchTrack, 
                  backgroundColor: isDutyActive ? "#10B981" : "#1C2541" 
                }}>
                  <div style={{ 
                    ...dashboardStyles.switchKnob, 
                    transform: isDutyActive ? "translateX(20px)" : "translateX(2px)" 
                  }} />
                </div>
              </label>
            </div>
            
            <div style={dashboardStyles.userHeaderProfile}>
              <div style={dashboardStyles.avatarCircle}>👨‍✈️</div>
              <div style={{ textAlign: "left" }}>
                <p style={dashboardStyles.profileHeaderName}>{driverInfo.name}</p>
                <span style={dashboardStyles.profileHeaderRole}>{driverInfo.role}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Layout Slot */}
        {renderTabContent()}
      </main>
    </div>
  );
}

// Layout styles optimized with explicit background configurations to block re-render errors
const dashboardStyles = {
 container: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#0A0F1D",
    color: "#FFFFFF",
    overflow: "hidden",
    fontFamily: "'Segoe UI', Roboto, sans-serif"
  },
  mainContent: {
    flexGrow: 1,
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    overflowY: "auto",
    boxSizing: "border-box",
    borderLeft: "1px solid #1C2541",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    padding: "14px 24px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#0A0F1D",
    border: "1px solid #1C2541",
    padding: "8px 16px",
    borderRadius: "8px",
    width: "300px"
  },
  searchInput: {
    border: "none",
    backgroundColor: "transparent",
    outline: "none",
    color: "#FFFFFF",
    width: "100%",
    fontSize: "0.85rem"
  },
  drivingHoursBox: {
    backgroundColor: "rgba(0, 240, 255, 0.05)",
    border: "1px solid #1C2541",
    padding: "8px 14px",
    borderRadius: "8px",
    fontSize: "0.8rem",
    color: "#8D99AE",
    fontWeight: "700",
    letterSpacing: "0.5px"
  },
  switchLabel: {
    cursor: "pointer",
    display: "inline-block"
  },
  switchTrack: {
    width: "42px",
    height: "24px",
    borderRadius: "12px",
    position: "relative",
    transition: "background-color 0.2s ease"
  },
  switchKnob: {
    width: "20px",
    height: "20px",
    backgroundColor: "#FFFFFF",
    borderRadius: "50%",
    position: "absolute",
    top: "2px",
    transition: "transform 0.2s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.4)"
  },
  userHeaderProfile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    borderLeft: "1px solid #1C2541",
    paddingLeft: "20px"
  },
  avatarCircle: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "#1F2937",
    border: "1px solid #1C2541",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.1rem"
  },
  profileHeaderName: {
    margin: 0,
    fontWeight: "700",
    fontSize: "0.85rem",
    color: "#FFFFFF"
  },
  profileHeaderRole: {
    fontSize: "0.75rem",
    color: "#00F0FF",
    fontWeight: "600"
  },
  blueprintContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    flexGrow: 1
  },
  topMetricsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "24px"
  },
  darkCard: {
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  metricTitle: {
    fontSize: "0.75rem",
    color: "#8D99AE",
    fontWeight: "700",
    letterSpacing: "1px"
  },
  metricMainRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline"
  },
  metricBigValue: {
    fontSize: "2rem",
    fontWeight: "800",
    color: "#FFFFFF"
  },
  growthBadge: {
    fontSize: "0.7rem",
    color: "#10B981",
    backgroundColor: "rgba(16, 185, 129, 0.1)",
    border: "1px solid #10B981",
    padding: "4px 8px",
    borderRadius: "4px",
    fontWeight: "700"
  },
  sparkGraph: {
    display: "flex",
    alignItems: "flex-end",
    gap: "6px",
    height: "45px",
    marginTop: "5px"
  },
  graphBar: {
    flexGrow: 1,
    borderRadius: "2px"
  },
  blockHeaderTitle: {
    fontSize: "0.8rem",
    fontWeight: "700",
    color: "#8D99AE",
    textTransform: "uppercase",
    letterSpacing: "1px",
    display: "block",
    marginBottom: "4px"
  },
  tripsTable: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "8px"
  },
  tableRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 20px",
    backgroundColor: "#0A0F1D",
    border: "1px solid #1C2541",
    borderRadius: "8px",
    fontSize: "0.85rem"
  },
  dashedDividerRoute: {
    flexGrow: 1,
    textAlign: "center",
    color: "#8D99AE",
    fontSize: "0.75rem",
    borderBottom: "1px dashed #1C2541",
    margin: "0 25px",
    lineHeight: "0.1rem"
  },
  tableMetaText: {
    color: "#8D99AE",
    fontSize: "0.8rem",
    marginLeft: "20px",
    marginRight: "20px"
  },
  statusPill: {
    padding: "6px 14px",
    borderRadius: "4px",
    fontSize: "0.75rem",
    fontWeight: "700",
    minWidth: "80px",
    textAlign: "center"
  },
  vehicleSpecGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginTop: "12px"
  },
  specLabel: {
    fontSize: "0.65rem",
    color: "#8D99AE",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  },
  specValue: {
    margin: "4px 0 0 0",
    fontSize: "0.85rem",
    fontWeight: "700",
    color: "#FFFFFF"
  },
  assetFooterEmoji: {
    fontSize: "0.8rem",
    color: "#8D99AE",
    borderTop: "1px solid #1C2541",
    paddingTop: "12px",
    marginTop: "8px",
    fontWeight: "600"
  },

  // Premium Dispatch Chat Sub-Layout Styles 
  chatHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #1C2541",
    paddingBottom: "12px"
  },
  activeContactBadge: {
    backgroundColor: "#0A0F1D",
    border: "1px solid #1C2541",
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "0.75rem",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "600"
  },
  onlinePulse: {
    width: "8px",
    height: "8px",
    backgroundColor: "#10B981",
    borderRadius: "50%",
    display: "inline-block",
    boxShadow: "0 0 8px #10B981"
  },
  chatMessageWindow: {
    backgroundColor: "#0A0F1D",
    border: "1px solid #1C2541",
    borderRadius: "8px",
    padding: "16px",
    height: "180px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "14px"
  },
  chatRow: {
    display: "flex",
    width: "100%"
  },
  chatMetaName: {
    fontSize: "0.7rem",
    fontWeight: "700",
    color: "#00F0FF",
    marginBottom: "4px"
  },
  chatBubbleBase: {
    padding: "10px 14px",
    borderRadius: "8px",
    fontSize: "0.82rem",
    lineHeight: "1.4"
  },
  chatBubbleShipper: {
    backgroundColor: "#1F2937",
    color: "#FFFFFF",
    borderLeft: "3px solid #8D99AE"
  },
  chatBubbleDriver: {
    backgroundColor: "#2563EB",
    color: "#FFFFFF",
    borderRight: "3px solid #00F0FF"
  },
  chatInputArea: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    marginTop: "4px"
  },
  chatAttachBtn: {
    backgroundColor: "#1F2937",
    border: "1px solid #1C2541",
    color: "#FFFFFF",
    borderRadius: "6px",
    width: "42px",
    height: "42px",
    cursor: "pointer",
    fontSize: "1.1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.2s"
  },
  chatInputField: {
    flexGrow: 1,
    backgroundColor: "#0A0F1D",
    border: "1px solid #1C2541",
    borderRadius: "6px",
    padding: "0 16px",
    height: "42px",
    color: "#FFFFFF",
    fontSize: "0.85rem",
    outline: "none"
  },
  chatSendBtn: {
    backgroundColor: "#2563EB",
    border: "none",
    color: "#FFFFFF",
    borderRadius: "6px",
    padding: "0 18px",
    height: "42px",
    fontWeight: "700",
    fontSize: "0.85rem",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.2)",
    transition: "opacity 0.2s"
  }
};

export default DriverDashboard;