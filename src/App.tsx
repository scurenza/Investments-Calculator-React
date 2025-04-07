import { useState } from "react";
import UserInput from "./components/UserInput";
import Header from "./components/Header";
import React from "react";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";

type UserData = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

function App() {
  const [userData, setUserData] = useState<UserData>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 7,
    duration: 10,
  });

  const annualizedData = calculateInvestmentResults(userData);

  const handleChange = (selectedField: string, value: number) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [selectedField]: +value,
      };
    });
  };

  console.log("User Data:", userData);

  return (
    <>
      <Header />
      <UserInput userData={userData} onChange={handleChange} />
      {userData.duration > 0 ? (
        <Results annualizedData={annualizedData} />
      ) : (
        <div className="no-results">
          <p>Please enter a duration greater than 0.</p>
        </div>
      )}
    </>
  );
}

export default App;
