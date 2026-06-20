import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

// Exact relative path mapping from your company logos directory
import brandLogo from "../comapanylogos/tilte image with logo.jpeg";

function LoginCard() {
  const [userType, setUserType] = useState("driver"); // 'driver' or 'shipper'
  const [authMethod, setAuthMethod] = useState("otp"); // 'otp' or 'password'
  const [showPassword, setShowPassword] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
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
    console.log("Submitting secure authentication request...", {
      userType,
      mobileNumber,
      authMethod,
      credential: authMethod === "password" ? password : otpCode,
    });
  };

  return (
    <div className="fullscreen-bg">
      <div className="cinematic-overlay"></div>

      {/* ================= HEADER BRAND NAVBAR LAYER ================= */}
      <header className="brand-navbar">
        <div className="logo-area">
          <img src={brandLogo} alt="Sprinto Truck Icon" className="titlebar-logo" />
          {/* Note the Capital S for Sprinto */}
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
            <p>Access your secure logistics workspace dashboard</p>
          </div>

          {/* Core Driver / Shipper Persona Tabs */}
          <div className="role-switcher">
            <button
              type="button"
              className={`role-tab ${userType === "driver" ? "active" : ""}`}
              onClick={() => setUserType("driver")}
            >
              🚛 Driver / Owner
            </button>
            <button
              type="button"
              className={`role-tab ${userType === "shipper" ? "active" : ""}`}
              onClick={() => setUserType("shipper")}
            >
              📦 Shipper / Merchant
            </button>
          </div>

          {/* Sub-toggle Authentication Verification Styles */}
          <div className="auth-method-toggle">
            <button
              type="button"
              className={authMethod === "otp" ? "active-link" : ""}
              onClick={() => { setAuthMethod("otp"); setOtpSent(false); }}
            >
              Login via OTP
            </button>
            <span className="bullet-divider">•</span>
            <button
              type="button"
              className={authMethod === "password" ? "active-link" : ""}
              onClick={() => setAuthMethod("password")}
            >
              Use Password Instead
            </button>
          </div>

          {/* CONDITIONAL AUTH FLOW ENGINE */}
          {authMethod === "otp" ? (
            /* FLOW A: OTP SECURITY PROTOCOL */
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
          ) : (
            /* FLOW B: LEGACY PASSWORD PASSPHRASE CHECK */
            <form onSubmit={handleLoginSubmit} className="auth-form">
              <div className="input-group">
                <label htmlFor="mobile">MOBILE NUMBER</label>
                <div className="input-wrapper">
                  <span className="input-icon">🇮🇳 +91</span>
                  <input
                    id="mobile"
                    type="tel"
                    maxLength="10"
                    placeholder="Enter registered mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="password">PASSWORD</label>
                <div className="input-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "👁️" : "🙈"}
                  </button>
                </div>
              </div>

              <div className="form-utilities">
                <label className="checkbox-container">
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#forgot" className="forgot-link">Forgot password?</a>
              </div>

              <button type="submit" className="submit-btn">
                PROCEED AS {userType.toUpperCase()}
              </button>
            </form>
          )}

          <p className="footer-redirect">
            New to the platform? <a href="#signup">Create an account</a>
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

/* Auxiliary Secure Admin Infrastructure Control Node Route */
function AdminLogin() {
  const navigate = useNavigate();
  return (
    <div className="fullscreen-bg admin-theme">
      <div className="cinematic-overlay"></div>
      <div className="login-portal-card admin-border">
        <h2>ADMIN CONTROL</h2>
        <p style={{ color: '#94A3B8', fontSize: '14px', margin: '10px 0 20px' }}>
          Authorized Systems Personnel Only
        </p>
        <input type="password" placeholder="Enter security passphrase token" className="admin-input" />
        <button className="submit-btn" style={{ marginTop: '15px' }}>ACCESS INFRASTRUCTURE</button>
        <button className="back-btn" onClick={() => navigate("/login")}>← Back to Gateway</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginCard />} />
      <Route path="/login" element={<LoginCard />} />
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  );
}