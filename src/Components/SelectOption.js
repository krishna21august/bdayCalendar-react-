import React from "react";

const SelectOption = props => {
  let inputElement = null;
  let years = [];

  for (let year = 1960; year <= new Date().getFullYear(); year++) {
    years.push(year);
  }
  inputElement = (
    <select value={props.selectedYear} onChange={props.changed}>
      {years.map(year => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );

  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default SelectOption;
