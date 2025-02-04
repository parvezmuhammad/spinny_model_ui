import React, { useState } from 'react';
import CarDetailsCard from './CarDetailsCard';
import './index.css';
import EmiCalculator from './EmiCalculator';
import carData from '../carData';


const CarDetailsGallery = () => {
  const [activeThumbnailId, setActiveThumbnailId] = useState(0);

  const { imageUrl, imageAltText } = carData[0].images[activeThumbnailId]; // Access the selected image from the nested images

  const handleNextImage = () => {
    setActiveThumbnailId((prevId) => (prevId + 1) % carData[0].images.length);
  };

  const handlePreviousImage = () => {
    setActiveThumbnailId(
      (prevId) => (prevId - 1 + carData[0].images.length) % carData[0].images.length
    );
  };

  const ThumbnailItem = ({ imageDetails, isActive, setActiveThumbnailId }) => {
    const { imageUrl, imageAltText, id } = imageDetails;
    const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`;

    const onClickThumbnail = () => {
      setActiveThumbnailId(id);
    };

    return (
      <li className="thumbnail-list-item">
        <button type="button" className="thumbnail-button" onClick={onClickThumbnail}>
          <img src={imageUrl} alt={imageAltText} className={thumbnailClassName} />
        </button>
      </li>
    );
  };

  return (
    <div className="car-and-emi-card-container">
      <div className="app-container">
        <div className="gallery-container">
          <div className="image-navigation">
            <button
              type="button"
              className="arrow-button left-arrow"
              onClick={handlePreviousImage}
            >
              &larr; {/* Left Arrow */}
            </button>
            <img src={imageUrl} className="selected-image" alt={imageAltText} />
            <button
              type="button"
              className="arrow-button right-arrow"
              onClick={handleNextImage}
            >
              &rarr; {/* Right Arrow */}
            </button>
          </div>

          <ul className="thumbnails-list">
            {carData[0].images.map((eachImage, index) => (
              <ThumbnailItem
                key={eachImage.imageAltText}
                imageDetails={{ ...eachImage, id: index }}
                isActive={activeThumbnailId === index}
                setActiveThumbnailId={setActiveThumbnailId}
              />
            ))}
          </ul>
        </div>
        <div className="cardetails-card">
          <CarDetailsCard />
        </div>
      </div>
      <EmiCalculator />
    </div>
  );
};

export default CarDetailsGallery;
