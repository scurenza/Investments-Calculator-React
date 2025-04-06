import { useState } from "react";
import UserInput from "./components/UserInput";
import Header from "./components/Header";
import React from "react";

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
    </>
  );
}

export default App;
