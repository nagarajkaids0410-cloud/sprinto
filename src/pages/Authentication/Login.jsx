import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState("shipper"); // 'driver', 'shipper', or 'agency'
  const [loginMethod, setLoginMethod] = useState("otp"); // 'otp' or 'password'
  const [mobileNumber, setMobileNumber] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${activeRole} via ${loginMethod}`);
    
    // Route based on role selection
    if (activeRole === "agency") navigate("/admin/dashboard");
    else if (activeRole === "driver") navigate("/driver/dashboard");
    else navigate("/shipper/dashboard");
  };

  return (
    <div style={styles.pageWrapper}>
      {/* Navbar Mock */}
      <nav style={styles.nav}>
        <div style={styles.logo}>🚛 LOADSHARE</div>
        <div style={styles.navLinks}>
          <span>Products</span>
          <span>Company</span>
          <span>Contact Us</span>
        </div>
      </nav>

      <div style={styles.contentWrapper}>
        <div style={styles.loginCard}>
          <h2 style={styles.title}>ACCOUNT SIGN IN</h2>
          <p style={styles.subtitle}>Access your secure logistics workspace dashboard</p>

          {/* 3-WAY ROLE TOGGLE */}
          <div style={styles.roleToggleContainer}>
            <button 
              type="button"
              onClick={() => setActiveRole("driver")}
              style={{...styles.roleBtn, ...(activeRole === "driver" ? styles.roleBtnActive : {})}}
            >
              🚛 Driver
            </button>
            <button 
              type="button"
              onClick={() => setActiveRole("shipper")}
              style={{...styles.roleBtn, ...(activeRole === "shipper" ? styles.roleBtnActive : {})}}
            >
              📦 Shipper
            </button>
            <button 
              type="button"
              onClick={() => setActiveRole("agency")}
              style={{...styles.roleBtn, ...(activeRole === "agency" ? styles.roleBtnActive : {})}}
            >
              🏢 Agency
            </button>
          </div>

          {/* LOGIN METHOD TOGGLE */}
          <div style={styles.methodToggle}>
            <span 
              onClick={() => setLoginMethod("otp")}
              style={loginMethod === "otp" ? styles.methodActive : styles.methodInactive}
            >
              Login via OTP
            </span>
            <span style={styles.methodDot}>•</span>
            <span 
              onClick={() => setLoginMethod("password")}
              style={loginMethod === "password" ? styles.methodActive : styles.methodInactive}
            >
              Use Password Instead
            </span>
          </div>

          {/* FORM INPUTS */}
          <form onSubmit={handleLogin} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>MOBILE NUMBER</label>
              <div style={styles.inputWrapper}>
                <span style={styles.countryCode}>IN +91</span>
                <input 
                  type="text" 
                  placeholder="Enter registered mobile number" 
                  style={styles.input}
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" style={styles.submitBtn}>
              REQUEST SECURE OTP
            </button>
          </form>

          <div style={styles.footerText}>
            New to the platform? <Link to="/account-type" style={styles.createAccountLink}>Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    minHeight: "100vh",
    width: "100vw",
    backgroundImage: "linear-gradient(rgba(10, 15, 29, 0.8), rgba(10, 15, 29, 0.9)), url('YOUR_TRUCK_BACKGROUND_IMAGE_URL')", // Make sure to link your truck image here!
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column"
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px 60px",
    alignItems: "center"
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "800",
    letterSpacing: "1px"
  },
  navLinks: {
    display: "flex",
    gap: "30px",
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#D1D5DB"
  },
  contentWrapper: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px"
  },
  loginCard: {
    backgroundColor: "rgba(17, 24, 39, 0.75)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "16px",
    padding: "40px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    position: "relative",
    overflow: "hidden"
  },
  title: {
    margin: "0 0 8px 0",
    fontSize: "1.5rem",
    fontWeight: "800",
    letterSpacing: "0.5px"
  },
  subtitle: {
    margin: "0 0 30px 0",
    fontSize: "0.85rem",
    color: "#9CA3AF"
  },
  roleToggleContainer: {
    display: "flex",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: "8px",
    padding: "6px",
    gap: "6px",
    marginBottom: "24px"
  },
  roleBtn: {
    flex: 1, // This splits the 3 buttons equally across the container
    padding: "12px 10px",
    backgroundColor: "transparent",
    border: "none",
    color: "#9CA3AF",
    fontSize: "0.85rem",
    fontWeight: "600",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.2s ease"
  },
  roleBtnActive: {
    backgroundColor: "#D97706", // The sleek red/pink accent
    color: "#FFFFFF",
    boxShadow: "0 4px 12px rgba(244, 63, 94, 0.3)"
  },
  methodToggle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    marginBottom: "30px",
    fontSize: "0.85rem",
    fontWeight: "600"
  },
  methodActive: {
    color: "#D97706",
    cursor: "pointer",
    borderBottom: "1px solid #D97706",
    paddingBottom: "2px"
  },
  methodInactive: {
    color: "#9CA3AF",
    cursor: "pointer"
  },
  methodDot: {
    color: "#4B5563"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  label: {
    fontSize: "0.7rem",
    color: "#9CA3AF",
    fontWeight: "700",
    letterSpacing: "0.5px"
  },
  inputWrapper: {
    display: "flex",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    overflow: "hidden"
  },
  countryCode: {
    padding: "14px 16px",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderRight: "1px solid rgba(255, 255, 255, 0.1)",
    fontSize: "0.9rem",
    color: "#6B7280",
    fontWeight: "600"
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
    border: "none",
    padding: "14px",
    color: "#FFFFFF",
    fontSize: "0.9rem",
    outline: "none"
  },
  submitBtn: {
    backgroundColor: "#D97706",
    color: "#FFFFFF",
    border: "none",
    padding: "16px",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "0.95rem",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(244, 63, 94, 0.3)",
    transition: "all 0.2s ease"
  },
  footerText: {
    marginTop: "24px",
    textAlign: "center",
    fontSize: "0.85rem",
    color: "#9CA3AF"
  },
  createAccountLink: {
    color: "#F43F5E",
    textDecoration: "none",
    fontWeight: "600"
  }
};