import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LanguageSelection from "./pages/Authentication/Signup/LanguageSelection";
import AccountTypeSelection from "./pages/Authentication/Signup/AccountTypeSelection";
import IndividualRegistration from "./pages/Authentication/Signup/IndividualRegistration";
import VehicleTypeSelection from "./pages/Authentication/Signup/VehicleTypeSelection";
import DocumentVerification from "./pages/Authentication/Signup/DocumentVerification";
import Login from "./pages/Authentication/Login";
import DriverDashboard from "./pages/Driver/DriverDashboard";
import LoadBoardView from "./pages/Driver/loardboard";
import DriverSettingsView from "./pages/Driver/Settings"; 
import Dashboard from "./pages/ShipperV2/Dashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ProfileView from "./pages/Driver/ProfileView";

export default function App() {
  return (
    <Routes>
      {/* 1. Onboarding Phase: Language Selection */}
      <Route path="/" element={<LanguageSelection />} />

      {/* 2. Onboarding Phase: Fleet Account Selection */}
      <Route path="/account-type" element={<AccountTypeSelection />} />

      {/* 3. Onboarding Phase: Personal Profile Details */}
      <Route path="/register-individual" element={<IndividualRegistration />} />

      {/* 4. Onboarding Phase: Asset Tier Classification */}
      <Route path="/select-vehicle" element={<VehicleTypeSelection />} />

      {/* 5. Onboarding Phase: Compliance Verification */}
      <Route path="/verify-documents" element={<DocumentVerification />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />

      {/* Driver Dashboard Shell & Nested Sub-Views */}
      <Route path="/driver/dashboard" element={<DriverDashboard />}>
        <Route path="loads" element={<LoadBoardView availableLoads={[]} />} />
        <Route path="settings" element={<DriverSettingsView />} />
        <Route path="profile" element={
          <div style={{ backgroundColor: "#111827", border: "1px solid #1C2541", borderRadius: "10px", padding: "30px", textAlign: "center", marginTop: "10px" }}>
            <h2>👤 Driver Credentials</h2>
            <p style={{ color: "#8D99AE" }}>Commercial Driver License (CDL), active hours of service (HOS), and safety ratings.</p>
          </div>
        } />
      </Route>

      {/* Shipper Layout Component */}
      <Route path="/shipper/dashboard/*" element={<Dashboard />} />

      {/* Admin Control Module */}
      <Route path="/admin/dashboard/*" element={<AdminDashboard />} />

      {/* Legacy Redirect */}
      <Route
        path="/dashboard/driver"
        element={<Navigate to="/driver/dashboard" replace />}
      />

      <Route path="profile" element={<ProfileView />} />

      {/* Unknown Routes Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}