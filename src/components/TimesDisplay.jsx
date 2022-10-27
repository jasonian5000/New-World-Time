import React from "react";
import { populateTimesDisplay } from "../actions/populateTimesDisplay";
import "../css/TimesDisplay.css"

export default function TimesDisplay() {
  let timesList = populateTimesDisplay("3", "09");
  return (
    <div className="display_wrapper">
      <div className="display_columns">
        <div className="day_column">
          <h3>Next Day Start</h3>
          {timesList.map((times) => (
            <p key={times.dayStart}>{times.dayStart}</p>
          ))}
        </div>
        <div className="night_column">
          <h3>Next Night Start</h3>
          {timesList.map((times) => (
            <p key={times.nightStart}>{times.nightStart}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
