import React from 'react';
import Header from '../components/header';

import AssetGallery from '../assets/gallery/gallery.jpg';
import AssetGallery1 from '../assets/gallery/gallery1.jpg';
import AssetGallery2 from '../assets/gallery/gallery2.jpg';
import AssetGallery3 from '../assets/gallery/gallery3.jpg';
import AssetGallery4 from '../assets/gallery/gallery4.jpg';
import AssetGallery5 from '../assets/gallery/gallery5.jpg';
import AssetGallery6 from '../assets/gallery/gallery6.jpg';
import AssetGallery7 from '../assets/gallery/gallery7.jpg';
import AssetGallery8 from '../assets/gallery/gallery8.jpg';
import AssetGallery9 from '../assets/gallery/gallery9.jpg';
import AssetGallery10 from '../assets/gallery/gallery10.jpg';
import AssetGallery11 from '../assets/gallery/gallery11.jpg';
import AssetGallery12 from '../assets/gallery/gallery12.jpg';
import AssetGallery13 from '../assets/gallery/gallery13.jpg';
import AssetGallery14 from '../assets/gallery/gallery14.jpg';

function Gallery() {
  return (
    <div className='gallery'>
      <Header className="border" background={false} />
      <div className="d-flex align-start">
        <div className="d-flex direction-column">
          <img src={AssetGallery} alt="" />
          <img src={AssetGallery13} alt="" />
          <img src={AssetGallery2} alt="" />
        </div>
        <div className="d-flex direction-column">
          <img src={AssetGallery3} alt="" />
          <img src={AssetGallery5} alt="" />
          <img src={AssetGallery10} alt="" />
          <img src={AssetGallery6} alt="" />
          <img src={AssetGallery8} alt="" />
        </div>
        <div className="d-flex direction-column">
          <img src={AssetGallery12} alt="" />
          <img src={AssetGallery8} alt="" />
          <img src={AssetGallery14} alt="" />
          <img src={AssetGallery10} alt="" />
        </div>
        <div className="d-flex direction-column">
          <img src={AssetGallery13} alt="" />
          <img src={AssetGallery12} alt="" />
          <img src={AssetGallery14} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;