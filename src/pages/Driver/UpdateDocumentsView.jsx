import React, { useState } from "react";

export default function UpdateDocumentsView() {
  const [documents, setDocuments] = useState({
    licenseNumber: localStorage.getItem("driver_signup_license") || "DL-IND-TN04-2026",
    vehicleReg: localStorage.getItem("driver_signup_vehicle") || "TN-04-AX-2026",
    licenseExpiry: "2031-11-14",
    insuranceActive: true
  });

  const [message, setMessage] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    // Save updated credentials back to local storage
    localStorage.setItem("driver_signup_license", documents.licenseNumber);
    localStorage.setItem("driver_signup_vehicle", documents.vehicleReg);
    
    setMessage("✅ Verification assets sent! Compliance review pending.");
    setTimeout(() => setMessage(""), 4000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>📂 Document Lifecycle & Compliance Management</h2>
        <p style={styles.subtitle}>Modify registration parameters, renew expired permits, or refresh commercial vehicle asset profiles.</p>
        
        {message && <div style={styles.successAlert}>{message}</div>}

        <form onSubmit={handleUpdate} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Commercial Driving License (CDL) Number</label>
            <input 
              type="text" 
              value={documents.licenseNumber}
              onChange={(e) => setDocuments({...documents, licenseNumber: e.target.value})}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Active Commercial License Plate</label>
            <input 
              type="text" 
              value={documents.vehicleReg}
              onChange={(e) => setDocuments({...documents, vehicleReg: e.target.value})}
              style={styles.input}
            />
          </div>

          <div style={styles.row}>
            <div style={{...styles.inputGroup, flex: 1}}>
              <label style={styles.label}>CDL Expiration Date</label>
              <input 
                type="date" 
                value={documents.licenseExpiry}
                onChange={(e) => setDocuments({...documents, licenseExpiry: e.target.value})}
                style={styles.input}
              />
            </div>
            
            <div style={{...styles.inputGroup, flex: 1}}>
              <label style={styles.label}>Liability Insurance Ledger</label>
              <div style={styles.statusBadge}>
                <span style={styles.statusDot}></span> Valid & Active Policy
              </div>
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Upload Updated Document Asset (PDF, JPEG)</label>
            <input type="file" style={styles.fileInput} />
          </div>

          <button type="submit" style={styles.submitBtn}>Submit for Compliance Review</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "10px 0", display: "flex", justifyContent: "center" },
  card: { backgroundColor: "#111827", border: "1px solid #1C2541", borderRadius: "10px", padding: "30px", width: "100%", maxWidth: "600px", boxSizing: "border-box" },
  title: { fontSize: "1.2rem", color: "#FFFFFF", margin: "0 0 8px 0" },
  subtitle: { fontSize: "0.85rem", color: "#8D99AE", margin: "0 0 20px 0", lineHeight: "1.4" },
  form: { display: "flex", flexDirection: "column", gap: "16px" },
  inputGroup: { display: "flex", flexDirection: "column", gap: "6px" },
  label: { fontSize: "0.8rem", color: "#9CA3AF", fontWeight: "600" },
  input: { backgroundColor: "#1F2937", border: "1px solid #374151", borderRadius: "6px", padding: "10px 14px", color: "#FFFFFF", fontSize: "0.9rem" },
  row: { display: "flex", gap: "16px" },
  statusBadge: { backgroundColor: "rgba(16, 185, 129, 0.1)", border: "1px solid #10B981", borderRadius: "6px", color: "#10B981", height: "42px", display: "flex", alignItems: "center", padding: "0 14px", fontSize: "0.85rem", fontWeight: "600", boxSizing: "border-box" },
  statusDot: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10B981", marginRight: "8px" },
  fileInput: { backgroundColor: "rgba(31, 41, 55, 0.4)", border: "1px dashed #374151", borderRadius: "6px", padding: "15px", color: "#9CA3AF", fontSize: "0.8rem", cursor: "pointer" },
  submitBtn: { backgroundColor: "#2563EB", border: "none", color: "#FFFFFF", padding: "12px", borderRadius: "6px", fontWeight: "700", cursor: "pointer", fontSize: "0.9rem", transition: "background-color 0.2s" },
  successAlert: { backgroundColor: "rgba(16, 185, 129, 0.15)", border: "1px solid #10B981", color: "#10B981", padding: "12px", borderRadius: "6px", fontSize: "0.85rem", fontWeight: "600", marginBottom: "10px" }
};