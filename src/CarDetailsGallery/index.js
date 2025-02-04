import React, { useState } from 'react';
import CarDetailsCard from './CarDetailsCard';
import './index.css';
import EmiCalculator from './EmiCalculator';
import carData from '../carData';

const CarDetailsGallery = ({ selectedCarId }) => {
  const [activeThumbnailId, setActiveThumbnailId] = useState(0);

  // Find the selected car based on the selectedCarId
  const selectedCar = carData.find((car) => car.id === selectedCarId);

  const { imageUrl, imageAltText } = selectedCar.images[activeThumbnailId];

  const handleNextImage = () => {
    setActiveThumbnailId((prevId) => (prevId + 1) % selectedCar.images.length);
  };

  const handlePreviousImage = () => {
    setActiveThumbnailId(
      (prevId) => (prevId - 1 + selectedCar.images.length) % selectedCar.images.length
    );
  };

  const ThumbnailItem = ({ imageDetails, isActive, setActiveThumbnailId }) => {
    const { imageUrl, imageAltText, id } = imageDetails;
    const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail';

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
              &larr;
            </button>
            <img src={imageUrl} className="selected-image" alt={imageAltText} />
            <button
              type="button"
              className="arrow-button right-arrow"
              onClick={handleNextImage}
            >
              &rarr;
            </button>
          </div>

          <ul className="thumbnails-list">
            {selectedCar.images.map((eachImage, index) => (
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
          <CarDetailsCard selectedCarId={selectedCarId} />
        </div>
      </div>
      <EmiCalculator />
    </div>
  );
};

export default CarDetailsGallery;