import React from "react";
import logo from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Money bag logo" />
      <h1>Investments Calculator</h1>
    </header>
  );
}

export default Header;
