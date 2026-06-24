import React, { useState } from "react";

export default function ReportsView() {
  const [reportType, setReportType] = useState("delay");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Mock historical performance metrics
  const analyticsData = {
    fuelEfficiency: "3.8 km/L",
    safetyScore: "94/100",
    ontimeRate: "98.2%",
    totalHoursLogged: "142h"
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return;

    setIsSubmitting(true);
    
    // Simulate telemetry sync to shipper dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("SUCCESS • REPORT TRANSMITTED");
      setDescription("");
      setTimeout(() => setSubmitStatus(null), 4000);
    }, 1500);
  };

  return (
    <div style={reportStyles.container}>
      {/* HEADER SECTION */}
      <div style={reportStyles.headerRow}>
        <div>
          <h2 style={reportStyles.viewTitle}>📈 OPERATIONAL PERFORMANCE & INCIDENT REPORTING</h2>
          <p style={reportStyles.viewSubtitle}>
            Review safety telemetry vectors and transmit real-time log exceptions directly to fleet management.
          </p>
        </div>
      </div>

      {/* TWO COLUMN CONTENT GRID */}
      <div style={reportStyles.workspaceGrid}>
        
        {/* LEFT COLUMN: PERFORMANCE MATRIX METRICS */}
        <div style={reportStyles.card}>
          <h3 style={reportStyles.blockHeaderTitle}>📊 TELEMETRY ANALYTICS MATRIX</h3>
          
          <div style={reportStyles.metricsMiniGrid}>
            <div style={reportStyles.metricSubBox}>
              <span style={reportStyles.miniLabel}>AVG FUEL EFFICIENCY</span>
              <p style={{ ...reportStyles.miniValue, color: "#10B981" }}>{analyticsData.fuelEfficiency}</p>
            </div>
            <div style={reportStyles.metricSubBox}>
              <span style={reportStyles.miniLabel}>SAFETY SCORE CRITERIA</span>
              <p style={{ ...reportStyles.miniValue, color: "#00F0FF" }}>{analyticsData.safetyScore}</p>
            </div>
            <div style={reportStyles.metricSubBox}>
              <span style={reportStyles.miniLabel}>ON-TIME DELIVERY RATE</span>
              <p style={{ ...reportStyles.miniValue, color: "#2563EB" }}>{analyticsData.ontimeRate}</p>
            </div>
            <div style={reportStyles.metricSubBox}>
              <span style={reportStyles.miniLabel}>TOTAL DUTY DRIVEN (YTD)</span>
              <p style={reportStyles.miniValue}>{analyticsData.totalHoursLogged}</p>
            </div>
          </div>

          {/* Graphical Progress Bar Breakdown */}
          <div style={reportStyles.efficiencySection}>
            <div style={reportStyles.efficiencyLabels}>
              <span>ECO-DRIVING VECTOR STATUS</span>
              <span style={{ color: "#10B981" }}>OPTIMAL PERFORMANCE</span>
            </div>
            <div style={reportStyles.barTrack}>
              <div style={{ ...reportStyles.barFill, width: "88%" }}></div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE DISPATCH REPORT FORM */}
        <div style={reportStyles.card}>
          <h3 style={reportStyles.blockHeaderTitle}>🚨 TRANSMIT EXCEPTION REPORT</h3>
          
          <form onSubmit={handleReportSubmit} style={reportStyles.formLayout}>
            <div style={reportStyles.fieldGroup}>
              <label style={reportStyles.inputLabel}>EXCEPTION CATEGORY</label>
              <select 
                value={reportType} 
                onChange={(e) => setReportType(e.target.value)}
                style={reportStyles.selectorStyle}
              >
                <option value="delay">Traffic / Border Checkpoint Delay</option>
                <option value="mechanical">Mechanical Fault / Breakdowns</option>
                <option value="cargo">Cargo Manifest Discrepancy</option>
                <option value="weather">Extreme Meteorological Obstruction</option>
              </select>
            </div>

            <div style={reportStyles.fieldGroup}>
              <label style={reportStyles.inputLabel}>SITUATIONAL DESCRIPTION LOG</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="State precise reason for exception clearance or route deviation logs..."
                style={reportStyles.textareaStyle}
                rows="4"
                required
              />
            </div>

            <button 
              type="submit" 
              style={reportStyles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? "⚡ Encrypting & Sending..." : "🚀 Transmit Log to Dispatch"}
            </button>

            {submitStatus && (
              <div style={reportStyles.statusNotificationAlert}>
                {submitStatus}
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}

const reportStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    flexGrow: 1
  },
  headerRow: {
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    padding: "20px 24px",
    borderRadius: "12px"
  },
  viewTitle: {
    margin: 0,
    fontSize: "1.2rem",
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: "0.5px"
  },
  viewSubtitle: {
    margin: "4px 0 0 0",
    fontSize: "0.85rem",
    color: "#8D99AE"
  },
  workspaceGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px"
  },
  card: {
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    borderRadius: "12px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  blockHeaderTitle: {
    margin: 0,
    fontSize: "0.8rem",
    fontWeight: "700",
    color: "#8D99AE",
    textTransform: "uppercase",
    letterSpacing: "1px"
  },
  metricsMiniGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px"
  },
  metricSubBox: {
    backgroundColor: "#0A0F1D",
    border: "1px solid #1C2541",
    padding: "16px",
    borderRadius: "8px"
  },
  miniLabel: {
    fontSize: "0.65rem",
    color: "#8D99AE",
    fontWeight: "700",
    letterSpacing: "0.5px"
  },
  miniValue: {
    margin: "6px 0 0 0",
    fontSize: "1.3rem",
    fontWeight: "800",
    color: "#FFFFFF"
  },
  efficiencySection: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginTop: "10px"
  },
  efficiencyLabels: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.7rem",
    fontWeight: "700",
    color: "#8D99AE"
  },
  barTrack: {
    height: "6px",
    backgroundColor: "#0A0F1D",
    borderRadius: "3px",
    overflow: "hidden"
  },
  barFill: {
    height: "100%",
    backgroundColor: "#10B981",
    borderRadius: "3px"
  },
  formLayout: {
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  inputLabel: {
    fontSize: "0.68rem",
    color: "#8D99AE",
    fontWeight: "700",
    letterSpacing: "0.5px"
  },
  selectorStyle: {
    backgroundColor: "#0A0F1D",
    border: "1px solid #1C2541",
    color: "#FFFFFF",
    padding: "12px",
    borderRadius: "6px",
    fontSize: "0.85rem",
    outline: "none"
  },
  textareaStyle: {
    backgroundColor: "#0A0F1D",
    border: "1px solid #1C2541",
    color: "#FFFFFF",
    padding: "12px",
    borderRadius: "6px",
    fontSize: "0.85rem",
    outline: "none",
    resize: "none",
    fontFamily: "inherit"
  },
  submitBtn: {
    backgroundColor: "#EF4444",
    color: "#FFFFFF",
    border: "none",
    padding: "14px",
    borderRadius: "6px",
    fontWeight: "700",
    fontSize: "0.85rem",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(239, 68, 68, 0.2)"
  },
  statusNotificationAlert: {
    backgroundColor: "rgba(16, 185, 129, 0.1)",
    border: "1px solid #10B981",
    color: "#10B981",
    padding: "10px",
    borderRadius: "6px",
    textAlign: "center",
    fontSize: "0.8rem",
    fontWeight: "700",
    letterSpacing: "0.5px"
  }
};