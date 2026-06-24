import React from "react";

import Layout from "../../components/layout/Layout";

import KpiCards from "./KpiCards";
import LiveMap from "./LiveMap";
import AnalyticsSection from "./AnalyticsSection";
import NotificationPanel from "./NotificationPanel";
import RecentShipmentsTable from "./RecentShipmentsTable";
import ActivityTimeline from "./ActivityTimeline";

function Dashboard() {
  return (
    <Layout>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >

        {/* KPI */}

        <KpiCards />

        {/* Revenue + AI */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "25px",
          }}
        >
          <AnalyticsSection />

          <NotificationPanel />
        </div>

        {/* Map */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "25px",
          }}
        >
          <LiveMap />

          <ActivityTimeline />
        </div>

        {/* Table */}

        <RecentShipmentsTable />

      </div>

    </Layout>
  );
}

export default Dashboard;