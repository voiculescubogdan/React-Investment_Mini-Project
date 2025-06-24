import { formatter } from "../util/investment";

export default function Results({results}) {

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
        {results.map((result, index) => (
          <tr key={index}>
          <td>{result.year}</td>
          <td>{formatter.format(result.valueEndOfYear)}</td>
          <td>{formatter.format(result.interest)}</td>
          <td>{formatter.format(result.totalInterest)}</td>
          <td>{formatter.format(result.investedCapital)}</td>
        </tr>
        ))}
      </tbody>
    </table>
  );
}