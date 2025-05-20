import React from "react";
import "./about.css";

const certifications = [
  {
    icon: "fsc.png",
    title: "FSC",
    description: "Sourcing responsibly from certified forests."
  },
  {
    icon: "iso.png",
    title: "ISO 9001:2015",
    description:
      "9001 International quality management system certification."
  },
  {
    icon: "ce.png",
    title: "CE",
    description:
      "CE Conformity with EU health, safety, and environmental standards."
  },
  {
    icon: "gmp.png",
    title: "GMP",
    description:
      "GMP Good Manufacturing Practice – clean, safe, compliant production."
  },
  {
    icon: "halal.png",
    title: "HALAL",
    description:
      "HALAL Products manufactured in accordance with Islamic guidelines."
  }
];

const Certifications = () => {
  return (
    <div className="certifications-section">
      <div className="certifications-header">
        <h2>Certifications & Standards</h2>
        <p>
          Our commitment to excellence is reflected in our globally recognized
          certifications. From responsible forestry to quality assurance and
          hygiene safety, every product meets the highest benchmarks.
        </p>
        <a href="#" className="learn-more">
          Learn More <span>&#8599;</span>
        </a>
      </div>

      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div className="certification-card" key={index}>
            <img src={cert.icon} alt={cert.title} />
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
