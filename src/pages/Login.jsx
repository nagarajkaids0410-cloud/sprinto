import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userType, setUserType] = useState("driver"); // 'driver' or 'shipper'
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [timer, setTimer] = useState(30);

  const navigate = useNavigate();

  // OTP Countdown Engine
  useEffect(() => {
    let interval = null;
    if (otpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [otpSent, timer]);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (mobileNumber.length === 10) {
      setOtpSent(true);
      setTimer(30);
      console.log(`Forwarding code payload to destination: +91 ${mobileNumber}`);
    } else {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting secure OTP verification request...", {
      userType,
      mobileNumber,
      otpCode,
    });
    
    // Direct routing setup based on persona selection
    if (userType === "driver") {
      navigate("/dashboard/driver");
    } else {
      navigate("/dashboard/shipper");
    }
  };

  return (
    <div className="fullscreen-bg">
      <div className="cinematic-overlay"></div>

      {/* ================= HEADER BRAND NAVBAR LAYER ================= */}
      <header className="brand-navbar">
        <div className="logo-area">
          <span style={{ fontSize: "2rem" }}>🚛</span>
          <span className="logo-text brand-gradient">Sprinto</span>
        </div>
        <nav className="nav-links">
          <a href="#products">Products</a>
          <a href="#company">Company</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>

      {/* ================= MAIN FLOATING PORTAL CARD LAYER ================= */}
      <main className="main-content-area">
        <div className="login-portal-card">
          <div className="form-header">
            <h2>ACCOUNT SIGN IN</h2>
            <p>Access your secure logistics workspace via secure mobile OTP</p>
          </div>

          {/* Core Driver / Shipper Persona Tabs */}
          <div className="role-switcher">
            <button
              type="button"
              className={`role-tab ${userType === "driver" ? "active" : ""}`}
              onClick={() => { 
                setUserType("driver"); 
                navigate("/dashboard/driver"); 
              }}
            >
              Register as 🚛 Driver / Owner
            </button>
            <button
              type="button"
              className={`role-tab ${userType === "shipper" ? "active" : ""}`}
              onClick={() => { setUserType("shipper"); setOtpSent(false); setOtpCode(""); }}
            >
             Shipper 📦 
            </button>
          </div>

          {/* OTP SECURITY ROUTE FLOW */}
          <form onSubmit={otpSent ? handleLoginSubmit : handleSendOtp} className="auth-form">
            <div className="input-group">
              <label htmlFor="mobile">MOBILE NUMBER</label>
              <div className="input-wrapper">
                <span className="input-icon">🇮🇳 +91</span>
                <input
                  id="mobile"
                  type="tel"
                  maxLength="10"
                  disabled={otpSent}
                  placeholder="Enter registered mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                  required
                />
                {otpSent && (
                  <button type="button" className="change-phone-btn" onClick={() => setOtpSent(false)}>
                    Change
                  </button>
                )}
              </div>
            </div>

            {otpSent && (
              <div className="input-group fade-in">
                <div className="label-row">
                  <label htmlFor="otp">ENTER 6-DIGIT OTP</label>
                  <span className="otp-countdown">
                    {timer > 0 ? `Resend in ${timer}s` : ""}
                  </span>
                </div>
                <div className="input-wrapper">
                  <input
                    id="otp"
                    type="text"
                    maxLength="6"
                    placeholder="Enter verification code"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ""))}
                    required
                  />
                  {timer === 0 && (
                    <button type="button" className="resend-otp-btn" onClick={() => { setTimer(30); console.log("New OTP Dispatched!"); }}>
                      Resend
                    </button>
                  )}
                </div>
              </div>
            )}

            <button type="submit" className="submit-btn">
              {otpSent ? `VERIFY & ENTER AS ${userType.toUpperCase()}` : "REQUEST SECURE OTP"}
            </button>
          </form>

          <p className="footer-redirect">
              New to the platform?{" "}
              <span 
                  style={{ cursor: "pointer", color: "#3b82f6", textDecoration: "underline" }} 
                  onClick={() => navigate("/signup")}
              >
              Create an account
             </span>
          </p>
        </div>
      </main>

      {/* ================= FOOTER LANDING SEGMENT ================= */}
      <footer className="landing-footer">
        <p className="copyright">© 2026 SPRINTO LOGISTICS NETWORK</p>
        <button 
          className="admin-gateway-link" 
          onClick={() => navigate("/admin/login")}
        >
          🛡️ Control Center / Admin Login
        </button>
      </footer>
    </div>
  );
}

export default Login;