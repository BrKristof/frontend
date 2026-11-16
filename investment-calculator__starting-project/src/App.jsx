import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000000,
    annualInvestment: 400000,
    expectedReturn: 5,
    duration: 10,
  });

  function handleChange(inputTarget, inputValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputTarget]: +inputValue, // a + jel számmá kovertálja a változót
      };
    });
  }

  let durationIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {durationIsValid && <Results input={userInput} />}
      {!durationIsValid && (
        <p style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>
          {"please enter valid (>=1) duration!"}
        </p>
      )}
    </>
  );
}

export default App;
