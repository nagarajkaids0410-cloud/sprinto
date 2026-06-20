import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import DriverDashboard from "./pages/Driver/DriverDashboard.jsx";// Ensure the path matches your project structure
import "./App.css";

// Auxiliary Secure Admin Infrastructure Control Node Route
// Kept in App.jsx as a distinct layout view, but routes to the main views
import { useNavigate } from "react-router-dom";

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
      <Route path="/" element={<Login />} />
      <Route path ="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/dashboard/driver" element={<DriverDashboard />} />
    </Routes>
  );
}