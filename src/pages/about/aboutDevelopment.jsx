import React, { useState } from "react";

const sections = [
  {
    title: "product development & manufacturing",
    items: [
      "Facial Tissue Production",
      "T-Tork Converting",
      "Maxi Rolls Manufacturing",
      "Kitchen Towel Fabrication",
      "Paper Napkin Design",
      "Toilet Rolls Processing",
      "Folded Hand Towels",
      "Rolled Hand Towels",
      "Clinical Bed Rolls",
    ],
    image:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=500&h=300&fit=crop&crop=center",
    imagePosition: "right",
  },
  {
    title: "distribution & sales",
    items: [
      "Nationwide Distribution Network",
      "B2B Sales Solutions",
      "Retail Partnerships",
      "Direct Client Services",
      "Supply Chain Management",
      "E-commerce Integration",
      "Customer Support Services",
      "Market Expansion",
    ],
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&h=300&fit=crop&crop=center",
    imagePosition: "left",
  },
  {
    title: "quality & sustainability",
    items: [
      "ISO Quality Standards",
      "Eco-Friendly Materials",
      "Sustainable Manufacturing",
      "Quality Control Testing",
      "Environmental Compliance",
      "Waste Reduction Programs",
      "Recycling Initiatives",
      "Carbon Footprint Reduction",
    ],
    image:
      "https://images.unsplash.com/photo-1581093458791-9d42e4d6a586?w=500&h=300&fit=crop&crop=center",
    imagePosition: "right",
  },
  {
    title: "research & innovation",
    items: [
      "Product Innovation Labs",
      "Material Science Research",
      "Technology Integration",
      "Process Optimization",
      "New Product Development",
      "Market Research",
      "Consumer Insights",
      "Future Trend Analysis",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop&crop=center",
    imagePosition: "left",
  },
  {
    title: "customer service & support",
    items: [
      "24/7 Customer Support",
      "Technical Assistance",
      "Product Training",
      "Installation Services",
      "Maintenance Support",
      "Warranty Services",
      "Feedback Management",
      "Customer Satisfaction Programs",
    ],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop&crop=center",
    imagePosition: "right",
  },
];

const ProductDevelopment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      style={{
        margin: "0 auto",
        padding: "20px",
        fontFamily: '"Segoe UI", sans-serif',
        marginLeft: "3rem",
        marginRight: "3rem",
      }}
    >
      {sections.map((section, index) => (
        <div
          key={index}
          style={{
            marginBottom: "4px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 30px",
              backgroundColor: activeIndex === index ? "#30AFB8" : "#f8f9fa",
              cursor: "pointer",
              transition: "all 0.3s ease",
              color: activeIndex === index ? "#ffffff" : "#333333",
            }}
            onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
          >
            <span
              style={{
                fontSize: "20px",
                fontWeight: "600",
                textTransform: "lowercase",
                letterSpacing: "0.5px",
              }}
            >
              {section.title}
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <span>Discover</span>
              <span
                style={{
                  transform:
                    activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  fontSize: "18px",
                }}
              >
                ↓
              </span>
            </div>
          </div>

          {activeIndex === index && (
            <div
              style={{
                padding: "30px",
                backgroundColor: "#ffffff",
                borderTop: "1px solid #e0e0e0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "40px",
                  alignItems: "flex-start",
                  flexDirection:
                    section.imagePosition === "left" ? "row-reverse" : "row",
                }}
              >
                {/* List Section */}
                <div style={{ flex: "1" }}>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margin: "0",
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(280px, 1fr))",
                      gap: "15px",
                    }}
                  >
                    {section.items.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          padding: "15px 20px",
                          backgroundColor: "#f8f9fa",
                          border: "1px solid #e0e0e0",
                          borderRadius: "8px",
                          fontSize: "15px",
                          color: "#333",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          position: "relative",
                          paddingLeft: "45px",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#30AFB8";
                          e.target.style.color = "#ffffff";
                          e.target.style.transform = "translateY(-3px)";
                          e.target.style.boxShadow =
                            "0 6px 12px rgba(0,0,0,0.15)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "#f8f9fa";
                          e.target.style.color = "#333";
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow =
                            "0 2px 4px rgba(0,0,0,0.05)";
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: "15px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "8px",
                            height: "8px",
                            backgroundColor: "#30AFB8",
                            borderRadius: "50%",
                          }}
                        ></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Section */}
                <div
                  style={{
                    flex: "0 0 400px",
                    minHeight: "300px",
                  }}
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductDevelopment;
