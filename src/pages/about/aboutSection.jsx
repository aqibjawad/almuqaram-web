import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const PurposeAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState('vision');

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const accordionData = [
    {
      id: 'vision',
      title: 'Our Vision',
      content: 'To lead the hygiene industry with innovative, eco-conscious solutions trusted worldwide.'
    },
    {
      id: 'mission',
      title: 'Our Mission',
      content: 'Our mission is to create sustainable hygiene products that enhance daily life while protecting our environment for future generations.'
    },
    {
      id: 'strength',
      title: 'Our Strength',
      content: 'We combine cutting-edge technology with traditional craftsmanship, backed by decades of industry expertise and a commitment to quality excellence.'
    },
    {
      id: 'values',
      title: 'Our Values',
      content: 'Integrity, innovation, sustainability, and customer satisfaction drive everything we do, ensuring we deliver products that make a positive impact.'
    }
  ];

  const styles = `
    .purpose-container {
      min-height: 100vh;
      background-color: #f9fafb;
      padding: 2rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .content-wrapper {
      margin: 2rem,
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .left-content {
      padding-right: 2rem;
    }

    .main-heading {
      font-size: 3rem;
      font-weight: 700;
      color: #1f2937;
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }

    .highlight {
      color: #0d9488;
    }

    .description {
      color: #6b7280;
      font-size: 1.125rem;
      line-height: 1.75;
      max-width: 28rem;
    }

    .accordion-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .accordion-item {
      border: 1px solid #e5e7eb;
      border-radius: 0.5rem;
      background-color: white;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .accordion-button {
      width: 100%;
      padding: 1rem 1.5rem;
      background: none;
      border: none;
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      transition: background-color 0.2s ease;
      font-family: inherit;
    }

    .accordion-button:hover {
      background-color: #f9fafb;
    }

    .accordion-title {
      font-size: 1.125rem;
      font-weight: 600;
      color: #1f2937;
    }

    .accordion-icon {
      flex-shrink: 0;
      margin-left: 1rem;
      color: #6b7280;
    }

    .accordion-content {
      overflow: hidden;
      transition: all 0.3s ease-in-out;
    }

    .accordion-content.active {
      max-height: 10rem;
      opacity: 1;
    }

    .accordion-content.inactive {
      max-height: 0;
      opacity: 0;
    }

    .accordion-text {
      padding: 0 1.5rem 1rem 1.5rem;
      border-left: 4px solid #0d9488;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      margin-bottom: 1rem;
      padding-left: 1rem;
    }

    .accordion-paragraph {
      color: #6b7280;
      line-height: 1.75;
      margin: 0;
    }

    @media (max-width: 1024px) {
      .content-wrapper {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .left-content {
        padding-right: 0;
      }

      .main-heading {
        font-size: 2.5rem;
      }
    }

    @media (max-width: 768px) {
      .purpose-container {
        padding: 1rem;
      }

      .main-heading {
        font-size: 2rem;
      }

      .description {
        font-size: 1rem;
      }

      .accordion-button {
        padding: 0.75rem 1rem;
      }

      .accordion-title {
        font-size: 1rem;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="purpose-container">
        <div className="content-wrapper">
          {/* Left Content */}
          <div className="left-content">
            <h1 className="main-heading">
              We manufacture with{' '}
              <span className="highlight">purpose</span>,{' '}
              <span className="highlight">care</span>, and{' '}
              <span className="highlight">sustainability</span>.
            </h1>
            
            <p className="description">
              From facial tissues to industrial hygiene rolls, our products are designed to uplift daily life with comfort, hygiene, and certified quality. As a proud UAE-based manufacturer, we uphold reliability, affordability, and environmental integrity.
            </p>
          </div>

          {/* Right Accordion */}
          <div className="accordion-container">
            {accordionData.map((item) => (
              <div key={item.id} className="accordion-item">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="accordion-button"
                >
                  <span className="accordion-title">
                    {item.title}
                  </span>
                  <div className="accordion-icon">
                    {activeAccordion === item.id ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </div>
                </button>
                
                <div
                  className={`accordion-content ${
                    activeAccordion === item.id ? 'active' : 'inactive'
                  }`}
                >
                  <div className="accordion-text">
                    <p className="accordion-paragraph">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PurposeAccordion;