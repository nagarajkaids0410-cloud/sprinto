import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";   
import Signup from "./pages/Signup"; 
import DriverDashboard from "./pages/Driver/DriverDashboard"; 
import ShipperDashboard from "./pages/Shipper/ShipperDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      <Route path="/driver/dashboard/*" element={<DriverDashboard />} />
      <Route path="/shipper/dashboard/*" element={<ShipperDashboard />} />
      <Route path="/admin/dashboard/*" element={<AdminDashboard />} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}