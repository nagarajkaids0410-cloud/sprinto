import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import HomeView from "./homeview";
import RequestMatching from "./requestmatching";
import { styles } from "./style";

function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div style={styles.dashboardContainer}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onSignOut={() => navigate("/login")} />

      <main style={styles.mainContent}>
        <header style={styles.topHeader}>
          <h2>Network Master Control Center</h2>
        </header>

        {activeTab === "home" ? <HomeView /> : <RequestMatching />}
      </main>
    </div>
  );
}

export default AdminDashboard;