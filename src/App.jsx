import Header from "./components/Header"
import UserInputs from "./components/UserInputs"
import Results from "./components/Results";

function App() {

  function handleChange(valoare) {
    console.log(valoare)
  }

  return (
    <>
      <Header />
      <UserInputs handleChange={handleChange}/>
      <Results />
    </>
  );
}

export default App
