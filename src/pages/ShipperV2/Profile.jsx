import React from "react";

function Profile() {
  const stats = [
    {
      title: "Total Shipments",
      value: "1,248",
    },
    {
      title: "Fleet Managed",
      value: "152",
    },
    {
      title: "Revenue",
      value: "₹18.5L",
    },
    {
      title: "Success Rate",
      value: "98%",
    },
  ];

  return (
    <div>

      {/* Header */}

      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          My Profile
        </h1>

        <p
          style={{
            color: "#B0B0B0",
            marginTop: "8px",
          }}
        >
          Manage your account information
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "350px 1fr",
          gap: "25px",
        }}
      >

        {/* Left Card */}

        <div
          style={{
            background: "#242424",
            border: "1px solid #3A3A3A",
            borderRadius: "20px",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "#C9A227",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
              fontSize: "50px",
              color: "#121212",
              fontWeight: "bold",
            }}
          >
            A
          </div>

          <h2
            style={{
              color: "#FFFFFF",
              marginTop: "20px",
            }}
          >
            Admin User
          </h2>

          <p
            style={{
              color: "#B0B0B0",
            }}
          >
            Logistics Manager
          </p>

          <button
            style={{
              marginTop: "20px",
              width: "100%",
              background: "#C9A227",
              color: "#121212",
              border: "none",
              padding: "12px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Edit Profile
          </button>
        </div>

        {/* Right */}

        <div>

          {/* Info */}

          <div
            style={{
              background: "#242424",
              border: "1px solid #3A3A3A",
              borderRadius: "20px",
              padding: "25px",
              marginBottom: "25px",
            }}
          >
            <h2
              style={{
                color: "#C9A227",
                marginBottom: "20px",
              }}
            >
              Personal Information
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <div>
                <label style={{ color: "#B0B0B0" }}>
                  Full Name
                </label>

                <input
                  defaultValue="Admin User"
                  style={{
                    width: "100%",
                    marginTop: "8px",
                    padding: "12px",
                    background: "#1B1B1B",
                    border: "1px solid #3A3A3A",
                    color: "#FFFFFF",
                    borderRadius: "10px",
                  }}
                />
              </div>

              <div>
                <label style={{ color: "#B0B0B0" }}>
                  Email
                </label>

                <input
                  defaultValue="admin@loadshare.com"
                  style={{
                    width: "100%",
                    marginTop: "8px",
                    padding: "12px",
                    background: "#1B1B1B",
                    border: "1px solid #3A3A3A",
                    color: "#FFFFFF",
                    borderRadius: "10px",
                  }}
                />
              </div>

              <div>
                <label style={{ color: "#B0B0B0" }}>
                  Phone
                </label>

                <input
                  defaultValue="+91 9876543210"
                  style={{
                    width: "100%",
                    marginTop: "8px",
                    padding: "12px",
                    background: "#1B1B1B",
                    border: "1px solid #3A3A3A",
                    color: "#FFFFFF",
                    borderRadius: "10px",
                  }}
                />
              </div>

              <div>
                <label style={{ color: "#B0B0B0" }}>
                  Designation
                </label>

                <input
                  defaultValue="Logistics Manager"
                  style={{
                    width: "100%",
                    marginTop: "8px",
                    padding: "12px",
                    background: "#1B1B1B",
                    border: "1px solid #3A3A3A",
                    color: "#FFFFFF",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Stats */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "20px",
            }}
          >
            {stats.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#242424",
                  border: "1px solid #3A3A3A",
                  borderRadius: "16px",
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    color: "#B0B0B0",
                    margin: 0,
                  }}
                >
                  {item.title}
                </p>

                <h2
                  style={{
                    color: "#C9A227",
                    marginTop: "12px",
                  }}
                >
                  {item.value}
                </h2>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;