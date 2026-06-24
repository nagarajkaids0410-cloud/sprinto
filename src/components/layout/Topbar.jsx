import React from "react";
import {
  Search,
  Bell,
  Moon,
  Truck,
  UserCircle,
} from "lucide-react";

function Topbar() {
  return (
    <div
      style={{
        height: "80px",
        background: "#1B1B1B",
        borderBottom: "1px solid #3A3A3A",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
      }}
    >
      {/* Left */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h2
          style={{
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          Dashboard
        </h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#242424",
            border: "1px solid #3A3A3A",
            padding: "10px 15px",
            borderRadius: "12px",
            width: "350px",
          }}
        >
          <Search
            size={18}
            color="#B0B0B0"
          />

          <input
            placeholder="Search shipments, trucks..."
            style={{
              marginLeft: "10px",
              flex: 1,
              border: "none",
              outline: "none",
              background: "transparent",
              color: "#FFFFFF",
              fontSize: "15px",
            }}
          />
        </div>
      </div>

      {/* Right */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Fleet */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "#242424",
            padding: "10px 15px",
            borderRadius: "12px",
            border: "1px solid #3A3A3A",
          }}
        >
          <Truck
            size={18}
            color="#22C55E"
          />

          <span
            style={{
              color: "#FFFFFF",
            }}
          >
            152 Online
          </span>
        </div>

        {/* Theme */}

        <button
          style={{
            background: "#242424",
            border: "1px solid #3A3A3A",
            width: "45px",
            height: "45px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          <Moon
            color="#D4AF37"
            size={20}
          />
        </button>

        {/* Notification */}

        <button
          style={{
            position: "relative",
            background: "#242424",
            border: "1px solid #3A3A3A",
            width: "45px",
            height: "45px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          <Bell
            color="#FFFFFF"
            size={20}
          />

          <div
            style={{
              position: "absolute",
              top: "-3px",
              right: "-3px",
              background: "#EF4444",
              color: "#FFFFFF",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              fontSize: "11px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            5
          </div>
        </button>

        {/* Profile */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#242424",
            padding: "8px 15px",
            borderRadius: "12px",
            border: "1px solid #3A3A3A",
          }}
        >
          <UserCircle
            color="#D4AF37"
            size={30}
          />

          <div>
            <div
              style={{
                color: "#FFFFFF",
                fontWeight: "600",
              }}
            >
              Nagaraj
            </div>

            <div
              style={{
                color: "#B0B0B0",
                fontSize: "12px",
              }}
            >
              Shipper Admin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;