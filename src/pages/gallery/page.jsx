import React, { useState } from 'react';
import './gallery.css';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const allImages = [
    { src: '/gallery1.jpg', type: 'photo' },
    { src: 'gallery2.jpg', type: 'photo' },
    { src: 'gallery3.jpg', type: 'video' },
    { src: 'gallery4.jpg', type: 'video' },
    { src: 'gallery5.jpg', type: 'photo' },
    { src: 'gallery6.jpg', type: 'video' },
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
