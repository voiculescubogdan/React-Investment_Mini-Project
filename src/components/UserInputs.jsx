import { useState } from "react";

export default function UserInputs({handleChange}) {

  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  function changeValue(event) {
    switch (event.target.id) {
      case "initialInvestment":
        setInitialInvestment(event.target.value)
        break;
      case "annualInvestment":
        setAnnualInvestment(event.target.value)
        break;
      case "expectedReturn":
        setExpectedReturn(event.target.value)
        break;
      case "duration":
        setDuration(event.target.value)
        break;
      default:
        break;
    }

    handleChange(event.target.value)
  }

  return (
    <div className="input-group">
      <div id="user-input">
        <label htmlFor="initialInvestment">Initial Investment</label>
        <input type="number" id="initialInvestment" onChange={changeValue} value={initialInvestment}/>
        <label htmlFor="annualInvestment">Annual Investment</label>
        <input type="number" id="annualInvestment" onChange={changeValue} value={annualInvestment}/>
        <label htmlFor="expectedReturn">Expected return</label>
        <input type="number" id="expectedReturn" onChange={changeValue} value={expectedReturn}/>
        <label htmlFor="duration">Duration</label>
        <input type="number" id="duration" onChange={changeValue} value={duration}/>
      </div>
    </div>
  );
}