import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AgencyRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    cinNo: "", 
    fleetSize: "1-5",
    contactEmail: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enterprise Provision Payload: ", formData);
    // Proceed seamlessly to the agency fleet layout or verification step
    navigate("/agency/dashboard"); 
  };

  return (
    <div style={formStyles.viewportContainer}>
      <div style={formStyles.formWrapperCard}>
        <div style={formStyles.headerGroup}>
          <span style={{ fontSize: "2.5rem" }}>🏢</span>
          <h2 style={formStyles.titleText}>Agency Profile Node</h2>
          <p style={formStyles.subtitleText}>
            Provision your organizational workspace variables to manage distributed drivers and load dispatches.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={formStyles.formLayout}>
          <div style={formStyles.fieldGroup}>
            <label style={formStyles.inputLabel}>LEGAL ENTERPRISE NAME</label>
            <input 
              type="text" 
              placeholder="e.g., Adani Logistics Group" 
              style={formStyles.textInput}
              required
              value={formData.companyName}
              onChange={(e) => setFormData({...formData, companyName: e.target.value})}
            />
          </div>

          <div style={formStyles.fieldGroup}>
            <label style={formStyles.inputLabel}>GSTIN / CORPORATE IDENTIFICATION NO (CIN)</label>
            <input 
              type="text" 
              placeholder="U60231TN2026PTC123456" 
              style={formStyles.textInput}
              required
              value={formData.cinNo}
              onChange={(e) => setFormData({...formData, cinNo: e.target.value})}
            />
          </div>

          <div style={formStyles.fieldGroup}>
            <label style={formStyles.inputLabel}>MANAGED COMMERCIAL FLEET CAPACITY</label>
            <select 
              style={formStyles.selectorStyle}
              value={formData.fleetSize}
              onChange={(e) => setFormData({...formData, fleetSize: e.target.value})}
            >
              <option value="1-5">1 - 5 Freight Assets</option>
              <option value="6-20">6 - 20 Multi-Axle Vehicles</option>
              <option value="21-100">21 - 100 Industrial Carriers</option>
              <option value="100+">100+ Enterprise Fleet Networks</option>
            </select>
          </div>

          <div style={formStyles.fieldGroup}>
            <label style={formStyles.inputLabel}>DISPATCH PANEL CONTROL EMAIL</label>
            <input 
              type="email" 
              placeholder="operations@fleetgroup.com" 
              style={formStyles.textInput}
              required
              value={formData.contactEmail}
              onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
            />
          </div>

          <div style={formStyles.fieldGroup}>
            <label style={formStyles.inputLabel}>SYSTEM SECURE ENTRY PASSWORD</label>
            <input 
              type="password" 
              placeholder="••••••••••••" 
              style={formStyles.textInput}
              required
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button type="submit" style={formStyles.submitBtn}>
            Generate Corporate Account Node ➔
          </button>
        </form>
      </div>
    </div>
  );
}

const formStyles = {
  viewportContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",  
    width: "100vw",
    height: "100vh",           
    backgroundColor: "#0A0F1D",
    padding: "60px 20px",       
    boxSizing: "border-box",
    color: "#FFFFFF",
    fontFamily: "'Segoe UI', sans-serif",
    overflowY: "auto"           
  },
  formWrapperCard: {
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    borderRadius: "12px",
    padding: "40px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
    boxSizing: "border-box",
    margin: "auto"
  },
  headerGroup: {
    textAlign: "center",
    marginBottom: "28px"
  },
  titleText: {
    margin: "10px 0 4px 0",
    fontSize: "1.35rem",
    fontWeight: "700",
    color: "#EAAA08", 
    letterSpacing: "0.5px"
  },
  subtitleText: {
    margin: 0,
    fontSize: "0.82rem",
    color: "#9CA3AF",
    lineHeight: "1.4"
  },
  formLayout: {
    display: "flex",
    flexDirection: "column",
    gap: "18px"
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px"
  },
  inputLabel: {
    fontSize: "0.68rem",
    color: "#8D99AE",
    fontWeight: "700",
    letterSpacing: "0.5px"
  },
  textInput: {
    backgroundColor: "#0A0F1D",
    border: "1px solid #1C2541",
    color: "#FFFFFF",
    padding: "12px 14px",
    borderRadius: "6px",
    fontSize: "0.88rem",
    outline: "none",
    boxSizing: "border-box",
    width: "100%"
  },
  selectorStyle: {
    backgroundColor: "#0A0F1D",
    border: "1px solid #1C2541",
    color: "#FFFFFF",
    padding: "12px 14px",
    borderRadius: "6px",
    fontSize: "0.88rem",
    outline: "none",
    width: "100%"
  },
  submitBtn: {
    backgroundColor: "#D97706", 
    color: "#FFFFFF",
    border: "none",
    padding: "14px",
    borderRadius: "6px",
    fontWeight: "700",
    fontSize: "0.92rem",
    cursor: "pointer",
    marginTop: "8px",
    boxShadow: "0 4px 12px rgba(217, 119, 6, 0.3)",
    transition: "all 0.15s ease"
  }
};