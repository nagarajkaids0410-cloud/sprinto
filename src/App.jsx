import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";

import DriverDashboard from "./pages/Driver/DriverDashboard";
import Dashboard from "./pages/ShipperV2/Dashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";

export default function App() {
  return (
    <Routes>
      {/* Default Route */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* Authentication */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* Driver */}
      <Route
        path="/driver/dashboard/*"
        element={<DriverDashboard />}
      />

      {/* Shipper (NEW UI) */}
      <Route
        path="/shipper/dashboard/*"
        element={<Dashboard />}
      />

      {/* Admin */}
      <Route
        path="/admin/dashboard/*"
        element={<AdminDashboard />}
      />

      {/* Unknown Route */}
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />
    </Routes>
  );
}