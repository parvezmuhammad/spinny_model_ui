import React, { useState }from 'react'
import "./LeftContainer.css"
import Slider from "@mui/material/Slider"
import {
    FaGasPump,
    FaSearch,
    FaAngleDown,
    FaAngleUp,
    FaChair,
    FaAddressBook,
    FaRoad,
    FaFill,
    FaLink,
  } from "react-icons/fa"

const LeftContainer=()=> {
    const [budgetValue, budgetSetValue] = useState([100000, 3500000]) // Initial values for min and max (Budget)
    const [year, setYear] = useState([2010, 2024]) // Initial values for min and max (Model Year)
    const [kmsDriven, setKmsDriven] = useState([0, 150000]) // Initial values for min and max (Kms Driven)
    const [isDropdownVisible, setIsDropdownVisible] = useState(false) // Track fuel click is open
    const [isSeaterVisible, setIsSeaterVisible] = useState(false) // Track seats click is open
    const [isOwnerVisible, setIsOwnerVisible] = useState(false) // Track owner click is open
    const [isColorVisible, setIsColorVisible] = useState(false) // Track owner click is open
    const [isRtoDropdownVisible, setIsRtoDropdownVisible] = useState(false) // Track seats click is open
    const brands = [
        { name: "Maruti Suzuki", models: ["Alto", "Gypsy", "Invicto", "Omni", "Versa", "Sx4", "Zen", "Zen Estilo"] },
        { name: "Hyundai", models: ["Creta", "Verna", "i20", "Santro"] },
        { name: "Tata", models: ["Nexon", "Harrier", "Safari", "Tiago"] },
        { name: "Kia", models: ["Seltos", "Sonet", "Carens"] },
        { name: "Mahindra", models: ["Thar", "Scorpio", "XUV700"] },
        { name: "Toyota", models: ["Innova", "Fortuner", "Glanza"] },
        { name: "Ford", models: ["EcoSport", "Endeavour"] },
        { name: "Renault", models: ["Kwid", "Duster", "Triber"] },
        { name: "Honda", models: ["City", "Amaze", "WR-V"] },
        { name: "Volkswagen", models: ["Polo", "Vento", "Taigun"] },
        { name: "Skoda", models: ["Kushaq", "Slavia"] },
        { name: "Nissan", models: ["Magnite", "Kicks"] },
        { name: "MG Motors", models: ["Hector", "Astor", "Gloster"] },
        { name: "Mercedes-Benz", models: ["C-Class", "E-Class", "GLC"] },
      ]
    // Handle Year Slider Change
  const handleYearChange = (event, newYear) => {
    setYear(newYear)
  }

  // Handle Year Input Change
  const handleYearInputChange = (index) => (event) => {
    const newYear = [...year]
    newYear[index] = Number(event.target.value)
    setYear(newYear)
  }
     // Handle Budget Slider Change
  const handleBudgetChange = (event, newValue) => {
    budgetSetValue(newValue)
  }

  // Handle Budget Input Change
  const handleBudgetInputChange = (index) => (event) => {
    const newValue = [...budgetValue]
    newValue[index] = Number(event.target.value)
    budgetSetValue(newValue)
  }


   // Handle Kms Driven Slider Change
   const handleKmsDrivenChange = (event, newKmsDriven) => {
    setKmsDriven(newKmsDriven)
  }

  // Handle Kms Driven Input Change
  const handleKmsDrivenInputChange = (index) => (event) => {
    const newKmsDriven = [...kmsDriven]
    newKmsDriven[index] = Number(event.target.value)
    setKmsDriven(newKmsDriven)
  }

  const formatAmount = (amount) => {
    if (amount >= 100000) {
      return `₹${amount / 100000}L` // Convert to "Lakhs" format
    } else {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(amount)
    }
  }
  

  // State to track which brand's list is open
  const [openBrandIndex, setOpenBrandIndex] = useState(null)

  // State to track selected checkboxes for each brand
  const [selectedModels, setSelectedModels] = useState({})

  // Toggle visibility of a brand's models list
  const toggleBrandList = (index) => {
    if (openBrandIndex === index) {
      setOpenBrandIndex(null) // Close the list if it's already open
    } else {
      setOpenBrandIndex(index) // Open the list for the clicked brand
    }
  }

  // Handle checkbox selection for all models of a brand
  const handleBrandCheckbox = (index) => {
    const brand = brands[index]
    const allSelected = brand.models.every((model) => selectedModels[model])

    const newSelectedModels = { ...selectedModels }
    brand.models.forEach((model) => {
      newSelectedModels[model] = !allSelected
    })

    setSelectedModels(newSelectedModels)
  }

  // Handle checkbox selection for individual models
  const handleModelCheckbox = (model) => {
    setSelectedModels((prev) => ({
      ...prev,
      [model]: !prev[model],
    }))
  }


  const fuelOptions = [
    { label: "Petrol", count: 120 },
    { label: "Diesel", count: 120 },
    { label: "CNG", count: 120 },
    { label: "Hybrid", count: 120 },
    { label: "Electric", count: 120 },
  ]

  const toggleFuelDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }


  const seatOptions = [
    { label: "4 Seater", count: 100 },
    { label: "5 Seater", count: 100 },
    { label: "6 Seater", count: 100 },
    { label: "7 Seater", count: 100 },
    { label: "8 Seater", count: 100 },
  ]

  const toggleSeatsDropdown = () => {
    setIsSeaterVisible(!isSeaterVisible)
  }

  const toggleOwnerDropdown = () => {
    setIsOwnerVisible(!isOwnerVisible)
  }


  const colorOptions = [
    { label: "White", count: 5, className: "white-span" },
    { label: "Black", count: 6, className: "black-span" },
    { label: "Red", count: 15, className: "red-span" },
    { label: "Silver", count: 2, className: "silver-span" },
    { label: "Blue", count: 2, className: "blue-span" },
    { label: "Grey", count: 2, className: "grey-span" },
    { label: "Brown", count: 2, className: "brown-span" },
    { label: "Green", count: 2, className: "green-span" },
    { label: "Yellow", count: 2, className: "yellow-span" },
    { label: "Others", count: 2, className: "others-span" },
  ]

  const toggleColorDropdown = () => {
    setIsColorVisible(!isColorVisible)
  }


  const RtoOptions = [
    { label: "TS Telangana", count: 10 },
    { label: "AP Andhra Pradesh", count: 15 },
    { label: "HR Haryana", count: 18 },
    { label: "KA Karnataka", count: 11 },
    { label: "TN Tamilanadu", count: 16 },
  ]

  const toggleRtoDropdown = () => {
    setIsRtoDropdownVisible(!isRtoDropdownVisible)
  }



  return (
    <div>
        {/* Budget Slider */}
        <div className="slider-container">
          <h3 className="budget-heading">Budget</h3>
          <div className="amount-display">
            <input className="input-field" type="number" value={budgetValue[0]} onChange={handleBudgetInputChange(0)} />
            <input className="input-field" type="number" value={budgetValue[1]} onChange={handleBudgetInputChange(1)} />
          </div>
          <Slider
            value={budgetValue}
            onChange={handleBudgetChange}
            valueLabelDisplay="auto"
            min={100000}
            max={3500000}
            step={100000}
            className='slider'
            valueLabelFormat={(value) => formatAmount(value)}
          />
          <div className="slider-labels">
            <p className="small-text">Minimum</p>
            <p className="small-text">Maximum</p>
          </div>
        </div>

       


        {/* Brands Section */}
                <div className="brands-container">
                  <h4 className="brands-heading">Brands + Models</h4>
                  <div className="input-container">
                    <input className="brands-location-input" type="search" placeholder="Search for Brand" />
                    <FaSearch className="brands-search-icon" />
                  </div>
                  <div className="top-brands-container">
                    <p className="brands-text">Top Brands</p>
                    {brands.map((brand, index) => (
                      <div key={index}>
                        <div className="brands-list">
                          <input
                            type="checkbox"
                            className="brand-button"
                            checked={brand.models.every((model) => selectedModels[model])}
                            onChange={() => handleBrandCheckbox(index)}
                          />
                          <div className="checkbox-brandtext-container" onClick={() => toggleBrandList(index)}>
                            <span className="brand-text">{brand.name}</span>
                            {openBrandIndex === index ? (
                              <FaAngleUp className="angle-down-icon" />
                            ) : (
                              <FaAngleDown className="angle-down-icon" />
                            )}
                          </div>
                        </div>
                        {openBrandIndex === index && (
                          <ul className="brands-ul">
                            {brand.models.map((model, modelIndex) => (
                              <li key={modelIndex} className="inside-li">
                                <input
                                  type="checkbox"
                                  className="brand-button"
                                  checked={selectedModels[model] || false}
                                  onChange={() => handleModelCheckbox(model)}
                                />
                                {model}
                              </li>
                            ))}
                          </ul>
                        )}
                        <hr className="brands-hr-tag" />
                      </div>
                    ))}
                  </div>
                </div>

     {/* Model Year Slider */}
     <div className="slider-container">
          <h3 className="budget-heading">Model Year</h3>
          <div className="amount-display">
            <input className="input-field" type="number" value={year[0]} onChange={handleYearInputChange(0)} />
            <input className="input-field" type="number" value={year[1]} onChange={handleYearInputChange(1)} />
          </div>
          <Slider className='slider' value={year} onChange={handleYearChange} valueLabelDisplay="auto" min={2010} max={2024} step={1} />
          <div className="slider-labels">
            <p className="small-text">Minimum</p>
            <p className="small-text">Maximum</p>
          </div>
        </div>


    {/* Fuel container */}
    <div className="fuel-type-container">
                  <div className="fuel-type-buttons">
                    <button className="fuel-button">
                      <FaGasPump className="location-icon" />
                      Fuel Type
                    </button>
                    {isDropdownVisible ? (
                      <FaAngleUp className="location-icon" onClick={toggleFuelDropdown} />
                    ) : (
                      <FaAngleDown className="location-icon" onClick={toggleFuelDropdown} />
                    )}
                  </div>
        
                  {isDropdownVisible && (
                    <div className="fuel-type-dropdown">
                      <ul className="fuel-type-ul">
                        {fuelOptions.map((option, index) => (
                          <li key={index} className="fuel-type-li">
                            <input type="checkbox" className="brand-button" />
                            {option.label} <span className="side-span">({option.count})</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

    {/* Conditionally render the dropdown list based on state of seats*/}
    <div className="fuel-type-container">
              <div className="fuel-type-buttons">
                <button className="fuel-button">
                  <FaChair className="location-icon" />
                  Seats
                </button>
                {isSeaterVisible ? (
                  <FaAngleUp className="location-icon" onClick={toggleSeatsDropdown} />
                ) : (
                  <FaAngleDown className="location-icon" onClick={toggleSeatsDropdown} />
                )}
              </div>
    
              {isSeaterVisible && (
                <div className="fuel-type-dropdown">
                  <ul className="fuel-type-ul">
                    {seatOptions.map((option, index) => (
                      <li key={index} className="fuel-type-li">
                        <input type="checkbox" className="brand-button" />
                        {option.label} <span className="side-span">({option.count})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>


        {/* Kms Driven Slider */}
        <div className="slider-container">
          <h3 className="budget-heading">Kms Driven</h3>
          <div className="amount-display">
            <input
              className="input-field"
              type="number"
              value={kmsDriven[0]}
              onChange={handleKmsDrivenInputChange(0)}
            />
            <input
              className="input-field"
              type="number"
              value={kmsDriven[1]}
              onChange={handleKmsDrivenInputChange(1)}
            />
          </div>
          <Slider
            value={kmsDriven}
            onChange={handleKmsDrivenChange}
            valueLabelDisplay="auto"
            className='slider'
            min={0}
            max={150000}
            step={10000}
          />
          <div className="slider-labels">
            <p className="small-text">Minimum</p>
            <p className="small-text">Maximum</p>
          </div>
        </div>

    {/* Conditionally render the dropdown list based on state of owner*/}
            <div className="fuel-type-container">
              <div className="fuel-type-buttons">
                <button className="fuel-button">
                  <FaAddressBook className="location-icon" />
                  Owners
                </button>
                {/* Conditionally render FaAngleDown or FaAngleUp based on dropdown visibility */}
                {isOwnerVisible ? (
                  <FaAngleUp className="location-icon" onClick={toggleOwnerDropdown} />
                ) : (
                  <FaAngleDown className="location-icon" onClick={toggleOwnerDropdown} />
                )}
              </div>
    
              {/* Conditionally render the dropdown list based on state */}
              {isOwnerVisible && (
                <div className="fuel-type-dropdown">
                  <ul className="fuel-type-ul">
                    <li className="fuel-type-li">
                      {" "}
                      <input type="checkbox" className="brand-button" />
                      1st Owner <span className="side-span">(5)</span>
                    </li>
                    <li className="fuel-type-li">
                      <input type="checkbox" className="brand-button" />
                      2nd Owner<span className="side-span">(6)</span>
                    </li>
                    <li className="fuel-type-li">
                      <input type="checkbox" className="brand-button" />
                      3rd Owner<span className="side-span">(15)</span>
                    </li>
                    <li className="fuel-type-li">
                      <input type="checkbox" className="brand-button" />
                      4th Owner<span className="side-span">(2)</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
        
    {/*color container*/}
    <div className="fuel-type-container">
              <div className="fuel-type-buttons">
                <button className="fuel-button">
                  <FaFill className="location-icon" />
                  Color
                </button>
                {isColorVisible ? (
                  <FaAngleUp className="location-icon" onClick={toggleColorDropdown} />
                ) : (
                  <FaAngleDown className="location-icon" onClick={toggleColorDropdown} />
                )}
              </div>
    
              {isColorVisible && (
                <div className="fuel-type-dropdown">
                  <ul className="fuel-type-ul">
                    {colorOptions.map((option, index) => (
                      <li key={index} className="fuel-type-li">
                        <input type="checkbox" className="brand-button" />
                        <span className={option.className}></span>
                        {option.label} <span className="side-span">({option.count})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
        
    {/*For Transmission*/}
    <div className="fuel-type-container">
          <div className="fuel-type-buttons">
            <button className="fuel-button">
              <FaLink className="location-icon" />
              Transmission
            </button>
          </div>

          <div className="fuel-type-dropdown">
            <ul className="fuel-type-ul">
              <li className="fuel-type-li">
                {" "}
                <input type="checkbox" className="brand-button" />
                Manual <span className="side-span">(5)</span>
              </li>
              <li className="fuel-type-li">
                <input type="checkbox" className="brand-button" />
                Automatic<span className="side-span">(6)</span>
              </li>
            </ul>
          </div>
        </div>

        {/*for Body Type*/}
        <div className="fuel-type-container">
          <div className="fuel-type-buttons">
            <button className="fuel-button">
              <FaAddressBook className="location-icon" />
              Body Type
            </button>
          </div>

          <div className="fuel-type-dropdown">
            <ul className="fuel-type-ul">
              <li className="fuel-type-li">
                {" "}
                <input type="checkbox" className="brand-button" />
                Hatchback <span className="side-span">(5)</span>
              </li>
              <li className="fuel-type-li">
                <input type="checkbox" className="brand-button" />
                Suv<span className="side-span">(6)</span>
              </li>
              <li className="fuel-type-li">
                <input type="checkbox" className="brand-button" />
                Sudan<span className="side-span">(6)</span>
              </li>
            </ul>
          </div>
        </div>


     {/*for RTO*/}
        <div className="fuel-type-container">
          <div className="fuel-type-buttons">
            <button className="fuel-button">
              <FaRoad className="location-icon" />
              RTO
            </button>
            {isRtoDropdownVisible ? (
              <FaAngleUp className="location-icon" onClick={toggleRtoDropdown} />
            ) : (
              <FaAngleDown className="location-icon" onClick={toggleRtoDropdown} />
            )}
          </div>
          <div className="input-container">
                    <input className="rto-search-input" type="search" placeholder="Search for RTO" />
                    <FaSearch className="brands-search-icon" />
                  </div>

          {isRtoDropdownVisible && (
            <div className="fuel-type-dropdown">
              <ul className="fuel-type-ul">
                {RtoOptions.map((option, index) => (
                  <li key={index} className="fuel-type-li">
                    <input type="checkbox" className="brand-button" />
                    {option.label} <span className="side-span">({option.count})</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>


    </div>
  )
}
export default LeftContainer;
