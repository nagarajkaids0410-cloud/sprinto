import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import HomeView from "./homeview";
import LoadBoardView from "./loardboard";
import { styles } from "./style";

function DriverDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");

  const driverData = {
    name: "Rajesh Kumar",
    vehicle: "Tata Prima 5530.S (MH-12-QX-4567)",
    status: "Available",
    walletBalance: "₹14,250",
    tripsCompleted: 48,
  };

  const activeTrip = {
    id: "SPT-9902",
    origin: "Chakan Industrial Area, Pune",
    destination: "Sriperumbudur Hub, Chennai",
    material: "Automobile Components",
    weight: "18 Tons",
    payout: "₹42,000",
    status: "In Transit",
    estDuration: "~22 - 24 Hours (Commercial Truck Route)"
  };

  const completedTrips = [
    { 
    date: "Today, 8:32 AM", 
    route: "Tambaram → Guindy", 
    duration: "42 mins", 
    material: "Bike Ride Share", 
    status: "Completed", 
    revenue: "₹187" 
  },
  { 
    date: "Today, 7:14 AM", 
    route: "Velachery → T. Nagar", 
    duration: "26 mins", 
    material: "Bike Ride Share", 
    status: "Completed", 
    revenue: "₹124" 
  },
  { 
    date: "Yesterday, 6:45 PM", 
    route: "Koyambedu → Anna Nagar", 
    duration: "18 mins", 
    material: "Bike Ride Share", 
    status: "Completed", 
    revenue: "₹95" 
  },
  { 
    date: "Yesterday, 2:15 PM", 
    route: "Adyar → Besant Nagar", 
    duration: "12 mins", 
    material: "Bike Ride Share", 
    status: "Completed", 
    revenue: "₹68" 
  }
      ];

  const availableLoads = [
    { id: "L-4091", route: "Mumbai to Delhi", material: "Pharma Goods", weight: "12T", price: "₹38,000" },
    { id: "L-4092", route: "Bangalore to Hyderabad", material: "FMCG Cartons", weight: "15T", price: "₹24,500" },
    { id: "L-4093", route: "Nagpur to Indore", material: "Steel Coils", weight: "22T", price: "₹51,000" },
  ];

  return (
    <div style={styles.dashboardContainer}>
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        driverData={driverData} 
        onSignOut={() => navigate("/login")} 
      />

      <main style={styles.mainContent}>
        <header style={styles.topHeader}>
          <h2>Driver Control Center</h2>
          <div style={styles.headerMetrics}>
            <div style={styles.miniMetric}>Wallet: <strong>{driverData.walletBalance}</strong></div>
            <div style={styles.miniMetric}>Trips: <strong>{driverData.tripsCompleted}</strong></div>
          </div>
        </header>

        {activeTab === "home" ? (
          <HomeView activeTrip={activeTrip} completedTrips={completedTrips} />
        ) : (
          <LoadBoardView availableLoads={availableLoads} />
        )}
      </main>
    </div>
  );
}

export default DriverDashboard;