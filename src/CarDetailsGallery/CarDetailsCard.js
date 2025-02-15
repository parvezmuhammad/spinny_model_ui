import React from 'react';
import './CarDetailsCard.css';
import { FaGasPump, FaLink, FaRoad, FaCalendar, FaWallet, FaUser, FaShieldAlt, FaDownload, FaArrowRight } from 'react-icons/fa';
import carData from '../carData';

function CarDetailsCard({ selectedCarId }) {
  // Find the selected car based on the selectedCarId
  const selectedCar = carData.find((car) => car.id === selectedCarId);

  return (
    <div className="car-details-container">
      <div className="heading-container">
        <div className="modelname-and-dealer-code-heading">
          <h3>
            {selectedCar.name} <span>{selectedCar.fuel}</span>-<span> {selectedCar.year}</span>
          </h3>
          <div>
            <h4 style={{ margin: '2px' }}>Dealer Code</h4>
            <span className="car-details-span">{selectedCar.dealer_code}</span>
          </div>
        </div>

            <div className="first-line-three-items-container">
            <div className='three-items-container'>
            <div className='fuel-icon-container'>
            <span> <FaGasPump style={{opacity:'0.7'}} /></span>
            </div>
            <div>
            <p className="features-para" style={{ margin: '0px' }}>Fuel type</p>
            <h4  style={{ margin: '2px' }} className='Fuel-type-heading'>{selectedCar.fuel}</h4>
            </div>
            </div>
            <div className='three-items-container'>
            <div className='fuel-icon-container'>
            <span> <FaLink style={{opacity:'0.7'}} /></span>
            </div>
            <div>
            <p className="features-para" style={{ margin: '0px' }}>Transmission</p>
            <h4  style={{ margin: '2px' }} className='Fuel-type-heading'> {selectedCar.transmission}</h4>
            </div>
            </div>
            <div className='three-items-container'>
            <div className='fuel-icon-container'>
            <span> <FaGasPump style={{opacity:'0.7'}} /></span>
            </div>
            <div>
            <p className="features-para" style={{ margin: '0px' }}>Engine Capacity</p>
            <h4  style={{ margin: '2px' }} className='Fuel-type-heading'>{selectedCar.engine_capacity}</h4>
            </div>
            </div>            
            
            
            </div>
            <div className="first-line-three-items-container">
            <div className='three-items-container'>
            <div className='fuel-icon-container'>
            <span> <FaRoad style={{opacity:'0.7'}} /></span>
            </div>
            <div>
            <p className="features-para" style={{ margin: '0px' }}>Reg Num</p>
            <h4  style={{ margin: '2px' }} className='Fuel-type-heading'>{selectedCar.Reg_num}</h4>
            </div>
            </div>
            <div className='three-items-container'>
            <div className='fuel-icon-container'>
            <span> <FaCalendar style={{opacity:'0.7'}} /></span>
            </div>
            <div>
            <p className="features-para" style={{ margin: '0px' }}>Mfg year</p>
            <h4  style={{ margin: '2px' }} className='Fuel-type-heading'>{selectedCar.year}</h4>
            </div>
            </div>
            <div className='three-items-container'>
            <div className='fuel-icon-container'>
            <span> <FaWallet style={{opacity:'0.7'}} /></span>
            </div>
            <div>
            <p className="features-para" style={{ margin: '0px' }}>Reg Year</p>
            <h4  style={{ margin: '2px' }} className='Fuel-type-heading'>{selectedCar.reg_year}</h4>
            </div>
            </div>            
            
            
            </div>
            <div className="first-line-three-items-container">
            <div className='three-items-container'>
            <div className='fuel-icon-container'>
            <span> <FaGasPump style={{opacity:'0.7'}} /></span>
            </div>
            <div>
            <p className="features-para" style={{ margin: '0px' }}>Km Driven</p>
            <h4  style={{ margin: '2px' }} className='Fuel-type-heading'>{selectedCar.km}</h4>
            </div>
            </div>
            <div className='three-items-container'>
            <div className='fuel-icon-container'>
            <span> <FaUser style={{opacity:'0.7'}} /></span>
            </div>
            <div>
            <p className="features-para" style={{ margin: '0px' }}>Ownership</p>
            <h4  style={{ margin: '2px' }} className='Fuel-type-heading'>{selectedCar.ownership}st Owner</h4>
            </div>
            </div>
            <div className='three-items-container'>
            <div className='fuel-icon-container'>
            <span> <FaShieldAlt style={{opacity:'0.7'}} /></span>
            </div>
            <div>
            <p className="features-para" style={{ margin: '0px' }}>Ins validity</p>
            <h4  style={{ margin: '2px' }} className='Fuel-type-heading'>{selectedCar.insurance_expiry}</h4>
            </div>
            </div>            
            
            
            </div>
            
            <div className='enquiry-buttons'>
            <button className='evaluation-button'><FaDownload/>Evaluation Report</button>
            <button className='enquiry-button'>Enquire Now <FaArrowRight/></button>

            </div>
         </div>
         
    </div>

  )
}

export default CarDetailsCard