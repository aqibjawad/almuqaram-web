import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import "./TrustedCompanies.css"; // Add this CSS file

const TrustedCompanies = () => {
  const [partner, setPartner] = useState([]);

  useEffect(() => {
    // Static data instead of API call
    const staticPartners = [
      {
        id: 1,
        companies_image: "/gallery1.jpg",
        link: "https://partner1.com",
      },
      {
        id: 2,
        companies_image: "/gallery2.jpg",
        link: "https://partner2.com",
      },
      {
        id: 3,
        companies_image: "/gallery3.jpg",
        link: "https://partner3.com",
      },
      {
        id: 4,
        companies_image: "/gallery4.jpg",
        link: "https://partner4.com",
      },
      {
        id: 5,
        companies_image: "/gallery5.jpg",
        link: "https://partner5.com",
      },
      {
        id: 6,
        companies_image: "/gallery6.jpg",
        link: "https://partner6.com",
      },
    ];

    setPartner(staticPartners);
  }, []);

  return (
    <section className="home-trusted-section">
      <div className="home-trusted-container">
        <div className="home-trusted-header-wrapper">
          <h2 className="home-trusted-title">
            Trusted Worldwide.
          </h2>
          <p className="home-trusted-description">
            Founded in the heart of Ajman, UAE, AL MUQARRAM Hygienic Products
            Industry LLC is one of the fastest-growing converters of hygienic
            paper products in the GCC and beyond.
          </p>
        </div>
        
        <div className="home-trusted-marquee-wrapper">
          <Marquee pauseOnHover={true} speed={50} gradient={false}>
            {partner.map((partners, index) => (
              <Link
                key={partners.id}
                to={partners.link}
                target="_blank"
                rel="noopener noreferrer"
                className="home-trusted-partner-link"
              >
                <div className="home-trusted-partner-card">
                  <img
                    src={partners.companies_image}
                    alt={`Partner ${partners.id}`}
                    className="home-trusted-partner-image"
                  />
                </div>
              </Link>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;