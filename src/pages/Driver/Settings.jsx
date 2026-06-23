import React, { useState } from "react";
import { settingsStyles } from "./style";

function DriverSettingsView() {
  const [dutyMode, setDutyMode] = useState(true);
  const [goToHome, setGoToHome] = useState(false);
  const [navigationApp, setNavigationApp] = useState("google");

  return (
    <div style={settingsStyles.container}>
      <div style={settingsStyles.headerWrapper}>
        <div>
          <h2 style={settingsStyles.sectionTitle}>⚙️ OPERATIONAL CONFIGURATION PANEL</h2>
          <p style={settingsStyles.sectionSubtitle}>
            Manage navigation configurations, adjust duty dispatch logs, and control payout preferences.
          </p>
        </div>
        <div style={{
          ...settingsStyles.statusBanner,
          borderColor: dutyMode ? "#00F0FF" : "#EF233C",
          color: dutyMode ? "#00F0FF" : "#EF233C"
        }}>
          STATUS: {dutyMode ? "🟢 READY FOR ROUTE REQUESTS" : "🔴 TERMINAL OFFLINE"}
        </div>
      </div>

      <div style={settingsStyles.settingsGrid}>
        
        {/* 1. Duty Dispatch Mode */}
        <div style={settingsStyles.settingsCard}>
          <h3 style={settingsStyles.cardTitle}>🔄 Duty Mode Controls</h3>
          <div style={settingsStyles.settingRow}>
            <div>
              <div style={settingsStyles.settingLabel}>Active Duty Mode</div>
              <div style={settingsStyles.settingDesc}>Toggle online to immediately receive matching shipping and commercial trip dispatches.</div>
            </div>
            <input 
              type="checkbox" 
              checked={dutyMode} 
              onChange={() => setDutyMode(!dutyMode)} 
              style={settingsStyles.toggleSwitch}
            />
          </div>
          <div style={settingsStyles.settingRow}>
            <div>
              <div style={settingsStyles.settingLabel}>"Go to Home" Target Routing</div>
              <div style={settingsStyles.settingDesc}>Only match load sequences driving in the direct heading of your registered base location.</div>
            </div>
            <input 
              type="checkbox" 
              checked={goToHome} 
              onChange={() => setGoToHome(!goToHome)} 
              style={settingsStyles.toggleSwitch}
            />
          </div>
        </div>

        {/* 2. Navigation Preferences */}
        <div style={settingsStyles.settingsCard}>
          <h3 style={settingsStyles.cardTitle}>🗺️ Telemetry & System Preferences</h3>
          <div style={settingsStyles.settingRow}>
            <div>
              <div style={settingsStyles.settingLabel}>Default Mapping Engine</div>
              <div style={settingsStyles.settingDesc}>Primary navigation engine used for plotting AI optimized transit sequences.</div>
            </div>
            <select 
              value={navigationApp} 
              onChange={(e) => setNavigationApp(e.target.value)} 
              style={settingsStyles.selectMenu}
            >
              <option value="google">Google Maps Navigation</option>
              <option value="ola">Ola Maps Telemetry Hub</option>
            </select>
          </div>
          <div style={settingsStyles.settingRow}>
            <div>
              <div style={settingsStyles.settingLabel}>System Language Console</div>
              <div style={settingsStyles.settingDesc}>Changes the interface and auditory route alert speech language output.</div>
            </div>
            <select style={settingsStyles.selectMenu} defaultValue="english">
              <option value="english">English (US/UK)</option>
              <option value="hindi">Hindi (हिन्दी)</option>
              <option value="tamil">Tamil (தமிழ்)</option>
            </select>
          </div>
        </div>

        {/* 3. Financial Payout Configuration */}
        <div style={settingsStyles.settingsCard}>
          <h3 style={settingsStyles.cardTitle}>💰 Payment Settings & Settlements</h3>
          <div style={settingsStyles.settingRow}>
            <div>
              <div style={settingsStyles.settingLabel}>Instant Daily Payouts</div>
              <div style={settingsStyles.settingDesc}>Route revenue settlements instantly upon shipment delivery verification signature.</div>
            </div>
            <select style={settingsStyles.selectMenu}>
              <option value="imps">IMPS Bank Wire Transfer</option>
              <option value="upi">UPI Gateway Instant</option>
            </select>
          </div>
          <div style={{...settingsStyles.settingRow, borderBottom: 'none'}}>
            <div>
              <div style={settingsStyles.settingLabel}>Current Platform Margin Allocation</div>
              <div style={settingsStyles.settingDesc}>Standard commission deductions on matched external shipper loads.</div>
            </div>
            <div style={{fontWeight: '700', color: '#00F0FF'}}>12% Flat Rate</div>
          </div>
        </div>

        {/* 4. Terminal Support Network */}
        <div style={settingsStyles.settingsCard}>
          <h3 style={settingsStyles.cardTitle}>🤝 Infrastructure Diagnostics & Support</h3>
          <p style={settingsStyles.settingDesc}>Facing hardware attachment failures or technical loadboard glitches?</p>
          <div style={{display: 'flex', gap: '15px', marginTop: '15px'}}>
            <button style={settingsStyles.supportButton} onClick={() => alert("Connecting to 24/7 Priority Emergency Help Center...")}>
              📞 Contact Help Center
            </button>
            <button style={{...settingsStyles.supportButton, borderColor: '#3A506B', color: '#FFFFFF', flex: 1}} onClick={() => alert("Plotting navigation vector to nearest regional Business Development (BD) Office asset...")}>
              🏢 Locate Nearest BD Office
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DriverSettingsView;