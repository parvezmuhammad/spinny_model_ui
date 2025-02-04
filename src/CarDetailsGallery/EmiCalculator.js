import * as React from "react";
import Slider from "@mui/material/Slider"; // Import MUI Slider
import "./emiCalculator.css";


const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = React.useState(750000);
  const [interestRate, setInterestRate] = React.useState(12);
  const [tenure, setTenure] = React.useState(5);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / (12 * 100);
    const totalMonths = tenure * 12;

    const emi =
      (principal * ratePerMonth * Math.pow(1 + ratePerMonth, totalMonths)) /
      (Math.pow(1 + ratePerMonth, totalMonths) - 1);

    return formatCurrency(Math.round(emi));
  };

  return (
    <div className="emi-container">
    <div className="emi-calculator">
      <div className="emi-calculator__content">
        <div className="emi-calculator__sliders">
          <div className="emi-calculator__slider-group">
            <div className="emi-calculator__slider-header">
              <span className="emi-calculator__slider-label">Loan Amount (₹)</span>
              <span className="emi-calculator__slider-value">
                {formatCurrency(loanAmount)}
              </span>
            </div>
            <Slider
              value={loanAmount}
              onChange={(event, newValue) => setLoanAmount(newValue)}
              min={100000}
              max={1000000}
              step={10000}
              className="emi-calculator__slider"
            />
            <div className="emi-calculator__slider-range">
              <span>₹1L</span>
              <span>₹10L</span>
            </div>
          </div>

          <div className="emi-calculator__slider-group">
            <div className="emi-calculator__slider-header">
              <span className="emi-calculator__slider-label">Interest Rate (p.a)</span>
              <span className="emi-calculator__slider-value">{interestRate}%</span>
            </div>
            <Slider
              value={interestRate}
              onChange={(event, newValue) => setInterestRate(newValue)}
              min={7}
              max={18}
              step={0.5}
              className="emi-calculator__slider"
            />
            <div className="emi-calculator__slider-range">
              <span>7%</span>
              <span>18%</span>
            </div>
          </div>

          <div className="emi-calculator__slider-group">
            <div className="emi-calculator__slider-header">
              <span className="emi-calculator__slider-label">Tenure (years)</span>
              <span className="emi-calculator__slider-value">
                {tenure} {tenure === 1 ? "year" : "years"}
              </span>
            </div>
            <Slider
              value={tenure}
              onChange={(event, newValue) => setTenure(newValue)}
              min={1}
              max={7}
              step={1}
              className="emi-calculator__slider"
            />
            <div className="emi-calculator__slider-range">
              <span>1 year</span>
              <span>7 years</span>
            </div>
          </div>
        </div>

        
      </div>
      
    </div>
    <div className="emi-calculator__result">
          <div className="emi-calculator__result-header">
            <h2 className="emi-calculator__result-label">Equated Monthly Installments(EMI) </h2>
            <h2 className="emi-calculator__result-value">{calculateEMI()}</h2>
            <button className="callback-button">Get a Callback</button>
          </div>
        </div>
    </div>
  );
};

export default EmiCalculator;