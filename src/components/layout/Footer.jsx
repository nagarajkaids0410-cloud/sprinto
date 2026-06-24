import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "#1B1B1B",
        borderTop: "1px solid #3A3A3A",
        padding: "18px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          color: "#B0B0B0",
          fontSize: "14px",
        }}
      >
        © 2026 Sprintto Logistics Platform
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          color: "#D4AF37",
          fontSize: "14px",
        }}
      >
        <span>Privacy</span>
        <span>Support</span>
        <span>Terms</span>
      </div>
    </footer>
  );
}

export default Footer;