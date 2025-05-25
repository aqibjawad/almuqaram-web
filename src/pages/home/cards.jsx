import React from "react";
import "./cards.css";

function Cards() {
  const cardStyles = {
    heroSection: {
      minHeight: "100vh",
      position: "relative",
      color: "white",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    },
    backgroundImage: {
      marginTop: "25px",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "70%",
      objectFit: "cover",
      zIndex: 0,
      borderRadius: "20px",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "70%",
      zIndex: 1,
    },
    heroContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "3rem 2rem",
      position: "relative",
      zIndex: 2,
      height: "45vh",
      width: "100%",
    },
    heroTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      lineHeight: 1.2,
      marginBottom: "0",
      textShadow: "0 2px 4px rgba(0, 0, 0, 0.7)",
      textAlign: "center",
      marginTop:"3rem",
      flex: 1,
    },
    heroTagline: {
      textAlign: "right",
      maxWidth: "350px",
      marginRight: "2rem",
    },
    taglineText: {
      fontSize: "1.2rem",
      textShadow: "0 1px 3px rgba(0, 0, 0, 0.7)",
      fontWeight: "500",
      textAlign:"center",
      marginTop:"3rem"
    },
    infoCards: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "1.5rem",
      padding: "2rem",
      marginTop: "15px",
      zIndex: 3,
      position: "relative",
      width: "100%",
      boxSizing: "border-box",
    },
    card: {
      padding: "1.5rem",
      borderRadius: "12px",
      color: "#333",
      minHeight: "190px",
      display: "flex",
      flexDirection: "column",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      boxSizing: "border-box",
      cursor: "pointer",
    },
    cardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.25)",
    },
    ecoConscious: {
      backgroundColor: "rgba(27, 53, 54, 0.9)",
      color: "white",
    },
    ecoConsciousHover: {
      backgroundColor: "rgba(27, 53, 54, 0.95)",
      color: "white",
    },
    regularCard: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      color: "#333",
    },
    regularCardHover: {
      backgroundColor: "rgba(27, 53, 54, 0.9)",
      color: "white",
    },
    cardTitle: {
      fontSize: "1.4rem",
      marginBottom: "1rem",
      color: "inherit",
      fontWeight: "600",
    },
    cardText: {
      fontSize: "0.95rem",
      lineHeight: 1.6,
      color: "inherit",
    },
  };

  const [hoveredCard, setHoveredCard] = React.useState(null);

  const getCardStyle = (cardType, index) => {
    const baseStyle = { ...cardStyles.card };
    let typeStyle,
      hoverStyle = {};

    if (cardType === "eco") {
      typeStyle =
        hoveredCard === index
          ? cardStyles.ecoConsciousHover
          : cardStyles.ecoConscious;
    } else {
      typeStyle =
        hoveredCard === index
          ? cardStyles.regularCardHover
          : cardStyles.regularCard;
    }

    if (hoveredCard === index) {
      hoverStyle = cardStyles.cardHover;
    }

    return { ...baseStyle, ...typeStyle, ...hoverStyle };
  };

  const getResponsiveStyles = () => {
    const width = window.innerWidth || 1200;

    if (width <= 576) {
      return {
        infoCards: {
          ...cardStyles.infoCards,
          gridTemplateColumns: "1fr",
          marginTop: "1rem",
          padding: "1rem",
        },
        heroContent: {
          ...cardStyles.heroContent,
          flexDirection: "column",
          height: "auto",
          padding: "2rem 1.5rem",
          alignItems: "center",
        },
        heroTagline: {
          ...cardStyles.heroTagline,
          textAlign: "center",
          marginTop: "1.5rem",
          marginRight: "0",
          maxWidth: "100%",
        },
        heroTitle: {
          ...cardStyles.heroTitle,
          fontSize: "2rem",
        },
        backgroundImage: {
          ...cardStyles.backgroundImage,
          width: "calc(100% - 0.5rem)",
          marginRight: "0.5rem",
        },
      };
    } else if (width <= 768) {
      return {
        infoCards: {
          ...cardStyles.infoCards,
          gridTemplateColumns: "repeat(2, 1fr)",
          marginTop: "1rem",
        },
        heroContent: {
          ...cardStyles.heroContent,
          flexDirection: "column",
          height: "auto",
          padding: "2.5rem 2rem",
          alignItems: "center",
        },
        heroTagline: {
          ...cardStyles.heroTagline,
          textAlign: "center",
          marginTop: "1.5rem",
          marginRight: "0",
          maxWidth: "100%",
        },
        heroTitle: {
          ...cardStyles.heroTitle,
          fontSize: "2.5rem",
        },
      };
    } else if (width <= 1024) {
      return {
        infoCards: {
          ...cardStyles.infoCards,
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        heroContent: {
          ...cardStyles.heroContent,
          padding: "3rem 2rem",
        },
      };
    } else if (width <= 1200) {
      return {
        infoCards: {
          ...cardStyles.infoCards,
          gridTemplateColumns: "repeat(3, 1fr)",
        },
      };
    }

    return {};
  };

  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsiveStyles = getResponsiveStyles();

  return (
    <div style={cardStyles.heroSection}>
      <img
        src="/sustainableImage.png"
        style={responsiveStyles.backgroundImage || cardStyles.backgroundImage}
        alt="Sustainable Hygiene Background"
      />
      <div style={cardStyles.overlay}></div>

      <div style={responsiveStyles.heroContent || cardStyles.heroContent}>
        <div style={{ flex: 1 }}>
          <h1 style={responsiveStyles.heroTitle || cardStyles.heroTitle}>
            Sustainable Hygiene for a Better Tomorrow
          </h1>
          <p style={cardStyles.taglineText}>
            Our products are environmentally friendly and Recyclable
          </p>
        </div>
      </div>

      <div style={responsiveStyles.infoCards || cardStyles.infoCards}>
        {/* Eco-Conscious Card */}
        <div
          style={getCardStyle("eco", 0)}
          onMouseEnter={() => setHoveredCard(0)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2 style={cardStyles.cardTitle}>Eco-Conscious Manufacturing</h2>
          <p style={cardStyles.cardText}>
            AL MUQARRAM Hygienic Products Industry LLC is one of the
            fastest-growing converters of hygienic paper products dealing in two
            Brands
          </p>
        </div>

        {/* Employee Wellbeing Card */}
        <div
          style={getCardStyle("regular", 1)}
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2 style={cardStyles.cardTitle}>Employee Wellbeing Initiatives</h2>
          <p style={cardStyles.cardText}>
            Our people are our strength. We foster a safe, balanced, and
            motivating work environment where innovation and collaboration
            thrive.
          </p>
        </div>

        {/* Responsible Governance Card */}
        <div
          style={getCardStyle("regular", 2)}
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2 style={cardStyles.cardTitle}>
            Responsible Governance & Compliance
          </h2>
          <p style={cardStyles.cardText}>
            We follow ISO 9001 standards, CE-certified machinery, and Good
            Manufacturing Practices — ensuring transparency, ethics, and
            accountability at every step.
          </p>
        </div>

        {/* Ethical & Green Supply Chain Card */}
        <div
          style={getCardStyle("regular", 3)}
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2 style={cardStyles.cardTitle}>Ethical & Green Supply Chain</h2>
          <p style={cardStyles.cardText}>
            From sourcing to distribution, we partner with globally certified
            suppliers who meet our high standards for sustainability, ethics,
            and environmental responsibility.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
