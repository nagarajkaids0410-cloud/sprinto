import { useState } from "react";
import { styles } from "./style";
import { useOrders } from "../../OrderContext"; // Hooks into the global sync engine

function LoadManagement() {
  // Pull real-time data and order placements straight from context
  const { globalLoads, placeOrder } = useOrders();

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [commodity, setCommodity] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!origin || !destination || !price) return;
    
    const newLoad = {
      id: `L-${Math.floor(1000 + Math.random() * 9000)}`,
      route: `${origin} to ${destination}`,
      material: commodity || "General Cargo",
      weight: weight ? `${weight}T` : "15T",
      price: `₹${Number(price).toLocaleString("en-IN")}`
    };

    // 1. Send cleanly to our centralized core manager
    placeOrder(newLoad); 
    
    // 2. Alert the user exactly what step of the workflow the order is on
    alert("Freight request dispatched to Admin Core Gateway for proximity distance clearance checks!");
    
    // 3. Reset the form controls once
    setOrigin(""); 
    setDestination(""); 
    setCommodity(""); 
    setWeight(""); 
    setPrice("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Freight Generator Form Console */}
      <section style={styles.card}>
        <h3 style={{ marginBottom: "0.3rem" }}>➕ Broadcast New Freight Manifest</h3>
        <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>Instantly place freight quotes out onto the global fleet matching boards</p>
        
        <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
          <div style={styles.formGroup}>
            <label style={styles.label}>ORIGIN CITY / HUB</label>
            <input type="text" placeholder="e.g. Mumbai, MH" value={origin} onChange={e => setOrigin(e.target.value)} style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>DESTINATION DROP-OFF</label>
            <input type="text" placeholder="e.g. Delhi NCR" value={destination} onChange={e => setDestination(e.target.value)} style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>COMMODITY PROFILE</label>
            <input type="text" placeholder="e.g. Pharmaceuticals" value={commodity} onChange={e => setCommodity(e.target.value)} style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>NET PAYLOAD WEIGHT (TONS)</label>
            <input type="number" placeholder="e.g. 16" value={weight} onChange={e => setWeight(e.target.value)} style={styles.input} />
          </div>
          <div style={{...styles.formGroup, gridColumn: "span 2"}}>
            <label style={styles.label}>GUARANTEED OFFER PRICE (INR)</label>
            <input type="number" placeholder="e.g. 45000" value={price} onChange={e => setPrice(e.target.value)} style={styles.input} required />
          </div>
          <button type="submit" style={{...styles.primaryBtn, gridColumn: "span 2", marginTop: "0.5rem"}}>
            🚀 Deploy Cargo Manifest To Open Market
          </button>
        </form>
      </section>

      {/* Open Active Market Orders Queue List */}
      <section style={styles.card}>
        <h3 style={{ marginBottom: "0.5rem" }}>📢 Currently Posted Open Tenders</h3>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Post ID</th>
                <th style={styles.th}>Route Matrix Segment</th>
                <th style={styles.th}>Commodity Profile</th>
                <th style={styles.th}>Payload Metric</th>
                <th style={styles.th}>Bidding Offer</th>
                <th style={styles.th}>System State</th>
              </tr>
            </thead>
            <tbody>
              {globalLoads.map((post) => (
                <tr key={post.id} style={styles.tr}>
                  <td style={styles.td}><strong>{post.id}</strong></td>
                  <td style={styles.td}>{post.route}</td>
                  <td style={styles.td}>{post.material}</td>
                  <td style={styles.td}>{post.weight}</td>
                  <td style={{...styles.td, color: "#10b981"}}><strong>{post.price}</strong></td>
                  <td style={styles.td}>
                    <span style={{
                      color: post.status === "Admin Review" ? "#f59e0b" : post.status === "Dispatched to Drivers" ? "#2563eb" : "#10b981", 
                      fontWeight: "600"
                    }}>
                      {post.status === "Admin Review" && "⏳ Admin Proximity Review"}
                      {post.status === "Dispatched to Drivers" && "📢 Open on Driver Board"}
                      {post.status === "Assigned to Fleet" && "✅ Assigned to Truck"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default LoadManagement;