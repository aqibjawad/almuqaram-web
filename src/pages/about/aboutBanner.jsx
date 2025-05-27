import React from "react";

const AboutBanner = () => {
  const styles = `
    .about-banner {
      min-height: 100vh;
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      position: relative;
      overflow: hidden;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }

    .bg-pattern {
      position: absolute;
      inset: 0;
      opacity: 0.05;
    }

    .bg-blur-1 {
      position: absolute;
      top: 80px;
      left: 80px;
      width: 288px;
      height: 288px;
      background: #14b8a6;
      border-radius: 50%;
      filter: blur(48px);
    }

    .bg-blur-2 {
      position: absolute;
      bottom: 80px;
      right: 80px;
      width: 384px;
      height: 384px;
      background: #60a5fa;
      border-radius: 50%;
      filter: blur(48px);
    }

    .container {
      position: relative;
      z-index: 10;
      max-width: 1280px;
      margin: 0 auto;
      padding: 80px 24px 48px;
    }

    .main-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 64px;
      align-items: center;
      margin-bottom: 64px;
    }

    @media (min-width: 1024px) {
      .main-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    .left-column {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .header-section {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      padding: 8px 16px;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(8px);
      border-radius: 50px;
      border: 1px solid #e5e7eb;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      width: fit-content;
    }

    .badge-text {
      color: #4b5563;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 0.05em;
    }

    .main-title {
      font-size: 96px;
      font-weight: 900;
      line-height: 1;
    }

    @media (max-width: 1024px) {
      .main-title {
        font-size: 72px;
      }
    }

    .title-trusted {
      background: linear-gradient(90deg, #374151 0%, #1f2937 50%, #111827 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .title-hygiene {
      background: linear-gradient(90deg, #14b8a6 0%, #2563eb 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .title-experts {
      background: linear-gradient(90deg, #374151 0%, #1f2937 50%, #111827 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .year-section {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .year-line {
      width: 64px;
      height: 4px;
      background: linear-gradient(90deg, #14b8a6 0%, #2563eb 100%);
      border-radius: 50px;
    }

    .year-text {
      font-size: 24px;
      font-weight: 700;
      color: #4b5563;
      letter-spacing: 0.1em;
    }

    .buttons-section {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding-top: 24px;
    }

    @media (min-width: 640px) {
      .buttons-section {
        flex-direction: row;
      }
    }

    .btn-learn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 16px 32px;
      background: white;
      border: 2px solid #d1d5db;
      border-radius: 16px;
      font-weight: 500;
      color: #374151;
      text-decoration: none;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .btn-learn:hover {
      border-color: #9ca3af;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      transform: translateY(-4px);
      color: #111827;
    }

    .btn-learn svg {
      width: 20px;
      height: 20px;
      color: #6b7280;
      transition: all 0.3s ease;
    }

    .btn-learn:hover svg {
      color: #374151;
      transform: translateX(4px);
    }

    .btn-get-started {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 16px 32px;
      background: linear-gradient(90deg, #14b8a6 0%, #2563eb 100%);
      color: white;
      border: none;
      border-radius: 16px;
      font-weight: 700;
      font-size: 18px;
      text-decoration: none;
      box-shadow: 0 10px 25px rgba(20, 184, 166, 0.25);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .btn-get-started:hover {
      background: linear-gradient(90deg, #0f766e 0%, #1d4ed8 100%);
      box-shadow: 0 20px 40px rgba(20, 184, 166, 0.4);
      transform: translateY(-4px);
    }

    .btn-get-started svg {
      width: 20px;
      height: 20px;
      transition: all 0.3s ease;
    }

    .btn-get-started:hover svg {
      transform: translateX(4px);
    }

    .right-column {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .description-card {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(8px);
      border-radius: 24px;
      padding: 32px;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.5);
    }

    .description-content {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .pulse-dots {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;
    }

    .dot-1 {
      width: 12px;
      height: 12px;
      background: #14b8a6;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    .dot-2 {
      width: 8px;
      height: 8px;
      background: #3b82f6;
      border-radius: 50%;
      animation: pulse 2s infinite 0.1s;
    }

    .dot-3 {
      width: 4px;
      height: 4px;
      background: #10b981;
      border-radius: 50%;
      animation: pulse 2s infinite 0.2s;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    .description-text {
      color: #374151;
      font-size: 18px;
      line-height: 1.6;
    }

    .highlight-teal {
      font-weight: 600;
      color: #0d9488;
    }

    .highlight-blue {
      font-weight: 600;
      color: #2563eb;
    }

    .description-subtext {
      color: #4b5563;
      line-height: 1.6;
    }

    .highlight-gray {
      font-weight: 600;
      color: #1f2937;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      padding-top: 24px;
      border-top: 1px solid #e5e7eb;
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      font-size: 24px;
      font-weight: 700;
    }

    .stat-teal { color: #0d9488; }
    .stat-blue { color: #2563eb; }
    .stat-green { color: #059669; }

    .stat-label {
      font-size: 12px;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .image-section {
      position: relative;
    }

    .image-glow {
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, rgba(20, 184, 166, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%);
      border-radius: 24px;
      filter: blur(24px);
    }

    .image-container {
      position: relative;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(8px);
      border-radius: 24px;
      padding: 16px;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.5);
    }

    .image-placeholder {
      aspect-ratio: 16/9;
      background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
      border-radius: 16px;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .banner-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
    }

    .image-overlay-1 {
      position: absolute;
      top: 16px;
      left: 16px;
      width: 96px;
      height: 96px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      filter: blur(32px);
    }

    .image-overlay-2 {
      position: absolute;
      bottom: 16px;
      right: 16px;
      width: 128px;
      height: 128px;
      background: rgba(20, 184, 166, 0.2);
      border-radius: 50%;
      filter: blur(48px);
    }

    .floating-elements {
      position: absolute;
    }

    .float-1 {
      top: 25%;
      right: 40px;
      width: 16px;
      height: 16px;
      background: #14b8a6;
      border-radius: 50%;
      animation: bounce 2s infinite 0.3s;
    }

    .float-2 {
      top: 33%;
      left: 40px;
      width: 12px;
      height: 12px;
      background: #60a5fa;
      border-radius: 50%;
      animation: bounce 2s infinite 0.7s;
    }

    .float-3 {
      bottom: 25%;
      left: 25%;
      width: 8px;
      height: 8px;
      background: #34d399;
      border-radius: 50%;
      animation: bounce 2s infinite 1s;
    }

    @keyframes bounce {
      0%, 20%, 53%, 80%, 100% {
        transform: translateY(0);
      }
      40%, 43% {
        transform: translateY(-30px);
      }
      70% {
        transform: translateY(-15px);
      }
      90% {
        transform: translateY(-4px);
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="about-banner">
        {/* Background Pattern */}
        <div className="bg-pattern">
          <div className="bg-blur-1"></div>
          <div className="bg-blur-2"></div>
        </div>

        <div className="container">
          {/* Main Content Container */}
          <div className="main-grid">
            {/* Left Column - Headlines */}
            <div className="left-column">
              <div className="header-section">
                <div className="badge">
                  <span className="badge-text">About Us</span>
                </div>

                <h1 className="main-title">
                  <div className="title-trusted">Trusted</div>
                  <div className="title-hygiene">Hygiene</div>
                  <div className="title-experts">Experts</div>
                </h1>

                <div className="year-section">
                  <div className="year-line"></div>
                  <span className="year-text">Since 2013</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="buttons-section">
                <button className="btn-learn">
                  <span>Learn More</span>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>

                <button className="btn-get-started">
                  <span>Get Started</span>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Description */}
            <div className="right-column">
              <div className="description-card">
                <div className="description-content">
                  <div className="pulse-dots">
                    <div className="dot-1"></div>
                    <div className="dot-2"></div>
                    <div className="dot-3"></div>
                  </div>

                  <p className="description-text">
                    Founded in the heart of{" "}
                    <span className="highlight-teal">Ajman, UAE</span>, AL
                    MUQARRAM Hygienic Products Industry LLC is one of the
                    fastest-growing converters of hygienic paper products in the{" "}
                    <span className="highlight-blue">GCC and beyond</span>.
                  </p>

                  <p className="description-subtext">
                    Backed by the{" "}
                    <span className="highlight-gray">30-year legacy</span> of
                    the AL MUQARRAM Group, we're committed to quality,
                    sustainability, and customer satisfaction.
                  </p>

                  {/* Stats */}
                  <div className="stats-grid">
                    <div className="stat-item">
                      <div className="stat-number stat-teal">30+</div>
                      <div className="stat-label">Years Legacy</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number stat-blue">GCC</div>
                      <div className="stat-label">& Beyond</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number stat-green">#1</div>
                      <div className="stat-label">Fast Growing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="floating-elements float-1"></div>
        <div className="floating-elements float-2"></div>
        <div className="floating-elements float-3"></div>
      </div>
    </>
  );
};

export default AboutBanner;
