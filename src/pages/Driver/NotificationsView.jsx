import React, { useState } from "react";

export default function NotificationsView() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "chat",
      icon: "💬",
      title: "Incoming Chat from Shipper",
      sender: "Adani Logistics Group",
      message: "Captain, container seal matches manifest token ID: SPL-9041. Proceed to Gate 4.",
      time: "Just Now",
      read: false
    },
    {
      id: 2,
      type: "new_load",
      icon: "📦",
      title: "New Load Available",
      sender: "Shipper Portal",
      message: "Route: Chennai Port Node A ➔ Bangalore Electronic City. Weight: 14 Tons.",
      time: "15 mins ago",
      read: false
    },
    {
      id: 3,
      type: "chat",
      icon: "💬",
      title: "Incoming Chat from User",
      sender: "Rajesh Kumar (Terminal Manager)",
      message: "Please ensure your digital gate pass scanner is loaded before entering terminal vectors.",
      time: "2 hours ago",
      read: true
    },
    {
      id: 4,
      type: "new_load",
      icon: "📦",
      title: "New Load Available",
      sender: "GMR Logistics",
      message: "Route: Hyderabad Terminal ➔ Mumbai Cargo Complex. Fixed payout contract.",
      time: "05:45 AM",
      read: true
    }
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const clearNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div style={notifStyles.container}>
      {/* HEADER SECTION */}
      <div style={notifStyles.headerRow}>
        <div>
          <h2 style={notifStyles.viewTitle}>🔔 Notifications</h2>
          <p style={notifStyles.viewSubtitle}>
            Active feed of incoming shipper chats and available load updates.
          </p>
        </div>
        {notifications.some(n => !n.read) && (
          <button onClick={markAllAsRead} style={notifStyles.actionLinkBtn}>
            ✓ Mark All Read
          </button>
        )}
      </div>

      {/* CHATS AND AVAILABLE LOADS LIST */}
      <div style={notifStyles.listStack}>
        {notifications.length === 0 ? (
          <div style={notifStyles.emptyStateBox}>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#8D99AE" }}>
              📭 No active chats or available loads.
            </p>
          </div>
        ) : (
          notifications.map((notif) => (
            <div 
              key={notif.id} 
              style={{
                ...notifStyles.alertRowBase,
                backgroundColor: notif.read ? "#111827" : "#1F2937",
                borderLeft: `4px solid ${notif.type === "chat" ? "#2563EB" : "#10B981"}`
              }}
            >
              <div style={notifStyles.iconBadge}>{notif.icon}</div>
              
              <div style={notifStyles.contentBody}>
                <div style={notifStyles.titleRow}>
                  <div>
                    <h4 style={notifStyles.alertTitleText}>{notif.title}</h4>
                    <span style={notifStyles.senderText}>From: {notif.sender}</span>
                  </div>
                  <span style={notifStyles.timeText}>{notif.time}</span>
                </div>
                <p style={notifStyles.messageText}>{notif.message}</p>
              </div>

              <button 
                onClick={() => clearNotification(notif.id)} 
                style={notifStyles.dismissBtn}
                title="Dismiss Alert"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const notifStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    flexGrow: 1
  },
  headerRow: {
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    padding: "20px 24px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  viewTitle: {
    margin: 0,
    fontSize: "1.2rem",
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: "0.5px"
  },
  viewSubtitle: {
    margin: "4px 0 0 0",
    fontSize: "0.85rem",
    color: "#8D99AE"
  },
  actionLinkBtn: {
    backgroundColor: "rgba(37, 99, 235, 0.1)",
    border: "1px solid #2563EB",
    color: "#00F0FF",
    padding: "8px 14px",
    borderRadius: "6px",
    fontSize: "0.78rem",
    fontWeight: "700",
    cursor: "pointer"
  },
  listStack: {
    display: "flex",
    flexDirection: "column",
    gap: "14px"
  },
  emptyStateBox: {
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center"
  },
  alertRowBase: {
    border: "1px solid #1C2541",
    borderRadius: "8px",
    padding: "16px 20px",
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    position: "relative"
  },
  iconBadge: {
    fontSize: "1.4rem",
    lineHeight: "1"
  },
  contentBody: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    gap: "6px"
  },
  titleRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  alertTitleText: {
    margin: 0,
    fontSize: "0.85rem",
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: "0.5px"
  },
  senderText: {
    fontSize: "0.75rem",
    color: "#00F0FF",
    fontWeight: "600",
    display: "block",
    marginTop: "2px"
  },
  timeText: {
    fontSize: "0.72rem",
    color: "#8D99AE",
    fontWeight: "600"
  },
  messageText: {
    margin: 0,
    fontSize: "0.85rem",
    color: "#9CA3AF",
    lineHeight: "1.4",
    maxWidth: "92%"
  },
  dismissBtn: {
    backgroundColor: "transparent",
    border: "none",
    color: "#8D99AE",
    cursor: "pointer",
    fontSize: "1rem",
    padding: "4px 8px",
    position: "absolute",
    right: "12px",
    top: "12px",
    outline: "none"
  }
};