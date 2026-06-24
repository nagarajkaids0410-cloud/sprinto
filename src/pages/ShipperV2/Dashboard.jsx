import React from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import KpiCards from "./KpiCards";
import LiveMap from "./LiveMap";
import AnalyticsSection from "./AnalyticsSection";

function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#121212",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Topbar />

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "30px",
            background: "#121212",
          }}
        >
          <KpiCards />

          <div style={{ marginTop: "25px" }}>
            <LiveMap />
          </div>

          <div style={{ marginTop: "25px" }}>
            <AnalyticsSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;