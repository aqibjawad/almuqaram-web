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
        companies_image: "/images/partners/logo1.png",
        link: "https://partner1.com",
      },
      {
        id: 2,
        companies_image: "/images/partners/logo2.png",
        link: "https://partner2.com",
      },
      {
        id: 3,
        companies_image: "/images/partners/logo3.png",
        link: "https://partner3.com",
      },
      {
        id: 4,
        companies_image: "/images/partners/logo4.png",
        link: "https://partner4.com",
      },
      {
        id: 5,
        companies_image: "/images/partners/logo5.png",
        link: "https://partner5.com",
      },
      {
        id: 6,
        companies_image: "/images/partners/logo6.png",
        link: "https://partner6.com",
      },
    ];

    setPartner(staticPartners);
  }, []);

  // Card style based on the provided CSS properties
  const cardStyle = {
    width: 321,
    height: 187,
    borderRadius: "19px",
    paddingTop: "43px",
    paddingRight: "40px",
    paddingBottom: "43px",
    paddingLeft: "40px",
    gap: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 1rem",
    backgroundColor: "#ffffff",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.08)",
  };

  return (
    <div className="logos-carousel">
      <Container>
        <div style={{ marginTop: "3rem" }}>
          <div
            className="text-center"
            style={{ fontWeight: "800", fontSize: "74px", color: "#4C5A65" }}
          >
            Trusted Worldwide.
          </div>
          <div
            style={{ color: "#4C5A65B2", fontSize: "24px", fontWeight: "400", textAlign:"center", marginTop:"1rem" }}
          >
            Founded in the heart of Ajman, UAE, AL MUQARRAM Hygienic Products
            Industry LLC is one of the fastest-growing converters of hygienic
            paper products in the GCC and beyond.
          </div>
        </div>

        <div>
          <Marquee
            className="mt-5"
            gradient={false}
            style={{ overflow: "hidden" }}
          >
            {partner.map((partners, index) => (
              <Link
                to={partners.link}
                target="_blank"
                key={partners.id}
                style={{ textDecoration: "none" }}
              >
                <div style={cardStyle}>
                  <img
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100px",
                      objectFit: "contain",
                    }}
                    src={partners.companies_image}
                    alt={`Partner Logo ${index + 1}`}
                  />
                </div>
              </Link>
            ))}
          </Marquee>
        </div>
      </Container>
    </div>
  );
};

export default TrustedCompanies;
