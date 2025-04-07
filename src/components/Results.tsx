import React from "react";
import { formatter } from "../util/investment";

function Results({ annualizedData }) {
  const format = formatter.format;

  const totalInterest = (array, year) => {
    return array.slice(0, year).reduce((acc, curr) => acc + curr.interest, 0);
  };

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualizedData.map((data, index) => (
          <tr key={index}>
            <td>{data.year}</td>
            <td>{format(data.valueEndOfYear)}</td>
            <td>{format(data.interest)}</td>
            <td>{format(totalInterest(annualizedData, index + 1))}</td>
            <td>
              {format(
                data.valueEndOfYear - totalInterest(annualizedData, index + 1)
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Results;
