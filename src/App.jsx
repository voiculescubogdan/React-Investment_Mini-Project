import Header from "./components/Header"
import UserInputs from "./components/UserInputs"
import Results from "./components/Results";
import { useState } from "react";

function App() {

  const [userInputs, setUserInputs] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(event) {
    const {id, value} = event.target;

    setUserInputs((prevInputs) => {
      return {
        ...prevInputs,
        [id]: +value
      }
    });
  }

  return (
    <>
      <Header />
      <UserInputs handleChange={handleChange} userInputs={userInputs}/>
      <Results userResults={userInputs}/>
    </>
  );
}

export default App
