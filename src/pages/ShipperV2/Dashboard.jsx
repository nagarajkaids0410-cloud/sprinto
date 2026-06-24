import React from "react";

import Layout from "../../components/layout/Layout";

import KpiCards from "./KpiCards";
import LiveMap from "./LiveMap";
import AIInsights from "./AIInsights";
import NotificationPanel from "./NotificationPanel";
import RecentShipmentsTable from "./RecentShipmentsTable";
import ActivityTimeline from "./ActivityTimeline";
import FleetStatus from "./FleetStatus";
import FleetCard from "./FleetCard";

import RevenueChart from "../../components/dashboard/RevenueChart";
import FleetChart from "../../components/dashboard/FleetChart";
import DriverPerformance from "../../components/dashboard/DriverPerformance";

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
        {/* KPI Cards */}

        <KpiCards />

        {/* Revenue + Fleet Chart */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "25px",
          }}
        >
          <RevenueChart />
          <FleetChart />
        </div>

        {/* Live Map + AI + Notifications */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "25px",
          }}
        >
          <LiveMap />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
            }}
          >
            <AIInsights />
            <NotificationPanel />
          </div>
        </div>

        {/* Fleet Status + Driver Performance */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "25px",
          }}
        >
          <FleetStatus />
          <DriverPerformance />
        </div>

        {/* Fleet Overview + Activity */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "25px",
          }}
        >
          <FleetCard />
          <ActivityTimeline />
        </div>

        {/* Recent Shipments */}

        <RecentShipmentsTable />
      </div>
    </Layout>
  );
}

export default Dashboard;