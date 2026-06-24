import React from "react";

function Reports() {
  const reports = [
    {
      title: "Revenue Report",
      value: "₹18.5 Lakh",
      change: "+15%",
      color: "#22C55E",
    },
    {
      title: "Completed Deliveries",
      value: "1,248",
      change: "+8%",
      color: "#C9A227",
    },
    {
      title: "Fuel Cost",
      value: "₹3.2 Lakh",
      change: "-5%",
      color: "#3B82F6",
    },
    {
      title: "Driver Performance",
      value: "96%",
      change: "+4%",
      color: "#F59E0B",
    },
  ];

  const monthly = [
    {
      month: "Jan",
      revenue: "₹2.1L",
      deliveries: 152,
    },
    {
      month: "Feb",
      revenue: "₹2.4L",
      deliveries: 184,
    },
    {
      month: "Mar",
      revenue: "₹2.9L",
      deliveries: 226,
    },
    {
      month: "Apr",
      revenue: "₹3.2L",
      deliveries: 248,
    },
    {
      month: "May",
      revenue: "₹3.7L",
      deliveries: 291,
    },
  ];

  return (
    <div>

      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <div>
          <h1
            style={{
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            Reports & Analytics
          </h1>

          <p
            style={{
              color: "#B0B0B0",
              marginTop: "8px",
            }}
          >
            Business insights and performance reports
          </p>
        </div>

        <button
          style={{
            background: "#C9A227",
            color: "#121212",
            border: "none",
            padding: "12px 22px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Export PDF
        </button>
      </div>

      {/* KPI */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {reports.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#242424",
              border: "1px solid #3A3A3A",
              borderRadius: "18px",
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

            <h1
              style={{
                color: "#FFFFFF",
                marginTop: "12px",
                fontSize: "34px",
              }}
            >
              {item.value}
            </h1>

            <p
              style={{
                color: item.color,
                marginTop: "12px",
                fontWeight: "600",
              }}
            >
              {item.change} this month
            </p>
          </div>
        ))}
      </div>

      {/* Monthly Table */}

      <div
        style={{
          background: "#242424",
          border: "1px solid #3A3A3A",
          borderRadius: "20px",
          padding: "25px",
        }}
      >
        <h2
          style={{
            color: "#FFFFFF",
            marginBottom: "25px",
          }}
        >
          Monthly Performance
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  color: "#B0B0B0",
                  textAlign: "left",
                  padding: "15px",
                  borderBottom: "1px solid #3A3A3A",
                }}
              >
                Month
              </th>

              <th
                style={{
                  color: "#B0B0B0",
                  textAlign: "left",
                  padding: "15px",
                  borderBottom: "1px solid #3A3A3A",
                }}
              >
                Revenue
              </th>

              <th
                style={{
                  color: "#B0B0B0",
                  textAlign: "left",
                  padding: "15px",
                  borderBottom: "1px solid #3A3A3A",
                }}
              >
                Deliveries
              </th>
            </tr>
          </thead>

          <tbody>
            {monthly.map((item, index) => (
              <tr key={index}>
                <td
                  style={{
                    padding: "18px",
                    color: "#FFFFFF",
                    borderBottom: "1px solid #2F2F2F",
                  }}
                >
                  {item.month}
                </td>

                <td
                  style={{
                    padding: "18px",
                    color: "#22C55E",
                    borderBottom: "1px solid #2F2F2F",
                    fontWeight: "600",
                  }}
                >
                  {item.revenue}
                </td>

                <td
                  style={{
                    padding: "18px",
                    color: "#FFFFFF",
                    borderBottom: "1px solid #2F2F2F",
                  }}
                >
                  {item.deliveries}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Reports;