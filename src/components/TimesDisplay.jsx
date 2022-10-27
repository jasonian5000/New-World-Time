import React from "react";
import { populateTimesDisplay } from "../actions/populateTimesDisplay";
import "../css/TimesDisplay.css"

export default function TimesDisplay(props) {
  let timesList = populateTimesDisplay(props.hourInput, props.minuteInput);
  console.log(timesList)
  return (
    <div className="display_wrapper">
      <div className="display_columns">
        <div className="day_column">
          <h3>Next Day Start</h3>
          {timesList.map((times) => (
            <p key={times.dayStart.hour}>
              {times.dayStart.hour}:
              {times.dayStart.minute.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              })}
            </p>
          ))}
        </div>
        <div className="night_column">
          <h3>Next Night Start</h3>
          {timesList.map((times) => (
            <p key={times.nightStart.hour}>
              {times.nightStart.hour}:
              {times.nightStart.minute.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              })}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
