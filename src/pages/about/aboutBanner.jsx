import React from "react";
import StatsSection from "./aboutStats";

const AboutBanner = () => {
  return (
    <div className="aboutPage">
      <div className="aboutBanner">
        <div className="row">
          <div className="col-left">
            <div className="aboutHead">About Us</div>
            <div className="aboutDescrp">
              Trusted Hygiene Experts Since 2013
            </div>
          </div>
          <div className="col-right">
            <div className="descrpAbut">
              Founded in the heart of Ajman, UAE, AL MUQARRAM Hygienic Products
              Industry LLC is one of the fastest-growing converters of hygienic
              paper products in the GCC and beyond. Backed by the 30-year legacy
              of the AL MUQARRAM Group, we're committed to quality,
              sustainability, and customer satisfaction.
            </div>
            <div className="button-row">
              <div className="button-col">
                <div className="lernMore">
                  Learn More <img src="contact.png" alt="Contact" />
                </div>
              </div>
              <div className="button-col">
                <div className="contBtn">
                  Get Started <img src="/getStarted.png" alt="Get Started" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutImageContainer">
        <img
          className="aboutImage"
          src="/aboutBanner1.jpg"
          alt="About AL MUQARRAM"
        />
      </div>

      <div>
        <StatsSection />
      </div>
      
      <style jsx>{`
        .aboutPage {
          background-color: white;
          margin-top: 4rem;
          margin-right: 1rem;
          margin-left: 1rem;
          border-radius: 10px;
        }

        .aboutBanner {
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          padding: 3rem 2rem;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          align-items: flex-start;
        }

        .col-left {
          flex: 1;
          min-width: 300px;
        }

        .col-right {
          flex: 1;
          min-width: 300px;
        }

        .aboutHead {
          font-weight: 500;
          font-size: clamp(1.2rem, 4vw, 1.75rem);
          line-height: 1.2;
          color: #4c5a65;
          margin-bottom: 0.5rem;
        }

        .aboutDescrp {
          font-weight: 800;
          font-size: clamp(2rem, 8vw, 4.6rem);
          line-height: 1.2;
          color: #4c5a65;
          word-wrap: break-word;
          hyphens: auto;
        }

        .descrpAbut {
          font-weight: 400;
          font-size: clamp(0.9rem, 2.5vw, 1.5rem);
          line-height: 1.4;
          text-align: justify;
          color: #4c5a65;
          margin-bottom: 2rem;
        }

        .button-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .button-col {
          flex: 1;
          min-width: 200px;
        }

        .lernMore,
        .contBtn {
          width: 100%;
          max-width: 217px;
          height: auto;
          min-height: 68px;
          border-radius: 10.46px;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: clamp(0.9rem, 2vw, 1rem);
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0 auto;
          text-decoration: none;
        }

        .lernMore {
          border: 1.31px solid #4c5a65;
          color: #4c5a65;
          font-weight: 400;
          background: transparent;
        }

        .lernMore:hover {
          background: #4c5a65;
          color: white;
        }

        .contBtn {
          background: #30afb8;
          color: white;
          font-weight: 700;
          font-size: clamp(1rem, 2.2vw, 1.3rem);
          line-height: 1.3;
          border: none;
        }

        .contBtn:hover {
          background: #2a9aa2;
          transform: translateY(-2px);
        }

        .lernMore img,
        .contBtn img {
          width: 16px;
          height: 16px;
          object-fit: contain;
        }

        .aboutImageContainer {
          padding: 0 2rem 2rem 2rem;
        }

        .aboutImage {
          width: 100%;
          height: auto;
          border-radius: 8px;
          object-fit: cover;
          max-height: 1000px;
        }

        /* Tablet styles (768px - 1024px) */
        @media (max-width: 1024px) {
          .aboutPage {
            margin-top: 3rem;
          }
          
          .aboutBanner {
            padding: 2.5rem 1.5rem;
          }
          
          .row {
            gap: 1.5rem;
          }
          
          .col-left,
          .col-right {
            min-width: 250px;
          }
          
          .descrpAbut {
            text-align: left;
          }
        }

        /* Mobile landscape (768px and below) */
        @media (max-width: 768px) {
          .aboutPage {
            margin-top: 2rem;
            margin-right: 0.5rem;
            margin-left: 0.5rem;
          }
          
          .aboutBanner {
            padding: 2rem 1rem;
          }
          
          .row {
            flex-direction: column;
            gap: 2rem;
          }
          
          .col-left,
          .col-right {
            min-width: unset;
          }
          
          .aboutHead {
            text-align: center;
          }
          
          .aboutDescrp {
            text-align: center;
            margin-bottom: 1rem;
          }
          
          .descrpAbut {
            text-align: left;
            margin-bottom: 2rem;
          }
          
          .button-row {
            flex-direction: column;
            align-items: center;
          }
          
          .button-col {
            min-width: unset;
            width: 100%;
            max-width: 300px;
          }
          
          .aboutImageContainer {
            padding: 0 1rem 1.5rem 1rem;
          }
        }

        /* Mobile portrait (480px and below) */
        @media (max-width: 480px) {
          .aboutPage {
            margin: 1rem 0.25rem 0 0.25rem;
          }
          
          .aboutBanner {
            padding: 1.5rem 0.75rem;
          }
          
          .row {
            gap: 1.5rem;
          }
          
          .descrpAbut {
            font-size: 0.9rem;
            line-height: 1.5;
          }
          
          .lernMore,
          .contBtn {
            padding: 0.8rem 1rem;
            font-size: 0.9rem;
          }
          
          .aboutImageContainer {
            padding: 0 0.75rem 1rem 0.75rem;
          }
        }

        /* Extra small mobile (320px and below) */
        @media (max-width: 320px) {
          .aboutBanner {
            padding: 1rem 0.5rem;
          }
          
          .lernMore,
          .contBtn {
            padding: 0.7rem 0.8rem;
            font-size: 0.8rem;
            min-height: 50px;
          }
          
          .aboutImageContainer {
            padding: 0 0.5rem 1rem 0.5rem;
          }
        }

        /* Large desktop styles (1200px and above) */
        @media (min-width: 1200px) {
          .aboutPage {
            margin-top: 6rem;
            margin-right: 3rem;
            margin-left: 3rem;
          }
          
          .aboutBanner {
            padding: 3.75rem 2.5rem;
          }
          
          .aboutImageContainer {
            padding: 0 2.5rem 2rem 2.5rem;
          }
          
          .col-left {
            min-width: 400px;
          }
          
          .col-right {
            min-width: 400px;
          }
        }

        /* Ultra-wide desktop (1400px and above) */
        @media (min-width: 1400px) {
          .aboutPage {
            margin-top: 8rem;
            margin-right: 4rem;
            margin-left: 4rem;
          }
          
          .aboutBanner {
            padding: 4rem 3rem;
          }
          
          .aboutImageContainer {
            padding: 0 3rem 2rem 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutBanner;