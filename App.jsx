import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";   
import Signup from "./pages/Signup"; 
import DriverDashboard from "./pages/Driver/DriverDashboard"; // Maps directly to your folder layout

export default function App() {
  return (
    <Routes>
      {/* 1. If someone visits the base domain, redirect them automatically to Login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      
      {/* 2. Authentication Route Paths */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* 3. Driver Workspace Protected Routing Nodes */}
      <Route path="/driver/dashboard" element={<DriverDashboard />} />
      
      {/* 4. Safety Fallback: Catch legacy /dashboard/driver URLs and fix them dynamically */}
      <Route path="/dashboard/driver" element={<Navigate to="/driver/dashboard" replace />} />
    </Routes>
  );
}