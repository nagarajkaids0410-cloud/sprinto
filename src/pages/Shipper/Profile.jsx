import React, { useState } from "react";
import { styles } from "./style";

function Profile() {
  const [company, setCompany] = useState("Reliance Retail Ltd");
  const [contact, setContact] = useState("Aman Sharma");
  const [mobile, setMobile] = useState("9876543210");
  const [email, setEmail] = useState("aman@reliance.com");
  const [gst, setGst] = useState("");
  const [address, setAddress] = useState("");

  const handleSave = () => {
    alert("Company profile updated successfully!");
  };

  return (
    <section style={styles.card}>
      <h2 style={{ marginBottom: "1.5rem" }}>
        🏢 Company Profile
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}
      >
        <div style={styles.formGroup}>
          <label style={styles.label}>COMPANY NAME</label>
          <input
            style={styles.input}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>CONTACT PERSON</label>
          <input
            style={styles.input}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>MOBILE NUMBER</label>
          <input
            style={styles.input}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>EMAIL</label>
          <input
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>GST NUMBER</label>
          <input
            style={styles.input}
            value={gst}
            onChange={(e) => setGst(e.target.value)}
            placeholder="Enter GST Number"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>ADDRESS</label>
          <input
            style={styles.input}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Company Address"
          />
        </div>
      </div>

      <button
        style={{
          ...styles.primaryBtn,
          marginTop: "1.5rem",
        }}
        onClick={handleSave}
      >
        💾 Save Profile
      </button>
    </section>
  );
}

export default Profile;