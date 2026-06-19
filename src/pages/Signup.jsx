import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [userType, setUserType] = useState("driver"); // 'driver' or 'shipper'
  const [fullName, setFullName] = useState("");
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
    if (mobileNumber.length === 10 && fullName.trim() !== "") {
      setOtpSent(true);
      setTimer(30);
      console.log(`Dispatched verification OTP to new account registration: +91 ${mobileNumber}`);
    } else {
      alert("Please provide a valid name and a 10-digit mobile number.");
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log("Registering secure profile configuration...", {
      userType,
      fullName,
      mobileNumber,
      otpCode,
    });
    
    // Once registered successfully, push them directly to their new setup portal or dashboard!
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
      </header>

      {/* ================= MAIN FLOATING PORTAL CARD LAYER ================= */}
      <main className="main-content-area">
        <div className="login-portal-card">
          <div className="form-header">
            <h2>CREATE ACCOUNT</h2>
            <p>Join the secure Sprinto logistics network ecosystem</p>
          </div>

          {/* Core Driver / Shipper Persona Tabs */}
          <div className="role-switcher">
            <button
              type="button"
              className={`role-tab ${userType === "driver" ? "active" : ""}`}
              onClick={() => { setUserType("driver"); setOtpSent(false); setOtpCode(""); }}
            >
              Driver 🚛 
            </button>
            <button
              type="button"
              className={`role-tab ${userType === "shipper" ? "active" : ""}`}
              onClick={() => { setUserType("shipper"); setOtpSent(false); setOtpCode(""); }}
            >
                Shipper 📦 
            </button>
          </div>

          {/* SIGNUP ROUTE FLOW */}
          <form onSubmit={otpSent ? handleSignupSubmit : handleSendOtp} className="auth-form">
            
            {/* Name Input field */}
            <div className="input-group">
              <label htmlFor="fullname">FULL NAME / ENTERPRISE NAME</label>
              <div className="input-wrapper">
                <input
                  id="fullname"
                  type="text"
                  disabled={otpSent}
                  placeholder="Enter your name or business identity"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Mobile Input field */}
            <div className="input-group">
              <label htmlFor="mobile">MOBILE NUMBER</label>
              <div className="input-wrapper">
                <span className="input-icon">🇮🇳 +91</span>
                <input
                  id="mobile"
                  type="tel"
                  maxLength="10"
                  disabled={otpSent}
                  placeholder="Enter 10-digit mobile number"
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
              {otpSent ? "CREATE MY ACCOUNT" : "VERIFY PHONE VIA OTP"}
            </button>
          </form>

          <p className="footer-redirect">
            Already have an account?{" "}
            <span 
              style={{ cursor: "pointer", color: "#3b82f6", textDecoration: "underline" }} 
              onClick={() => navigate("/login")}
            >
              Sign in here
            </span>
          </p>
        </div>
      </main>

      <footer className="landing-footer">
        <p className="copyright">© 2026 SPRINTO LOGISTICS NETWORK</p>
      </footer>
    </div>
  );
}

export default Signup;