import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
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

        <main
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "25px",
            background: "#121212",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;