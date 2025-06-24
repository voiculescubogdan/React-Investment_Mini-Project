import Header from "./components/Header"
import UserInputs from "./components/UserInputs"
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

function App() {

  const [results, setResults] = useState([]);

  const [userInputs, setUserInputs] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(event) {
    const {id, value} = event.target;

    const updatedInputs = {
      ...userInputs,
      [id]: +value
    }

    setUserInputs(updatedInputs);

    handleResults(updatedInputs);
  }

  function handleResults(updatedInputs) {
    if(updatedInputs.initialInvestment > 0 && updatedInputs.annualInvestment > 0 && updatedInputs.expectedReturn > 0 && updatedInputs.duration > 0) {
      const data = calculateInvestmentResults(updatedInputs);

      console.log(data);
      setResults(data);
    } else {
      setResults([]);
    }
  }

  return (
    <>
      <Header />
      <UserInputs handleChange={handleChange} userInputs={userInputs}/>
      <Results results={results}/>
    </>
  );
}

export default App
