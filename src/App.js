import React, { useState, useEffect } from "react";
import SelectOption from "./Components/SelectOption";
import "./App.css";
import { birthDayJson } from "./dataJson/birthdateInfo";
import Calendar from "./Components/Calendar/Calendar";

const App = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [calendarData, setCalendarData] = useState({});

  useEffect(() => {
    getCalendarData(selectedYear);
  }, []);

  let DaysBirthdayList = {};
  const getBirthdayDayForYear = year => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    birthDayJson.map(data => {
      let date = data.birthday.split("/");
      date[2] = year;
      date = new Date(date.join("/"));
      let dayName = days[date.getDay()];
      if (!DaysBirthdayList.hasOwnProperty(dayName)) {
        DaysBirthdayList[dayName] = [];
      }
      DaysBirthdayList[dayName].push(data.name);
    });

    setCalendarData(DaysBirthdayList);
  };

  const getCalendarData = year => {
    getBirthdayDayForYear(year);
  };
  const changeSelectedYear = event => {
    setSelectedYear(event.target.value);
    getCalendarData(event.target.value);
  };

  return (
    <div className="App">
      <h1 className="app__header">Birthday Cal Work Area</h1>

      <div className="app__content">
        <div id="work-area">
          <SelectOption
            label="Select Year "
            changed={changeSelectedYear}
            selectedYear={selectedYear}
          />
          <Calendar data={calendarData} />
        </div>
      </div>
    </div>
  );
};

export default App;
