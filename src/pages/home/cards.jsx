import React from "react";

function Cards() {
  const cardStyles = {
    heroSection: {
      width: "100%",
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
      width: "99%",
      height: "70%",
      objectFit: "cover",
      zIndex: 0,
      marginRight: "5rem",
      borderRadius:"20PX"
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
      alignItems: "flex-start",
      padding: "2rem",
      position: "relative",
      zIndex: 2,
      height: "45vh",
      width: "100%",
    },
    heroTitle: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      lineHeight: 1.2,
      marginBottom: "1rem",
      textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    },
    heroTagline: {
      textAlign: "right",
      maxWidth: "300px",
    },
    taglineText: {
      fontSize: "1.1rem",
      textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)",
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
      borderRadius: "8px",
      color: "#333",
      minHeight: "190px",
      display: "flex",
      flexDirection: "column",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      boxSizing: "border-box",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
    ecoConscious: {
      backgroundColor: "rgba(27, 53, 54, 0.85)",
      color: "white",
    },
    regularCard: {
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      color: "#333",
    },
    cardTitle: {
      fontSize: "1.4rem",
      marginBottom: "1rem",
      color: "inherit",
    },
    cardText: {
      fontSize: "0.95rem",
      lineHeight: 1.5,
    },
  };

  const [hoveredCard, setHoveredCard] = React.useState(null);

  const getCardStyle = (cardType, index) => {
    const baseStyle = { ...cardStyles.card };
    const typeStyle =
      cardType === "eco" ? cardStyles.ecoConscious : cardStyles.regularCard;
    const hoverStyle = hoveredCard === index ? cardStyles.cardHover : {};

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
          padding: "1.5rem",
        },
        heroTagline: {
          ...cardStyles.heroTagline,
          textAlign: "left",
          marginTop: "1rem",
          maxWidth: "100%",
        },
        heroTitle: {
          ...cardStyles.heroTitle,
          fontSize: "1.8rem",
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
        },
        heroTagline: {
          ...cardStyles.heroTagline,
          textAlign: "left",
          marginTop: "1rem",
          maxWidth: "100%",
        },
        heroTitle: {
          ...cardStyles.heroTitle,
          fontSize: "2rem",
        },
      };
    } else if (width <= 1024) {
      return {
        infoCards: {
          ...cardStyles.infoCards,
          gridTemplateColumns: "repeat(2, 1fr)",
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
        style={cardStyles.backgroundImage}
        alt="Sustainable Hygiene Background"
      />
      <div style={cardStyles.overlay}></div>

      <div style={responsiveStyles.heroContent || cardStyles.heroContent}>
        <div>
          <h1 style={responsiveStyles.heroTitle || cardStyles.heroTitle}>
            Sustainable Hygiene
            <br />
            for a Better Tomorrow
          </h1>
        </div>
        <div style={responsiveStyles.heroTagline || cardStyles.heroTagline}>
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
