import React, { useState } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import KpiCards from "./KpiCards";
import LiveMap from "./Livemap";
import AnalyticsSection from "./AnalyticsSection";
import NotificationPanel from "./Notificationpanel";
import FleetCard from "./FleetCard";
import RecentShipments from "./RecentShipments";
import FleetManagement from "./FleetManagement";
import ShipmentManagement from "./ShipmentManagement";
import DriverManagement from "./DriverManagement";

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#071426",
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}

      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      {/* Main Content */}

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Topbar */}

        <Topbar />

        {/* Page Content */}

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "25px",
            background: "#071426",
          }}
        >
          {/* ================= Dashboard ================= */}

          {activeMenu === "dashboard" && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "25px",
              }}
            >
              <KpiCards />

              <LiveMap />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr",
                  gap: "20px",
                }}
              >
                <AnalyticsSection />

                <NotificationPanel />
              </div>

              <FleetCard />

              <RecentShipments />
            </div>
          )}

          {/* ================= Fleet ================= */}

          {activeMenu === "fleet" && (
            <FleetManagement />
          )}

          {/* ================= Shipments ================= */}

          {activeMenu === "shipment" && (
            <ShipmentManagement />
        )}

          {/* ================= Route ================= */}

          {/* ================= Route ================= */}

            {activeMenu === "route" && (
                <div
                    style={{
                        color: "white",
                        fontSize: "32px",
                        fontWeight: "bold",
                    }}
                >
                🗺 Route Optimizer
                </div>
            )}

          {/* ================= Live Tracking ================= */}

          {activeMenu === "tracking" && (
            <div
              style={{
                color: "white",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              📍 Live Truck Tracking

              <LiveMap />
            </div>
          )}

          {/* ================= AI Matching ================= */}

          {activeMenu === "ai" && (
            <div
              style={{
                color: "white",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              🤖 AI Truck Matching

              <p
                style={{
                  color: "#8FA6C4",
                  fontSize: "18px",
                  marginTop: "15px",
                }}
              >
                AI recommendation engine coming next...
              </p>
            </div>
          )}

          {/* ================= Drivers ================= */}

          {activeMenu === "drivers" && (
            <DriverManagement />
            )}

          {/* ================= Analytics ================= */}

          {activeMenu === "analytics" && (
            <AnalyticsSection />
          )}

          {/* ================= Reports ================= */}

          {activeMenu === "reports" && (
                <div>
                    📑 Reports
                </div>
        )}

          {/* ================= Settings ================= */}

          {activeMenu === "settings" && (
            <div
              style={{
                color: "white",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              ⚙️ Settings
            </div>
          )}

          {/* ================= Profile ================= */}

          {activeMenu === "profile" && (
            <div
                style={{
                    background: "#10243B",
                    padding: "30px",
                    borderRadius: "20px",
                    color: "#fff",
                }}
            >
            <h1>🏢 Company Profile</h1>

            <p>Company : LoadShare Logistics</p>

            <p>Manager : Nagaraj</p>

            <p>Email : admin@loadshare.com</p>

            <p>Phone : +91 9876543210</p>

            <p>GST : 33ABCDE1234F1Z5</p>
        </div>
)}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;