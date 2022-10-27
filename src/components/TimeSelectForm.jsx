import { useState } from "react";
import { makeDropDown } from "../actions/makeDropDown";

export default function TimeSelectForm() {
  const hourList = makeDropDown(1, 12);
  const minuteList = makeDropDown(0, 60);
  const [hourInput, setHourInput] = useState('12')
  const [minuteInput, setMinuteInput] = useState('00')
  return (
    <div>
        <h1>New World Clock</h1>
        <h2>Select Day Start Time</h2>
      <form>
        <select
          name="hour"
          value={hourInput}
          onChange={(e) => setHourInput(e.target.value)}
        >
          {hourList.map((hour) => (
            <option value={hour.value} key={hour.value}>{hour.value}</option>
          ))}
        </select>
        <select
          name="minute"
          value={minuteInput}
          onChange={(e) => setMinuteInput(e.target.value)}
        >
          {minuteList.map((minute) => (
            <option
              value={minute.value.toLocaleString("en-US", {
                minimumIntegerDigits: 2
              })}
              key={minute.value}
            >
              {minute.value.toLocaleString("en-US", {
                minimumIntegerDigits: 2
              })}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
