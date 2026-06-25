import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LanguageSelection() {
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState("en");

  // Navigate to the next onboarding phase (Account Type Selection)
  const handleNext = () => {
    navigate("/account-type");
  };

  const languages = [
    { code: "en", label: "English", subLabel: "System Default", icon: "🔠" },
    { code: "hi", label: "हिन्दी", subLabel: "Hindi", icon: "🇮🇳" },
    { code: "ta", label: "தமிழ்", subLabel: "Tamil", icon: "🇮🇳" },
    { code: "te", label: "తెలుగు", subLabel: "Telugu", icon: "🇮🇳" }
  ];

  return (
    <div style={styles.container}>
      {/* Brand Header */}
      <div style={styles.brandWrapper}>
        <span style={{ fontSize: "2.5rem" }}>🚛</span>
        <h1 style={styles.brandName}>Sprinto Fleet</h1>
        <p style={styles.brandSubtitle}>ONBOARDING PORTAL</p>
      </div>

      {/* Main Choice Box */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Choose Your Language</h2>
        <p style={styles.cardSubtitle}>
          Select your preferred interface language to continue your setup.
        </p>

        {/* Vertical Language Grid */}
        <div style={styles.grid}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelectedLang(lang.code)}
              style={{
                ...styles.langButton,
                ...(selectedLang === lang.code ? styles.langButtonActive : {})
              }}
            >
              <div style={styles.langIcon}>{lang.icon}</div>
              <div style={{ textAlign: "left" }}>
                <div style={styles.langLabel}>{lang.label}</div>
                <div style={styles.langSubLabel}>{lang.subLabel}</div>
              </div>
              {selectedLang === lang.code && <div style={styles.checkmark}>✓</div>}
            </button>
          ))}
        </div>

        {/* Login Redirect */}
        <div style={styles.loginRedirectWrapper}>
          <span style={{ color: "#9CA3AF" }}>Already have an account?</span> 
          <Link to="/login" style={styles.loginLink}>Sign In</Link>
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
    color: "#00F0FF",
    letterSpacing: "1px",
    margin: 0,
    fontWeight: "600"
  },
  card: {
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    borderRadius: "12px",
    padding: "35px",
    width: "480px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    textAlign: "center"
  },
  cardTitle: {
    fontSize: "1.4rem",
    margin: "0 0 8px 0",
    fontWeight: "700"
  },
  cardSubtitle: {
    fontSize: "0.85rem",
    color: "#9CA3AF",
    margin: "0 0 25px 0",
    lineHeight: "1.4"
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  langButton: {
    display: "flex",
    alignItems: "center",
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: "#1F2937",
    border: "1px solid #374151",
    color: "#FFFFFF",
    cursor: "pointer",
    transition: "all 0.2s ease",
    position: "relative",
    outline: "none"
  },
  langButtonActive: {
    backgroundColor: "rgba(0, 240, 255, 0.05)",
    borderColor: "#00F0FF",
    boxShadow: "0 0 12px rgba(0, 240, 255, 0.15)"
  },
  langIcon: {
    fontSize: "1.5rem",
    marginRight: "16px"
  },
  langLabel: {
    fontWeight: "700",
    fontSize: "1rem"
  },
  langSubLabel: {
    fontSize: "0.75rem",
    color: "#9CA3AF",
    marginTop: "2px"
  },
  checkmark: {
    position: "absolute",
    right: "20px",
    color: "#00F0FF",
    fontWeight: "bold",
    fontSize: "1.2rem"
  },
  loginRedirectWrapper: {
    marginTop: "24px",
    fontSize: "0.88rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  loginLink: {
    color: "#00F0FF",
    textDecoration: "none",
    fontWeight: "700",
    marginLeft: "5px",
    transition: "color 0.15s ease"
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