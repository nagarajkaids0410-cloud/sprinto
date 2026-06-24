import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IndividualRegistration() {
  const navigate = useNavigate();
  const [photoPreview, setPhotoPreview] = useState(null);
  
  // Form State Values Mapping
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    licenseNumber: "",
    dob: "",
    address: "",
    state: "",
    nationality: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleNextSubmit = (e) => {
    e.preventDefault();
    console.log("Saving Driver Payload data...", formData);
    
    // Redirects directly to the brand-new vehicle type selection dashboard view
    navigate("/select-vehicle");
  };

  return (
    <div style={styles.container}>
      <div style={styles.brandWrapper}>
        <span style={{ fontSize: "2rem" }}>🚛</span>
        <h1 style={styles.brandName}>Sprinto Fleet</h1>
        <p style={styles.brandSubtitle}>DRIVER INDUCTION PROFILE FORM</p>
      </div>

      <form onSubmit={handleNextSubmit} style={styles.card}>
        <h2 style={styles.cardTitle}>Complete Individual Profile</h2>
        <p style={styles.cardSubtitle}>Provide authentic telemetry details and license identification to initialize your driver panel.</p>

        {/* 1. UPLOADABLE PHOTO SECTION */}
        <div style={styles.photoContainer}>
          <label style={styles.photoBox}>
            {photoPreview ? (
              <img src={photoPreview} alt="Preview" style={styles.imagePreview} />
            ) : (
              <div style={styles.photoPlaceholder}>
                <span style={{ fontSize: "2rem" }}>📸</span>
                <span style={{ fontSize: "0.75rem", color: "#00F0FF", fontWeight: 600 }}>UPLOAD PHOTO</span>
              </div>
            )}
            <input 
              type="file" 
              accept="image/*" 
              onChange={handlePhotoChange} 
              style={{ display: "none" }} 
            />
          </label>
        </div>

        {/* 2. PROFILE GRID FIELDS */}
        <div style={styles.grid}>
          <div style={styles.fieldBlock}>
            <label style={styles.label}>Full Legal Name</label>
            <input type="text" name="name" required style={styles.input} placeholder="Captain Nagaraj" onChange={handleInputChange} />
          </div>

          <div style={styles.fieldBlock}>
            <label style={styles.label}>Phone Number</label>
            <input type="tel" name="phone" required style={styles.input} placeholder="+91 XXXXX XXXXX" onChange={handleInputChange} />
          </div>

          <div style={styles.fieldBlock}>
            <label style={styles.label}>Commercial License Number</label>
            <input type="text" name="licenseNumber" required style={styles.input} placeholder="DL-IND-TN04..." onChange={handleInputChange} />
          </div>

          <div style={styles.fieldBlock}>
            <label style={styles.label}>Date of Birth (DOB)</label>
            <input type="date" name="dob" required style={styles.input} onChange={handleInputChange} />
          </div>

          <div style={{ ...styles.fieldBlock, gridColumn: "1 / span 2" }}>
            <label style={styles.label}>Residential Address</label>
            <input type="text" name="address" required style={styles.input} placeholder="Door No, Street Name, City Area" onChange={handleInputChange} />
          </div>

          <div style={styles.fieldBlock}>
            <label style={styles.label}>State Region</label>
            <input type="text" name="state" required style={styles.input} placeholder="Tamil Nadu" onChange={handleInputChange} />
          </div>

          <div style={styles.fieldBlock}>
            <label style={styles.label}>Nationality</label>
            <input type="text" name="nationality" required style={styles.input} placeholder="Indian" onChange={handleInputChange} />
          </div>
        </div>

        {/* Persistent Bottom-Right Action Control */}
        <button type="submit" style={styles.nextButton}>
          Next Step ➔
        </button>
      </form>
    </div>
  );
}

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
    padding: "40px 0",
    boxSizing: "border-box"
  },
  brandWrapper: { textAlign: "center", marginBottom: "20px" },
  brandName: { fontSize: "2rem", fontWeight: "800", letterSpacing: "2px", margin: "5px 0 2px 0" },
  brandSubtitle: { fontSize: "0.75rem", color: "#00F0FF", letterSpacing: "1px", margin: 0 },
  card: {
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    borderRadius: "12px",
    padding: "35px 40px 85px 40px",
    width: "650px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    position: "relative",
    boxSizing: "border-box"
  },
  cardTitle: { fontSize: "1.3rem", margin: "0 0 6px 0", fontWeight: "700", textAlign: "center" },
  cardSubtitle: { fontSize: "0.8rem", color: "#9CA3AF", margin: "0 0 25px 0", lineHeight: "1.4", textAlign: "center" },
  photoContainer: { display: "flex", justifyContent: "center", marginBottom: "25px" },
  photoBox: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "2px dashed #3A506B",
    backgroundColor: "#1F2937",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    overflow: "hidden",
    transition: "border-color 0.2s ease"
  },
  photoPlaceholder: { display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" },
  imagePreview: { width: "100%", height: "100%", objectFit: "cover" },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px 20px" },
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
  nextButton: {
    position: "absolute",
    bottom: "25px",
    right: "40px",
    backgroundColor: "#2563EB",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "6px",
    padding: "12px 26px",
    fontSize: "0.9rem",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(37, 99, 235, 0.4)"
  }
};