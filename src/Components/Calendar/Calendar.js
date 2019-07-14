import React from "react";
import "./Calendar.css";

const Calendar = props => {
  let calendarData = props.data;
  let calendarObj = Object.keys(calendarData).map(key => (
    <div className="Calendar-Day" key={calendarData[key]}>
      <div>
        <label>{key}</label>
      </div>
      <div>
        <ul>
          {calendarData[key].map(data => (
            <li key={data}>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  ));

  return <div className="flex-container">{calendarObj}</div>;
};

export default Calendar;
