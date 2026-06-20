import React from "react";
import { useOrders } from "../../OrderContext";
import { styles } from "./style";

function Tracking() {
  const { globalLoads } = useOrders();

  return (
    <section style={styles.card}>
      <h2 style={{ marginBottom: "1.5rem" }}>
        📍 Shipment Tracking
      </h2>

      {globalLoads.length === 0 ? (
        <p>No active shipments found.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {globalLoads.map((load) => (
            <div
              key={load.id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                padding: "1rem",
                background: "#fff"
              }}
            >
              <h3>{load.id}</h3>

              <p>
                <strong>Route:</strong> {load.route}
              </p>

              <p>
                <strong>Commodity:</strong> {load.material}
              </p>

              <p>
                <strong>Weight:</strong> {load.weight}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  style={{
                    fontWeight: "700",
                    color:
                      load.status === "Admin Review"
                        ? "#f59e0b"
                        : load.status === "Dispatched to Drivers"
                        ? "#2563eb"
                        : "#10b981"
                  }}
                >
                  {load.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Tracking;