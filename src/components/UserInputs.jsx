import { useState } from "react";

export default function UserInputs({handleChange, userInputs}) {
  return (
    <div className="input-group">
      <div id="user-input">
        <label htmlFor="initialInvestment">Initial Investment</label>
        <input type="number" id="initialInvestment" onChange={handleChange} value={userInputs.initialInvestment}/>
        <label htmlFor="annualInvestment">Annual Investment</label>
        <input type="number" id="annualInvestment" onChange={handleChange} value={userInputs.annualInvestment}/>
        <label htmlFor="expectedReturn">Expected return</label>
        <input type="number" id="expectedReturn" onChange={handleChange} value={userInputs.expectedReturn}/>
        <label htmlFor="duration">Duration</label>
        <input type="number" id="duration" onChange={handleChange} value={userInputs.duration}/>
      </div>
    </div>
  );
}