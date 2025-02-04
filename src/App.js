import React, { useState, useEffect, useRef } from "react"
import "./App.css"
import AllCarsCard from "./AllCarsCard";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa"
import LeftContainer from "./LeftContainer";
import CarDetailsGallery from "./CarDetailsGallery";



function App() {
  const [isZoneOpen, setIsZoneOpen] = useState(false) // Track if Zone dropdown is open
  const [selectedZone, setSelectedZone] = useState("Zone") // Track selected Zone
  const [selectedState, setSelectedState] = useState("State") // New state for selected state
  const [isStateOpen, setIsStateOpen] = useState(false) // New state for state dropdown visibility
  const [selectedCarId, setSelectedCarId] = useState(0); // Default to the first car
  // Ref for the Zone dropdown container
  const zoneDropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        zoneDropdownRef.current &&
        !zoneDropdownRef.current.contains(event.target) &&
        !event.target.closest(".zone-button") // Ensure the Zone button itself doesn't close the dropdown
      ) {
        setIsZoneOpen(false) // Close dropdown
        setIsStateOpen(false) // Close state dropdown
      }
    }

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside)

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  

  

  const zoneOptions = ["South Zone", "North Zone", "East Zone", "West Zone"]
  const northZone = ["Jammu & Kashmir", "Himachal Pradesh", "Punjab", "Uttarakhand", "Haryana", "Delhi"]
  const southZone = ["Karnataka", "Kerala", "Tamil Nadu", "Andhra Pradesh", "Telangana"]
  const eastZone = ["Bihar","Jharkhand","Odisha","West Bengal","Sikkim","Assam","Arunachal Pradesh","Nagaland","Manipur","Mizoram","Tripura","Meghalaya",]
  const westZone = ["Rajasthan", "Gujarat", "Maharashtra", "Goa"]


  const toggleZoneDropdown = () => {
    setIsZoneOpen(!isZoneOpen) // Toggle dropdown visibility
  }

  const handleZoneSelect = (zone) => {
    setSelectedZone(zone) // Update selected Zone
    setSelectedState("State") // Reset state selection
    setIsZoneOpen(false) // Close dropdown after selection
  }
  
 
  const getStateOptions = () => {
    switch (selectedZone) {
      case "North Zone":
        return northZone
      case "South Zone":
        return southZone
      case "East Zone":
        return eastZone
      case "West Zone":
        return westZone
      default:
        return []
    }
  }

  const StateDropdown = () => (
    <div className="state-dropdown" ref={zoneDropdownRef}>
      {getStateOptions().map((state, index) => (
        <div
          key={index}
          className="zone-option"
          onClick={() => {
            setSelectedState(state)
            setIsStateOpen(false)
          }}
        >
          {state}
        </div>
      ))}
    </div>
  )

  return (
    <div className="bg-container">
      <div className="header-container">
        <img
          className="cyepro-logo"
          src="https://res.cloudinary.com/drjzqprju/image/upload/v1737458332/WhatsApp_Image_2025-01-20_at_12.48.51_u7ujpq.jpg"
          alt="cyepro-logo"
        />
        <div className="location-container">
          <button
            className={`zone-button ${selectedZone !== "Zone" ? "selected" : ""}`}
            onClick={toggleZoneDropdown}
          >
            <FaMapMarkerAlt className="location-icon" /> {selectedZone}{" "}
            {isZoneOpen ? <FaAngleUp className="location-icon" /> : <FaAngleDown className="location-icon" />}
          </button>
          {isZoneOpen && (
            <div className="zone-dropdown" ref={zoneDropdownRef}>
              {zoneOptions.map((zone, index) => (
                <div key={index} className="zone-option" onClick={() => handleZoneSelect(zone)}>
                  {zone}
                </div>
              ))}
            </div>
          )}
          <div className="state-button-container">
            <button className="location-button" onClick={() => setIsStateOpen(!isStateOpen)}>
              <FaMapMarkerAlt className="location-icon" />
              {selectedState}
              {isStateOpen ? <FaAngleUp className="location-icon" /> : <FaAngleDown className="location-icon" />}
            </button>
            {isStateOpen && <StateDropdown />}
          </div>
          <button className="location-button">
            <FaMapMarkerAlt className="location-icon" /> District <FaAngleDown className="location-icon" />
          </button>
          <button className="login-button">
            <FaMapMarkerAlt className="location-icon" /> Dealer Code <FaAngleDown className="location-icon" />
          </button>
        </div>

        <div className="input-container">
          <FaSearch className="search-icon" />
          <input className="location-input" type="search" placeholder="Search for location" />
        </div>
      </div>


      <div className="left-right-container">
      <div className="left-container">
        <LeftContainer/>
      </div>
      <div className="right-container">
        <h2 className="car-count-heading"><span>524 </span>Used Cars in <span>Hyderabad</span></h2>
      <AllCarsCard setSelectedCarId={setSelectedCarId}/>
    </div>
    </div>


    <div className="car-detailed-container">
         <CarDetailsGallery selectedCarId={selectedCarId}/>
    </div>

    </div>
  )
}
export default App

