import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

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

  // Unique styles for this component
  const trustedCompaniesStyles = {
    trustedSection: {
      padding: "4rem 0",
      backgroundColor: "#1D9FB8",
    },
    trustedContainer: {
      padding: "0 1rem",
      marginTop: "2rem",
    },
    trustedHeaderWrapper: {
      textAlign: "center",
      marginBottom: "3rem",
    },
    trustedTitle: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#2c3e50",
      marginBottom: "1rem",
      fontFamily: "Arial, sans-serif",
    },
    trustedDescription: {
      fontSize: "1.1rem",
      color: "#6c757d",
      lineHeight: "1.6",
      maxWidth: "800px",
      margin: "0 auto",
    },
    trustedMarqueeWrapper: {
      overflow: "hidden",
      padding: "2rem 0",
    },
    trustedPartnerCard: {
      width: "321px",
      height: "187px",
      borderRadius: "19px",
      padding: "43px 40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 1rem",
      backgroundColor: "#ffffff",
      boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.08)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    trustedPartnerCardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
    },
    trustedPartnerImage: {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain",
      borderRadius: "8px",
    },
    trustedPartnerLink: {
      textDecoration: "none",
      display: "block",
      width: "100%",
      height: "100%",
    },
  };

  return (
    <section style={trustedCompaniesStyles.trustedSection}>
      <div style={trustedCompaniesStyles.trustedContainer}>
        <div style={trustedCompaniesStyles.trustedHeaderWrapper}>
          <h2 style={trustedCompaniesStyles.trustedTitle}>
            Trusted Worldwide.
          </h2>
          <p style={trustedCompaniesStyles.trustedDescription}>
            Founded in the heart of Ajman, UAE, AL MUQARRAM Hygienic Products
            Industry LLC is one of the fastest-growing converters of hygienic
            paper products in the GCC and beyond.
          </p>
        </div>
        
        <div style={trustedCompaniesStyles.trustedMarqueeWrapper}>
          <Marquee pauseOnHover={true} speed={50} gradient={false}>
            {partner.map((partners, index) => (
              <Link
                key={partners.id}
                to={partners.link}
                target="_blank"
                rel="noopener noreferrer"
                style={trustedCompaniesStyles.trustedPartnerLink}
              >
                <div
                  style={trustedCompaniesStyles.trustedPartnerCard}
                  onMouseEnter={(e) => {
                    Object.assign(e.target.style, trustedCompaniesStyles.trustedPartnerCardHover);
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0px 4px 16px rgba(0, 0, 0, 0.08)";
                  }}
                >
                  <img
                    src={partners.companies_image}
                    alt={`Partner ${partners.id}`}
                    style={trustedCompaniesStyles.trustedPartnerImage}
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