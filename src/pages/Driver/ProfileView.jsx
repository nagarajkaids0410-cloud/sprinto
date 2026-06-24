import React, { useState } from "react";

export default function ProfileView() {
  // Mocking data that would normally fetch from your signup context/backend database
  const [driverProfile, setDriverProfile] = useState({
    // Recovers the uploaded asset image or falls back to a clean driver avatar icon
    photoUrl: localStorage.getItem("driver_signup_photo") || null, 
    fullName: localStorage.getItem("driver_signup_name") || "Captain Nagaraj",
    rating: 4.92,
    lifetimeTrips: 1428,
    joinDate: "March 2024",
    languages: ["English", "Tamil", "Hindi"],
    licenseNo: localStorage.getItem("driver_signup_license") || "DL-IND-TN04-2026",
    vehicleNo: localStorage.getItem("driver_signup_vehicle") || "TN-04-AX-2026"
  });

  // Extract the first name cleanly for consumer profile displays
  const getFirstName = (nameString) => {
    return nameString.split(" ")[0];
  };

  return (
    <div style={styles.viewContainer}>
      <div style={styles.card}>
        
        {/* HEADER HERO AREA */}
        <div style={styles.profileHeader}>
          <div style={styles.imageWrapper}>
            {driverProfile.photoUrl ? (
              <img 
                src={driverProfile.photoUrl} 
                alt="Driver Profile" 
                style={styles.profileImg} 
              />
            ) : (
              <div style={styles.avatarPlaceholder}>👨‍✈️</div>
            )}
            <div style={styles.activeBadge} title="Active Online Status" />
          </div>

          <h2 style={styles.driverName}>
            Welcome back, {getFirstName(driverProfile.fullName)}!
          </h2>
          <p style={styles.legalSubtext}>Official Corporate Account: {driverProfile.fullName}</p>
        </div>

        <hr style={styles.divider} />

        {/* METRICS ROW PERFORMANCE STATUS */}
        <div style={styles.metricsGrid}>
          <div style={styles.metricBlock}>
            <span style={styles.metricIcon}>⭐</span>
            <div style={styles.metricData}>
              <span style={styles.metricValue}>{driverProfile.rating}</span>
              <span style={styles.metricLabel}>User Rating</span>
            </div>
          </div>

          <div style={styles.metricBlock}>
            <span style={styles.metricIcon}>📦</span>
            <div style={styles.metricData}>
              <span style={styles.metricValue}>{driverProfile.lifetimeTrips}</span>
              <span style={styles.metricLabel}>Lifetime Transits</span>
            </div>
          </div>

          <div style={styles.metricBlock}>
            <span style={styles.metricIcon}>⏳</span>
            <div style={styles.metricData}>
              <span style={styles.metricValue}>{driverProfile.joinDate}</span>
              <span style={styles.metricLabel}>Driver Since</span>
            </div>
          </div>
        </div>

        <hr style={styles.divider} />

        {/* DETAILED INFORMATION CREDENTIAL MODULES */}
        <div style={styles.detailsSection}>
          <h3 style={styles.sectionTitle}>Operational Demographics</h3>
          
          <div style={styles.infoRow}>
            <span style={styles.infoLabel}>Communication Preferences</span>
            <div style={styles.tagWrapper}>
              {driverProfile.languages.map((lang, index) => (
                <span key={index} style={styles.langTag}>{lang}</span>
              ))}
            </div>
          </div>

          <div style={styles.infoRow}>
            <span style={styles.infoLabel}>Active Registry Vehicle</span>
            <span style={styles.infoValue}>{driverProfile.vehicleNo}</span>
          </div>

          <div style={styles.infoRow}>
            <span style={styles.infoLabel}>Commercial Permit License</span>
            <span style={styles.infoValueCode}>{driverProfile.licenseNo}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

// Design Sheet Specifications Object 
const styles = {
  viewContainer: {
    padding: "20px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    borderRadius: "12px",
    padding: "40px",
    width: "560px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    boxSizing: "border-box"
  },
  profileHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },
  imageWrapper: {
    position: "relative",
    width: "110px",
    height: "110px",
    marginBottom: "16px"
  },
  profileImg: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #00F0FF"
  },
  avatarPlaceholder: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundColor: "#1F2937",
    border: "2px dashed #374151",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem"
  },
  activeBadge: {
    position: "absolute",
    bottom: "4px",
    right: "4px",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: "#10B981",
    border: "3px solid #111827",
    boxShadow: "0 0 10px #10B981"
  },
  driverName: {
    fontSize: "1.6rem",
    fontWeight: "700",
    margin: "0 0 4px 0",
    color: "#FFFFFF",
    letterSpacing: "0.5px"
  },
  legalSubtext: {
    fontSize: "0.8rem",
    color: "#9CA3AF",
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: "1px"
  },
  divider: {
    border: "none",
    borderTop: "1px solid #1C2541",
    margin: "25px 0"
  },
  metricsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "10px",
    textAlign: "center"
  },
  metricBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#1F2937",
    padding: "12px 6px",
    borderRadius: "8px",
    border: "1px solid #374151"
  },
  metricIcon: {
    fontSize: "1.3rem",
    marginBottom: "6px"
  },
  metricData: {
    display: "flex",
    flexDirection: "column"
  },
  metricValue: {
    fontSize: "1.1rem",
    fontWeight: "800",
    color: "#00F0FF"
  },
  metricLabel: {
    fontSize: "0.7rem",
    color: "#9CA3AF",
    marginTop: "2px",
    fontWeight: "600"
  },
  detailsSection: {
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },
  sectionTitle: {
    fontSize: "1rem",
    fontWeight: "700",
    margin: "0 0 4px 0",
    color: "#FFFFFF",
    letterSpacing: "0.5px"
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(31, 41, 55, 0.4)",
    padding: "12px 16px",
    borderRadius: "6px",
    border: "1px solid rgba(55, 65, 81, 0.5)"
  },
  infoLabel: {
    fontSize: "0.8rem",
    color: "#9CA3AF",
    fontWeight: "600"
  },
  infoValue: {
    fontSize: "0.85rem",
    color: "#FFFFFF",
    fontWeight: "700"
  },
  infoValueCode: {
    fontSize: "0.8rem",
    color: "#00F0FF",
    fontFamily: "monospace",
    fontWeight: "700"
  },
  tagWrapper: {
    display: "flex",
    gap: "6px"
  },
  langTag: {
    backgroundColor: "#1C2541",
    border: "1px solid #2563EB",
    color: "#FFFFFF",
    fontSize: "0.75rem",
    fontWeight: "700",
    padding: "3px 10px",
    borderRadius: "4px"
  }
};