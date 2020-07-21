import React from "react";
import "./Table.css";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, cases }, i) => (
        <tr key={i}>
          <td>{country}</td>
          <td>{cases}</td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
