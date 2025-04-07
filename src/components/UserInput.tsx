import React from "react";

function UserInput({ userData, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <label htmlFor="initialInvestment">
          Initial Investment
          <input
            className="mt-05"
            type="number"
            value={userData.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </label>{" "}
        <label htmlFor="annualInvestment">
          Annual Investment
          <input
            className="mt-05"
            type="number"
            value={userData.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </label>
      </div>
      <div className="input-group">
        <label htmlFor="expectedReturn">
          Expected Return
          <input
            className="mt-05"
            type="number"
            step={0.5}
            value={userData.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </label>{" "}
        <label htmlFor="duration">
          Duration
          <input
            className="mt-05"
            type="number"
            value={userData.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </label>
      </div>
    </section>
  );
}

export default UserInput;
