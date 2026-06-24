import React, { useState, useEffect } from "react";

export default function RouteView() {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState("route1");
  const [currentWaypoint, setCurrentWaypoint] = useState(0);

  // Simulation routes database with coordinates for the path planning matrix
  const routingDatabase = {
    route1: {
      title: "Chennai Port Terminal ➔ Bangalore Hub",
      distance: "346 km",
      eta: "5h 42m",
      efficiency: "99.4% (Shortest Vector Labeled)",
      waypoints: ["Origin: Chennai Port", "Sriperumbudur Toll", "Ranipet Node", "Kolar Transit Zone", "Goal: Bangalore Hub"],
      points: "50,150 120,130 220,110 320,70 420,50" // Map coordinates
    },
    route2: {
      title: "Hyderabad Logistics Park ➔ Mumbai Terminal",
      distance: "712 km",
      eta: "12h 15m",
      efficiency: "96.8% (Optimized Bypass Path)",
      waypoints: ["Origin: Hyderabad Park", "Zaheerabad Node", "Solapur Core", "Pune Bypass", "Goal: Mumbai Terminal"],
      points: "50,150 150,140 250,100 350,90 420,50" // Map coordinates
    }
  };

  const currentRouteData = routingDatabase[selectedRoute];

  // Simulate vehicle moving along the shortest path nodes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWaypoint((prev) => (prev + 1) % currentRouteData.waypoints.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [selectedRoute, currentRouteData.waypoints.length]);

  const triggerPathOptimization = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
      setCurrentWaypoint(0);
    }, 1500);
  };

  return (
    <div style={routeStyles.container}>
      {/* HEADER CONTROLS */}
      <div style={routeStyles.headerRow}>
        <div>
          <h2 style={routeStyles.viewTitle}>🗺️ AUTONOMOUS ROUTE PATHFINDER</h2>
          <p style={routeStyles.viewSubtitle}>
            Real-time shortest path matrix analysis linking current vessel coordinates to your designated cargo goal areas.
          </p>
        </div>
        
        <div style={routeStyles.controlGroup}>
          <select 
            value={selectedRoute} 
            onChange={(e) => { setSelectedRoute(e.target.value); setCurrentWaypoint(0); }}
            style={routeStyles.routeSelector}
          >
            <option value="route1">Chennai Port ➔ Bangalore Hub</option>
            <option value="route2">Hyderabad ➔ Mumbai Terminal</option>
          </select>

          <button 
            onClick={triggerPathOptimization} 
            style={routeStyles.optimizeBtn}
            disabled={isOptimizing}
          >
            {isOptimizing ? "🔄 Recalculating Nodes..." : "⚡ Force Shortest Path"}
          </button>
        </div>
      </div>

      {/* CORE DISPLAY WORKSPACE */}
      <div style={routeStyles.workspaceGrid}>
        
        {/* LEFT COLUMN: LIVE VECTOR INTERACTIVE MAP */}
        <div style={routeStyles.mapCard}>
          <div style={routeStyles.cardHeader}>
            <span style={routeStyles.liveIndicator}>● LIVE SHORTEST PATH TELEMETRY VISUALIZER</span>
            <span style={routeStyles.mapScaleBadge}>GRID SCALE: 1:250,000</span>
          </div>

          {/* Dynamic Vector Canvas Rendering Map Paths */}
          <div style={routeStyles.mapCanvasContainer}>
            <svg style={routeStyles.svgCanvas}>
              {/* Grid Background Lines */}
              <defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1C2541" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Path Lines */}
              <polyline
                points={currentRouteData.points}
                fill="none"
                stroke={isOptimizing ? "#1C2541" : "#00F0FF"}
                strokeWidth="4"
                strokeDasharray={isOptimizing ? "5,5" : "none"}
                style={{ transition: "all 0.5s ease" }}
              />

              {/* Mapping Node Pins */}
              {currentRouteData.points.split(" ").map((pt, index) => {
                const [x, y] = pt.split(",");
                const isCurrent = index === currentWaypoint;
                const isGoal = index === currentRouteData.waypoints.length - 1;
                
                return (
                  <g key={index}>
                    <circle 
                      cx={x} 
                      cy={y} 
                      r={isCurrent ? "9" : "6"} 
                      fill={isGoal ? "#10B981" : isCurrent ? "#00F0FF" : "#1F2937"} 
                      stroke={isGoal ? "#FFFFFF" : "#00F0FF"}
                      strokeWidth="2"
                    />
                    {isCurrent && (
                      <circle cx={x} cy={y} r="18" fill="none" stroke="#00F0FF" strokeWidth="1" opacity="0.5" style={{animation: "pulse 1.5s infinite"}} />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Float HUD Overlay over map element */}
            <div style={routeStyles.hudOverlay}>
              <div>CURRENT VECTOR SPEED: <strong style={{color: "#10B981"}}>82 km/h</strong></div>
              <div>RADAR LOCK: <strong style={{color: "#00F0FF"}}>STABLE</strong></div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PATH CRITERIA & TIMELINE NODES */}
        <div style={routeStyles.dataSidebar}>
          
          {/* Key Analytics */}
          <div style={routeStyles.panelSubCard}>
            <span style={routeStyles.metricLabel}>TARGET COMPASS GOAL</span>
            <h3 style={routeStyles.metricMainValue}>{currentRouteData.title}</h3>
            
            <div style={routeStyles.statsMiniGrid}>
              <div>
                <span style={routeStyles.miniLabel}>SHORTEST PATH</span>
                <p style={routeStyles.miniValue}>{currentRouteData.distance}</p>
              </div>
              <div>
                <span style={routeStyles.miniLabel}>CRITICAL ETA</span>
                <p style={routeStyles.miniValue}>{currentRouteData.eta}</p>
              </div>
            </div>
            
            <div style={routeStyles.efficiencyBarContainer}>
              <div style={routeStyles.efficiencyLabels}>
                <span>PATH ROUTING EFFICIENCY</span>
                <span style={{color: "#00F0FF"}}>{currentRouteData.efficiency}</span>
              </div>
              <div style={routeStyles.barTrack}>
                <div style={{...routeStyles.barFill, width: selectedRoute === "route1" ? "99.4%" : "96.8%"}}></div>
              </div>
            </div>
          </div>

          {/* Node Progression Sequence */}
          <div style={{...routeStyles.panelSubCard, flexGrow: 1}}>
            <h4 style={routeStyles.nodeTitleHeader}>📌 LIVE PATH NODE PROGRESSION</h4>
            <div style={routeStyles.nodeTimeline}>
              {currentRouteData.waypoints.map((waypoint, idx) => {
                const isPassed = idx < currentWaypoint;
                const isCurrent = idx === currentWaypoint;
                const isGoal = idx === currentRouteData.waypoints.length - 1;

                return (
                  <div key={idx} style={routeStyles.timelineRow}>
                    <div style={{
                      ...routeStyles.timelineIndicatorDot,
                      backgroundColor: isGoal ? "#10B981" : isCurrent ? "#00F0FF" : isPassed ? "#2563EB" : "#1C2541"
                    }} />
                    <div style={{
                      ...routeStyles.timelineTextBox,
                      backgroundColor: isCurrent ? "rgba(0, 240, 255, 0.05)" : "#0A0F1D",
                      borderColor: isCurrent ? "#00F0FF" : "#1C2541"
                    }}>
                      <span style={{
                        fontSize: "0.85rem",
                        fontWeight: isCurrent ? "700" : "600",
                        color: isCurrent ? "#00F0FF" : isPassed ? "#8D99AE" : "#FFFFFF"
                      }}>
                        {waypoint}
                      </span>
                      {isCurrent && <span style={routeStyles.liveTrackingBadge}>DRIVER CURRENT LOC</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Strictly configured longhand style definitions protecting dark canvas views
const routeStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    flexGrow: 1
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    padding: "20px 24px",
    borderRadius: "12px"
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
  controlGroup: {
    display: "flex",
    gap: "14px",
    alignItems: "center"
  },
  routeSelector: {
    backgroundColor: "#0A0F1D",
    border: "1px solid #1C2541",
    color: "#FFFFFF",
    padding: "10px 14px",
    borderRadius: "8px",
    fontSize: "0.85rem",
    outline: "none",
    cursor: "pointer"
  },
  optimizeBtn: {
    backgroundColor: "#2563EB",
    color: "#FFFFFF",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "0.85rem",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.25)"
  },
  workspaceGrid: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: "24px",
    flexGrow: 1
  },
  mapCard: {
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    borderRadius: "12px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  liveIndicator: {
    fontSize: "0.75rem",
    color: "#8D99AE",
    fontWeight: "700",
    letterSpacing: "0.5px"
  },
  mapScaleBadge: {
    backgroundColor: "#0A0F1D",
    border: "1px solid #1C2541",
    color: "#00F0FF",
    padding: "4px 10px",
    borderRadius: "4px",
    fontSize: "0.7rem",
    fontWeight: "700"
  },
  mapCanvasContainer: {
    backgroundColor: "#0A0F1D",
    border: "1px solid #1C2541",
    borderRadius: "8px",
    height: "380px",
    position: "relative",
    overflow: "hidden"
  },
  svgCanvas: {
    width: "100%",
    height: "100%"
  },
  hudOverlay: {
    position: "absolute",
    bottom: "16px",
    left: "16px",
    backgroundColor: "rgba(17, 24, 39, 0.85)",
    border: "1px solid #1C2541",
    borderRadius: "6px",
    padding: "10px 14px",
    fontSize: "0.75rem",
    color: "#8D99AE",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    fontFamily: "monospace"
  },
  dataSidebar: {
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  },
  panelSubCard: {
    backgroundColor: "#111827",
    border: "1px solid #1C2541",
    borderRadius: "12px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "14px"
  },
  metricLabel: {
    fontSize: "0.68rem",
    color: "#8D99AE",
    fontWeight: "700",
    letterSpacing: "1px"
  },
  metricMainValue: {
    margin: 0,
    fontSize: "1.1rem",
    color: "#FFFFFF",
    fontWeight: "800"
  },
  statsMiniGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    backgroundColor: "#0A0F1D",
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #1C2541"
  },
  miniLabel: {
    fontSize: "0.65rem",
    color: "#8D99AE",
    fontWeight: "700"
  },
  miniValue: {
    margin: "4px 0 0 0",
    fontSize: "1.1rem",
    fontWeight: "800",
    color: "#FFFFFF"
  },
  efficiencyBarContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "6px"
  },
  efficiencyLabels: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.7rem",
    fontWeight: "700",
    color: "#8D99AE"
  },
  barTrack: {
    height: "6px",
    backgroundColor: "#0A0F1D",
    borderRadius: "3px",
    overflow: "hidden"
  },
  barFill: {
    height: "100%",
    backgroundColor: "#00F0FF",
    borderRadius: "3px",
    transition: "width 0.5s ease"
  },
  nodeTitleHeader: {
    margin: 0,
    fontSize: "0.75rem",
    color: "#8D99AE",
    fontWeight: "700",
    letterSpacing: "0.5px"
  },
  nodeTimeline: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    position: "relative"
  },
  timelineRow: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    position: "relative"
  },
  timelineIndicatorDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    zIndex: 2,
    boxShadow: "0 0 6px rgba(0,0,0,0.5)"
  },
  timelineTextBox: {
    flexGrow: 1,
    border: "1px solid #1C2541",
    padding: "10px 14px",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  liveTrackingBadge: {
    backgroundColor: "rgba(0, 240, 255, 0.15)",
    color: "#00F0FF",
    border: "1px solid #00F0FF",
    padding: "2px 6px",
    borderRadius: "4px",
    fontSize: "0.6rem",
    fontWeight: "800"
  }
};