import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({userResults}) {

  let results = [];

  if (
    userResults.initialInvestment > 0 &&
    userResults.annualInvestment > 0 &&
    userResults.expectedReturn > 0 &&
    userResults.duration > 0
  ) {
    results = calculateInvestmentResults(userResults);
  }

  if(!results || results.length === 0) {
    return null;
  }

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
        {results.map((result) => {
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.totalInterest)}</td>
              <td>{formatter.format(result.investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}