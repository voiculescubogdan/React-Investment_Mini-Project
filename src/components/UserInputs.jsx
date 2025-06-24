export default function UserInputs({handleChange, userInputs}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            onChange={handleChange}
            value={userInputs.initialInvestment}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            id="annualInvestment"
            onChange={handleChange}
            value={userInputs.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected return</label>
          <input
            type="number"
            id="expectedReturn"
            onChange={handleChange}
            value={userInputs.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            onChange={handleChange}
            value={userInputs.duration}
          />
        </p>
      </div>
    </section>
  );
}