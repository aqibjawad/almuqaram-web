import React from "react";
import "./about.css"; // Import the external CSS file

const StatsSection = () => {
  const stats = [
    { value: "1,000+", label: "Business Clients" },
    { value: "300+", label: "Employees" },
    { value: "200+", label: "Product SKUs" },
    { value: "30+", label: "Years of Industry Experience" },
  ];

  return (
    <div>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
