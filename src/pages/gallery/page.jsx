import React, { useState } from 'react';
import './gallery.css';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const productImages = [
    { src: '/out of order/83120 - Alum Container/10.jpg', type: 'product' },
    { src: '/out of order/8325 - Alum Container/7.jpg', type: 'product' },
    { src: '/out of order/8342 - Aluminium Container/1.jpg', type: 'product' },
    { src: '/out of order/8389 - Alum Container/4.jpg', type: 'product' },
    { src: '/out of order/Alum Foil 1000 g 30 cm/16.jpg', type: 'product' },
    { src: '/out of order/Alum Foil 1000 g 45 cm/8.jpg', type: 'product' },
    { src: '/out of order/Alum Foil 1350 g 30 cm/93.jpg', type: 'product' },
    { src: '/out of order/Alum Foil 30 cm 25 sq/2.jpg', type: 'product' },
    { src: '/out of order/Alum Foil 45 cm 37.5 Sq/5.jpg', type: 'product' },
    { src: '/out of order/Alum Foil 75 sq 30 cm/57.jpg', type: 'product' },
    { src: '/out of order/Aluminium Foil 1500 g 45 cm/1.jpg', type: 'product' },
    { src: '/out of order/Anti-Bacterial Wipes 72 sheet/65.jpg', type: 'product' },
    { src: '/out of order/Baby Wipes 80 sheet/59.jpg', type: 'product' },
    { src: '/out of order/Baby wipes 100 sheet/62.jpg', type: 'product' },
    { src: '/out of order/Cling FIlm 200 sq 30 cm/78.jpg', type: 'product' },
    { src: '/out of order/Cling Film 100 sq 45 cm/90.jpg', type: 'product' },
    { src: '/out of order/Cling Film 1000g 45 cm/73.jpg', type: 'product' },
    { src: '/out of order/Cling Film 1300 g 30 cm/84.jpg', type: 'product' },
    { src: '/out of order/Cling Film 1500 g 45 cm/81.jpg', type: 'product' },
    { src: '/out of order/Cling Film 30 cm 100 sq/14.jpg', type: 'product' },
    { src: '/out of order/Cube Box Petals/37.jpg', type: 'product' },
    { src: '/out of order/Cube Box Pink/39.jpg', type: 'product' },
    { src: '/out of order/Interfold Petals/45.jpg', type: 'product' },
    { src: '/out of order/Interfold Sheets/69.jpg', type: 'product' },
    { src: '/out of order/Napkin Petals/43.jpg', type: 'product' },
    { src: '/out of order/Nylon 500 Sheet/31.jpg', type: 'product' },
    { src: '/out of order/Nylon 600/53.jpg', type: 'product' },
    { src: '/out of order/Petals FT 100/16.jpg', type: 'product' },
    { src: '/out of order/Petals FT 140/19.jpg', type: 'product' },
    { src: '/out of order/Petals FT 150/22.jpg', type: 'product' },
    { src: '/out of order/Petals FT 200/25.jpg', type: 'product' },
    { src: '/out of order/Petals FT 500/25.jpg', type: 'product' },
    { src: '/out of order/Petals MR 1400 + 100/47.jpg', type: 'product' },
    { src: '/out of order/Petals MR 600 + 100/19.jpg', type: 'product' },
    { src: '/out of order/Petals MR TP 1500 + 400/41.jpg', type: 'product' },
    { src: '/out of order/Petals TR 300/39.jpg', type: 'product' },
    { src: '/out of order/Petals TR 400/60.jpg', type: 'product' },
    { src: '/out of order/Petals Twin Pack/41.jpg', type: 'product' },
    { src: '/out of order/Pink Cube Box/55.jpg', type: 'product' },
    { src: '/out of order/Rectangle Box/57.jpg', type: 'product' },
    { src: '/out of order/Sandwich Paper/84.jpg', type: 'product' },
    { src: '/out of order/SoftCare MR 600 + 150/43.jpg', type: 'product' },
    { src: '/out of order/SoftCare TR 400/45.jpg', type: 'product' },
    { src: '/out of order/Softcare FT 150/28.jpg', type: 'product' },
    { src: '/out of order/Softcare FT 200/13.jpg', type: 'product' },
    { src: '/out of order/Softcare MR 235 Metre/53.jpg', type: 'product' },
    { src: '/out of order/Softcare MR 800 + 100/51.jpg', type: 'product' },
    { src: '/out of order/Softcare Maxi Roll/22.jpg', type: 'product' },
    { src: '/out of order/Softcare TR 200/36.jpg', type: 'product' },
    { src: '/out of order/Softcare TR 500/48.jpg', type: 'product' },
    { src: '/out of order/Thermal Roll/11.jpg', type: 'product' }
  ];

  const allImages = [
    { src: '/gallery1.jpg', type: 'photo' },
    { src: 'gallery2.jpg', type: 'photo' },
    { src: 'gallery3.jpg', type: 'video' },
    { src: 'gallery4.jpg', type: 'video' },
    { src: 'gallery5.jpg', type: 'photo' },
    { src: 'gallery6.jpg', type: 'video' },
    ...productImages
  ];

  const filteredImages = allImages.filter((img) => {
    if (activeTab === 'ALL') return true;
    if (activeTab === 'Latest Photos') return img.type === 'photo';
    if (activeTab === 'Latest Videos') return img.type === 'video';
    return true;
  });

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Gallery</h2>
      <p className="gallery-subtitle">
        We’re here to assist you with any inquiries, partnership opportunities, or product information.
        Reach out to us, and our dedicated team will respond promptly to support your needs.
      </p>

      <div className="gallery-buttons">
        <button className={activeTab === 'ALL' ? 'active' : ''} onClick={() => handleTabClick('ALL')}>ALL</button>
        <button className={activeTab === 'Latest Videos' ? 'active' : ''} onClick={() => handleTabClick('Latest Videos')}>Latest Videos</button>
        <button className={activeTab === 'Latest Photos' ? 'active' : ''} onClick={() => handleTabClick('Latest Photos')}>Latest Photos</button>
      </div>

      <div className="gallery-grid">
        {filteredImages.map((img, idx) => (
          <img key={idx} src={img.src} alt={`gallery-${idx}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
