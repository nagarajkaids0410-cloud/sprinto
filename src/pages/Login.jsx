import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";


function Login() {
  const [loginMethod, setLoginMethod] = useState("otp");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [role, setRole] = useState("shipper");
  const handleLoginSubmit = (e) => {
  e.preventDefault();

  if (!mobileNumber) return;

  if (mobileNumber.startsWith("8")) {
    navigate("/admin/dashboard");
    return;
  }

  if (role === "driver") {
    navigate("/driver/dashboard");
  } else {
    navigate("/shipper/dashboard");
  }
};

  return (
    <div className="fullscreen-bg">
      <div className="cinematic-overlay"></div>

      {/* Navbar */}
      <nav className="brand-navbar">
        <div className="logo-area">
          <span style={{ fontSize: "30px" }}>🚛</span>
          <span
            style={{
              color: "#fff",
              fontWeight: "700",
              fontSize: "24px",
              letterSpacing: "2px",
            }}
          >
            LOADSHARE
          </span>
        </div>

        <div className="nav-links">
          <a href="/">Products</a>
          <a href="/">Company</a>
          <a href="/">Contact Us</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content-area">
        <div className="login-portal-card fade-in">
          <div className="form-header">
            <h2>ACCOUNT SIGN IN</h2>
            <p>Access your secure logistics workspace dashboard</p>
          </div>

          {/* Role Selector */}
          <div className="role-switcher">
  <button
    type="button"
    className={`role-tab ${role === "driver" ? "active" : ""}`}
    onClick={() => setRole("driver")}
  >
    🚛 Driver / Owner
  </button>

  <button
    type="button"
    className={`role-tab ${role === "shipper" ? "active" : ""}`}
    onClick={() => setRole("shipper")}
  >
    📦 Shipper / Business
  </button>
</div>

          {/* Login Method */}
          <div className="auth-method-toggle">
  <button
    type="button"
    className={loginMethod === "otp" ? "active-link" : ""}
    onClick={() => setLoginMethod("otp")}
  >
    Login via OTP
  </button>

  <span className="bullet-divider">•</span>

  <button
    type="button"
    className={loginMethod === "password" ? "active-link" : ""}
    onClick={() => setLoginMethod("password")}
  >
    Use Password Instead
  </button>
</div>

          {/* Form */}
          <form className="auth-form" onSubmit={handleLoginSubmit}>
            <div className="input-group">
              <label>MOBILE NUMBER</label>

              <div className="input-wrapper">
                <span className="input-icon">
                  IN +91
                </span>

                <input
                  type="tel"
                  placeholder="Enter registered mobile number"
                  value={mobileNumber}
                  onChange={(e) =>
                    setMobileNumber(e.target.value)
                  }
                  required
                />
              </div>
            </div>

            <>
  {loginMethod === "password" && (
    <div className="input-group">
      <label>PASSWORD</label>

      <div className="input-wrapper">
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  )}

  <button
    type="submit"
    className="submit-btn"
  >
    {loginMethod === "otp"
      ? "REQUEST SECURE OTP"
      : "SIGN IN"}
  </button>
</>
          </form>

          <div className="footer-redirect">
            New to the platform?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/signup");
              }}
            >
              Create an account
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="copyright">
          © 2026 LOADSHARE LOGISTICS NETWORK
        </div>

        <button
          className="admin-gateway-link"
          onClick={() =>
            navigate("/admin/dashboard")
          }
        >
          🛡️ Control Center / Admin Login
        </button>
      </footer>
    </div>
  );
}

export default Login;