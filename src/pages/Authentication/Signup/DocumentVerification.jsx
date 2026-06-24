import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DocumentVerification() {
  const navigate = useNavigate();
  
  // Track attached file status names for UI feedback
  const [attachments, setAttachments] = useState({
    licenseFile: null,
    idFile: null,
    permitFile: null,
    insuranceFile: null,
    fitnessFile: null
  });

  const [formData, setFormData] = useState({
    licenseNo: "",
    vehicleNo: "",
    idCardNo: "", // Handles PAN or alternative National IDs securely
    permitNo: "",
    insuranceNo: "",
    fitnessNo: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e, fileKey) => {
    const file = e.target.files[0];
    if (file) {
      setAttachments({ ...attachments, [fileKey]: file.name });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Documents Submitted. Activating Driver Profile...");
    
    // Smoothly redirect the driver directly into their active console dashboard
    navigate("/driver/dashboard");
  };

  return (
    <div style={styles.container}>
      {/* Brand Header */}
      <div style={styles.brandWrapper}>
        <span style={{ fontSize: "2rem" }}>🚛</span>
        <h1 style={styles.brandName}>Sprinto Fleet</h1>
        <p style={styles.brandSubtitle}>REGULATORY COMPLIANCE VAULT</p>
      </div>

      {/* Main Form Box */}
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2 style={styles.cardTitle}>Upload Operational Credentials</h2>
        <p style={styles.cardSubtitle}>
          Provide structural compliance metrics and legal credentials to activate your regional load board matching engine.
        </p>

        <div style={styles.grid}>
          {/* 1. DRIVING LICENSE */}
          <div style={styles.fieldBlock}>
            <label style={styles.label}>Driving License Number</label>
            <input type="text" name="licenseNo" required style={styles.input} placeholder="DL-XXXXXXXXXXXX" onChange={handleInputChange} />
            <label style={styles.uploadBtn}>
              📁 {attachments.licenseFile ? `Attached: ${attachments.licenseFile.substring(0, 15)}...` : "Upload License Copy"}
              <input type="file" required style={{ display: "none" }} onChange={(e) => handleFileUpload(e, "licenseFile")} />
            </label>
          </div>

          {/* 2. VEHICLE NUMBER */}
          <div style={styles.fieldBlock}>
            <label style={styles.label}>Vehicle Number</label>
            <input type="text" name="vehicleNo" required style={styles.input} placeholder="TN-04-AX-2026" onChange={handleInputChange} />
            <div style={{ height: "38px" }} /> {/* Visual padding matching upload layouts */}
          </div>

          {/* 3. AADHAAR OR PAN */}
          <div style={styles.fieldBlock}>
            <label style={styles.label}>National Identity (Aadhaar / PAN)</label>
            <input type="text" name="idCardNo" required style={styles.input} placeholder="Enter ID Document Number" onChange={handleInputChange} />
            <label style={styles.uploadBtn}>
              📁 {attachments.idFile ? `Attached: ${attachments.idFile.substring(0, 15)}...` : "Upload Identity Copy"}
              <input type="file" required style={{ display: "none" }} onChange={(e) => handleFileUpload(e, "idFile")} />
            </label>
          </div>

          {/* 4. PERMIT */}
          <div style={styles.fieldBlock}>
            <label style={styles.label}>National / State Transit Permit</label>
            <input type="text" name="permitNo" required style={styles.input} placeholder="PERMIT-XXXXXX" onChange={handleInputChange} />
            <label style={styles.uploadBtn}>
              📁 {attachments.permitFile ? `Attached: ${attachments.permitFile.substring(0, 15)}...` : "Upload Permit Doc"}
              <input type="file" required style={{ display: "none" }} onChange={(e) => handleFileUpload(e, "permitFile")} />
            </label>
          </div>

          {/* 5. INSURANCE */}
          <div style={styles.fieldBlock}>
            <label style={styles.label}>Commercial Vehicle Insurance</label>
            <input type="text" name="insuranceNo" required style={styles.input} placeholder="INS-POL-XXXXXX" onChange={handleInputChange} />
            <label style={styles.uploadBtn}>
              📁 {attachments.insuranceFile ? `Attached: ${attachments.insuranceFile.substring(0, 15)}...` : "Upload Insurance Copy"}
              <input type="file" required style={{ display: "none" }} onChange={(e) => handleFileUpload(e, "insuranceFile")} />
            </label>
          </div>

          {/* 6. FITNESS CERTIFICATE */}
          <div style={styles.fieldBlock}>
            <label style={styles.label}>Vehicle Fitness Certificate (FC)</label>
            <input type="text" name="fitnessNo" required style={styles.input} placeholder="FC-EXP-YYYY" onChange={handleInputChange} />
            <label style={styles.uploadBtn}>
              📁 {attachments.fitnessFile ? `Attached: ${attachments.fitnessFile.substring(0, 15)}...` : "Upload Fitness Copy"}
              <input type="file" required style={{ display: "none" }} onChange={(e) => handleFileUpload(e, "fitnessFile")} />
            </label>
          </div>
        </div>

        {/* Persistent Bottom-Right Complete Trigger Button */}
        <button type="submit" style={styles.nextButton}>
          Complete Registration ✓
        </button>
      </form>
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
    overflowY: "auto",
    padding: "30px 0",
    boxSizing: "border-box"
  },
  brandWrapper: { textAlign: "center", marginBottom: "15px" },
  brandName: { fontSize: "2rem", fontWeight: "800", letterSpacing: "2px", margin: "5px 0 2px 0" },
  brandSubtitle: { fontSize: "0.75rem", color: "#00F0FF", letterSpacing: "1px", margin: 0 },
  card: {
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    borderRadius: "12px",
    padding: "35px 40px 85px 40px",
    width: "740px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    position: "relative",
    boxSizing: "border-box"
  },
  cardTitle: { fontSize: "1.3rem", margin: "0 0 6px 0", fontWeight: "700", textAlign: "center" },
  cardSubtitle: { fontSize: "0.8rem", color: "#9CA3AF", margin: "0 0 25px 0", lineHeight: "1.4", textAlign: "center" },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px 24px"
  },
  fieldBlock: { display: "flex", flexDirection: "column", gap: "6px" },
  label: { fontSize: "0.8rem", fontWeight: "600", color: "#9CA3AF", letterSpacing: "0.5px" },
  input: {
    backgroundColor: "#1F2937",
    border: "1px solid #374151",
    borderRadius: "6px",
    padding: "11px 14px",
    color: "#FFFFFF",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s ease"
  },
  uploadBtn: {
    backgroundColor: "#1C2541",
    border: "1px dashed #00F0FF",
    color: "#00F0FF",
    borderRadius: "6px",
    padding: "10px",
    fontSize: "0.8rem",
    fontWeight: "700",
    textAlign: "center",
    cursor: "pointer",
    marginTop: "4px",
    transition: "background-color 0.2s ease"
  },
  nextButton: {
    position: "absolute",
    bottom: "25px",
    right: "40px",
    backgroundColor: "#10B981", // Soft emerald green to indicate final onboarding task completion
    color: "#FFFFFF",
    border: "none",
    borderRadius: "6px",
    padding: "12px 26px",
    fontSize: "0.9rem",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(16, 185, 129, 0.4)"
  }
};