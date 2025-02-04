import React from 'react';
import './AllCarsCard.css';
import carData from './carData';

const AllCarsCard = ({ setSelectedCarId }) => {
  return (
    <div className="all-cars-container">
      <div className="cars-container">
        {carData.map((car) => (
          <div
            key={car.id}
            className="car-card"
            onClick={() => setSelectedCarId(car.id)} // Update selected car ID
          >
            <img src={car.images[0].imageUrl} alt={car.name} className="car-image" />
            <h3 className="car-name">{car.name}</h3>
            <div className="car-container-text-card">
              <div className="car-details">
                <p className="car-price">Price: {car.price}</p>
                <p className="car-year">Year: {car.year}</p>
                <p className="car-fuel">Fuel: {car.fuel}</p>
                <p className="car-km">KM Driven: {car.km}</p>
                <p className="car-insurance">Ins Exp On: {car.insurance_expiry}</p>
              </div>
              <div className="car-right">
                <p className="right-para">{car.transmission}</p>
                <p className="owner-para">{car.owner}</p>
                <button className="car-enquiry-button">Add <br />Enq</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCarsCard;