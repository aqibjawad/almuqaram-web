import React, { useState, useEffect } from "react";

const TrustedCompanies = () => {
  const [partner, setPartner] = useState([]);

  useEffect(() => {
    // Static data instead of API call
    const staticPartners = [
      {
        id: 1,
        companies_image: "/api/placeholder/200/100",
        link: "https://partner1.com",
      },
      {
        id: 2,
        companies_image: "/api/placeholder/200/100",
        link: "https://partner2.com",
      },
      {
        id: 3,
        companies_image: "/api/placeholder/200/100",
        link: "https://partner3.com",
      },
      {
        id: 4,
        companies_image: "/api/placeholder/200/100",
        link: "https://partner4.com",
      },
      {
        id: 5,
        companies_image: "/api/placeholder/200/100",
        link: "https://partner5.com",
      },
      {
        id: 6,
        companies_image: "/api/placeholder/200/100",
        link: "https://partner6.com",
      },
    ];

    setPartner(staticPartners);
  }, []);

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-700 mb-4">
              Trusted Worldwide.
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-normal max-w-4xl mx-auto leading-relaxed px-4">
              Founded in the heart of Ajman, UAE, AL MUQARRAM Hygienic Products
              Industry LLC is one of the fastest-growing converters of hygienic
              paper products in the GCC and beyond.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {/* First set of logos */}
            {partner.map((partners, index) => (
              <a
                href={partners.link}
                target="_blank"
                rel="noopener noreferrer"
                key={`first-${partners.id}`}
                className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8"
              >
                <div className="w-32 h-20 sm:w-48 sm:h-28 md:w-64 md:h-32 lg:w-72 lg:h-36 xl:w-80 xl:h-44 bg-white rounded-2xl shadow-lg flex items-center justify-center p-3 sm:p-4 md:p-6 hover:shadow-xl transition-shadow duration-300">
                  <img
                    className="max-w-full max-h-full object-contain"
                    src={partners.companies_image}
                    alt={`Partner Logo ${index + 1}`}
                  />
                </div>
              </a>
            ))}
            {/* Duplicate set for seamless loop */}
            {partner.map((partners, index) => (
              <a
                href={partners.link}
                target="_blank"
                rel="noopener noreferrer"
                key={`second-${partners.id}`}
                className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8"
              >
                <div className="w-32 h-20 sm:w-48 sm:h-28 md:w-64 md:h-32 lg:w-72 lg:h-36 xl:w-80 xl:h-44 bg-white rounded-2xl shadow-lg flex items-center justify-center p-3 sm:p-4 md:p-6 hover:shadow-xl transition-shadow duration-300">
                  <img
                    className="max-w-full max-h-full object-contain"
                    src={partners.companies_image}
                    alt={`Partner Logo ${index + 1}`}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TrustedCompanies;